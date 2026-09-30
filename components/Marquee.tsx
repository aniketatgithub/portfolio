import { marqueeItems } from "@/lib/data";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#0c0c0e] py-5 md:py-7">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap md:gap-12">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-12">
            <span
              className={`font-display text-4xl font-semibold uppercase tracking-tight md:text-6xl ${
                i % 2 === 0 ? "text-outline" : "text-zinc-100"
              }`}
            >
              {item}
            </span>
            <span className="text-xl text-amber-400 md:text-2xl">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0b] to-transparent" />
    </div>
  );
}
