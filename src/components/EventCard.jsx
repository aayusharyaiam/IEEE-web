import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const statusLabel = { live: 'Live now', upcoming: 'Upcoming', past: 'Concluded' };

/**
 * Event as a ledger row: index and date on the left, title and copy on the
 * right. On hover the row tints, the title shifts and a copper bar grows in.
 */
const EventCard = ({ title, description, date, status, link, index }) => {
  const body = (
    <>
      <span
        className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-copper transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-y-100"
        aria-hidden="true"
      />
      <div className="flex items-start gap-6 md:block">
        <p className="label label-index">[{String(index + 1).padStart(2, '0')}]</p>
        <div className="md:mt-4">
          {date && <p className="font-display text-[20px] leading-tight">{date}</p>}
          {status && (
            <p className="label mt-2 flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${status === 'past' ? 'bg-ink-3/50' : 'bg-copper'}`} aria-hidden="true" />
              {statusLabel[status] ?? status}
            </p>
          )}
        </div>
      </div>
      <div>
        <h3 className="display-md transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2">{title}</h3>
        <p className="body mt-4 max-w-[62ch] whitespace-pre-line">{description}</p>
      </div>
      <div className="hidden md:flex md:justify-end">
        {link && (
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-rule transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:-rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            <ArrowRight size={18} strokeWidth={1.5} />
          </span>
        )}
      </div>
    </>
  );

  const cls =
    'group relative grid gap-6 border-t border-rule py-10 pl-5 pr-2 transition-colors duration-500 hover:bg-card md:grid-cols-[220px_1fr_64px] md:gap-10 md:py-12 md:pl-8';

  return link ? (
    <Link to={link} className={cls} aria-label={`${title} — view details`}>{body}</Link>
  ) : (
    <article className={cls}>{body}</article>
  );
};

export default EventCard;
