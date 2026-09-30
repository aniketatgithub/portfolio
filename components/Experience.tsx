"use client";

import { Fragment } from "react";
import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";

/** Wrap metric tokens (18%, 10k+, 42%…) in an amber highlight for scannability. */
function withMetricHighlights(text: string) {
  const parts = text.split(/(\d[\d,]*k?\+?%)/g);
  return parts.map((part, i) =>
    /^\d[\d,]*k?\+?%$/.test(part) ? (
      <span key={i} className="font-semibold text-amber-300">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export function Experience() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
      <div className="mb-10 sm:mb-14">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-amber-400">
            <span className="inline-block h-px w-8 bg-amber-400" />
            02
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
            Work
          </h2>
        </Reveal>
      </div>

      <div>
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={0.04}>
            <article className="border-t border-white/10 py-9 sm:py-12 last:border-b">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-zinc-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.65rem] font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                  {job.company}
                </h3>
                {job.current && (
                  <span className="flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-amber-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Current
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-zinc-500">
                <span className="font-medium text-zinc-300">{job.role}</span>
                <span className="mx-2 text-zinc-700">·</span>
                {job.dates}
                <span className="mx-2 text-zinc-700">·</span>
                {job.type}
              </p>

              <div className="mt-5 max-w-2xl space-y-3">
                <p className="text-base leading-relaxed text-zinc-200 sm:text-lg">
                  {job.points[0]}
                </p>
                <p className="text-[15px] leading-relaxed text-zinc-400 sm:text-base">
                  {withMetricHighlights(job.points[1])}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/[0.04] px-3.5 py-1.5 text-xs text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
