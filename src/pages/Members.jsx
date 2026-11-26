import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import MemberCard from '../components/MemberCard';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import SEO from '../components/SEO';
import { SectionHead, SplitText } from '../components/Reveal';
import useReveal from '../hooks/useReveal';
import { committee, currentTerm, facultyAdvisor, pastCommittees } from '../data/committee';

/** One alumni term as a collapsible panel; content stays mounted so it animates open. */
const AlumniGroup = ({ term, members, defaultOpen, index }) => {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `alumni-${term.replace(/[^0-9]/g, '')}`;

  return (
    <div className="border-b border-rule" data-reveal>
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-center gap-6 py-7 text-left"
        >
          <span className="label label-index w-10 shrink-0">[{String(index + 1).padStart(2, '0')}]</span>
          <span className={`display-md flex-1 transition-[color,transform] duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2 ${open ? 'text-copper italic' : ''}`}>
            {term}
          </span>
          <span className="label hidden sm:block">{members.length} members</span>
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[var(--ease-out-expo)] ${
              open ? 'rotate-45 border-ink bg-ink text-paper' : 'border-rule group-hover:border-ink'
            }`}
            aria-hidden="true"
          >
            <Plus size={18} strokeWidth={1.5} />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-700 ease-[var(--ease-out-expo)] ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        inert={!open || undefined}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 gap-3 pb-10 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {members.map((member) => (
              <MemberCard key={`${term}-${member.name}`} {...member} compact />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Members = () => {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      <SEO path="/members" />

      {/* Hero + current committee */}
      <section className="section !pt-16 md:!pt-24">
        <div className="wrap">
          <p className="label" data-reveal><span className="label-index">[{currentTerm}]</span> Executive Committee</p>
          <SplitText as="h1" className="display-xl mt-6 max-w-[14ch]">
            The people behind <em>the branch.</em>
          </SplitText>
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="lede max-w-[52ch]" data-reveal data-reveal-delay="0.2">
              Meet the dedicated team at IEEE Student Branch BIT Patna. Engineering solutions, fostering community, and leading the digital frontier.
            </p>
            <p className="label" data-reveal data-reveal-delay="0.3">Office order IEEE/13/10/26</p>
          </div>
          <div className="rule mt-12" data-rule="" aria-hidden="true" />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" data-stagger>
            {committee.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Faculty advisor */}
      <section className="section bg-paper-2/60 border-y border-rule">
        <div className="wrap grid items-center gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-20">
          <div className="ticks mx-auto w-full max-w-[340px]">
            <div className="aspect-[4/5] overflow-hidden rounded-[14px]" data-reveal="clip">
              <ImageWithSkeleton src={facultyAdvisor.image} alt={`${facultyAdvisor.name}, ${facultyAdvisor.title}`} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div>
            <p className="label" data-reveal><span className="label-index">[01]</span> Faculty Advisor</p>
            <SplitText as="h2" className="display-lg mt-5">{facultyAdvisor.name}</SplitText>
            <p className="lede mt-5" data-reveal>
              {facultyAdvisor.role}
              <br />
              <span className="accent font-display">{facultyAdvisor.title}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Alumni — most recent term first and open by default */}
      <section className="section">
        <div className="wrap">
          <SectionHead index="02" label="Alumni" title={<>Those who laid <em>the foundation.</em></>}>
            <p className="body max-w-[52ch]" data-reveal>
              Former executive committee members who laid the foundation of our student branch.
            </p>
          </SectionHead>
          <div className="mt-12 border-t border-rule">
            {pastCommittees.map((group, i) => (
              <AlumniGroup key={group.term} index={i} term={group.term} members={group.members} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
