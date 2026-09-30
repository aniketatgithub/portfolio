"use client";

import { SiteNav } from "./SiteNav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Background } from "./Background";
import { Contact, Footer } from "./Contact";

export function Site() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0b] text-zinc-200 antialiased">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
