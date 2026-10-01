import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

const preventsLenis = (node) => {
  let current = node;
  while (current && current !== document.body) {
    if (current.hasAttribute?.('data-lenis-prevent')) return true;

    const style = window.getComputedStyle(current);
    const scrollableX = /(auto|scroll)/.test(style.overflowX) && current.scrollWidth > current.clientWidth;
    const scrollableY = /(auto|scroll)/.test(style.overflowY) && current.scrollHeight > current.clientHeight;
    if (scrollableX || scrollableY) return true;
    current = current.parentElement;
  }

  // Navbar owns the menu lock; Lenis must not bypass it while the overlay is open.
  return document.body.style.overflow === 'hidden';
};

export const getLenis = () => lenisInstance;

export const resetScroll = () => {
  if (lenisInstance) {
    // immediate also cancels any in-flight inertia from the previous route.
    lenisInstance.scrollTo(0, { immediate: true, force: true });
    return;
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
};

export const subscribeToScroll = (callback) => {
  const lenis = lenisInstance;
  if (lenis) {
    lenis.on('scroll', callback);
    return () => lenis.off('scroll', callback);
  }

  window.addEventListener('scroll', callback, { passive: true });
  return () => window.removeEventListener('scroll', callback);
};

export const setupSmoothScroll = () => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let destroyed = false;

  const destroy = () => {
    if (!lenisInstance) return;
    lenisInstance.off('scroll', ScrollTrigger.update);
    gsap.ticker.remove(lenisInstance.__gsapRaf);
    lenisInstance.destroy();
    lenisInstance = null;
    ScrollTrigger.update();
  };

  const create = () => {
    if (destroyed || mediaQuery.matches || lenisInstance) return;

    const lenis = new Lenis({
      // Let the browser retain native touch scrolling and nested scroll areas.
      syncTouch: false,
      smoothWheel: true,
      prevent: preventsLenis,
    });
    const raf = (time) => lenis.raf(time * 1000);
    lenis.__gsapRaf = raf;
    lenisInstance = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
  };

  const onMotionPreferenceChange = () => {
    if (mediaQuery.matches) destroy();
    else create();
  };

  create();
  mediaQuery.addEventListener('change', onMotionPreferenceChange);

  return () => {
    destroyed = true;
    mediaQuery.removeEventListener('change', onMotionPreferenceChange);
    destroy();
  };
};
