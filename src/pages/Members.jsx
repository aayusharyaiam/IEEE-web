import React from 'react';
import MemberCard from '../components/MemberCard';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';
import { committee, currentTerm, facultyAdvisor, pastCommittees } from '../data/committee';

const Members = () => {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      <SEO
        title="Executive Committee"
        description={`Meet the ${currentTerm} executive committee, faculty advisor and alumni of IEEE Student Branch BIT Patna.`}
        path="/members"
      />

      {/* Hero */}
      <section className="tile tile-light text-center">
        <div className="mx-auto max-w-[980px]">
          <p className="t-tagline text-ink-48" data-reveal>Executive Committee {currentTerm}</p>
          <h1 className="t-hero mt-3" data-reveal data-reveal-delay="0.05">The people behind the branch.</h1>
          <p className="t-body mx-auto mt-5 max-w-[640px] text-ink-80" data-reveal data-reveal-delay="0.1">
            Meet the dedicated team at IEEE Student Branch BIT Patna. Engineering solutions, fostering community, and leading the digital frontier.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-2 gap-4 text-left sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {committee.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* Faculty advisor */}
      <section className="tile tile-parchment">
        <div className="mx-auto grid max-w-[980px] items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
          <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-lg aspect-[4/5]" data-reveal>
            <ImageWithSkeleton src={facultyAdvisor.image} alt={`${facultyAdvisor.name}, ${facultyAdvisor.title}`} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="text-center md:text-left" data-reveal data-reveal-delay="0.1">
            <p className="eyebrow">Faculty Advisor</p>
            <h2 className="t-display-lg mt-2">{facultyAdvisor.name}</h2>
            <p className="t-lead-airy mt-3 text-ink-80">
              {facultyAdvisor.role}
              <br />
              {facultyAdvisor.title}
            </p>
          </div>
        </div>
      </section>

      {/* Past committees */}
      <section className="tile tile-dark on-dark">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="t-display-lg" data-reveal>Alumni</h2>
            <p className="t-body mx-auto mt-4 max-w-[560px] text-body-muted" data-reveal>
              Former executive committee members who laid the foundation of our student branch.
            </p>
          </div>

          {pastCommittees.map((group) => (
            <div key={group.term} className="mt-14">
              <h3 className="t-tagline mb-5 text-white" data-reveal>{group.term}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
                {group.members.map((member) => (
                  <MemberCard key={`${group.term}-${member.name}`} {...member} dark compact />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Members;
