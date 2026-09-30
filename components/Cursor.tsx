"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 350, damping: 32, mass: 0.7 });
  const ry = useSpring(y, { stiffness: 350, damping: 32, mass: 0.7 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-fine");
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHover(
        !!(e.target as HTMLElement).closest("a, button, [data-hover]")
      );
    };
    const dn = () => setDown(true);
    const up = () => setDown(false);
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", dn);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", dn);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* dot follows instantly */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[96] h-1.5 w-1.5 rounded-full bg-amber-400"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        aria-hidden
      />
      {/* trailing ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[96] rounded-full border border-white/40"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hover ? 56 : 32,
          height: hover ? 56 : 32,
          scale: down ? 0.85 : 1,
          opacity: hover ? 0.9 : 0.5,
          backgroundColor: hover
            ? "rgba(251,191,36,0.08)"
            : "rgba(251,191,36,0)",
        }}
        transition={{ duration: 0.25 }}
        aria-hidden
      />
    </>
  );
}
