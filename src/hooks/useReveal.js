import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ease = 'expo.out';

/**
 * Scroll-triggered motion for everything inside the returned ref.
 * Content is fully visible without JS or with reduced motion: only the
 * "from" state is applied here, right before each animation runs.
 *
 *   data-reveal            fade + rise
 *   data-reveal="clip"     image unmasks upward while the image settles from 1.15x
 *   data-split             (on a <SplitText>) each word rises out of its own mask
 *   data-rule              hairline draws from left to right
 *   data-stagger           direct children fade + rise one after another
 *   data-parallax="0.12"   element drifts with scroll (fraction of its height)
 *   data-count="150"       number counts up once, suffix from data-suffix
 *   data-reveal-delay="0.1"
 *
 * Pass `key` to re-run when the content swaps (e.g. a tab change).
 */
export default function useReveal(key) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const ctx = gsap.context(() => {
      const delayOf = (el) => Number(el.dataset.revealDelay || 0);
      const trigger = (el, start = 'top 88%') => ({ trigger: el, start, once: true });

      gsap.utils.toArray('[data-reveal]', root).forEach((el) => {
        if (el.dataset.reveal === 'clip') {
          const img = el.querySelector('img');
          const tl = gsap.timeline({ scrollTrigger: trigger(el, 'top 85%'), delay: delayOf(el) });
          tl.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.inOut' });
          if (img) tl.fromTo(img, { scale: 1.15 }, { scale: 1, duration: 1.6, ease }, 0);
          return;
        }
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease, delay: delayOf(el), scrollTrigger: trigger(el) },
        );
      });

      gsap.utils.toArray('[data-split]', root).forEach((el) => {
        const words = el.querySelectorAll('.word__inner');
        gsap.fromTo(
          words,
          { yPercent: 110 },
          { yPercent: 0, duration: 1.2, ease, stagger: 0.05, delay: delayOf(el), scrollTrigger: trigger(el, 'top 90%') },
        );
      });

      gsap.utils.toArray('[data-rule]', root).forEach((el) => {
        gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease: 'expo.inOut', scrollTrigger: trigger(el, 'top 92%') });
      });

      gsap.utils.toArray('[data-stagger]', root).forEach((el) => {
        gsap.fromTo(
          el.children,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease, stagger: 0.08, delay: delayOf(el), scrollTrigger: trigger(el, 'top 85%') },
        );
      });

      gsap.utils.toArray('[data-parallax]', root).forEach((el) => {
        const amount = Number(el.dataset.parallax || 0.1) * 100;
        gsap.fromTo(
          el,
          { yPercent: -amount / 2 },
          {
            yPercent: amount / 2,
            ease: 'none',
            scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        );
      });

      gsap.utils.toArray('[data-count]', root).forEach((el) => {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: trigger(el, 'top 92%'),
          onUpdate: () => { el.textContent = `${Math.round(obj.val)}${suffix}`; },
        });
      });
    }, root);

    // Images and fonts change layout after mount; re-measure trigger positions.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh, { once: true });
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, [key]);

  return ref;
}
