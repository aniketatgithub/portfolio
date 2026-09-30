import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Background } from "@/components/Background";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <div className="noise relative min-h-screen bg-[#0a0a0b]">
      <SiteNav />
      <main>
        <Hero />
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
