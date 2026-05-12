"use client";

import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturedProjects() {
  return (
    <section id="projects" className="container-px py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <SectionHeader 
          label="Selected Works"
          title="Production-grade systems"
          subtitle="engineered for scale."
          className="mb-0" // Reset margin since container has gap
        />
        <p className="text-muted-foreground max-w-sm mb-6 md:mb-2">
          A collection of distributed engines, real-time pipelines, and AI-integrated infrastructure focusing on reliability and performance.
        </p>
      </div>

      <div className="flex flex-col gap-32">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
