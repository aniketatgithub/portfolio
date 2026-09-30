import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  title,
  blurb,
}: {
  index: string;
  title: string;
  blurb?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-amber-400">{index}</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-zinc-50">
          {title}
        </h2>
        <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
      </div>
      {blurb && (
        <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">{blurb}</p>
      )}
    </Reveal>
  );
}
