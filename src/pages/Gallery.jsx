import React from 'react';
import SEO from '../components/SEO';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import useReveal from '../hooks/useReveal';
import { SplitText } from '../components/Reveal';

const galleryItems = Array.from({ length: 24 }, (_, i) => `/gallery/pic${i + 1}.jpg`);

const Gallery = () => {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      <SEO path="/gallery" />

      <section className="section !pt-16 md:!pt-24">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="label" data-reveal><span className="label-index">[{galleryItems.length}]</span> Capturing excellence</p>
              <SplitText as="h1" className="display-xl mt-6">
                Galle<em>ria.</em>
              </SplitText>
            </div>
            <p className="lede max-w-[36ch]" data-reveal data-reveal-delay="0.2">
              A visual journey of our events, workshops, and memories.
            </p>
          </div>
          <div className="rule mt-12" data-rule="" aria-hidden="true" />

          <div className="mt-12 columns-2 gap-3 md:gap-4 lg:columns-3">
            {galleryItems.map((src, index) => (
              <figure key={src} className="group zoom-frame relative mb-3 break-inside-avoid overflow-hidden rounded-[14px] md:mb-4" data-reveal="clip">
                <ImageWithSkeleton
                  src={src}
                  alt={`IEEE BIT Patna event moment ${index + 1}`}
                  loading="lazy"
                  wrapperClassName={index % 3 === 0 ? 'aspect-[4/5]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'}
                  className="h-full w-full object-cover"
                />
                <figcaption className="label pointer-events-none absolute bottom-3 left-3 rounded-full bg-paper/90 px-2.5 py-1 !text-[10px] opacity-0 backdrop-blur transition-all duration-500 ease-[var(--ease-out-expo)] translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                  No. {String(index + 1).padStart(2, '0')}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
