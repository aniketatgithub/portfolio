"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { CountUp } from "./CountUp";
import { Reveal, Words } from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function Experience() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-24 sm:py-36">
      <div className="mb-12 sm:mb-16 flex items-end justify-between">
        <div>
          <Reveal>
            <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-amber-400">
              <span className="inline-block h-px w-8 bg-amber-400" />
              02
            </p>
          </Reveal>
          <Words
            as="h2"
            text="Work"
            className="font-display text-5xl font-semibold tracking-tight text-zinc-50 md:text-7xl"
            stagger={0.06}
          />
        </div>
        <Reveal delay={0.15} className="hidden sm:block">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Numbers first</p>
        </Reveal>
      </div>

      <div>
        {experience.map((job, i) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease, delay: 0.05 }}
            className="group border-t border-white/10 py-10 sm:py-14 last:border-b"
          >
            {/* Header row */}
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span className="font-mono text-xs text-zinc-600 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-black uppercase leading-none tracking-tight text-[clamp(2.2rem,7vw,4.5rem)] text-zinc-50 transition-colors duration-300 group-hover:text-amber-300">
                {job.company}
              </h3>
              {job.current && (
                <span className="relative flex h-2.5 w-2.5 items-center" aria-label="current">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                </span>
              )}
              <div className="ml-auto text-right">
                <p className="text-sm sm:text-base text-zinc-200">{job.role}</p>
                <p className="font-mono text-[11px] sm:text-xs text-zinc-500 mt-1">
                  {job.dates} · {job.type}
                </p>
              </div>
            </div>

            {/* Voice line */}
            <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
              {job.line}
            </p>

            {/* Metric strip: giant count-up numbers */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-6 sm:gap-10 max-w-3xl">
              {job.metrics.map((m, j) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease, delay: j * 0.12 }}
                >
                  <p className="font-display font-black leading-none tracking-tight text-[clamp(2.6rem,8vw,5rem)] text-amber-300">
                    <CountUp value={m.value} prefix={m.prefix ?? ""} suffix={m.suffix ?? ""} />
                  </p>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-500 leading-snug max-w-[16rem]">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-3.5 py-1.5 text-[11px] sm:text-xs text-zinc-400 transition-colors duration-300 group-hover:border-white/25"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
