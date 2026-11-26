// Single source of truth for page titles, descriptions and the sitemap.
// Used at runtime by <SEO /> and at build time by scripts/prerender.mjs,
// which writes a static HTML shell per route so crawlers and link previews
// see the right <title>, description, canonical and Open Graph tags without
// running JavaScript.

export const SITE_URL = 'https://ieeebitpatna.vercel.app';
export const SITE_NAME = 'IEEE Student Branch BIT Patna';
export const SHORT_NAME = 'IEEE BIT Patna';
export const DEFAULT_IMAGE = '/gallery/home3.jpeg';

export const routes = {
  '/': {
    title: 'IEEE Student Branch BIT Patna',
    description:
      'IEEE Student Branch at Birla Institute of Technology, Mesra – Patna Campus. A student community for technology, leadership, innovation and professional growth since 2008.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  '/members': {
    title: 'Executive Committee',
    description:
      'Meet the 2026–2027 executive committee, faculty advisor and alumni of the IEEE Student Branch at BIT Mesra, Patna Campus.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/events': {
    title: 'Events & Activities',
    description:
      'Hackathons, workshops, tech talks and the Abhivyakti fest — explore events organised by IEEE Student Branch BIT Patna.',
    priority: '0.8',
    changefreq: 'weekly',
  },
  '/abhivyakti': {
    title: 'Abhivyakti — Techno-Cultural Fest',
    description:
      "Abhivyakti is IEEE BIT Patna's annual techno-cultural fest: robotics, workshops, quizzes, e-sports and talks. Explore every edition since 2017.",
    priority: '0.7',
    changefreq: 'monthly',
  },
  '/gallery': {
    title: 'Photo Gallery',
    description: 'Moments from IEEE BIT Patna events, workshops, competitions and student activities.',
    priority: '0.6',
    changefreq: 'monthly',
  },
  '/contact': {
    title: 'Contact',
    description:
      'Get in touch with IEEE Student Branch BIT Patna for memberships, collaborations and events. BIT Patna Campus, Patna, Bihar 800014.',
    priority: '0.6',
    changefreq: 'yearly',
  },
};

export const notFound = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist on the IEEE Student Branch BIT Patna website.',
};

/** "Executive Committee | IEEE BIT Patna", but the home page keeps its own full name. */
export const fullTitle = (title) => (title === SITE_NAME ? `${SITE_NAME} | BIT Mesra, Patna Campus` : `${title} | ${SHORT_NAME}`);

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  alternateName: ['IEEE BIT Patna', 'IEEE SB BIT Patna'],
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  email: 'ieeebitp@gmail.com',
  foundingDate: '2008-11-23',
  parentOrganization: { '@type': 'Organization', name: 'IEEE', url: 'https://www.ieee.org' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'BIT Patna Campus, Near J.P.N. International Airport',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800014',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/ieee-student-branch-bit-patna/',
    'https://www.instagram.com/ieee_bitpatna/',
  ],
};
