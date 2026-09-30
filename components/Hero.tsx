"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44">
        <Reveal>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium uppercase tracking-[0.18em] text-zinc-500">
            <span className="text-amber-300/90">{profile.role}</span>
            <span className="text-zinc-700">@</span>
            <span>{profile.company}</span>
            <span className="text-zinc-700">·</span>
            <span>{profile.location}</span>
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 font-display text-[clamp(2.9rem,7vw,5.75rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-zinc-50">
            Aniket Tikariha
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            {profile.line} I work on the systems behind AI-native products —
            distributed services, internal APIs, and the observability that keeps
            them honest.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-amber-300"
            >
              <Mail size={16} />
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-400 hover:text-zinc-50"
            >
              Résumé
              <ArrowUpRight size={16} />
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-100"
              >
                <Github size={19} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-100"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-[13px] font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to SDE2 roles
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-7 md:mt-20">
            {[
              ["3+", "yrs shipping prod"],
              ["04", "teams, zero-to-one to big tech"],
              ["'25", "MS Software Eng, SJSU"],
            ].map(([big, small]) => (
              <div key={small}>
                <dt className="font-display text-3xl font-semibold text-zinc-50 md:text-4xl">
                  {big}
                </dt>
                <dd className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-zinc-500 md:text-xs">
                  {small}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
