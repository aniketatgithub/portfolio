import { marqueeItems } from "@/lib/data";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#0d0d0f] py-4">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-sm text-zinc-500">
            <span className="font-medium tracking-wide">{item}</span>
            <span className="text-amber-400/60">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0b] to-transparent" />
    </div>
  );
}
