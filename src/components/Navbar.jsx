import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { BtnArrow } from './Reveal';

gsap.registerPlugin(ScrollTrigger);

const links = [
  { name: 'Home', path: '/' },
  { name: 'Committee', path: '/members' },
  { name: 'Events', path: '/events' },
  { name: 'Abhivyakti', path: '/abhivyakti' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const JOIN_URL = 'https://www.ieee.org/membership/join';

export const Logo = ({ className = '' }) => (
  <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label="IEEE BIT Patna — home">
    <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-[10px] bg-ink text-paper">
      <span className="font-display text-[19px] italic leading-none transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-[140%]">i</span>
      <span className="absolute font-display text-[19px] italic leading-none text-copper translate-y-[140%] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0">i</span>
    </span>
    <span className="leading-none">
      <span className="block text-[15px] font-semibold tracking-tight">IEEE <span className="font-display italic font-normal">BIT Patna</span></span>
      <span className="label mt-1 block !text-[10px]">Student Branch · Est. 2008</span>
    </span>
  </Link>
);

const Navbar = () => {
  const location = useLocation();
  const menuRef = useRef(null);
  const progressRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Route changes can also come from browser history, so keep the overlay closed.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  // Copper reading-progress line and the "scrolled" bar state.
  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${self.progress})`;
        setScrolled(self.scroll() > 12);
      },
    });
    return () => st.kill();
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return undefined;
    }
    document.body.style.overflow = 'hidden';
    const ctx = gsap.context(() => {
      gsap.fromTo('.mobile-link', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.05, duration: 0.7, ease: 'expo.out' });
    }, menuRef);
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      ctx.revert();
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 h-[72px] transition-[background-color,border-color,backdrop-filter] duration-500 border-b ${
          scrolled || isOpen ? 'bg-paper/85 backdrop-blur-md border-rule' : 'bg-paper border-transparent'
        }`}
        aria-label="Primary"
      >
        <div className="wrap flex h-full items-center justify-between gap-6">
          <Logo />

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `group relative flex flex-col items-center px-3.5 py-2 text-[14px] transition-colors ${
                      isActive ? 'text-ink' : 'text-ink-3 hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Label rolls up on hover */}
                      <span className="relative block h-[1.3em] overflow-hidden leading-[1.3]">
                        <span className="block transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-full">{link.name}</span>
                        <span className="absolute inset-x-0 top-full block transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-full" aria-hidden="true">{link.name}</span>
                      </span>
                      <span
                        className={`absolute bottom-0 h-1 w-1 rounded-full bg-copper transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Join IEEE <BtnArrow />
            </a>
            <button
              type="button"
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-rule text-ink transition-colors hover:bg-card"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
        <span ref={progressRef} className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left scale-x-0 bg-copper" aria-hidden="true" />
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="lg:hidden fixed inset-0 top-[72px] z-40 overflow-y-auto bg-paper grid-paper animate-[fade-in_0.25s_ease-out]"
          data-lenis-prevent
        >
          <ul className="wrap pt-8 pb-6">
            {links.map((link, i) => (
              <li key={link.path} className="overflow-hidden border-b border-rule">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `mobile-link flex items-baseline gap-4 py-4 ${isActive ? 'text-ink' : 'text-ink-2'}`}
                >
                  {({ isActive }) => (
                    <>
                      <span className="label label-index">0{i + 1}</span>
                      <span className={`display-md ${isActive ? 'italic !text-copper' : ''}`}>{link.name}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="wrap pb-12">
            <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
              Join IEEE <BtnArrow />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
