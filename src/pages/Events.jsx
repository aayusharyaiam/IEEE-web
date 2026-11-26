import React from 'react';
import EventCard from '../components/EventCard';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import { BtnArrow, SplitText } from '../components/Reveal';

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
      <SEO path="/events" />

      <section className="section !pt-16 md:!pt-24">
        <div className="wrap">
          <p className="label" data-reveal><span className="label-index">[{String(eventsList.length).padStart(2, '0')}]</span> Events &amp; activities</p>
          <SplitText as="h1" className="display-xl mt-6 max-w-[15ch]">
            Where technology meets <em>creativity.</em>
          </SplitText>
          <p className="lede mt-8 max-w-[56ch]" data-reveal data-reveal-delay="0.2">
            Witness the convergence of technology and creativity. From high-stakes hackathons to insightful workshops, explore our legacy of engineering excellence.
          </p>

          <div className="mt-16 border-b border-rule">
            {eventsList.map((event, index) => (
              <div key={event.title} data-reveal>
                <EventCard {...event} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight border-t border-rule bg-paper-2/60">
        <div className="wrap grid items-end gap-10 lg:grid-cols-[1fr_440px]">
          <div>
            <p className="label" data-reveal><span className="label-index">[→]</span> Newsletter</p>
            <SplitText as="h2" className="display-lg mt-5 max-w-[14ch]">
              Stay ahead of <em>the curve.</em>
            </SplitText>
            <p className="body mt-5 max-w-[50ch]" data-reveal>
              Get notified about upcoming hackathons, tech talks, and exclusive student opportunities directly in your inbox.
            </p>
          </div>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()} data-reveal>
            <div className="field-wrap">
              <label htmlFor="newsletter-email" className="label">Institutional email</label>
              <input id="newsletter-email" className="field" placeholder="you@bitmesra.ac.in" type="email" autoComplete="email" required />
            </div>
            <button type="submit" className="btn btn-primary self-start">Subscribe <BtnArrow /></button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Events;
