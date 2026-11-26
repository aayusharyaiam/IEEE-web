import React from 'react';

const Bar = ({ className = '' }) => <div className={`skeleton rounded-full ${className}`} />;

/**
 * Placeholder shown while a page chunk loads: the shape of a page header
 * (label, two-line headline, lede) above a three-card grid.
 */
export default function PageSkeleton() {
  return (
    <div className="section" role="status" aria-live="polite" aria-label="Loading page">
      <div className="wrap">
        <div className="flex items-center gap-4">
          <Bar className="h-3 w-28" />
          <div className="h-px flex-1 bg-rule" />
        </div>
        <Bar className="mt-8 h-14 w-[78%] max-w-[720px] !rounded-xl" />
        <Bar className="mt-3 h-14 w-[52%] max-w-[480px] !rounded-xl" />
        <Bar className="mt-8 h-4 w-[90%] max-w-[560px]" />
        <Bar className="mt-3 h-4 w-[70%] max-w-[440px]" />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="card overflow-hidden">
              <div className="skeleton aspect-[4/3]" />
              <div className="space-y-3 p-6">
                <Bar className="h-3 w-20" />
                <Bar className="h-6 w-3/4 !rounded-lg" />
                <Bar className="h-3 w-full" />
                <Bar className="h-3 w-5/6" />
              </div>
            </div>
          ))}
        </div>
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
}
