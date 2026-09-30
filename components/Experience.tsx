"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { experience, type Experience as Job } from "@/lib/data";

function Row({ job, index }: { job: Job; index: string }) {
  const [open, setOpen] = useState(job.current ?? false);

  return (
    <Reveal>
      <div
        className={`group border-t border-white/10 transition-colors last:border-b ${
          open ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"
        }`}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-2 px-2 py-6 text-left md:grid-cols-[64px_1fr_auto_48px] md:items-center md:gap-x-8 md:px-4 md:py-8"
        >
          <span className="font-mono text-xs text-zinc-600 md:text-sm">{index}</span>
          <span>
            <span className="flex flex-wrap items-center gap-3">
              <span
                className={`font-display text-4xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1 md:text-6xl ${
                  open ? "text-amber-300" : "text-zinc-100"
                }`}
              >
                {job.company}
              </span>
              {job.current && (
                <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest text-emerald-300 ring-1 ring-emerald-400/30">
                  Now
                </span>
              )}
            </span>
            <span className="mt-2 block text-sm text-zinc-500 md:text-[15px]">
              {job.role} <span className="text-zinc-700">·</span> {job.summary}
            </span>
          </span>
          <span className="hidden text-right font-mono text-xs text-zinc-500 md:block md:text-[13px]">
            {job.dates}
            <span className="mt-1 block text-zinc-600">{job.type}</span>
          </span>
          <span
            className={`justify-self-end rounded-full border border-white/15 p-2 text-zinc-400 transition-all duration-300 ${
              open ? "rotate-45 border-amber-400/60 text-amber-300" : "group-hover:border-white/40"
            }`}
          >
            <Plus size={16} />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              <div className="grid gap-6 px-2 pb-8 md:grid-cols-[64px_1fr] md:gap-x-8 md:px-4">
                <span />
                <div>
                  <p className="mb-4 font-mono text-xs text-amber-300/90 md:hidden">
                    {job.dates} · {job.type}
                  </p>
                  <ul className="max-w-3xl space-y-2.5">
                    {job.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-zinc-300">
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading index="02" title="Work" />
        <div>
          {experience.map((job, i) => (
            <Row key={job.company} job={job} index={String(i + 1).padStart(2, "0")} />
          ))}
        </div>
      </div>
    </section>
  );
}
