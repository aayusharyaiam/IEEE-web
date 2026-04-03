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

    });
    return () => ctx.revert();
  }, []);

  const galleryItems = [
    { title: "", category: "", year: "", image: "/gallery/pic1.jpg" },
    { image: "/gallery/pic2.jpg" },
    { image: "/gallery/pic3.jpg" },
    { image: "/gallery/pic4.jpg" },
    { image: "/gallery/pic5.jpg" },
    { image: "/gallery/pic6.jpg" },
    { image: "/gallery/pic7.jpg" },
    { image: "/gallery/pic8.jpg" },
    { image: "/gallery/pic9.jpg" },
    { image: "/gallery/pic10.jpg" },
    { image: "/gallery/pic11.jpg" },
    { image: "/gallery/pic12.jpg" },
    { image: "/gallery/pic13.jpg" },
    { image: "/gallery/pic14.jpg" },
    { image: "/gallery/pic15.jpg" },
    { image: "/gallery/pic16.jpg" },
    { image: "/gallery/pic17.jpg" },
    { image: "/gallery/pic18.jpg" },
    { image: "/gallery/pic19.jpg" },
    { image: "/gallery/pic20.jpg" },
    { image: "/gallery/pic21.jpg" },
    { image: "/gallery/pic22.jpg" },
    { image: "/gallery/pic23.jpg" },
    { image: "/gallery/pic24.jpg" },
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
            <div className="w-full aspect-square md:aspect-auto md:h-80 bg-surface-container-highest overflow-hidden transition-transform duration-700 group-hover:scale-110">
              <img 
                src={item.image}  
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              {/* <span className="material-symbols-outlined text-tertiary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>zoom_in</span>
              <h3 className="text-xl font-bold text-on-surface">{item.title}</h3>
              <p className="text-sm text-on-surface-variant">{item.category} • {item.year}</p> */}
            </div>
          </div>
        ))}
      </div>

    </main>
  );
};

export default Gallery;
