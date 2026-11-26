import { useEffect } from 'react';
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, fullTitle, notFound, routes } from '../data/seo';

const upsert = (selector, create) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const setMeta = (key, content, attr = 'name') => {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute(attr, key);
    return m;
  });
  el.setAttribute('content', content);
};

/**
 * Keeps the document head in sync on client-side navigation.
 * Pass `path` to pull title/description from src/data/seo.js, or override them.
 * `notFoundPage` marks the page noindex.
 */
export default function SEO({ path = '/', title, description, image = DEFAULT_IMAGE, notFoundPage = false }) {
  const meta = notFoundPage ? notFound : routes[path] ?? {};
  const pageTitle = fullTitle(title ?? meta.title ?? SITE_NAME);
  const pageDescription = description ?? meta.description ?? '';

  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    document.title = pageTitle;
    setMeta('description', pageDescription);
    setMeta('robots', notFoundPage ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('og:title', pageTitle, 'property');
    setMeta('og:description', pageDescription, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:image', imageUrl, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', pageTitle);
    setMeta('twitter:description', pageDescription);
    setMeta('twitter:image', imageUrl);

    const canonical = upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.rel = 'canonical';
      return l;
    });
    if (notFoundPage) canonical.remove();
    else canonical.href = url;
  }, [image, notFoundPage, pageDescription, pageTitle, path]);

  return null;
}
