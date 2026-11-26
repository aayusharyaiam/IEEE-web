import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
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
 * Portrait card: name and role sit on a soft gradient over the photo.
 * Hover lifts the card, zooms the photo and slides the contact links up.
 * Members without a photo get an italic serif monogram.
 * `compact` is the smaller alumni variant without contact links.
 */
const MemberCard = ({ name, role, image, linkedin, email, compact = false }) => {
  const linkedinUrl = linkedin || BRANCH_LINKEDIN;
  const emailAddress = email || BRANCH_EMAIL;
  const chip = image ? 'bg-paper/15 hover:bg-paper hover:text-ink' : 'bg-ink/5 hover:bg-ink hover:text-paper';

  return (
    <article className="group card card-hover overflow-hidden">
      <div className="zoom-frame relative aspect-[4/5] bg-paper-2">
        {image ? (
          <ImageWithSkeleton src={image} alt={`${name}, ${role}`} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="grid-paper flex h-full w-full items-center justify-center pb-16" aria-hidden="true">
            <span className={`font-display italic font-light text-ink/20 transition-colors duration-500 group-hover:text-copper ${compact ? 'text-[56px]' : 'text-[80px]'}`}>
              {initials(name)}
            </span>
          </div>
        )}

        <div
          className={`absolute inset-x-0 bottom-0 ${image ? 'bg-gradient-to-t from-night/85 via-night/40 to-transparent text-paper' : 'text-ink'} ${compact ? 'p-4 pt-12' : 'p-5 pt-16'}`}
        >
          <p className={`label ${image ? '!text-paper/70' : ''} ${compact ? '!text-[10px]' : ''}`}>{role}</p>
          <h3 className={`mt-1.5 font-display tracking-tight leading-tight ${compact ? 'text-[17px]' : 'text-[22px]'}`}>{name}</h3>

          {!compact && (
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[var(--ease-out-expo)] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="flex gap-2 pt-3">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12px] font-medium backdrop-blur transition-colors ${chip}`}
                    aria-label={`${name} on LinkedIn`}
                  >
                    LinkedIn <ArrowUpRight size={12} strokeWidth={2} />
                  </a>
                  <a
                    href={`mailto:${emailAddress}`}
                    className={`inline-flex items-center rounded-full px-2.5 py-1.5 backdrop-blur transition-colors ${chip}`}
                    aria-label={`Email ${name}`}
                  >
                    <Mail size={13} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default MemberCard;
