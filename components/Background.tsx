import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { education, publications } from "@/lib/data";

export function Background() {
  return (
    <section id="background" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading index="05" title="Background" />
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.22em] text-zinc-500">
              Education
            </p>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.school} className="border-l-2 border-amber-400/60 pl-5">
                  <p className="font-display text-xl font-semibold text-zinc-100">
                    {e.school}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">{e.degree}</p>
                  <p className="mt-0.5 text-sm text-zinc-600">{e.place}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-6 text-xs uppercase tracking-[0.22em] text-zinc-500">
              Writing
            </p>
            <div className="space-y-6">
              {publications.map((p) => (
                <div key={p.title} className="border-l-2 border-white/15 pl-5">
                  <p className="font-display text-xl font-semibold leading-snug text-zinc-100">
                    {p.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{p.meta}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
