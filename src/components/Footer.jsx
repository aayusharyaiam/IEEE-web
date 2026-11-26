import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BRANCH_EMAIL, BRANCH_LINKEDIN } from '../data/committee';

const columns = [
  {
    heading: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Executive Committee', to: '/members' },
      { label: 'Events', to: '/events' },
      { label: 'Abhivyakti', to: '/abhivyakti' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'IEEE',
    links: [
      { label: 'About IEEE', href: 'https://www.ieee.org/about' },
      { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org' },
      { label: 'Become a Member', href: 'https://www.ieee.org/membership/join' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'LinkedIn', href: BRANCH_LINKEDIN },
      { label: 'Instagram', href: 'https://www.instagram.com/ieee_bitpatna/' },
      { label: 'Email', href: `mailto:${BRANCH_EMAIL}` },
    ],
  },
];

const FooterLink = ({ to, href, children }) => {
  const cls = 'group inline-flex items-center gap-1.5 text-paper/70 transition-colors hover:text-paper';
  const arrow = (
    <ArrowUpRight size={13} strokeWidth={1.75} className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
  );
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  const external = href.startsWith('http');
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
      {external && arrow}
    </a>
  );
};

const Footer = () => (
  <footer className="relative overflow-hidden bg-night text-paper">
    <div className="wrap pt-20 pb-10">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="label !text-copper">IEEE Student Branch · BIT Mesra, Patna Campus</p>
          <p className="display-md mt-5 max-w-[16ch] !text-paper">
            Advancing technology <em>for humanity.</em>
          </p>
          <address className="mt-8 not-italic small leading-relaxed text-paper/60">
            BIT Patna Campus, Near J.P.N. Intl. Airport
            <br />
            Patna, Bihar 800014
            <br />
            <a href={`mailto:${BRANCH_EMAIL}`} className="text-paper/80 underline decoration-paper/30 underline-offset-4 hover:decoration-paper">
              {BRANCH_EMAIL}
            </a>
          </address>
        </div>

        {columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h2 className="label !text-paper/45">{col.heading}</h2>
            <ul className="mt-5 space-y-3 small">
              {col.links.map((l) => (
                <li key={l.label}>
                  <FooterLink to={l.to} href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Oversized wordmark */}
      <p
        className="pointer-events-none mt-20 select-none whitespace-nowrap font-display text-[clamp(64px,15vw,220px)] italic font-light leading-[0.8] tracking-[-0.04em] text-paper/[0.06]"
        aria-hidden="true"
      >
        IEEE BIT Patna
      </p>

      <div className="mt-6 flex flex-col gap-3 border-t border-paper/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="label !text-paper/40">© {new Date().getFullYear()} IEEE Student Branch BIT Patna</p>
        <p className="label !text-paper/40">
          Designed &amp; built by{' '}
          <a href="https://www.linkedin.com/in/aayusharyaiam/" target="_blank" rel="noopener noreferrer" className="!text-paper/80 hover:!text-copper">
            Aayush Arya
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
