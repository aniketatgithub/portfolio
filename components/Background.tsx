import { BookOpen, GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { education, publications } from "@/lib/data";

export function Background() {
  return (
    <section id="background" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="05" title="Background" />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Education */}
          <div>
            <Reveal>
              <h3 className="mb-6 flex items-center gap-2.5 text-lg font-semibold text-zinc-100">
                <GraduationCap size={20} className="text-amber-400" />
                Education
              </h3>
            </Reveal>
            <div className="space-y-5">
              {education.map((e, i) => (
                <Reveal key={e.school} delay={i * 0.08}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="font-display text-xl font-semibold text-zinc-50">
                      {e.school}
                    </p>
                    <p className="mt-1 text-[15px] text-zinc-300">{e.degree}</p>
                    <p className="mt-2 font-mono text-[13px] text-zinc-500">
                      {e.dates} <span className="text-zinc-700">·</span>{" "}
                      {e.location}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <Reveal>
              <h3 className="mb-6 flex items-center gap-2.5 text-lg font-semibold text-zinc-100">
                <BookOpen size={20} className="text-amber-400" />
                Publications
              </h3>
            </Reveal>
            <div className="space-y-5">
              {publications.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="font-display text-xl font-semibold leading-snug text-zinc-50">
                      {p.title}
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">
                      {p.description}
                    </p>
                    <p className="mt-3 font-mono text-[13px] text-zinc-500">
                      {p.venue} <span className="text-zinc-700">·</span>{" "}
                      {p.dates}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
