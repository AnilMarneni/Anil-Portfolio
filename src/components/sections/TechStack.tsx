"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechStack() {
  return (
    <section id="skills" className="container-px py-24">
      <SectionHeader 
        label="Technical Arsenal"
        title="Tools of the trade for building"
        subtitle="resilient systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.skills.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors group"
          >
            <div className="mb-6 flex justify-between items-start">
              <h3 className="text-xl font-bold">{category.title}</h3>
              <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full bg-foreground/[0.05] text-[11px] font-mono tracking-tight text-muted-foreground hover:bg-accent/10 hover:text-accent transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Abstract visual background element */}
            <div className="mt-8 pt-6 border-t border-foreground/5 opacity-40 group-hover:opacity-100 transition-opacity">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <div 
                    key={j} 
                    className="h-1 flex-1 bg-foreground/10 rounded-full overflow-hidden"
                  >
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.random() * 60 + 40}%` }}
                      viewport={{ once: true }}
                      className="h-full bg-accent"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
