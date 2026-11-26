import React, { useEffect, useState } from 'react';
import { ArrowUpRight, QrCode, X } from 'lucide-react';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import { BtnArrow, SplitText } from '../components/Reveal';
import { BRANCH_EMAIL, BRANCH_LINKEDIN } from '../data/committee';

const socials = [
  { label: 'IEEE.org', href: 'https://www.ieee.org' },
  { label: 'LinkedIn', href: BRANCH_LINKEDIN },
  { label: 'Instagram', href: 'https://www.instagram.com/ieee_bitpatna/' },
];

const Contact = () => {
  const pageRef = useReveal();
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    if (!showQR) return undefined;
    const onKey = (e) => e.key === 'Escape' && setShowQR(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showQR]);

  return (
    <div ref={pageRef}>
      <SEO path="/contact" />

      <section className="section !pt-16 md:!pt-24">
        <div className="wrap">
          <p className="label" data-reveal><span className="label-index">[@]</span> Contact</p>
          <SplitText as="h1" className="display-xl mt-6">
            Let's <em>talk.</em>
          </SplitText>
          <p className="lede mt-8 max-w-[56ch]" data-reveal data-reveal-delay="0.2">
            Have questions about IEEE BIT Patna? Whether you are a student, professional, or researcher, we are here to bridge the gap between innovation and community.
          </p>
          <div className="rule mt-14" data-rule="" aria-hidden="true" />

          <div className="mt-14 grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
            {/* Form */}
            <form
              className="space-y-8"
              data-stagger
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Message from ${data.get('name')}`);
                const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`);
                window.location.href = `mailto:${BRANCH_EMAIL}?subject=${subject}&body=${body}`;
              }}
            >
              <h2 className="display-sm">Send us a message</h2>
              <div className="field-wrap">
                <label htmlFor="name" className="label">Full name</label>
                <input required id="name" name="name" type="text" autoComplete="name" className="field" placeholder="First and last name" />
              </div>
              <div className="field-wrap">
                <label htmlFor="email" className="label">Email address</label>
                <input required id="email" name="email" type="email" autoComplete="email" className="field" placeholder="you@example.com" />
              </div>
              <div className="field-wrap">
                <label htmlFor="message" className="label">Your message</label>
                <textarea required id="message" name="message" rows="4" className="field" placeholder="How can we help?" />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="btn btn-primary">Send message <BtnArrow /></button>
                <p className="small text-ink-3">Opens your email app with the message filled in.</p>
              </div>
            </form>

            {/* Details */}
            <div className="space-y-10">
              <dl className="border-t border-rule" data-stagger>
                {[
                  { k: 'Email', v: BRANCH_EMAIL, href: `mailto:${BRANCH_EMAIL}` },
                  { k: 'Phone', v: '+91 612 2273615', href: 'tel:+916122273615' },
                  { k: 'Visit', v: 'BIT Patna Campus, Near Patna Airport, Patna, Bihar 800014', href: 'https://maps.app.goo.gl/GxnZsdpVK1A74P126', external: true },
                ].map((row) => (
                  <div key={row.k} className="border-b border-rule">
                    <dt className="sr-only">{row.k}</dt>
                    <dd>
                      <a
                        href={row.href}
                        {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="group grid grid-cols-[72px_1fr_auto] items-center gap-4 py-5"
                      >
                        <span className="label" aria-hidden="true">{row.k}</span>
                        <span className="font-display text-[19px] leading-snug break-words transition-colors group-hover:text-copper">{row.v}</span>
                        <ArrowUpRight size={18} strokeWidth={1.5} className="text-ink-3 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="ticks overflow-hidden rounded-[14px] border border-rule" data-reveal="clip">
                <iframe
                  title="BIT Patna on Google Maps"
                  src="https://www.google.com/maps?q=BIT%20Patna&output=embed"
                  className="block h-[260px] w-full border-0 grayscale-[0.6] contrast-[1.05] transition-[filter] duration-700 hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4" data-reveal>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link-draw small">
                      {s.label}
                    </a>
                  ))}
                </div>
                <button type="button" onClick={() => setShowQR(true)} className="btn btn-ghost btn-sm" aria-label="Show Linktree QR code">
                  <QrCode size={15} strokeWidth={1.75} /> Linktree QR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showQR && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-night/60 p-4 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
          onClick={() => setShowQR(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Linktree QR code"
        >
          <div className="relative w-full max-w-sm overflow-hidden rounded-[18px] bg-card animate-[scale-in_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setShowQR(false)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper transition-transform hover:rotate-90"
              aria-label="Close"
            >
              <X size={18} strokeWidth={1.75} />
            </button>
            <img src="/linktree.jpeg" alt="Linktree QR code for IEEE BIT Patna" className="h-auto w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
