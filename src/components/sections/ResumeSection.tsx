"use client";

import { motion } from "framer-motion";
import { Download, Eye, CheckCircle2, Sparkles, Layers, Cpu, Globe } from "lucide-react";
import { useState } from "react";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";

const tags = [
  { name: "Distributed Systems", icon: Globe },
  { name: "Backend Engineering", icon: Cpu },
  { name: "AI-integrated Platforms", icon: Sparkles },
  { name: "Real-Time Systems", icon: Layers },
  { name: "Event-Driven Architecture", icon: CheckCircle2 },
  { name: "Redis & Async Workflows", icon: CheckCircle2 },
  { name: "System Design", icon: CheckCircle2 },
  { name: "Open Source Contributor", icon: CheckCircle2 },
];

export function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container id="resume" className="bg-foreground/[0.02]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Content - Recruiter Focused Summary */}
        <div className="lg:col-span-6 space-y-10">
          <SectionHeader 
            label="Career Ledger"
            title="Architecture of"
            subtitle="Experience."
            description="A summary of my backend projects, skills, and internship experience."
            className="mb-0"
          />

          {/* Recruiter Snapshot */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <div key={tag.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/5 text-sm font-medium">
                <tag.icon size={14} className="text-accent" />
                {tag.name}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
            <Magnetic>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-[220px] py-4 bg-foreground text-background rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl"
              >
                <Eye size={18} /> Preview Resume
              </button>
            </Magnetic>
            
            <Magnetic>
              <a
                href="/Marneni_Anil_Chiranjeeth_Resume.pdf"
                download
                className="w-full sm:w-[220px] py-4 border border-foreground/10 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-foreground/5 transition-all group shadow-sm"
              >
                <Download size={18} className="group-hover:-translate-y-1 transition-transform text-accent" /> 
                <span>Download Resume</span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right Content - Floating Preview Card */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-full max-w-[min(448px,90vw)] aspect-[1/1.4] bg-white dark:bg-zinc-900 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm border border-black/5 dark:border-white/10 overflow-hidden group cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
            
            <div className="relative space-y-6 text-zinc-800 dark:text-zinc-200">
              <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
                <h3 className="text-2xl font-bold tracking-tight">{portfolioData.name}</h3>
                <p className="text-accent font-medium mt-1">{portfolioData.role}</p>
                <div className="flex gap-3 mt-3 text-[10px] font-medium opacity-60">
                  <span>{portfolioData.contact.email}</span>
                  <span>•</span>
                  <span>{portfolioData.location}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent/80">Experience Highlights</h4>
                  <div className="space-y-3">
                    {portfolioData.experience.slice(0, 1).map((exp, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-start">
                          <p className="text-xs font-bold">{exp.company}</p>
                          <span className="text-[9px] opacity-60">{exp.period}</span>
                        </div>
                        <p className="text-[10px] font-medium italic opacity-70">{exp.role}</p>
                        <p className="text-[10px] mt-1 leading-relaxed opacity-80">
                          {exp.achievements[0]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent/80">Key Projects</h4>
                  <div className="space-y-3">
                    {portfolioData.projects.slice(0, 2).map((project) => (
                      <div key={project.id}>
                        <p className="text-xs font-bold">{project.title}</p>
                        <p className="text-[10px] mt-1 leading-relaxed opacity-80">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent/80">Technical Skills</h4>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {["C++", "Java", "Python", "Node.js", "Docker", "Redis", "BullMQ", "PostgreSQL", "MongoDB"].map(skill => (
                      <span key={skill} className="text-[9px] font-semibold opacity-70">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sophisticated gradient depth */}
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-accent/[0.05] via-accent/[0.01] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 pointer-events-none" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 backdrop-blur-[2px]">
               <div className="p-4 bg-foreground text-background rounded-full shadow-2xl">
                  <Eye size={24} />
               </div>
            </div>
          </motion.div>

          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square bg-accent/5 blur-[100px] rounded-full opacity-50 lg:opacity-100" />
        </div>
      </div>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  );
}
