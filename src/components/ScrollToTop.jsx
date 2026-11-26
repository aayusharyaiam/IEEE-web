import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { getLenis, subscribeToScroll } from './scrollManager';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = ({ scroll } = {}) => {
      setVisible((scroll ?? window.scrollY) > 600);
    };
    const unsubscribe = subscribeToScroll(onScroll);
    onScroll();
    return unsubscribe;
  }, []);

  const scrollUp = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 1.2, force: true });
    else window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-ink text-paper shadow-[0_12px_30px_-12px_rgba(21,23,28,0.6)] transition-all duration-500 ease-[var(--ease-out-expo)] hover:bg-copper active:scale-95 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="relative block h-[18px] w-[18px] overflow-hidden">
        <ArrowUp size={18} strokeWidth={1.75} className="absolute inset-0 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-full" />
        <ArrowUp size={18} strokeWidth={1.75} className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />
      </span>
    </button>
  );
};

export default ScrollToTopButton;
