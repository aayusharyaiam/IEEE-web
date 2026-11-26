import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import { BtnArrow, SplitText } from '../components/Reveal';

const Abhivyakti = () => {
  const [activeTab, setActiveTab] = useState('2026');
  const pageRef = useReveal(activeTab);

  const yearData = {
    '2026': {
      dates: 'March 26-28, 2026',
      status: 'past',
      tagline: 'Successfully Concluded',
      description:
        'The flagship annual techno-cultural fest of BIT Patna returns bigger than ever. Three days of innovation, competitions, workshops, cultural performances, and networking powered by IEEE Student Branch BIT Patna.',
      events: [
        { name: 'Robo Soccer', desc: 'Autonomous soccer robots equipped with advanced AI competing in thrilling matches.', coordinators: 'Sunny, Sourabh' },
        { name: 'Paper Presentation', desc: 'Present original research papers on innovative technical topics and emerging domains.', coordinators: 'Rutika Deshmukh' },
        { name: 'PCB Workshop', desc: 'Learn PCB design fundamentals from industry experts. Hands-on training in circuit design and prototyping.', coordinators: 'Spandan Roy, Aayush' },
        { name: 'Linux and ML Workshop', desc: 'Master Linux fundamentals and dive into Machine Learning applications and data science.', coordinators: 'Rishika' },
        { name: 'Mechatronics', desc: 'Hands-on integration of mechanical, electrical, and control systems in real-world applications.', coordinators: 'Spandan, Swapnadeep, Abhanshu' },
        { name: 'Quiz and GenTech Quiz', desc: 'Fast-paced quiz competition testing knowledge across electronics, programming, and emerging technologies.', coordinators: 'Sahil, Ayushi, Monika' },
        { name: 'E-Sports (BGMI/MLBB)', desc: 'Competitive BGMI and MLBB tournament with intense team-based gameplay.', coordinators: 'Nipun' },
        { name: 'E-Sports (Among Us/Pokemon Go)', desc: 'Strategy and location-based gaming events testing deduction and adaptability.', coordinators: 'Anup' },
        { name: 'Startup Talk', desc: 'Entrepreneurs and startup founders share insights on building and scaling products.', coordinators: 'Bhaskar' },
        { name: 'Basic Electronics Workshop', desc: 'Foundation workshop covering circuit fundamentals, component identification, and practical soldering.', coordinators: 'Hiba' },
        { name: 'Fun Event (Paint Ball)', desc: 'High-energy team activity designed for engagement, coordination, and fest spirit.', coordinators: 'To be announced' },
      ],
      team: [
        { name: 'Pranjal Bhattacharya', role: 'Chair' },
        { name: 'Somnath Mahto', role: 'Vice Chair' },
        { name: 'Harishta Chaubey', role: 'Secretary' },
        { name: 'Rajdeep Das', role: 'Co Secretary' },
        { name: 'Aayush Arya', role: 'Technical' },
        { name: 'Ronak Sharma', role: 'Treasurer' },
        { name: 'Sahil Gurg', role: 'Co Treasurer' },
      ],
    },
    '2025': {
      dates: 'March 27-29, 2025',
      status: 'past',
      tagline: 'Successfully Concluded',
      description:
        'Abhivyakti 2025 brought together students from across the region for a celebration of creativity meeting technology featuring competitions, tech talks, hackathons, and cultural showcases.',
      events: [
        { name: 'Industry Conclave: AI Revolution in VLSI', desc: 'Talks by industry professionals on AI applications in NAND memory, IC design, and surveillance.' },
        { name: 'Code Electro RUN', desc: 'Relay event where ECE teams competed in soldering while CSE teams tackled coding relays.' },
        { name: 'Hunt and Hype', desc: 'Photo scavenger hunt challenging creativity, teamwork, and problem-solving.' },
        { name: 'The Imitation Game (UI/UX)', desc: 'Competition testing UI/UX skills with timed design replication tasks.' },
      ],
      team: [
        { name: 'Arnav Shivam', role: 'Chair Person' },
        { name: 'Sneha Sharma', role: 'Vice Chair Person' },
        { name: 'Asman Kumari', role: 'Secretary' },
        { name: 'Syed Fahad Ahmed', role: 'Treasurer' },
      ],
    },
    '2024': {
      dates: '2024',
      status: 'past',
      tagline: 'Successfully Concluded',
      description:
        'Abhivyakti 2024 featured technical workshops, expert talks, and hands-on competitions reinforcing practical learning.',
      events: [
        { name: 'Tech Talk: Revolutionising Storage', desc: 'Deep dive on 3D NAND memory evolution and next-gen storage technologies.' },
        { name: 'Data Science Talk', desc: 'Overview of data science roles, industry tools, and real-world applications.' },
        { name: 'ISRO Industrial Visit', desc: 'Visit to UR Rao Satellite Centre exploring satellite manufacturing and space technology.' },
      ],
      team: [],
    },
    '2023': {
      dates: '2023',
      status: 'past',
      tagline: 'Successfully Concluded',
      description:
        'Abhivyakti 2023 combined competitive events with community outreach, blending technology and social responsibility.',
      events: [
        { name: 'Fun Fiesta 2023', desc: 'Techno-cultural event with competitions and cultural performances.' },
        { name: 'Embedd-athon', desc: 'Embedded systems competition using Arduino where teams built prototypes under time constraints.' },
        { name: 'IAAI Summit', desc: 'Industry-alumni interaction summit with student project showcase.' },
      ],
      team: [],
    },
    '2022': {
      dates: '2022',
      status: 'past',
      tagline: 'Successfully Concluded',
      description:
        'Abhivyakti 2022 marked the revival of in-person events post-pandemic with focus on IoT and career growth.',
      events: [
        { name: 'INNOVIA-22 (IoT Hackathon)', desc: 'Teams built working IoT prototypes solving real-world problems.' },
        { name: 'IEEE Day Celebration', desc: 'Talks, workshops, and networking under technology-for-impact theme.' },
        { name: 'VLSI Career Talk', desc: 'Industry session on VLSI pathways and opportunities.' },
      ],
      team: [],
    },
    '2017': {
      dates: 'November 3-5, 2017',
      status: 'past',
      tagline: 'Successfully Concluded',
      description:
        'Abhivyakti 2017 was a landmark three-day technical fest featuring both technical and non-technical categories.',
      events: [
        { name: 'Technical Paper Presentation', desc: 'Students presented research papers on IoT and other emerging technologies.' },
        { name: 'Robotics Competition', desc: 'Bot-building and obstacle challenge testing engineering fundamentals.' },
        { name: 'Coding Competition', desc: 'Algorithmic problem-solving contest across multiple rounds.' },
      ],
      team: [],
    },
  };

  const years = Object.keys(yearData).sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
  const currentData = yearData[activeTab];
  const isFlagship = activeTab === '2026';

  return (
    <div ref={pageRef}>
      <SEO path="/abhivyakti" title={`Abhivyakti ${activeTab} — Techno-Cultural Fest`} />

      {/* Edition switcher */}
      <div className="sticky top-[72px] z-30 border-b border-rule bg-paper/85 backdrop-blur-md">
        <div className="wrap flex h-14 items-center gap-6">
          <span className="font-display text-[18px] italic shrink-0">Abhivyakti</span>
          <div className="no-scrollbar ml-auto flex items-center gap-1 overflow-x-auto" role="tablist" aria-label="Edition">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                role="tab"
                aria-selected={activeTab === year}
                onClick={() => setActiveTab(year)}
                className={`relative shrink-0 rounded-full px-3.5 py-1.5 font-mono text-[12px] tracking-wider transition-colors duration-300 ${
                  activeTab === year ? 'bg-ink text-paper' : 'text-ink-3 hover:bg-paper-2 hover:text-ink'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="section !pt-16 md:!pt-24">
        <div className="wrap">
          <span className="tag" data-reveal>
            <span className="h-1.5 w-1.5 rounded-full bg-ink-3/50" aria-hidden="true" />
            {currentData.dates} · {currentData.tagline}
          </span>
          <SplitText as="h1" className="display-xl mt-7" key={activeTab}>
            Abhivyakti <em>{activeTab}</em>
          </SplitText>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="lede max-w-[58ch]" data-reveal data-reveal-delay="0.2">{currentData.description}</p>
            {isFlagship && (
              <a href="https://linktr.ee/Abhivyakti_2k26" target="_blank" rel="noopener noreferrer" className="btn btn-ghost justify-self-start" data-reveal>
                Abhivyakti 2026 links <BtnArrow />
              </a>
            )}
          </div>

          {isFlagship && (
            <dl className="mt-14 grid grid-cols-3 border-y border-rule" data-stagger>
              {[
                ['3', 'Days'],
                [String(currentData.events.length), 'Events'],
                ['1', 'Fest'],
              ].map(([value, label], i) => (
                <div key={label} className={`flex flex-col-reverse py-8 ${i > 0 ? 'border-l border-rule pl-6 md:pl-10' : ''}`}>
                  <dt className="label mt-2">{label}</dt>
                  <dd className="font-display text-[clamp(44px,6vw,80px)] leading-none tracking-tight" data-count={value}>{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {/* Events */}
      <section className="section-tight bg-paper-2/60 border-y border-rule">
        <div className="wrap">
          <p className="label" data-reveal><span className="label-index">[{String(currentData.events.length).padStart(2, '0')}]</span> {isFlagship ? 'Event tracks' : 'Events and highlights'}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
            {currentData.events.map((event, idx) => (
              <article key={`${activeTab}-${event.name}`} className="group card card-hover flex flex-col p-7">
                <div className="flex items-start justify-between">
                  <span className="label label-index">{String(idx + 1).padStart(2, '0')}</span>
                  <ArrowUpRight size={16} strokeWidth={1.5} className="text-ink-3 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-copper" aria-hidden="true" />
                </div>
                <h3 className="display-sm mt-6">{event.name}</h3>
                <p className="body small mt-3">{event.desc}</p>
                {event.coordinators && (
                  <p className="label mt-auto border-t border-rule pt-4 !normal-case !tracking-normal">
                    <span className="uppercase tracking-[0.08em]">Coordinators</span> · {event.coordinators}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Organising committee */}
      {currentData.team.length > 0 && (
        <section className="section-tight">
          <div className="wrap grid gap-10 lg:grid-cols-[320px_1fr]">
            <div>
              <p className="label" data-reveal><span className="label-index">[{activeTab}]</span> Organising committee</p>
              <SplitText as="h2" className="display-md mt-5" key={`team-${activeTab}`}>The team who <em>made it happen.</em></SplitText>
            </div>
            <ul className="border-t border-rule" data-stagger>
              {currentData.team.map((member) => (
                <li key={member.name} className="group flex items-baseline justify-between gap-6 border-b border-rule py-5">
                  <span className="font-display text-[22px] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2">{member.name}</span>
                  <span className="label text-right">{member.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default Abhivyakti;
