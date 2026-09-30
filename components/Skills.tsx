import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading index="04" title="Stack" />
        <div>
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={Math.min(i * 0.04, 0.16)}>
              <div className="grid gap-2 border-t border-white/10 py-6 last:border-b md:grid-cols-[220px_1fr] md:gap-8 md:py-7">
                <p className="text-xs uppercase tracking-[0.22em] text-amber-400/90">
                  {s.group}
                </p>
                <p className="font-display text-xl font-medium leading-relaxed text-zinc-200 md:text-2xl">
                  {s.items}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
