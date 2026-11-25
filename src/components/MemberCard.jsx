import React from 'react';
import { ChevronRight } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';
import { BRANCH_EMAIL, BRANCH_LINKEDIN } from '../data/committee';

const initials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

/**
 * Utility card: 18px radius, hairline border, 1:1-ish portrait with an 8px
 * inner radius, name in body-strong, role in caption, text links below.
 * `dark` switches to the near-black tile variant used for past committees.
 */
const MemberCard = ({ name, role, image, linkedin, email, dark = false, compact = false }) => {
  const linkedinUrl = linkedin || BRANCH_LINKEDIN;
  const emailAddress = email || BRANCH_EMAIL;

  return (
    <article className={`${dark ? 'card-dark on-dark' : 'card'} flex h-full flex-col ${compact ? '!p-4' : ''}`} data-reveal>
      <div className={`aspect-[4/5] overflow-hidden rounded-sm ${dark ? 'bg-tile-3' : 'bg-parchment'}`}>
        {image ? (
          <ImageWithSkeleton src={image} alt={`${name}, ${role}`} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
            <span className={`t-display-lg ${dark ? 'text-white/25' : 'text-ink-48/50'}`}>{initials(name)}</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <p className={`t-caption ${dark ? 'text-body-muted' : 'text-ink-48'}`}>{role}</p>
        <h3 className={`${compact ? 't-caption-strong' : 't-body-strong'} mt-0.5`}>{name}</h3>
        {!compact && (
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-3 t-caption">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="link" aria-label={`${name} on LinkedIn`}>
              LinkedIn <ChevronRight size={12} strokeWidth={2} />
            </a>
            <a href={`mailto:${emailAddress}`} className="link" aria-label={`Email ${name}`}>
              Email <ChevronRight size={12} strokeWidth={2} />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default MemberCard;
