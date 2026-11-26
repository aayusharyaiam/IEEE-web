import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';
import { BtnArrow, SectionHead } from './Reveal';
import { featuredProject as p } from '../data/projects';

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('');

/**
 * Home-page spotlight for a student project: the work in a browser frame on
 * one side, the story, author and key facts on the other.
 */
const ProjectSpotlight = ({ index }) => (
  <section className="section border-t border-rule" aria-labelledby="project-spotlight-title">
    <div className="wrap">
      <SectionHead
        index={index}
        label="Student project · EEE 2026"
        title={<>Auditing how our campus uses <em>energy.</em></>}
      />

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        {/* Story */}
        <div className="order-2 lg:order-1">
          <p className="label" id="project-spotlight-title" data-reveal>{p.thesis}</p>
          <p className="lede mt-5" data-reveal>{p.summary}</p>

          {/* Author */}
          <figure className="card mt-8 flex items-center gap-4 p-5" data-reveal>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-copper-soft font-display text-[22px] italic text-copper" aria-hidden="true">
              {initials(p.author.name)}
            </span>
            <figcaption className="min-w-0">
              <p className="label !text-[10px]">Built by</p>
              <p className="font-display text-[22px] leading-tight">{p.author.name}</p>
              <p className="small mt-0.5 text-ink-2">{p.author.programme}</p>
              <p className="small text-ink-3">{p.author.year}</p>
            </figcaption>
          </figure>
          <p className="small mt-3 text-ink-3" data-reveal>
            Supervised by {p.supervisors.join(' and ')}.
          </p>

          {/* Facts */}
          <dl className="mt-8 grid grid-cols-3 border-y border-rule" data-stagger>
            {p.facts.map((f, i) => (
              <div key={f.label} className={`flex flex-col-reverse py-5 ${i > 0 ? 'border-l border-rule pl-4' : ''}`}>
                <dt className="label mt-2 !text-[10px] !leading-snug">{f.label}</dt>
                <dd className="font-display text-[34px] leading-none tracking-tight">
                  <span data-count={f.value}>{f.value}</span>
                  {f.unit && <span className="ml-1 font-sans text-[13px] tracking-normal text-ink-3">{f.unit}</span>}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3" data-reveal>
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Open the dashboard <BtnArrow />
            </a>
            <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              View source
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Built with" data-reveal>
            {p.stack.map((s) => <li key={s} className="tag !py-1 !text-[10px]">{s}</li>)}
          </ul>
        </div>

        {/* Work, in a browser frame */}
        <a
          href={p.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group order-1 block lg:order-2 lg:sticky lg:top-28"
          aria-label={`Open ${p.title} (opens in a new tab)`}
        >
          <div className="ticks">
            <div
              className="overflow-hidden rounded-[16px] border border-rule bg-card shadow-[0_40px_80px_-48px_rgba(21,23,28,0.5)] transition-[transform,box-shadow] duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-1.5 group-hover:shadow-[0_50px_90px_-44px_rgba(21,23,28,0.55)]"
              data-reveal="clip"
            >
              <div className="flex items-center gap-3 border-b border-rule bg-paper-2/70 px-4 py-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15 transition-colors duration-300 group-hover:bg-[#ec6a5e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15 transition-colors delay-75 duration-300 group-hover:bg-[#f4bf4f]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15 transition-colors delay-150 duration-300 group-hover:bg-[#61c554]" />
                </span>
                <span className="mx-auto max-w-[70%] truncate rounded-full bg-card px-4 py-1 font-mono text-[11px] text-ink-3">
                  {p.liveUrl.replace('https://', '')}
                </span>
                <ArrowUpRight size={15} strokeWidth={1.75} className="text-ink-3 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper" aria-hidden="true" />
              </div>
              <div className="zoom-frame aspect-[1800/942]">
                <ImageWithSkeleton src={p.image} alt={p.imageAlt} className="h-full w-full object-cover object-top" loading="lazy" width="1800" height="942" />
              </div>
            </div>
          </div>
          <p className="label mt-4 flex items-center gap-2">
            <span className="pulse !bg-[#2f7a5f]" aria-hidden="true" /> Live · public research dashboard
          </p>
        </a>
      </div>
    </div>
  </section>
);

export default ProjectSpotlight;
