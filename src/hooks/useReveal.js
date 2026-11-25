import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Quiet scroll reveal: every `[data-reveal]` element inside the returned ref
 * fades up once as it enters the viewport. Skipped for reduced-motion users.
 * Pass `key` to re-run when the content swaps (e.g. a tab change).
 */
export default function useReveal(key) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: Number(el.dataset.revealDelay || 0),
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          },
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [key]);

  return ref;
}
