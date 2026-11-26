import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { BtnArrow, SplitText } from '../components/Reveal';
import useReveal from '../hooks/useReveal';

const suggestions = [
  { label: 'Executive Committee', to: '/members' },
  { label: 'Events', to: '/events' },
  { label: 'Abhivyakti', to: '/abhivyakti' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const NotFound = () => {
  const pageRef = useReveal();
  const { pathname } = useLocation();

  return (
    <div ref={pageRef}>
      <SEO path={pathname} notFoundPage />
      <section className="relative overflow-hidden">
        <div className="grid-paper pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" aria-hidden="true" />
        <div className="wrap relative grid min-h-[calc(100svh-72px)] items-center gap-12 py-20 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="label" data-reveal><span className="label-index">[404]</span> Signal lost</p>
            <SplitText as="h1" className="display-xl mt-6">
              This circuit is <em>open.</em>
            </SplitText>
            <p className="lede mt-6 max-w-[44ch]" data-reveal data-reveal-delay="0.25">
              We couldn't find <code className="rounded bg-paper-2 px-1.5 py-0.5 font-mono text-[0.85em] text-ink break-all">{pathname}</code>. It may have moved, or the link might be mistyped.
            </p>
            <div className="mt-9 flex flex-wrap gap-3" data-reveal data-reveal-delay="0.35">
              <Link to="/" className="btn btn-primary">Back to home <BtnArrow /></Link>
              <Link to="/contact" className="btn btn-ghost">Report a broken link</Link>
            </div>
          </div>

          <nav aria-label="Suggested pages" className="lg:justify-self-end lg:w-full lg:max-w-[380px]">
            <p className="label mb-3" data-reveal>Try one of these</p>
            <ul className="border-t border-rule" data-stagger>
              {suggestions.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="group flex items-center justify-between border-b border-rule py-4">
                    <span className="font-display text-[22px] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2 group-hover:italic group-hover:text-copper">
                      {s.label}
                    </span>
                    <ArrowRight size={18} strokeWidth={1.5} className="-translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
