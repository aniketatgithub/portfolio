"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

/** Wrap metric tokens (18%, 10k+, 42%…) in an amber highlight for scannability. */
function withMetricHighlights(text: string) {
  const parts = text.split(/(\d[\d,]*k\+|\d[\d,]*%)/g);
  return parts.map((part, i) =>
    /^\d[\d,]*k\+$|^\d[\d,]*%$/.test(part) ? (
      <span key={i} className="font-semibold text-amber-300">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function Plus({ open }: { open: boolean }) {
  return (
    <span
      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
        open
          ? "rotate-45 border-amber-400/60 bg-amber-400/10"
          : "border-white/15 group-hover:border-white/30"
      }`}
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M7 1v12M1 7h12"
          stroke={open ? "#fcd34d" : "#a1a1aa"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Experience() {
  // Current role starts open — it's what a visitor looks for first.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
      <div className="mb-8 sm:mb-12 flex items-end justify-between">
        <div>
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
        <Reveal delay={0.15} className="hidden sm:block">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            {experience.length} roles · 2022 — now
          </p>
        </Reveal>
      </div>

      <div>
        {experience.map((job, i) => {
          const open = openIndex === i;
          return (
            <Reveal key={job.company} delay={0.03}>
              <div className="border-t border-white/10 last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="group flex w-full items-center gap-4 sm:gap-6 py-6 sm:py-7 text-left transition-colors duration-300 hover:bg-white/[0.02] px-1 sm:px-2 -mx-1 sm:-mx-2 rounded-lg"
                >
                  <span className="font-mono text-xs text-zinc-600 w-7 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="flex items-center gap-3 flex-wrap">
                      <span
                        className={`font-display text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                          open ? "text-amber-200" : "text-zinc-100 group-hover:text-white"
                        }`}
                      >
                        {job.company}
                      </span>
                      {job.current && (
                        <span className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-amber-300">
                          <span className="h-1 w-1 rounded-full bg-amber-400" />
                          Current
                        </span>
                      )}
                    </span>
                    <span className="mt-1.5 block text-[13px] sm:text-sm text-zinc-500">
                      <span className="text-zinc-300">{job.role}</span>
                      <span className="mx-2 text-zinc-700">·</span>
                      {job.dates}
                      <span className="mx-2 text-zinc-700">·</span>
                      {job.type}
                    </span>
                  </span>
                  <Plus open={open} />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                      className="overflow-hidden"
                    >
                      <div className="pl-11 sm:pl-13 pr-1 sm:pr-14 pb-8 sm:pb-10">
                        <p className="max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
                          {job.points[0]}
                        </p>
                        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-400 sm:text-base">
                          {withMetricHighlights(job.points[1])}
                        </p>
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
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
