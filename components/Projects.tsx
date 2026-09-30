"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading index="03" title="Selected work" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <article
                data-hover
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 md:p-9"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-amber-500/0 blur-[80px] transition-all duration-500 group-hover:bg-amber-500/15"
                  aria-hidden
                />
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-zinc-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                    {p.kind}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-4xl font-semibold tracking-tight text-zinc-50 transition-colors group-hover:text-amber-200 md:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-400">
                  {p.line}
                </p>
                <div className="mt-auto pt-8">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                    {p.tags.join(" · ")}
                  </p>
                  {(p.live || p.repo) && (
                    <div className="mt-4 flex gap-3">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-5 py-2.5 text-[13px] font-semibold text-black transition-colors hover:bg-amber-300"
                        >
                          Live <ArrowUpRight size={14} />
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-[13px] font-medium text-zinc-300 transition-colors hover:border-amber-400/60 hover:text-amber-300"
                        >
                          Code <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
