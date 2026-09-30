"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Profile", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[80] border-b border-white/[0.06] bg-[#0a0a0b]/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-zinc-50">
          aniket<span className="text-amber-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-wide text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-4 py-2 text-[13px] font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
          >
            Résumé
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 hover:bg-white/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-white/[0.06] bg-[#0a0a0b] px-6 py-4 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-[15px] font-medium text-zinc-300 hover:bg-white/5 hover:text-zinc-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-zinc-100 px-4 py-3 text-[15px] font-semibold text-zinc-950"
            >
              Résumé
              <ArrowUpRight size={16} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
