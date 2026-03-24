import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const gridRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split-text hero
      const h1 = headerRef.current?.querySelector('.gallery-title');
      if (h1) {
        h1.innerHTML = h1.textContent.replace(/\S+/g, '<span class="gal-word inline-block">$&</span>');
        gsap.fromTo('.gal-word',
          { y: 60, opacity: 0, rotateX: -60 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.08, ease: 'power4.out', delay: 0.2 }
        );
      }
      gsap.fromTo('.gallery-subtitle',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );

      // Masonry items stagger with varied transforms
      const items = gridRef.current.querySelectorAll('.masonry-item');
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 60 + (i % 3) * 20, opacity: 0, scale: 0.9 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.8, delay: i * 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 92%' }
          }
        );
      });

      // Featured spotlight parallax
      gsap.fromTo('.spotlight-img',
        { scale: 1.1 },
        { scale: 1, scrollTrigger: { trigger: '.spotlight-section', start: 'top bottom', end: 'bottom top', scrub: 1.5 } }
      );
      gsap.fromTo('.spotlight-text > *',
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.spotlight-section', start: 'top 75%' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const galleryItems = [
    { title: "Annual Tech Symposium", category: "Events", year: "2024" },
    { title: "Robotics Masterclass", category: "Workshops", year: "2023" },
    { title: "Winter Trek '23", category: "Team Outings", year: "2023" },
    { title: "IEEE Regional Congress", category: "Events", year: "2024" },
    { title: "Circuit Design Hackathon", category: "Workshops", year: "2024" },
    { title: "Social Night", category: "Team Outings", year: "2024" },
  ];

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <header ref={headerRef} className="mb-12 md:mb-16">
        <span className="text-tertiary font-label font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Capturing Excellence</span>
        <h1 className="gallery-title text-4xl md:text-7xl font-bold tracking-tighter text-primary mb-6 uppercase leading-tight max-w-[80%] perspective-[800px]">GALLERIA</h1>
        <p className="gallery-subtitle text-on-surface-variant max-w-2xl text-base md:text-lg leading-relaxed opacity-0">
          A visual journey of our events, workshops, and memories.
        </p>
      </header>

      {/* Masonry layout */}
      <div ref={gridRef} className="columns-2 lg:columns-3 gap-4 md:gap-8">
        {galleryItems.map((item, index) => (
          <div key={index} className="masonry-item group relative cursor-pointer overflow-hidden rounded-xl bg-surface-container-low break-inside-avoid mb-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-full aspect-square md:aspect-auto md:h-80 bg-surface-container-highest flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
              <span className="text-4xl text-on-surface-variant/20 font-bold uppercase opacity-30">IMG</span>
            </div>
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="material-symbols-outlined text-tertiary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>zoom_in</span>
              <h3 className="text-xl font-bold text-on-surface">{item.title}</h3>
              <p className="text-sm text-on-surface-variant">{item.category} • {item.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Spotlight */}
      <section className="spotlight-section mt-32">
        <div className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-3/5 overflow-hidden">
            <img className="spotlight-img w-full h-[500px] object-cover" alt="Awards" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYi2qh2Q8PIzE29-b08ftr_aBNYih8itJoKtuFys9prD5VxJCQ4Qo003hhtkDRfiVuGZxWJlIWKBA9DDb165SVbTnFNCwq8GG-vFggEdtwlsFJD3eAnb_4qGruYYGyVmcVbdGCRoVnMjoVUi72_wTmiQsdoK5-TCtxM2hO1RGa4hag-_D6y4wu8FojAxmSDmeXJdQRmabuNrpyDSHVufrMnypZyncfw1qAbDfYOY1FfsBsQoh1XufICLgPc0p007Ob4uMPxkBk7Mxm"/>
          </div>
          <div className="spotlight-text w-full lg:w-2/5 p-12 lg:p-16">
            <h2 className="text-3xl font-headline font-bold mb-6">IEEE Excellence Awards</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              A retrospective look at our chapter's proudest moment—receiving the Outstanding Student Branch award. A celebration of hard work and dedication.
            </p>
            <button className="flex items-center gap-3 text-tertiary font-medium group/btn hover:gap-5 transition-all">
              View Full Collection 
              <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
