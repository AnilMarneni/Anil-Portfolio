"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Calendar, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="container-px py-16 md:py-24">
      <SectionHeader 
        label="Journey"
        title="Professional"
        subtitle="experience."
      />
 
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
        {portfolioData.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-6 sm:pl-8 md:pl-12 border-l border-foreground/10 pb-10 sm:pb-12 last:pb-0"
          >
            {/* Dot */}
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-accent" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
                <p className="text-accent font-medium flex items-center gap-2 mt-1 text-sm sm:text-base">
                  <Briefcase size={14} /> {exp.company}
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-foreground/5 text-[10px] sm:text-[11px] font-mono whitespace-nowrap self-start sm:self-center">
                <Calendar size={12} /> {exp.period}
              </div>
            </div>
 
            <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
              {exp.description}
            </p>
 
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {exp.achievements.map((achievement, j) => (
                <li key={j} className="flex gap-3 text-[13px] sm:text-sm text-muted-foreground bg-foreground/[0.02] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-foreground/[0.05]">
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
