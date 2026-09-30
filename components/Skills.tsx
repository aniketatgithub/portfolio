import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          title="Skills"
          blurb="The toolbox I reach for when ambiguity walks in the door."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={(i % 3) * 0.07}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-lg font-semibold text-amber-300">
                  {group.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[13px] text-zinc-300 transition-colors hover:border-amber-400/40 hover:text-amber-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
