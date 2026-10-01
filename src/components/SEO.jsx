import { useEffect } from 'react';

const SITE_URL = 'https://ieeebitpatna.vercel.app';

export default function SEO({ title, description, path = '/', type = 'website' }) {
  useEffect(() => {
    const fullTitle = `${title} | IEEE BIT Patna`;
    document.title = fullTitle;

    const setMeta = (selector, content, attribute = 'name') => {
      let element = document.head.querySelector(`${attribute === 'property' ? 'meta[property' : 'meta[name'}="${selector}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, selector);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', type, 'property');
    setMeta('og:url', `${SITE_URL}${path}`, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${path}`;
  }, [description, path, title, type]);

  return null;
}
