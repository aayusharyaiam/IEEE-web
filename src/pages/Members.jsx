import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MemberCard from '../components/MemberCard';

gsap.registerPlugin(ScrollTrigger);

const Members = () => {
  const headerRef = useRef(null);

  const members = [
    { name: "Arnav Shivam", role: "Chair Person" },
    { name: "Sneha Sharma", role: "Vice Chair Person" },
    { name: "Asman Kumari", role: "Secretary" },
    { name: "Syed Fahad Ahmed", role: "Treasurer" },
    { name: "Pushkar Kumar", role: "Technical Coordinator" },
    { name: "Md Mehran Ansari", role: "Webmaster" },
    { name: "Meenakshi Sinha", role: "Design & Editing Coordinator" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero split-text
      const h1 = headerRef.current?.querySelector('.members-title');
      if (h1) {
        const original = h1.innerHTML;
        // Split only the text node parts, keep <span> and <br> as-is
        const text = h1.textContent;
        h1.innerHTML = text.replace(/\S+/g, '<span class="mem-word inline-block">$&</span>');
        gsap.fromTo('.mem-word',
          { y: 50, opacity: 0, rotateX: -45 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.7, stagger: 0.06, ease: 'power4.out', delay: 0.15 }
        );
      }
      gsap.fromTo('.members-desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );

      // Empty state
      gsap.fromTo('.empty-state',
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.empty-state', start: 'top 85%' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-24 md:pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <header ref={headerRef} className="mb-12 md:mb-16">
        <h1 className="members-title text-4xl md:text-7xl font-bold tracking-[-0.02em] text-primary mb-6 uppercase leading-tight perspective-[800px]">
          EXECUTIVE COMMITTEE
        </h1>
        <p className="members-desc text-on-surface-variant text-base md:text-xl max-w-2xl font-light leading-relaxed opacity-0">
          Meet the dedicated team at IEEE Student Branch BIT Patna. Engineering solutions, fostering community, and leading the digital frontier.
        </p>
      </header>

      {/* Member Grid — flex-wrap so partial rows auto-center */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {members.map((member, index) => (
          <div key={index} className="w-[calc(50%-0.5rem)] md:w-[calc(25%-1.5rem)] min-w-[160px] max-w-xs flex-shrink-0">
            <MemberCard name={member.name} role={member.role} index={index} />
          </div>
        ))}
      </div>

      {/* Empty State / Placeholder */}
      <div className="empty-state mt-24 p-12 rounded-lg bg-surface-container-low/50 border border-outline-variant/10 flex flex-col items-center text-center hover:border-tertiary/20 transition-colors duration-500">
        <div className="w-20 h-20 mb-6 bg-primary-container rounded-2xl flex items-center justify-center animate-pulse">
          <span className="material-symbols-outlined text-4xl text-tertiary">groups</span>
        </div>
        <h3 className="text-2xl font-bold text-on-surface mb-2">Expanding the Frontier</h3>
        <p className="text-on-surface-variant max-w-md">Our recruitment process for specialized sub-teams is currently active. New members will be featured here shortly.</p>
        <button className="mt-8 text-on-surface font-medium underline underline-offset-8 decoration-tertiary hover:text-tertiary transition-all">
          View Open Positions
        </button>
      </div>
    </main>
  );
};

export default Members;
