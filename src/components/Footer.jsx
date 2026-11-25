import React from 'react';
import { Link } from 'react-router-dom';
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
      { label: 'Contact Us', to: '/contact' },
    ],
  },
];

const Footer = () => (
  <footer className="bg-parchment text-ink-80">
    <div className="mx-auto max-w-[980px] px-5 pt-16 pb-10 md:px-6">
      <p className="t-fine text-ink-48 pb-5 border-b border-hairline">
        IEEE Student Branch, Birla Institute of Technology, Off Campus Patna. A local forum for members to meet and exchange views on technical, educational and professional interests.
      </p>

      <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-4">
        {columns.map((col) => (
          <div key={col.heading}>
            <h2 className="t-caption-strong text-ink mb-2">{col.heading}</h2>
            <ul className="t-fine leading-[2.2]">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to} className="hover:underline">{l.label}</Link>
                  ) : (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="t-caption-strong text-ink mb-2">Visit</h2>
          <address className="t-fine not-italic leading-[1.9]">
            BIT Patna Campus<br />
            Near J.P.N. Intl. Airport<br />
            Patna, Bihar 800014<br />
            <a href={`mailto:${BRANCH_EMAIL}`} className="hover:underline">{BRANCH_EMAIL}</a>
          </address>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-hairline pt-5 md:flex-row md:items-center md:justify-between">
        <p className="t-fine text-ink-48">© {new Date().getFullYear()} IEEE Student Branch BIT Patna. Engineering the Future.</p>
        <p className="t-fine text-ink-48">
          Made by{' '}
          <a href="https://www.linkedin.com/in/aayusharyaiam/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Aayush Arya
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
