import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ title, children, align = 'left', darker = false, className = '' }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Reveal text
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${darker ? 'bg-[#020202]' : 'bg-[#050505]'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`mb-12 md:mb-20 ${align === 'center' ? 'text-center' : ''}`}>
          <h2 ref={titleRef} className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            <span className="text-ieee-blue">/</span> {title}
          </h2>
        </div>
        <div ref={contentRef} className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
