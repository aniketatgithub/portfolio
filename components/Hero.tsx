"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-indigo-600/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300"
        >
          <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
          Open to SDE2 opportunities
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-400">{profile.location}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mb-4 text-lg text-amber-300/90"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.14, ease }}
          className="font-display text-6xl font-semibold leading-[1.02] tracking-tight text-zinc-50 md:text-8xl"
        >
          Aniket Tikariha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease }}
          className="mt-6 font-display text-2xl text-zinc-300 md:text-3xl"
        >
          Production Engineer <span className="text-zinc-600">@</span>{" "}
          <span className="text-amber-300">Meta</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-amber-300"
          >
            View experience
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-amber-400/60 hover:text-amber-300"
          >
            <Download size={16} />
            Download résumé
          </a>
          <div className="ml-1 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-amber-300"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors hover:text-amber-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-zinc-500 transition-colors hover:text-amber-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* stats */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.46, ease }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3"
        >
          {[
            ["3+", "years shipping production software"],
            ["4", "teams — Meta · NetApp · Viasat · Cheeni"],
            ["MS '25", "Software Engineering, SJSU"],
          ].map(([big, small]) => (
            <div key={small} className="bg-[#0e0e10] px-6 py-5">
              <dt className="font-display text-3xl font-semibold text-amber-300">
                {big}
              </dt>
              <dd className="mt-1 text-sm text-zinc-400">{small}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
