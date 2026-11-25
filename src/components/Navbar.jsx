import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Committee', path: '/members' },
  { name: 'Events', path: '/events' },
  { name: 'Abhivyakti', path: '/abhivyakti' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const JOIN_URL = 'https://www.ieee.org/membership/join';

const Navbar = () => {
  const location = useLocation();
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Route changes can also come from browser history, so keep the overlay closed.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return undefined;
    }
    document.body.style.overflow = 'hidden';
    const ctx = gsap.context(() => {
      gsap.fromTo('.mobile-link', { y: -8, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.04, duration: 0.35, ease: 'power2.out' });
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
      <nav className="fixed top-0 inset-x-0 z-50 h-11 frosted-dark text-white" aria-label="Global">
        <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between px-4 md:px-6">
          <Link to="/" className="text-[14px] font-semibold tracking-[-0.224px] text-white/90 hover:text-white" aria-label="IEEE BIT Patna home">
            IEEE <span className="font-normal text-white/60">BIT Patna</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `t-fine transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm !py-1 !px-3 !text-[12px]">
              Join IEEE
            </a>
            <button
              type="button"
              className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center text-white/80"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden fixed inset-0 top-11 z-40 bg-black text-white overflow-y-auto animate-[fade-in_0.2s_ease-out]"
          data-lenis-prevent
        >
          <ul className="px-10 pt-8 pb-12 space-y-1">
            {links.map((link) => (
              <li key={link.path} className="mobile-link">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `block py-1.5 t-display-md !text-[28px] ${isActive ? 'text-white' : 'text-white/75'}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <p className="mobile-link px-10 pb-10 t-caption text-white/50">
            Built &amp; designed by{' '}
            <a href="https://www.linkedin.com/in/aayusharyaiam/" target="_blank" rel="noopener noreferrer" className="text-primary-on-dark hover:underline">
              Aayush Arya
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default Navbar;
