"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/** Minimal loader: wordmark holds briefly, curtain lifts. No fake progress. */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [out, setOut] = useState(false);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const hold = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 100 : 750;
    const t1 = setTimeout(() => setOut(true), hold);
    const t2 = setTimeout(() => doneRef.current(), hold + 650);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0b]"
      initial={{ y: 0 }}
      animate={out ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="font-display text-2xl font-semibold tracking-tight text-zinc-100"
      >
        aniket<span className="text-amber-400">.</span>
      </motion.p>
    </motion.div>
  );
}
