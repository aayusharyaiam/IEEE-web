import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import useReveal from '../hooks/useReveal';
import { committee, currentTerm, facultyAdvisor } from '../data/committee';

gsap.registerPlugin(ScrollTrigger);

const JOIN_URL = 'https://www.ieee.org/membership/join';

const stats = [
  { value: 150, label: 'Active Members' },
  { value: 45, label: 'Events Yearly' },
  { value: 12, label: 'Projects Completed' },
  { value: 20, label: 'Global Awards' },
];

const events = [
  {
    tag: 'Competition',
    title: 'Robo Soccer',
    meta: 'March 2026 · Sports Ground',
    desc: 'Autonomous soccer robots equipped with advanced AI competing in thrilling matches. A showcase of robotics and machine learning.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsQm5TPTvvU6upcT6a9lk_4IpJWp7d_H9r6R5l2WZeEH5wvwHuBMuhcr71pWgYi2Fqnrdk0cMIaLA2fBTMnRabmENqzPM-yG6rffCmbPe1m4gtmpHZeQts_sdQDQLoh3YJU8Qtd3XRE-nfq-fh_FqMbFIIWN4bO-jdorTjYxCjoL11AdpdGAt5iG5sdasZbtd_38qYLpLHzK7OK9YIYruaL_Xp4JVCME6sUG0G4Jye82_JZ8H6DVQ1EL9c8j9sXZlvf5bdtQaDqAW3',
  },
  {
    tag: 'Workshop',
    title: 'PCB Workshop',
    meta: 'March 2026 · Electronics Lab',
    desc: 'Learn PCB design fundamentals from industry experts. Hands-on training in circuit design, prototyping, and manufacturing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpbQZjY9ZPaJPn4Um5rwXuBhUcPqxyWgFLHxTQze6XoieUEceGIPF8AwLDbqmMH2tp-k-26crekFY2giXfWxr_RT6JiJlyFlpGd6ucdu72Dn-tZzoOSCTn750_dCzpilSZxNnCYyYiU-Q-t88h65GLXUlRG_184rx1tYw1mIG-mU8d-URGeQ-CrGmtLx5SjjdYZK_X6k_XJlKPOj8e6qQJnNI4FCNsGps5IWCAwA9rBYF4gHeLHWPUXrTkaF63sm5pfIjlBE2B6K84',
  },
  {
    tag: 'Workshop',
    title: 'Linux Workshop with ML',
    meta: 'March 2026 · Computer Lab',
    desc: 'Master Linux fundamentals and dive into Machine Learning applications. Perfect for aspiring data scientists and engineers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK4CSVyyLluwUHDR-Yw0hshdQ4jE65TFQYPqoDJsPDA1UvmKlu5Jl7zVvdS7aTkG5Ox24HnCLfzZMw-JkB3LVw9x8k-AESzQo4NxW7ggF9zKnXkF5zsrIzLVZI9nW_Wszjfqf7GoDC_HIZINuTNrdT7eq5FkpyiTldApXmWvyoY2IthCJIz1NQaGZ6XNr3XriJrdcFW7CtS0haniVIgwN_5gzxBojfeCXjOMR3fF567pbBEVApUYpC2X2jP-ACtY9p6LWY8fLmEhB5',
  },
];

