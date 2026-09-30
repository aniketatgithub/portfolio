import { Words, Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading index="01" title="Profile" />
        <Words
          as="p"
          text={profile.about}
          className="max-w-5xl font-display text-3xl font-medium leading-[1.25] tracking-tight text-zinc-200 md:text-5xl md:leading-[1.2]"
          stagger={0.02}
        />
        <Reveal delay={0.15} className="mt-12 md:mt-16">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {profile.facts.map((f) => (
              <div key={f.label} className="bg-[#0c0c0e] px-6 py-5">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  {f.label}
                </dt>
                <dd className="mt-2 text-[15px] font-medium text-zinc-100">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
