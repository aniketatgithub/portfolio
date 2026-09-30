"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { profile } from "@/lib/data";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function Chars({
  text,
  ready,
  baseDelay,
  className,
}: {
  text: string;
  ready: boolean;
  baseDelay: number;
  className?: string;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((c, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden pb-[0.06em] -mb-[0.06em] align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "112%", rotate: 4 }}
            animate={ready ? { y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.85, delay: baseDelay + i * 0.028, ease }}
          >
            {c}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero({ ready }: { ready: boolean }) {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      {/* backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden />
      <motion.div
        className="absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[140px]"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.4 }}
      />

      {/* meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 pt-24 text-[11px] uppercase tracking-[0.22em] text-zinc-500 md:px-10 md:text-xs"
      >
        <span>Folio © 2026</span>
        <span className="hidden sm:inline">{profile.location}</span>
        <span className="inline-flex items-center gap-2 text-zinc-300">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Open to SDE2
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-10 pt-8 md:px-10 md:pb-14">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-300/90 md:mb-6 md:text-base"
        >
          {profile.role} <span className="text-zinc-600">@</span> {profile.company}
        </motion.p>

        <h1 className="font-display font-semibold leading-[0.88] tracking-[-0.02em]">
          <Chars
            text="ANIKET"
            ready={ready}
            baseDelay={0.25}
            className="block text-[clamp(4rem,15.5vw,13.5rem)] text-zinc-50"
          />
          <Chars
            text="TIKARIHA"
            ready={ready}
            baseDelay={0.42}
            className="block text-[clamp(4rem,15.5vw,13.5rem)] italic text-amber-300"
          />
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.95, ease }}
            className="max-w-md font-display text-xl italic leading-snug text-zinc-300 md:text-2xl"
          >
            “{profile.line}”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.05, ease }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.3}>
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-amber-300"
              >
                See the work
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-zinc-200 transition-colors hover:border-amber-400/70 hover:text-amber-300"
              >
                Résumé
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* stats strip */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-6 md:mt-16"
        >
          {[
            ["3+", "yrs shipping prod"],
            ["04", "teams, zero-to-one to big tech"],
            ["'25", "MS Software Eng, SJSU"],
          ].map(([big, small]) => (
            <div key={small}>
              <dt className="font-display text-3xl font-semibold text-zinc-50 md:text-4xl">
                {big}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500 md:text-[13px]">
                {small}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
