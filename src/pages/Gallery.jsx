import React from 'react';
import SEO from '../components/SEO';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import useReveal from '../hooks/useReveal';

const galleryItems = Array.from({ length: 24 }, (_, i) => `/gallery/pic${i + 1}.jpg`);

const Gallery = () => {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      <SEO title="Photo Gallery" description="Browse moments from IEEE BIT Patna events, workshops, competitions, and student activities." path="/gallery" />

      <section className="tile tile-light text-center">
        <div className="mx-auto max-w-[980px]">
          <p className="t-tagline text-ink-48" data-reveal>Capturing Excellence</p>
          <h1 className="t-hero mt-3" data-reveal data-reveal-delay="0.05">Galleria</h1>
          <p className="t-body mx-auto mt-5 max-w-[560px] text-ink-80" data-reveal data-reveal-delay="0.1">
            A visual journey of our events, workshops, and memories.
          </p>
        </div>
      </section>

      <section className="tile tile-parchment">
        <div className="mx-auto max-w-[1200px] columns-2 gap-3 md:gap-4 lg:columns-3">
          {galleryItems.map((src, index) => (
            <figure key={src} className="mb-3 break-inside-avoid overflow-hidden rounded-lg md:mb-4" data-reveal>
              <ImageWithSkeleton
                src={src}
                alt={`IEEE BIT Patna event moment ${index + 1}`}
                loading="lazy"
                wrapperClassName={index % 3 === 0 ? 'aspect-[4/5]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'}
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
