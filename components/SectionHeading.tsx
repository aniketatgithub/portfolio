import { Words, Reveal } from "./Reveal";
import { profile } from "@/lib/data";

export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <Reveal>
        <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-amber-400">
          <span className="inline-block h-px w-8 bg-amber-400" />
          {index}
        </p>
      </Reveal>
      <Words
        as="h2"
        text={title}
        className="font-display text-5xl font-semibold tracking-tight text-zinc-50 md:text-7xl"
        stagger={0.06}
      />
    </div>
  );
}
