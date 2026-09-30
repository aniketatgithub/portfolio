import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          title="Experience"
          blurb="Four teams, one throughline: taking ambiguous product ideas and turning them into reliable production systems."
        />

        <div className="relative">
          {/* timeline rail */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/60 via-white/10 to-transparent md:left-[9px]"
            aria-hidden
          />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={Math.min(i * 0.06, 0.2)}>
                <article className="relative pl-10 md:pl-14">
                  <span
                    className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 md:h-[19px] md:w-[19px] ${
                      job.current
                        ? "border-amber-400 bg-amber-400/30 shadow-[0_0_16px_rgba(251,191,36,0.5)]"
                        : "border-zinc-700 bg-[#0a0a0b]"
                    }`}
                    aria-hidden
                  />

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-2xl font-semibold text-zinc-50">
                            {job.company}
                          </h3>
                          {job.current && (
                            <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[15px] text-zinc-300">
                          {job.role} <span className="text-zinc-600">·</span>{" "}
                          {job.team}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[13px] text-amber-300/90">
                          {job.dates}
                        </p>
                        <p className="mt-0.5 text-[13px] text-zinc-500">
                          {job.type}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {job.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-[15px] leading-relaxed text-zinc-400"
                        >
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
