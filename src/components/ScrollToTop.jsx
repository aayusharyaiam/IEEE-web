import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { getLenis, subscribeToScroll } from './scrollManager';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = ({ scroll } = {}) => {
      setVisible((scroll ?? window.scrollY) > 300);
    };
    const unsubscribe = subscribeToScroll(onScroll);
    onScroll();
    return unsubscribe;
  }, []);

  const scrollUp = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.8, force: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`btn-icon fixed bottom-6 right-5 z-50 transition-opacity duration-300 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ChevronUp size={20} strokeWidth={1.75} />
    </button>
  );
};

export default ScrollToTopButton;
