"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, Network, Zap, Shield, Layers, Box, Terminal } from "lucide-react";
import dynamic from "next/dynamic";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Lazy load the complex visualization for performance
const ArchitectureViz = dynamic(() => import("./ArchitectureViz").then(mod => mod.ArchitectureViz), {
  ssr: false,
  loading: () => <div className="aspect-square lg:aspect-[1.2] w-full bg-foreground/[0.02] rounded-[4rem] animate-pulse" />
});

const principles = [
  { name: "Event-Driven Design", icon: Zap },
  { name: "Horizontal Scalability", icon: Layers },
  { name: "Fault-Tolerant Systems", icon: Shield },
  { name: "Async Processing", icon: Box },
  { name: "Observability", icon: Activity },
  { name: "Distributed Coordination", icon: Network },
  { name: "Low-Latency Infra", icon: Cpu },
  { name: "Reliable Messaging", icon: Terminal },
];

export function ArchitectureShowcase() {
  return (
    <Container id="architecture" className="py-48 relative overflow-hidden bg-background">
      {/* Technical Blueprint Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg-sm" />
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left Column: Engineering Philosophy */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-accent">Signature Engineering</span>
              </div>
              
              <SectionHeader 
                label="Engineering Philosophy"
                title="Systems that"
                subtitle="Scale, Built to last under load."
                className="mb-0"
              />
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-8 text-xl text-muted-foreground/80 leading-relaxed max-w-xl"
              >
                <p>
                  I believe great software isn&apos;t just about features—it&apos;s about how it handles pressure. I focus on building backend architecture that&apos;s clean, efficient, and ready to scale without breaking.
                </p>
                <p>
                  Whether I&apos;m working on a distributed execution engine or a real-time data pipeline, my goal is always the same: creating systems that are reliable, fast, and easy to maintain.
                </p>
              </motion.div>
            </div>

            {/* Principles Panel */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-muted-foreground/60">Core Engineering Principles</h4>
              <div className="grid grid-cols-2 gap-4">
                {principles.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-foreground/[0.03] bg-foreground/[0.01] hover:border-accent/30 hover:bg-accent/[0.02] transition-all cursor-default group"
                  >
                    <div className="p-2 rounded-lg bg-foreground/[0.03] group-hover:bg-accent/10 transition-colors">
                      <p.icon size={16} className="text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-bold tracking-tight text-muted-foreground group-hover:text-foreground transition-colors">{p.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Advanced Architecture Visualization */}
          <div className="lg:col-span-7 space-y-10">
            <ArchitectureViz />

            {/* Architectural Status Legend */}
            <div className="grid grid-cols-3 gap-6">
                {[
                    { label: "Durability", value: "99.999%", icon: Shield },
                    { label: "Isolation", value: "L3 / Mesh", icon: Box },
                    { label: "Consistency", value: "Eventual", icon: Network },
                ].map((stat, i) => (
                    <motion.div 
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5 flex items-center gap-4"
                    >
                        <div className="p-2 rounded-lg bg-foreground/5">
                            <stat.icon size={14} className="text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                            <p className="text-xs font-bold text-foreground">{stat.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
