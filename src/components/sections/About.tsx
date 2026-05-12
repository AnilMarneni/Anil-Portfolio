"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
      <div className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative aspect-square rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-foreground/10 group shadow-xl"
             >
                <Image
                    src="/images/profile/anil-hero.webp.jpeg"
                    alt={portfolioData.name}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
             </motion.div>
             
             {/* Decorative Elements */}
             <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-accent/10 blur-2xl sm:blur-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1 lg:order-2">
            <SectionHeader 
                label="About Me"
                title="Building software that"
                subtitle="scales and stays reliable."
                className="mb-0"
            />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
                <p>
                    I&apos;m {portfolioData.name}, a backend engineer who loves figuring out how to make software faster and more reliable at scale. I spend most of my time thinking about distributed systems, real-time data flow, and how to build infrastructure that doesn&apos;t break under pressure.
                </p>
                <p>
                    Currently pursuing my engineering degree at {portfolioData.college}, I focus on building practical, high-performance systems. Whether it&apos;s a code execution engine or a real-time messaging pipeline, I enjoy the challenge of making complex backend logic feel seamless.
                </p>
            </motion.div>

            {/* Quick Stats & Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-foreground/5">
                <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 text-foreground font-bold">
                        <div className="p-2 rounded-lg bg-accent/5">
                            <Cpu size={16} className="sm:w-[18px] sm:h-[18px] text-accent" />
                        </div>
                        <span className="text-xs sm:text-sm uppercase tracking-wider">Core Focus</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Distributed Systems, Backend Architecture, and Real-Time Infrastructure.
                    </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 text-foreground font-bold">
                        <div className="p-2 rounded-lg bg-accent/5">
                            <GraduationCap size={16} className="sm:w-[18px] sm:h-[18px] text-accent" />
                        </div>
                        <span className="text-xs sm:text-sm uppercase tracking-wider">Academic Foundation</span>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-bold">{portfolioData.college}</p>
                        <p className="text-[11px] text-muted-foreground">B.Tech in Artificial Intelligence and Data Science</p>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-[10px] font-mono bg-foreground/5 px-2 py-0.5 rounded text-muted-foreground">{portfolioData.graduationYear} (Grad)</span>
                            <span className="text-[10px] font-mono text-accent">GPA: 8.886</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
