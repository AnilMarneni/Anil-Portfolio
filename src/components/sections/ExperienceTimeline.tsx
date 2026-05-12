"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Calendar, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="container-px py-24">
      <SectionHeader 
        label="Journey"
        title="Professional"
        subtitle="experience."
      />
 
      <div className="max-w-4xl mx-auto space-y-12">
        {portfolioData.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8 md:pl-12 border-l border-foreground/10 pb-12 last:pb-0"
          >
            {/* Dot */}
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-accent" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-accent font-medium flex items-center gap-2 mt-1">
                  <Briefcase size={14} /> {exp.company}
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 text-[11px] font-mono whitespace-nowrap self-start md:self-center">
                <Calendar size={12} /> {exp.period}
              </div>
            </div>
 
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {exp.description}
            </p>
 
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.achievements.map((achievement, j) => (
                <li key={j} className="flex gap-3 text-sm text-muted-foreground bg-foreground/[0.02] p-4 rounded-2xl border border-foreground/[0.05]">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
