import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo([title1Ref.current, title2Ref.current], 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out", delay: 0.5 }
    ).fromTo(descRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    // Floating animation
    gsap.to(title2Ref.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ieee-blue/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
        <div className="overflow-hidden mb-2">
          <h1 ref={title1Ref} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase">
            WELCOME TO IEEE
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1 ref={title2Ref} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-ieee-blue uppercase">
            Student Branch BIT Patna
          </h1>
        </div>
        
        <p ref={descRef} className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed font-light">
          A canvas under which bright young minds, with diverse interests, get a common dream to take on the world with their technical skills, is how we would define the BIT PATNA IEEE Student Branch. The IEEE, Inc., USA operates through student branches spread all across the world. IEEE Student Chapter, BIT Patna was formed on 23 November 2008 with active cooperation from students and the effective guidance of faculty advisors. The chapter provides a local forum for members to meet and exchange views on technical, educational and professional interests.
        </p>
      </div>
    </section>
  );
};

export default Hero;
