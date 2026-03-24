import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EventCard from '../components/EventCard';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const heroRef = useRef(null);

  const eventsList = [
    { title: "INDUSTRY CONCLAVE 2024 — AI REVOLUTION IN VLSI", description: `The Industry Conclave 2024...` },
    { title: "IEEE DAY 2024 — CODE ELECTRO RUN", description: "The IEEE BIT Student Branch hosted Code Electro RUN, a unique event for ECE and CSE students. ECE participants competed in a soldering relay, while CSE students participated in a coding relay. Each team consisted of three members, emphasizing teamwork, speed, and accuracy." },
    { title: "HUNT AND HYPE", description: "IEEE BIT SB organized Hunt and Hype, an exciting photo scavenger hunt that challenged participants' creativity, teamwork, and problem-solving abilities." },
    { title: "INDUCTION PROGRAM FOR 2028 BATCH", description: "The IEEE BIT SB successfully conducted the induction program for the incoming batch, highlighting IEEE membership benefits and past activities." },
    { title: "CRACK THE CODE TO CAREER", description: "A webinar session focusing on DSA, problem-solving, and interview preparation." },
    { title: "LINKEDIN CAREER INSIGHTS WEBINAR", description: "Focused on internships, networking, and LinkedIn optimization." },
    { title: "THE IMITATION GAME (UI/UX EVENT)", description: "Competition testing UI/UX skills with design replication tasks." },
    { title: "TECH TALK — REVOLUTIONISING STORAGE", description: "Technical talk on 3D NAND memory and storage technology." },
    { title: "DATA SCIENCE TALK", description: "Overview of data science roles, tools, and applications." },
    { title: "ISRO VISIT", description: "Industrial visit to UR Rao Satellite Centre to explore space technology." },
    { title: "COMPILER DESIGN WORKSHOP", description: "Hands-on training using Lex and Yacc." },
    { title: "CAD INFRASTRUCTURE WORKSHOP", description: "2-day workshop on CAD tools and OpenLane." },
    { title: "INAUGURATION OF CENTRE OF EXCELLENCE (EDA)", description: "Launch of CoE in Electronics Design Automation." },
    { title: "IAAI SUMMIT", description: "Industry-alumni interaction and project showcase." },
    { title: "WORKSHOP ON SENSORS AND APPLICATIONS", description: "3-day hands-on workshop on sensors and embedded systems." },
    { title: "AMONG US REAL LIFE EVENT", description: "Gamified outdoor team event." },
    { title: "NGO VISIT", description: "Social outreach and educational engagement." },
    { title: "PROFESSIONAL DEVELOPMENT TRAINING", description: "Session on communication, networking, and interviews." },
    { title: "VLSI CAREER TALK", description: "Tech talk on VLSI and career opportunities." },
    { title: "CISCO INDUSTRIAL VISIT", description: "Industry exposure at Cisco campus." },
    { title: "FUN FIESTA 2023", description: "Techno-cultural event with competitions." },
    { title: "EMBEDD-ATHON (TECHLITE 2.0)", description: "Embedded systems competition with Arduino." },
    { title: "EMBEDDED SYSTEM WORKSHOP", description: "Hands-on Arduino training workshop." },
    { title: "INNOVIA-22 (IoT HACKATHON)", description: "IoT hackathon with prototype building." },
    { title: "IEEE DAY CELEBRATION 2022", description: "Theme: Leveraging Technology for a Better Tomorrow." }
  ];

  eventsList[0].description = `The Industry Conclave 2024, organized by IEEE BIT Student Branch, took place on October 9th at Ramegowda Seminar Hall with a theme of "AI Revolutions in VLSI." Attended by students, faculty, and industry professionals, the event featured vibrant performances and inspiring addresses by Principal Dr. Ashwath M U, Vice Principal Dr. J Prakash, and IEEE BIT SB Student Counsellor Dr. Jalaja S.\n\nSessions featured Western Digital's Rahul Tiwari and Aashish Sangoi on AI in NAND memory and semiconductor production, Dr. Pandian P S on AI in surveillance and military strategy, and Intel's Rajanikanth on AI-enhanced IC design. Mr. Aloke Kumar Das discussed AI-driven EDA innovations, and the event concluded with an interactive quiz.`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero split-text
      const heroH1 = heroRef.current?.querySelector('.events-hero-title');
      if (heroH1) {
        heroH1.innerHTML = heroH1.textContent.replace(/\S+/g, '<span class="ev-word inline-block">$&</span>');
        gsap.fromTo('.ev-word',
          { y: 60, opacity: 0, rotateX: -60 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.06, ease: 'power4.out', delay: 0.2 }
        );
      }
      gsap.fromTo('.events-hero-desc',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 }
      );

      // Timeline line draw
      gsap.fromTo('.timeline-line', { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '.timeline-section', start: 'top 80%', end: 'bottom 20%', scrub: 1 }
      });

      // Newsletter section
      gsap.fromTo('.newsletter-section > div > *',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.newsletter-section', start: 'top 80%' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section ref={heroRef} className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_50%_0%,_var(--color-secondary-container-val)_0%,_transparent_70%)] opacity-30 -z-10 pointer-events-none"></div>
        <h1 className="events-hero-title text-[3.5rem] leading-[1.1] md:text-7xl font-bold tracking-tighter text-primary mb-6 uppercase perspective-[800px]">EVENTS LIST</h1>
        <p className="events-hero-desc text-on-surface-variant max-w-2xl mx-auto text-lg mb-12 opacity-0">Witness the convergence of technology and creativity. From high-stakes hackathons to insightful workshops, explore our legacy of engineering excellence.</p>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section max-w-7xl mx-auto px-6 py-12 relative">
        {/* Central Vertical Line — animated draw */}
        <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-tertiary via-secondary/20 to-transparent hidden md:block origin-top" style={{ transformOrigin: 'top center' }}></div>
        
        {/* Event Items */}
        <div className="space-y-24">
          {eventsList.map((event, index) => (
            <EventCard key={index} title={event.title} description={event.description} index={index} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section mt-32 bg-surface-container-low py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-6">Stay Ahead of the Curve</h2>
          <p className="text-on-surface-variant mb-10 text-lg">Get notified about upcoming hackathons, tech talks, and exclusive student opportunities directly in your inbox.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input className="flex-grow bg-surface-container-highest border-0 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-tertiary transition-all outline-none" placeholder="Your institutional email" type="email"/>
            <button className="bg-primary text-on-primary font-bold px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
