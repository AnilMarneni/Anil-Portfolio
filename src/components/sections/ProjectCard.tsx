"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Github, CheckCircle2, Activity, ShieldCheck, Network } from "lucide-react";
import { Project } from "@/types";
import { Magnetic } from "@/components/ui/Magnetic";
import { useSystemOverride } from "@/context/SystemOverrideContext";
import { CategoryIcon, SystemTopology } from "./ProjectSubcomponents";

export function ProjectCard({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOverrideActive } = useSystemOverride();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
 
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
 
  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className="relative py-24 border-b border-foreground/5 last:border-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column - Content & Technical Deep Dive */}
        <div className="lg:col-span-5 space-y-12 order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <CategoryIcon category={project.category} />
              </div>
              <span className="ui-label tracking-[0.2em]">{project.category.replace('-', ' ')}</span>
            </div>
            
            <h3 className="h2 text-5xl lg:text-6xl">{project.title}</h3>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>
 
          {/* Scalability Insights */}
          <div className="space-y-6">
            <h4 className="text-sm font-mono uppercase tracking-widest text-accent font-semibold flex items-center gap-2">
              <Activity size={16} /> Scalability Insights
            </h4>
            <div className="grid gap-4">
              {project.scalabilityInsights.map((insight, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5 flex items-start gap-4"
                >
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <p className="text-sm font-medium text-muted-foreground leading-snug">{insight}</p>
                </motion.div>
              ))}
            </div>
          </div>
 
          {/* Technical Stack */}
          <div className="space-y-6">
            <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Engineering Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-foreground/5 rounded-full text-xs font-mono border border-foreground/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
 
          {/* Hidden Infrastructure Logs (Override Mode) */}
          <AnimatePresence>
            {isOverrideActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 rounded-2xl bg-accent/5 border border-accent/20 font-mono text-[10px] space-y-3 overflow-hidden"
              >
                <div className="flex items-center gap-2 text-accent">
                   <ShieldCheck size={14} />
                   <span className="font-bold uppercase tracking-widest">Internal System Logs</span>
                </div>
                <div className="space-y-1 opacity-60 italic">
                   <p>[INFO] Initializing node cluster_{project.id}...</p>
                   <p>[DATA] Sharding policy: range-based-v2</p>
                   <p>[NET] Websocket handshake: 101 Switching Protocols</p>
                   <p>[KERN] Latency offset calibrated: -0.4ms</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
 
          <div className="flex flex-wrap gap-4 pt-6">
            <Magnetic>
              <a 
                href={project.github}
                target="_blank"
                className="px-8 py-4 bg-foreground text-background rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
              >
                <Github size={18} /> View Architecture
              </a>
            </Magnetic>
          </div>
        </div>
 
        {/* Right Column - Poster & Architecture Viz */}
        <div className="lg:col-span-7 space-y-12 order-2">
          {/* Cinematic Poster Showcase */}
          <motion.div
            style={{ y }}
            className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden group cursor-none shadow-2xl transition-all duration-500 hover:shadow-accent/20"
          >
            <Image
              src={project.poster}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] border-[1px] border-white/10 group-hover:border-accent/40 transition-colors duration-500 z-20" />
            
            {/* Interactive Overlays based on project category */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                {project.category === 'distributed-systems' && (
                  <div className="absolute inset-0 bg-accent/5 mix-blend-overlay animate-pulse" />
                )}
                
                {project.category === 'real-time' && (
                  <div className="absolute inset-0 opacity-20">
                     <div className="absolute top-0 left-0 w-full h-[2px] bg-accent blur-[2px] animate-[scan_4s_linear_infinite]" />
                     <div className="absolute top-0 left-0 w-full h-[1px] bg-white animate-[scan_4s_linear_infinite]" />
                  </div>
                )}
                
                {project.category === 'ai' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/5 opacity-50 group-hover:opacity-80 transition-opacity" />
                )}
            </div>
 
            {/* Inner Depth Shadows */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none z-10" />
          </motion.div>
 
          {/* Interactive Architecture Visualization */}
          <div className="p-8 rounded-[2rem] bg-card/50 border border-foreground/5 backdrop-blur-sm space-y-8">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Network size={16} /> System Topology
              </h4>
              <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[10px] font-mono opacity-50 uppercase">Operational</span>
              </div>
            </div>
 
            <SystemTopology architecture={project.architecture} />
 
            <div className="grid grid-cols-2 gap-8">
               <div>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider mb-2 block">Primary Bottleneck</span>
                  <p className="text-sm text-muted-foreground">{project.challenges[0]}</p>
               </div>
               <div>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider mb-2 block">Architecture Pattern</span>
                  <p className="text-sm text-muted-foreground">{project.architecture.description}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
