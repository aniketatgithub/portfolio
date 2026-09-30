import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" title="About" />
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-zinc-400">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-5 font-display text-lg font-semibold text-zinc-100">
                Quick facts
              </h3>
              <dl className="space-y-4">
                {profile.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs uppercase tracking-widest text-zinc-500">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-[15px] text-zinc-200">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
