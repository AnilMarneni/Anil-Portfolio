"use client";

import { motion } from "framer-motion";
import { Server, Cpu, Globe, Zap, Database } from "lucide-react";
import { Container } from "@/components/layout/Container";

const metrics = [
  { icon: Server, label: "Distributed Systems", value: "Focus" },
  { icon: Cpu, label: "AI Integrated", value: "Platforms" },
  { icon: Globe, label: "Open Source", value: "Contributor" },
  { icon: Zap, label: "Real-Time", value: "Infrastructure" },
  { icon: Database, label: "Scalable", value: "Backend" },
];

export function MetricsStrip() {
  return (
    <Container className="py-8 sm:py-12 border-y border-foreground/5 bg-foreground/[0.01]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex flex-col items-center sm:items-start gap-2 sm:gap-3 group ${
              i === 4 ? "col-span-2 sm:col-span-1" : ""
            }`}
          >
            <div className="p-2 rounded-lg bg-foreground/[0.03] group-hover:bg-accent/10 transition-colors">
              <metric.icon size={16} className="sm:w-[18px] sm:h-[18px] text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {metric.value}
              </p>
              <h4 className="text-xs sm:text-sm font-semibold tracking-tight">
                {metric.label}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
