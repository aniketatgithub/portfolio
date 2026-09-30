"use client";

import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";

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
            <article className="border-t border-white/10 py-8 sm:py-10 last:border-b">
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <span className="font-mono text-xs text-zinc-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                  {job.company}
                </h3>
                {job.current && (
                  <span
                    className="inline-block h-2 w-2 rounded-full bg-amber-400"
                    aria-label="current role"
                  />
                )}
                <div className="ml-auto text-right">
                  <p className="text-sm text-zinc-200">{job.role}</p>
                  <p className="mt-0.5 font-mono text-[11px] text-zinc-500">
                    {job.dates} · {job.type}
                  </p>
                </div>
              </div>

              <div className="mt-4 max-w-2xl space-y-2.5">
                {job.points.map((p) => (
                  <p key={p} className="text-[15px] leading-relaxed text-zinc-400 sm:text-base">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-500"
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
