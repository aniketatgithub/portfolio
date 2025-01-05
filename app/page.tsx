import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/hero/hero-section';
import { AboutSection } from '@/components/sections/about';
import { PublicationsSection } from '@/components/sections/publications';
import { ProjectsSection } from '@/components/sections/projects';
import { ExperienceSection } from '@/components/sections/experience';
import { ContactSection } from '@/components/sections/contact';
import { CoCurricularSection } from '@/components/sections/CoCurricularSection';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PublicationsSection />
        <ProjectsSection />
        <CoCurricularSection/>
        <ContactSection />
      </main>
    </>
  );
}