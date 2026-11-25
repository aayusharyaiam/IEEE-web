import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';

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
      <SEO title={`Abhivyakti ${activeTab}`} description="Abhivyakti is IEEE BIT Patna's annual techno-cultural festival of innovation, competitions, and creativity." path="/abhivyakti" />

      {/* Frosted sub-nav: festival name + edition switcher */}
      <div className="sticky top-11 z-30 frosted border-b border-black/[0.08]">
        <div className="mx-auto flex h-[52px] max-w-[1024px] items-center gap-6 px-4 md:px-6">
          <span className="t-tagline shrink-0">Abhivyakti</span>
          <div className="no-scrollbar ml-auto flex items-center gap-1 overflow-x-auto" role="tablist" aria-label="Edition">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                role="tab"
                aria-selected={activeTab === year}
                onClick={() => setActiveTab(year)}
                className={`shrink-0 rounded-full px-3 py-1 t-caption transition-colors ${
                  activeTab === year ? 'bg-ink text-white' : 'text-ink-80 hover:text-ink'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero — dark tile for the flagship edition, light for the archive */}
      <section className={`tile text-center ${isFlagship ? 'tile-black on-dark' : 'tile-light'}`}>
        <div className="mx-auto max-w-[980px]">
          <p className={`t-tagline ${isFlagship ? 'text-body-muted' : 'text-ink-48'}`} data-reveal>
            {currentData.dates} · {currentData.tagline}
          </p>
          <h1 className="t-hero mt-3" data-reveal data-reveal-delay="0.05">Abhivyakti {activeTab}</h1>
          <p className={`t-body mx-auto mt-5 max-w-[680px] ${isFlagship ? 'text-body-muted' : 'text-ink-80'}`} data-reveal data-reveal-delay="0.1">
            {currentData.description}
          </p>
          {isFlagship && (
            <>
              <dl className="mx-auto mt-12 grid max-w-[640px] grid-cols-3 gap-6" data-reveal>
                {[
                  ['3', 'Days'],
                  [String(currentData.events.length), 'Events'],
                  ['1', 'Fest'],
                ].map(([value, label]) => (
                  <div key={label} className="flex flex-col-reverse">
                    <dt className="t-caption text-body-muted">{label}</dt>
                    <dd className="t-display-lg">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10" data-reveal>
                <a href="https://linktr.ee/Abhivyakti_2k26" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Abhivyakti 2026 links <ArrowUpRight size={16} strokeWidth={1.75} />
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Events */}
      <section className="tile tile-parchment">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="t-display-lg text-center" data-reveal>{isFlagship ? 'Event tracks' : 'Events and highlights'}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {currentData.events.map((event, idx) => (
              <article key={`${activeTab}-${event.name}`} className="card flex flex-col" data-reveal>
                <p className="t-caption-strong text-ink-48">{String(idx + 1).padStart(2, '0')}</p>
                <h3 className="t-tagline mt-2">{event.name}</h3>
                <p className="t-body mt-2 text-ink-80">{event.desc}</p>
                {event.coordinators && (
                  <p className="t-caption mt-auto pt-4 text-ink-48">Coordinators: {event.coordinators}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Organising committee */}
      {currentData.team.length > 0 && (
        <section className="tile tile-dark on-dark">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="t-display-lg text-center" data-reveal>Organising committee</h2>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {currentData.team.map((member) => (
                <li key={member.name} className="card-dark !p-5" data-reveal>
                  <p className="t-caption text-body-muted">{member.role}</p>
                  <p className="t-body-strong mt-1">{member.name}</p>
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
