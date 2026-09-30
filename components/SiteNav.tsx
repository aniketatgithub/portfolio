"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0a0a0b]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-zinc-50"
        >
          AT<span className="text-amber-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 transition-colors hover:text-amber-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="rounded-full border border-amber-400/40 px-4 py-1.5 text-sm font-medium text-amber-300 transition-all hover:bg-amber-400 hover:text-black"
          >
            Résumé
          </a>
        </div>

        <button
          className="text-zinc-300 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-white/10 bg-[#0a0a0b]/95 px-6 pb-6 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-zinc-300 hover:text-amber-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="mt-2 inline-block rounded-full border border-amber-400/40 px-4 py-1.5 text-sm font-medium text-amber-300"
          >
            Résumé
          </a>
        </div>
      )}
    </header>
  );
}
