import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MetricsStrip } from "@/components/sections/MetricsStrip";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ArchitectureShowcase } from "@/components/sections/ArchitectureShowcase";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { CodingProfiles } from "@/components/sections/CodingProfiles";
import { Certificates } from "@/components/sections/Certificates";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MetricsStrip />
      <About />
      <FeaturedProjects />
      <ArchitectureShowcase />
      <TechStack />
      <ExperienceTimeline />
      <CodingProfiles />
      <Certificates />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  );
}

