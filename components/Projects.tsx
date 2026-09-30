import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects, profile } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          title="Projects"
          blurb="A mix of shipped side projects and deep academic builds — all AI-flavored lately."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-amber-400/30 md:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-400/25">
                    {p.kind}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    {p.dates}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-zinc-50">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-zinc-400">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(p.live || p.repo) && (
                  <div className="mt-6 flex gap-4 border-t border-white/10 pt-5">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-300 hover:text-amber-200"
                      >
                        Live site <ArrowUpRight size={15} />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-200"
                      >
                        <Github size={15} /> Source
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-amber-300"
          >
            <Github size={16} /> More on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
