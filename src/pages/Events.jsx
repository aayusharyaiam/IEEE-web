import React from 'react';
import EventCard from '../components/EventCard';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';

const eventsList = [
  {
    title: 'Abhivyakti 2026',
    description: 'The flagship annual techno-cultural fest of BIT Patna returns bigger than ever! Three days of innovation, competitions, workshops, cultural performances, and networking — powered by IEEE Student Branch BIT Patna.',
    date: 'March 26–28, 2026',
    status: 'past',
    link: '/abhivyakti',
  },
  {
    title: 'Smart India Hackathon 2025',
    description: 'IEEE BIT Patna Student Branch actively participated in SIH 2025, with multiple teams tackling real-world problem statements from government ministries and industry partners. A 36-hour sprint of innovation and teamwork.',
    date: '2025',
    status: 'past',
  },
  {
    title: 'Abhivyakti 2025',
    description: 'The annual techno-cultural fest brought together students from across the region for competitions, tech talks, hackathons, and cultural showcases — a celebration of creativity meeting technology.',
    date: '2025',
    status: 'past',
    link: '/abhivyakti',
  },
];

const Events = () => {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      <SEO title="Events & Activities" description="Explore upcoming and past IEEE BIT Patna events, hackathons, workshops, and Abhivyakti celebrations." path="/events" />

      <section className="tile tile-light text-center">
        <div className="mx-auto max-w-[980px]">
          <p className="t-tagline text-ink-48" data-reveal>Events</p>
          <h1 className="t-hero mt-3" data-reveal data-reveal-delay="0.05">Where technology meets creativity.</h1>
          <p className="t-body mx-auto mt-5 max-w-[640px] text-ink-80" data-reveal data-reveal-delay="0.1">
            Witness the convergence of technology and creativity. From high-stakes hackathons to insightful workshops, explore our legacy of engineering excellence.
          </p>
        </div>
      </section>

      <section className="tile tile-light !pt-0">
        <div className="mx-auto max-w-[980px] border-b border-hairline">
          {eventsList.map((event, index) => (
            <EventCard key={event.title} {...event} index={index} />
          ))}
        </div>
      </section>

      <section className="tile tile-parchment text-center">
        <div className="mx-auto max-w-[640px]" data-reveal>
          <h2 className="t-display-lg">Stay ahead of the curve.</h2>
          <p className="t-body mt-4 text-ink-80">
            Get notified about upcoming hackathons, tech talks, and exclusive student opportunities directly in your inbox.
          </p>
          <form className="mx-auto mt-8 flex max-w-[480px] flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Institutional email</label>
            <input id="newsletter-email" className="field" placeholder="Your institutional email" type="email" required />
            <button type="submit" className="btn-primary shrink-0">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Events;
