import React, { useEffect, useState } from 'react';
import { ChevronRight, Globe, Mail, MapPin, Phone, QrCode, X } from 'lucide-react';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
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
      <SEO title="Contact Us" description="Connect with IEEE Student Branch BIT Patna for collaborations, memberships, events, and student opportunities." path="/contact" />

      <section className="tile tile-light text-center">
        <div className="mx-auto max-w-[980px]">
          <p className="t-tagline text-ink-48" data-reveal>Contact</p>
          <h1 className="t-hero mt-3" data-reveal data-reveal-delay="0.05">Get in touch.</h1>
          <p className="t-body mx-auto mt-5 max-w-[620px] text-ink-80" data-reveal data-reveal-delay="0.1">
            Have questions about IEEE BIT Patna? Whether you are a student, professional, or researcher, we are here to bridge the gap between innovation and community.
          </p>
        </div>
      </section>

      <section className="tile tile-parchment">
        <div className="mx-auto grid max-w-[1100px] gap-5 lg:grid-cols-2">
          {/* Form */}
          <div className="card !p-8 md:!p-10" data-reveal>
            <h2 className="t-tagline">Send us a message</h2>
            <form
              className="mt-6 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Message from ${data.get('name')}`);
                const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`);
                window.location.href = `mailto:${BRANCH_EMAIL}?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label htmlFor="name" className="t-caption-strong mb-2 block">Full name</label>
                <input required id="name" name="name" type="text" autoComplete="name" className="field" placeholder="First and last name" />
              </div>
              <div>
                <label htmlFor="email" className="t-caption-strong mb-2 block">Email address</label>
                <input required id="email" name="email" type="email" autoComplete="email" className="field" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="t-caption-strong mb-2 block">Your message</label>
                <textarea required id="message" name="message" rows="5" className="field" placeholder="How can we help?" />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">Send Message</button>
            </form>
          </div>

          {/* Map + details */}
          <div className="flex flex-col gap-5">
            <div className="card !p-0 overflow-hidden" data-reveal>
              <iframe
                title="BIT Patna on Google Maps"
                src="https://www.google.com/maps?q=BIT%20Patna&output=embed"
                className="block h-[260px] w-full border-0"
                loading="lazy"
              />
              <div className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-center gap-3">
                  <MapPin size={20} strokeWidth={1.5} className="text-ink-48" />
                  <div>
                    <p className="t-body-strong">BIT Patna Campus</p>
                    <p className="t-caption text-ink-48">Near Patna Airport, Patna, Bihar 800014</p>
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/GxnZsdpVK1A74P126" target="_blank" rel="noopener noreferrer" className="link t-caption shrink-0">
                  Directions <ChevronRight size={14} strokeWidth={2} />
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2" data-reveal>
              <a href={`mailto:${BRANCH_EMAIL}`} className="card block transition-transform active:scale-[0.98]">
                <Mail size={20} strokeWidth={1.5} className="text-ink-48" />
                <p className="t-caption text-ink-48 mt-3">Email us</p>
                <p className="t-body-strong mt-0.5 text-primary break-all">{BRANCH_EMAIL}</p>
              </a>
              <a href="tel:+916122273615" className="card block transition-transform active:scale-[0.98]">
                <Phone size={20} strokeWidth={1.5} className="text-ink-48" />
                <p className="t-caption text-ink-48 mt-3">Call us</p>
                <p className="t-body-strong mt-0.5 text-primary">+91 612 2273615</p>
              </a>
            </div>

            <div className="card flex items-center justify-between gap-4" data-reveal>
              <div>
                <p className="t-caption text-ink-48 flex items-center gap-2"><Globe size={16} strokeWidth={1.5} /> Follow the innovation</p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link t-body">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
              <button type="button" onClick={() => setShowQR(true)} className="btn-pearl shrink-0" aria-label="Show Linktree QR code">
                <QrCode size={18} strokeWidth={1.5} /> QR
              </button>
            </div>
          </div>
        </div>
      </section>

      {showQR && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
          onClick={() => setShowQR(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Linktree QR code"
        >
          <div className="relative w-full max-w-sm overflow-hidden rounded-lg bg-canvas animate-[scale-in_0.25s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setShowQR(false)} className="btn-icon absolute right-3 top-3 z-10" aria-label="Close">
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
