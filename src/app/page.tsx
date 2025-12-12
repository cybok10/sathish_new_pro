import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { EducationSkills } from "@/components/sections/EducationSkills";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-blue-500/30">
      <Hero />
      <About />
      <EducationSkills />
      <Experience />
      <Certifications />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}