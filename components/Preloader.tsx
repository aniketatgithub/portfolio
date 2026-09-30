"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0);
  const [out, setOut] = useState(false);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(true);
      const t = setTimeout(() => doneRef.current(), 100);
      return () => clearTimeout(t);
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      // ease-out so it decelerates into 100
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setOut(true);
        setTimeout(() => doneRef.current(), 700);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#0a0a0b] px-6 py-6 md:px-10 md:py-8"
      initial={{ y: 0 }}
      animate={out ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-zinc-500">
        <span>Aniket Tikariha</span>
        <span>Folio © 2026</span>
      </div>
      <div className="flex items-end justify-between">
        <p className="font-display text-2xl italic text-zinc-400">
          backend, beautifully.
        </p>
        <p className="font-display text-7xl font-semibold tabular-nums text-zinc-100 md:text-8xl">
          {n}
          <span className="text-amber-400">%</span>
        </p>
      </div>
      <div className="h-px w-full bg-white/10">
        <div
          className="h-px bg-amber-400 transition-[width] duration-100"
          style={{ width: `${n}%` }}
        />
      </div>
    </motion.div>
  );
}
