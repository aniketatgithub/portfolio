"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { profile } from "@/lib/data";

const links = [
  { label: "Profile", href: "#about", index: "01" },
  { label: "Work", href: "#experience", index: "02" },
  { label: "Projects", href: "#projects", index: "03" },
  { label: "Stack", href: "#skills", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
];

export function SiteNav({ ready }: { ready: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed inset-x-0 top-0 z-[80] mix-blend-difference"
      >
        <nav className="flex items-center justify-between px-6 py-5 text-white md:px-10">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight"
            onClick={() => setOpen(false)}
          >
            AT<span className="text-amber-400">©</span>
          </a>
          <div className="hidden items-center gap-8 text-[13px] uppercase tracking-[0.18em] md:flex">
            {links.slice(0, 4).map((l) => (
              <a key={l.href} href={l.href} className="opacity-70 transition-opacity hover:opacity-100">
                {l.label}
              </a>
            ))}
          </div>
          <Magnetic strength={0.4}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 text-[13px] uppercase tracking-[0.18em]"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative flex h-8 w-8 items-center justify-center">
                <span
                  className={`absolute h-px w-6 bg-white transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[4px]"}`}
                />
                <span
                  className={`absolute h-px w-6 bg-white transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[4px]"}`}
                />
              </span>
              <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
            </button>
          </Magnetic>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[70] flex flex-col justify-between bg-[#111113] px-6 pb-10 pt-28 md:px-10"
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <div key={l.href} className="overflow-hidden border-b border-white/10">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%", transition: { duration: 0.3, delay: 0 } }}
                    transition={{
                      duration: 0.55,
                      delay: 0.15 + i * 0.06,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="group flex items-baseline gap-4 py-3 md:py-4"
                  >
                    <span className="font-mono text-xs text-amber-400">{l.index}</span>
                    <span className="font-display text-5xl font-semibold tracking-tight text-zinc-100 transition-all group-hover:translate-x-2 group-hover:text-amber-300 md:text-7xl">
                      {l.label}
                    </span>
                    <ArrowUpRight
                      className="ml-auto text-zinc-600 transition-all group-hover:text-amber-300"
                      size={28}
                    />
                  </motion.a>
                </div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-500"
            >
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-amber-300">
                {profile.email}
              </a>
              <div className="flex gap-5">
                <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-amber-300">
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-amber-300">
                  LinkedIn
                </a>
                <a href="/resume.pdf" className="transition-colors hover:text-amber-300">
                  Résumé
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
