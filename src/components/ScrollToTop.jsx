import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollUp}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 z-50 w-12 h-12 rounded-full
        bg-gradient-to-br from-primary to-secondary text-on-primary
        flex items-center justify-center shadow-lg
        hover:scale-110 hover:shadow-[0_0_24px_rgba(148,204,255,0.4)]
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'}
      `}
    >
      <span className="material-symbols-outlined text-[22px]">keyboard_arrow_up</span>
    </button>
  );
};

export default ScrollToTopButton;
