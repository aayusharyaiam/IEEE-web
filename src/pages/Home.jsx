import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import MemberCard from '../components/MemberCard';
import { BtnArrow, SectionHead, SplitText, Ticker } from '../components/Reveal';
import useReveal from '../hooks/useReveal';
import { committee, currentTerm, facultyAdvisor } from '../data/committee';

const JOIN_URL = 'https://www.ieee.org/membership/join';

const stats = [
  { value: 150, suffix: '+', label: 'Active members' },
  { value: 45, suffix: '+', label: 'Events every year' },
  { value: 12, suffix: '+', label: 'Projects completed' },
  { value: 20, suffix: '+', label: 'Global awards' },
];

const updates = [
  { label: 'Committee', text: `The ${currentTerm} executive committee has been announced` },
  { label: 'Abhivyakti', text: 'Abhivyakti 2026 concluded — thank you for three incredible days' },
  { label: 'Membership', text: 'IEEE student membership is open — join the global community' },
  { label: 'Workshops', text: 'PCB design and Linux + ML workshops, March 2026' },
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

  return (
    <div ref={pageRef}>
      <SEO path="/" />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_40%,transparent)]" aria-hidden="true" />
        <div className="wrap relative grid items-end gap-14 pt-14 pb-16 md:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-24">
          <div>
            <span className="tag" data-reveal>
              <span className="pulse" aria-hidden="true" /> Since 23 Nov 2008 · BIT Mesra, Patna Campus
            </span>
            <SplitText as="h1" className="display-xl mt-8">
              IEEE Student Branch <em>BIT Patna</em>
            </SplitText>
            <p className="lede mt-7 max-w-[46ch]" data-reveal data-reveal-delay="0.3">
              Innovate. Educate. Empower. A student community for technology, leadership and professional growth.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3" data-reveal data-reveal-delay="0.4">
              <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Explore membership <BtnArrow />
              </a>
              <Link to="/events" className="btn btn-ghost">View events</Link>
            </div>
          </div>

          <div className="relative">
            <figure className="ticks overflow-hidden rounded-[18px]" data-reveal="clip">
              <div className="aspect-[4/5] overflow-hidden rounded-[18px] sm:aspect-[5/4] lg:aspect-square">
                <div className="h-[115%] -mt-[7.5%]" data-parallax="0.12">
                  <ImageWithSkeleton src="/gallery/home3.jpeg" alt="IEEE BIT Patna members at a branch event" className="h-full w-full object-cover" fetchPriority="high" />
                </div>
              </div>
            </figure>
            {/* Floating info card */}
            <dl
              className="absolute -bottom-8 left-4 right-4 grid grid-cols-3 divide-x divide-rule rounded-2xl border border-rule bg-card/95 p-4 shadow-[0_24px_50px_-30px_rgba(21,23,28,0.45)] backdrop-blur sm:left-auto sm:right-6 sm:w-[400px] lg:-left-10 lg:right-auto"
              data-reveal
              data-reveal-delay="0.6"
            >
              {[
                ['Founded', '2008'],
                ['Members', '150+'],
                ['Term', currentTerm.replace(/^20(\d\d)–20(\d\d)$/, '’$1–’$2')],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col-reverse px-3 first:pl-1">
                  <dt className="label !text-[10px]">{k}</dt>
                  <dd className="whitespace-nowrap font-display text-[24px] leading-tight">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Live ticker ──────────────────────────────────── */}
      <div className="mt-8 border-y border-rule bg-card py-4 lg:mt-0">
        <Ticker items={updates} />
      </div>

      {/* ── About ────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <SectionHead index="01" label="About the branch" title={<>A canvas for bright <em>young minds.</em></>} />
          <div className="mt-14 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <p className="lede !text-[clamp(18px,1.7vw,22px)] !leading-[1.65] text-ink" data-reveal>
              A canvas under which bright young minds, with diverse interests, get a common dream to take on the world with their technical skills, is how we would define the BIT PATNA IEEE Student Branch. The IEEE, Inc., USA operates through student branches spread all across the world. IEEE Student Chapter, BIT Patna was formed on 23 November 2008 with active cooperation from students and the effective guidance of faculty advisors. The chapter provides a local forum for members to meet and exchange views on technical, educational and professional interests.
            </p>
            <dl className="grid grid-cols-2 self-start border-l border-t border-rule" data-stagger>
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse border-b border-r border-rule p-6">
                  <dt className="label mt-2">{s.label}</dt>
                  <dd className="font-display text-[clamp(40px,4.5vw,56px)] leading-none tracking-tight" data-count={s.value} data-suffix={s.suffix}>
                    {s.value}{s.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Vision · Mission · IEEE ──────────────────────── */}
      <section className="section-tight pt-0">
        <div className="wrap grid gap-4 md:grid-cols-3" data-stagger>
          <article className="group flex min-h-[360px] flex-col rounded-[18px] bg-blue p-8 text-paper transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5">
            <div className="flex items-center justify-between">
              <span className="label !text-paper/60">Vision</span>
              <span className="label !text-paper/60">01</span>
            </div>
            <h3 className="mt-auto font-display text-[30px] leading-[1.1] tracking-tight">Technology for global <em className="font-light">prosperity.</em></h3>
            <p className="mt-4 small leading-relaxed text-paper/80">
              To promote global prosperity by stimulating technology innovation, enabling members' careers, and promoting the global community. IEEE is, and remains, firmly committed to diversity, equity, and inclusion.
            </p>
          </article>
          <article className="group card flex min-h-[360px] flex-col !rounded-[18px] p-8 transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5">
            <div className="flex items-center justify-between">
              <span className="label">Mission</span>
              <span className="label label-index">02</span>
            </div>
            <h3 className="mt-auto font-display text-[30px] leading-[1.1] tracking-tight">Knowledge for <em className="font-light text-copper">humanity.</em></h3>
            <p className="mt-4 small leading-relaxed text-ink-2">
              The IEEE encourages the engineering process of producing, developing, integrating, sharing, and using knowledge in electro and information technologies and sciences for the benefit of humanity and the profession.
            </p>
          </article>
          <a
            href="https://www.ieee.org/about"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[360px] flex-col rounded-[18px] bg-copper-soft p-8 transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5"
          >
            <div className="flex items-center justify-between">
              <span className="label">About IEEE</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </span>
            </div>
            <h3 className="mt-auto font-display text-[30px] leading-[1.1] tracking-tight">The world's largest technical <em className="font-light text-copper">community.</em></h3>
            <p className="mt-4 small leading-relaxed text-ink-2">
              IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 4,23,000 members in over 160 countries, and its highly cited publications, conferences, technology standards, and professional and educational activities.
            </p>
          </a>
        </div>
      </section>

      {/* ── New committee ────────────────────────────────── */}
      <section className="section border-t border-rule">
        <div className="wrap">
          <SectionHead index="02" label={`Executive committee ${currentTerm}`} title={<>Meet the <em>new</em> team.</>}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <p className="body max-w-[52ch]" data-reveal>
                Appointed by the Branch Counsellor, {facultyAdvisor.name}, to lead the branch through the {currentTerm} session.
              </p>
              <Link to="/members" className="link-draw" data-reveal>
                Full committee <ArrowRight size={16} strokeWidth={1.75} />
              </Link>
            </div>
          </SectionHead>
          <div className="no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-5" data-stagger>
            {committee.map((m) => (
              <div key={m.name} className="w-[68%] shrink-0 snap-start sm:w-[42%] md:w-auto">
                <MemberCard {...m} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Events ───────────────────────────────────────── */}
      <section className="section bg-paper-2/60">
        <div className="wrap">
          <SectionHead index="03" label="Latest happenings" title={<>Built, tested, <em>shared.</em></>}>
            <Link to="/events" className="link-draw justify-self-start" data-reveal>
              All events <ArrowRight size={16} strokeWidth={1.75} />
            </Link>
          </SectionHead>
          <div className="mt-12 grid gap-5 md:grid-cols-3" data-stagger>
            {events.map((ev, i) => (
              <article key={ev.title} className="group card card-hover flex flex-col overflow-hidden">
                <div className="zoom-frame relative aspect-[4/3]">
                  <ImageWithSkeleton src={ev.image} alt={ev.title} className="h-full w-full object-cover" loading="lazy" />
                  <span className="tag absolute left-4 top-4 !bg-paper/90 backdrop-blur">{ev.tag}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="label"><span className="label-index">[0{i + 1}]</span> {ev.meta}</p>
                  <h3 className="display-sm mt-3">{ev.title}</h3>
                  <p className="body mt-3 small">{ev.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <SectionHead index="04" label="Visual journey" title={<>Life at <em>IEEE BITP.</em></>} />
          <div className="mt-12 grid grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
            {[
              { src: '/gallery/poster.jpeg', alt: 'Annual Technical Summit', cls: 'col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto' },
              { src: '/gallery/home2.jpeg', alt: 'Students at an IEEE BIT Patna session', cls: 'aspect-square md:aspect-auto' },
              { src: '/gallery/home1.jpeg', alt: 'IEEE BIT Patna event', cls: 'aspect-square md:aspect-auto' },
              { src: '/gallery/home3.jpeg', alt: 'Student Membership Drive', cls: 'col-span-2 aspect-[2/1] md:aspect-auto' },
            ].map((img, i) => (
              <figure key={img.src + i} className={`group zoom-frame overflow-hidden rounded-[14px] ${img.cls}`} data-reveal="clip" data-reveal-delay={i * 0.08}>
                <ImageWithSkeleton src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
          <div className="mt-10 flex justify-center" data-reveal>
            <Link to="/gallery" className="btn btn-ghost">Open the gallery <BtnArrow /></Link>
          </div>
        </div>
      </section>

      {/* ── Counsellor's message ─────────────────────────── */}
      <section className="section border-t border-rule">
        <div className="wrap grid items-start gap-14 lg:grid-cols-[320px_1fr] lg:gap-20">
          <figure data-reveal>
            <div className="ticks">
              <div className="aspect-[4/5] overflow-hidden rounded-[14px]" data-reveal="clip">
                <ImageWithSkeleton src={facultyAdvisor.image} alt={`${facultyAdvisor.name}, faculty advisor of IEEE BIT Patna`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <figcaption className="mt-5">
              <p className="font-display text-[22px] leading-tight">{facultyAdvisor.name}</p>
              <p className="label mt-1.5">Assistant Professor · IEEE SB Counsellor</p>
            </figcaption>
          </figure>
          <div>
            <p className="label" data-reveal><span className="label-index">[05]</span> Message from the Counsellor</p>
            <blockquote className="mt-8">
              <SplitText as="p" className="display-md !leading-[1.25]">
                <span className="text-copper">“</span>As the branch counsellor of IEEE Student Branch BIT PATNA, I welcome you to <em>IEEE family.</em>
              </SplitText>
              <div className="mt-8 grid gap-5 md:grid-cols-2" data-stagger>
                <p className="body">
                  IEEE is the world's largest technical community dedicated to advancing technology for the benefit of mankind. IEEE Student Branch promise to promote its preeminence among students in associated fields and ensure a smooth transition into an able and qualified engineer of tomorrow.
                </p>
                <p className="body">
                  The student branch of BIT PATNA aims to organize various events that helps to enhance the overall growth and development of our students and we shall continue to work for the same. I wish all the IEEE members great success for their future endeavors.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="px-3 pb-3 md:px-4 md:pb-4">
        <div className="relative overflow-hidden rounded-[24px] bg-night text-paper">
          <div className="grid-paper pointer-events-none absolute inset-0 opacity-[0.08] invert" aria-hidden="true" />
          <div className="wrap relative py-24 text-center md:py-32">
            <p className="label !text-copper" data-reveal>Join the network</p>
            <SplitText as="h2" className="display-lg mx-auto mt-6 max-w-[16ch] !text-paper">
              Ready to engineer the <em>future?</em>
            </SplitText>
            <p className="lede mx-auto mt-6 max-w-[48ch] !text-paper/70" data-reveal>
              Join IEEE today and gain access to unparalleled resources, global networking, and opportunities to lead.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3" data-reveal>
              <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                Become a member <BtnArrow />
              </a>
              <Link to="/contact" className="btn btn-outline-light">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
