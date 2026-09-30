"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Words, Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-28 md:py-44">
      <div
        className="absolute left-1/2 top-1/2 h-[480px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.07] blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-amber-400">
            06 · Open to SDE2 roles
          </p>
        </Reveal>
        <Words
          as="h2"
          text="Let's talk."
          className="font-display text-[clamp(4.5rem,17vw,15rem)] font-semibold leading-[0.9] tracking-tight text-zinc-50"
          stagger={0.09}
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-md font-display text-xl italic text-zinc-400">
            Have a role, a question, or just want to say hi — my inbox is open.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex justify-center">
            <Magnetic strength={0.35}>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-10 py-5 font-display text-xl font-semibold text-black transition-colors hover:bg-amber-300 md:text-2xl"
              >
                {profile.email}
                <ArrowUpRight
                  size={22}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Magnetic>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm uppercase tracking-[0.18em] text-zinc-500">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-amber-300"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-amber-300"
            >
              LinkedIn
            </a>
            <a href="/resume.pdf" className="transition-colors hover:text-amber-300">
              Résumé
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 text-xs uppercase tracking-[0.16em] text-zinc-600 md:px-10">
        <p>© 2026 Aniket Tikariha</p>
        <p className="hidden md:inline">Designed & built by me</p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-amber-300"
          aria-label="Back to top"
        >
          Top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
