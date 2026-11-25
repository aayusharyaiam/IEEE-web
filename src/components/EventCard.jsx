import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const statusLabel = { live: 'Live now', upcoming: 'Upcoming', past: 'Concluded' };

/** One event as a full-width row inside a tile: copy on one side, a quiet meta column on the other. */
const EventCard = ({ title, description, date, status, link, index }) => (
  <article className="grid gap-6 border-t border-hairline py-10 md:grid-cols-[200px_1fr] md:gap-12" data-reveal>
    <div>
      <p className="t-caption-strong text-ink-48">{String(index + 1).padStart(2, '0')}</p>
      {date && <p className="t-body mt-1">{date}</p>}
      {status && (
        <p className={`t-caption mt-1 ${status === 'live' ? 'text-primary' : 'text-ink-48'}`}>{statusLabel[status] ?? status}</p>
      )}
    </div>
    <div>
      <h3 className="t-display-md !leading-tight">{title}</h3>
      <p className="t-body mt-3 max-w-[640px] text-ink-80 whitespace-pre-line">{description}</p>
      {link && (
        <Link to={link} className="link mt-4">
          View details <ChevronRight size={16} strokeWidth={2} />
        </Link>
      )}
    </div>
  </article>
);

export default EventCard;
