// Post-build: write a static HTML shell per route with route-specific head
// tags, a real 404.html (served with a 404 status by Vercel), sitemap.xml and
// robots.txt. The body stays the SPA root, so React takes over on load.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, fullTitle, notFound, routes } from '../src/data/seo.js';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const template = await readFile(join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const head = ({ title, description, url, noindex = false }) => {
  const t = esc(fullTitle(title));
  const d = esc(description);
  const image = `${SITE_URL}${DEFAULT_IMAGE}`;
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
    noindex ? '' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    noindex ? '' : `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ]
    .filter(Boolean)
    .join('\n    ');
};

const render = (meta) => {
  const out = template.replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->/, head(meta));
  if (out === template) throw new Error('seo markers not found in dist/index.html');
  return out;
};

for (const [path, meta] of Object.entries(routes)) {
  const url = `${SITE_URL}${path}`;
  const file = path === '/' ? join(dist, 'index.html') : join(dist, `${path.slice(1)}.html`); // cleanUrls serves /members from members.html
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, render({ ...meta, url }));
}

await writeFile(join(dist, '404.html'), render({ ...notFound, url: SITE_URL, noindex: true }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.entries(routes)
  .map(
    ([path, m]) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${m.changefreq}</changefreq>
    <priority>${m.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
await writeFile(join(dist, 'sitemap.xml'), sitemap);
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`prerender: ${Object.keys(routes).length} routes, 404.html, sitemap.xml, robots.txt`);