const Home = () => {
  const pageRef = useReveal();
  const statsRef = useRef(null);

  // Count-up for the stats row.
  useEffect(() => {
    if (!statsRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = gsap.context(() => {
      statsRef.current.querySelectorAll('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: 'power1.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => { el.textContent = `${Math.round(obj.val)}+`; },
        });
      });
    }, statsRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <SEO title="Student Branch" description="Discover IEEE BIT Patna's student community, leadership, events, and opportunities to innovate, learn, and grow." />

      {/* 1. Hero — light tile */}
      <section className="tile tile-light text-center !pb-0">
        <div className="mx-auto max-w-[980px]">
          <p className="t-tagline text-ink-48" data-reveal>Innovate. Educate. Empower.</p>
          <h1 className="t-hero mt-3" data-reveal data-reveal-delay="0.05">
            IEEE Student Branch
            <br />
            BIT Patna
          </h1>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3" data-reveal data-reveal-delay="0.1">
            <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Explore Membership</a>
            <Link to="/events" className="btn-secondary">View Events</Link>
          </div>
          <p className="t-body mx-auto mt-10 max-w-[720px] text-ink-80" data-reveal data-reveal-delay="0.15">
            A canvas under which bright young minds, with diverse interests, get a common dream to take on the world with their technical skills, is how we would define the BIT PATNA IEEE Student Branch. The IEEE, Inc., USA operates through student branches spread all across the world. IEEE Student Chapter, BIT Patna was formed on 23 November 2008 with active cooperation from students and the effective guidance of faculty advisors. The chapter provides a local forum for members to meet and exchange views on technical, educational and professional interests.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-[1200px]" data-reveal>
          <div className="aspect-[21/9] overflow-hidden">
            <ImageWithSkeleton src="/gallery/home3.jpeg" alt="IEEE BIT Patna members at a branch event" className="h-full w-full object-cover" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission — dark tile */}
      <section className="tile tile-dark on-dark">
        <div className="mx-auto grid max-w-[980px] gap-14 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <p className="eyebrow">Vision</p>
            <h2 className="t-display-lg mt-2">Technology for global prosperity.</h2>
            <p className="t-body mt-5 text-body-muted">
              To promote global prosperity by stimulating technology innovation, enabling members' careers, and promoting the global community. IEEE is, and remains, firmly committed to diversity, equity, and inclusion.
            </p>
          </div>
          <div data-reveal data-reveal-delay="0.1">
            <p className="eyebrow">Mission</p>
            <h2 className="t-display-lg mt-2">Knowledge for humanity.</h2>
            <p className="t-body mt-5 text-body-muted">
              The IEEE encourages the engineering process of producing, developing, integrating, sharing, and using knowledge in electro and information technologies and sciences for the benefit of humanity and the profession.
            </p>
          </div>
        </div>
      </section>

      {/* 3. About IEEE — parchment tile */}
      <section className="tile tile-parchment">
        <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <h2 className="t-display-lg">About IEEE</h2>
            <p className="t-lead-airy mt-5 text-ink">
              IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
            </p>
            <p className="t-body mt-5 text-ink-80">
              IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 4,23,000 members in over 160 countries, and its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted "voice" for engineering, computing, and technology information around the globe.
            </p>
            <a href="https://www.ieee.org/about" target="_blank" rel="noopener noreferrer" className="link mt-6">
              Learn more about IEEE <ChevronRight size={16} strokeWidth={2} />
            </a>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-product" data-reveal data-reveal-delay="0.1">
            <ImageWithSkeleton src="/gallery/home2.jpeg" alt="Students at an IEEE BIT Patna session" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 4. Stats — light tile */}
      <section ref={statsRef} className="tile tile-light">
        <dl className="mx-auto grid max-w-[980px] grid-cols-2 gap-y-12 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse" data-reveal>
              <dt className="t-caption mt-1 text-ink-48">{s.label}</dt>
              <dd className="t-hero !text-[48px] md:!text-[56px]" data-count={s.value}>{s.value}+</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 5. New committee — parchment tile */}
      <section className="tile tile-parchment text-center">
        <div className="mx-auto max-w-[980px]">
          <p className="eyebrow" data-reveal>Executive Committee {currentTerm}</p>
          <h2 className="t-display-lg mt-2" data-reveal>Meet the new team.</h2>
          <p className="t-body mx-auto mt-4 max-w-[560px] text-ink-80" data-reveal>
            Appointed by the Branch Counsellor, {facultyAdvisor.name}, to lead the branch through the {currentTerm} session.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5" data-reveal>
            {committee.map((m) => (
              <li key={m.name} className="card !p-5 text-left">
                <p className="t-caption text-ink-48">{m.role}</p>
                <p className="t-body-strong mt-1">{m.name}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8" data-reveal>
            <Link to="/members" className="link">Meet the committee <ChevronRight size={16} strokeWidth={2} /></Link>
          </div>
        </div>
      </section>

      {/* 6. Events — light tile with utility cards */}
      <section className="tile tile-light">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div>
              <p className="eyebrow">Latest Happenings</p>
              <h2 className="t-display-lg mt-2">Events</h2>
            </div>
            <Link to="/events" className="link">View all events <ChevronRight size={16} strokeWidth={2} /></Link>
          </div>
          <div className="no-scrollbar -mx-[22px] mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[22px] pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
            {events.map((ev) => (
              <article key={ev.title} className="card flex min-w-[280px] snap-start flex-col !p-0 overflow-hidden" data-reveal>
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithSkeleton src={ev.image} alt={ev.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="t-caption-strong text-ink-48">{ev.tag}</p>
                  <h3 className="t-tagline mt-1">{ev.title}</h3>
                  <p className="t-caption mt-1 text-ink-48">{ev.meta}</p>
                  <p className="t-body mt-3 text-ink-80">{ev.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery — dark tile */}
      <section className="tile tile-dark-2 on-dark">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center" data-reveal>
            <p className="eyebrow">Visual Journey</p>
            <h2 className="t-display-lg mt-2">Life at IEEE BITP</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-4" data-reveal>
            <figure className="col-span-2 aspect-[4/3] overflow-hidden rounded-lg md:row-span-2 md:aspect-auto">
              <ImageWithSkeleton src="/gallery/poster.jpeg" alt="Annual Technical Summit" className="h-full w-full object-cover" loading="lazy" />
            </figure>
            <figure className="aspect-square overflow-hidden rounded-lg md:aspect-auto">
              <ImageWithSkeleton src="/gallery/home2.jpeg" alt="IEEE BIT Patna event" className="h-full w-full object-cover" loading="lazy" />
            </figure>
            <figure className="aspect-square overflow-hidden rounded-lg md:aspect-auto">
              <ImageWithSkeleton src="/gallery/home1.jpeg" alt="IEEE BIT Patna event" className="h-full w-full object-cover" loading="lazy" />
            </figure>
            <figure className="col-span-2 aspect-[2/1] overflow-hidden rounded-lg md:aspect-auto">
              <ImageWithSkeleton src="/gallery/home3.jpeg" alt="Student Membership Drive" className="h-full w-full object-cover" loading="lazy" />
            </figure>
          </div>
          <div className="mt-10 text-center" data-reveal>
            <Link to="/gallery" className="btn-secondary">Open the gallery</Link>
          </div>
        </div>
      </section>

      {/* 8. Message from the Counsellor — light tile */}
      <section className="tile tile-light">
        <div className="mx-auto grid max-w-[1000px] items-start gap-12 md:grid-cols-[1fr_300px] md:gap-16">
          <div data-reveal>
            <p className="eyebrow">Message from the Counsellor</p>
            <blockquote className="mt-4 space-y-5">
              <p className="t-lead-airy text-ink">
                As the branch counsellor of IEEE Student Branch BIT PATNA, I welcome you to IEEE family. IEEE is the world's largest technical community dedicated to advancing technology for the benefit of mankind.
              </p>
              <p className="t-body text-ink-80">
                IEEE Student Branch promise to promote its preeminence among students in associated fields and ensure a smooth transition into an able and qualified engineer of tomorrow.
              </p>
              <p className="t-body text-ink-80">
                The student branch of BIT PATNA aims to organize various events that helps to enhance the overall growth and development of our students and we shall continue to work for the same. I wish all the IEEE members great success for their future endeavors.
              </p>
            </blockquote>
          </div>
          <figure data-reveal data-reveal-delay="0.1">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-product">
              <ImageWithSkeleton src={facultyAdvisor.image} alt={`${facultyAdvisor.name}, faculty advisor of IEEE BIT Patna`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <figcaption className="mt-5">
              <p className="t-body-strong">{facultyAdvisor.name}</p>
              <p className="t-caption text-ink-48">Assistant Professor · IEEE SB Counsellor</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 9. CTA — dark tile */}
      <section className="tile tile-dark-3 on-dark text-center">
        <div className="mx-auto max-w-[760px]" data-reveal>
          <h2 className="t-hero">Ready to engineer the future?</h2>
          <p className="t-body mx-auto mt-5 max-w-[560px] text-body-muted">
            Join IEEE today and gain access to unparalleled resources, global networking, and opportunities to lead.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Become a Member Now</a>
            <Link to="/contact" className="btn-secondary">Contact us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
