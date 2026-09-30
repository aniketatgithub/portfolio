import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-28 md:py-40">
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.07] blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-sm text-amber-400">06 · Contact</p>
          <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight text-zinc-50 md:text-7xl">
            Let&apos;s build something{" "}
            <span className="italic text-amber-300">reliable</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            I&apos;m currently open to SDE2 opportunities. Whether you have a
            role, a question, or just want to say hi — my inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-amber-300"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-zinc-200 transition-all hover:border-amber-400/60 hover:text-amber-300"
            >
              Download résumé <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-amber-300"
            >
              <Github size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors hover:text-amber-300"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-zinc-600 md:flex-row">
        <p>© 2026 Aniket Tikariha · Sunnyvale, CA</p>
        <p className="font-mono text-xs">
          Designed & built by me · Next.js
        </p>
      </div>
    </footer>
  );
}
