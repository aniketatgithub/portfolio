"use client";

import { useCallback, useState } from "react";
import { Preloader } from "./Preloader";
import { Cursor } from "./Cursor";
import { SmoothScroll } from "./SmoothScroll";
import { SiteNav } from "./SiteNav";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Background } from "./Background";
import { Contact, Footer } from "./Contact";

export function Site() {
  const [ready, setReady] = useState(false);
  const done = useCallback(() => setReady(true), []);

  return (
    <div className="noise relative min-h-screen bg-[#0a0a0b]">
      <SmoothScroll />
      <Cursor />
      {!ready && <Preloader onDone={done} />}
      <SiteNav ready={ready} />
      <main>
        <Hero ready={ready} />
        <Marquee />
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
