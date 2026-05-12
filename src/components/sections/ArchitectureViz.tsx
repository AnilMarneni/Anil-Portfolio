"use client";

import { motion } from "framer-motion";
import { Server, Database, Activity, Network, Zap, Box, LucideIcon } from "lucide-react";

interface NodeProps {
  id: string;
  icon: LucideIcon;
  label: string;
  pos?: string;
  accent?: boolean;
  isActive?: boolean;
}

function Node({ icon: Icon, label, pos = "", accent = false, isActive = false }: NodeProps) {
  return (
    <div className={`relative flex flex-col items-center gap-2 sm:gap-3 z-20 ${pos}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl border flex items-center justify-center transition-all duration-500 ${
          accent
            ? "bg-accent/10 border-accent/30 shadow-[0_10px_30px_rgba(var(--accent),0.1)]"
            : "bg-background border-foreground/10 shadow-xl"
        } ${isActive ? "border-accent ring-2 ring-accent/10" : ""}`}
      >
        <Icon size={20} className={`sm:w-6 sm:h-6 ${accent ? "text-accent" : "text-muted-foreground"}`} />

        {/* Node "Power" Light */}
        <div
          className={`absolute top-2.5 right-2.5 w-1 h-1 rounded-full ${
            isActive ? "bg-accent animate-pulse" : "bg-foreground/20"
          }`}
        />
      </motion.div>

      <span className="text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-muted-foreground/60 text-center whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

function Metric({
  label,
  value,
  color,
  trend,
}: {
  label: string;
  value: string;
  color: string;
  trend?: "up" | "down";
}) {
  return (
    <div className="text-right space-y-1">
      <span className="block text-[9px] font-mono uppercase tracking-widest opacity-40 font-bold">
        {label}
      </span>
      <div className="flex items-center justify-end gap-2">
        <span className={`text-sm font-bold font-mono tracking-tighter ${color}`}>{value}</span>
        {trend && (
          <div
            className={`w-1 h-1 rounded-full ${
              trend === "up" ? "bg-accent" : "bg-green-500"
            } animate-pulse`}
          />
        )}
      </div>
    </div>
  );
}

export function ArchitectureViz() {
  const activeNode = null;

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative aspect-[0.8] sm:aspect-square lg:aspect-[1.2] w-full bg-foreground/[0.02] rounded-[2rem] sm:rounded-[4rem] border border-foreground/5 p-3 sm:p-6 shadow-3xl overflow-hidden"
      >
        {/* Internal Visualization Panel */}
        <div className="absolute inset-2 sm:inset-6 rounded-[1.5rem] sm:rounded-[3rem] border border-foreground/5 bg-background/40 backdrop-blur-3xl p-4 sm:p-12 flex items-center justify-center">
          {/* Topology Visualization */}
          <div className="relative w-full h-full max-w-2xl scale-[0.85] sm:scale-100">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="glow-viz">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Clean Linear Stream Paths */}
              {[
                "M 10 35 L 35 20",
                "M 10 35 L 35 50",
                "M 35 20 L 60 20",
                "M 35 50 L 60 50",
                "M 60 20 L 85 35",
                "M 60 50 L 85 35",
                "M 35 20 L 35 50",
                "M 60 20 L 60 50",
              ].map((path, i) => (
                <g key={i}>
                  <path d={path} className="stroke-foreground/5 fill-none stroke-[0.5]" />
                  <motion.path
                    d={path}
                    className="stroke-accent/10 fill-none stroke-[0.8]"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                  />
                  <motion.circle r="0.8" fill="hsl(var(--accent))" filter="url(#glow-viz)" opacity="0.3">
                    <animateMotion path={path} dur={`${6 + i}s`} repeatCount="indefinite" />
                  </motion.circle>
                </g>
              ))}
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0">
              <div className="absolute left-[10%] top-[35%] -translate-x-1/2 -translate-y-1/2">
                <Node id="traffic" icon={Network} label="Ingress" isActive={activeNode === "traffic"} />
              </div>
              <div className="absolute left-[35%] top-[20%] -translate-x-1/2 -translate-y-1/2">
                <Node id="api" icon={Server} label="Compute" isActive={activeNode === "api"} />
              </div>
              <div className="absolute left-[35%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                <Node id="event-bus" icon={Zap} label="Kafka" isActive={activeNode === "event-bus"} />
              </div>
              <div className="absolute left-[60%] top-[20%] -translate-x-1/2 -translate-y-1/2">
                <Node id="cache" icon={Box} label="Redis" isActive={activeNode === "cache"} />
              </div>
              <div className="absolute left-[60%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                <Node id="storage" icon={Database} label="Database" isActive={activeNode === "storage"} />
              </div>
              <div className="absolute left-[85%] top-[35%] -translate-x-1/2 -translate-y-1/2">
                <Node id="monitor" icon={Activity} label="Observability" isActive={activeNode === "monitor"} />
              </div>
            </div>
          </div>

          {/* Live Telemetry Panel */}
          <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 right-4 sm:right-10 flex flex-col sm:flex-row justify-between items-center sm:items-end bg-foreground/[0.03] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-foreground/5 backdrop-blur-md gap-4 sm:gap-0">
            <div className="space-y-2 sm:space-y-3 w-full sm:w-auto">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-3 bg-accent/40 rounded-full"
                      animate={{ height: [4, 12, 4] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-accent">
                  System Telemetry
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] sm:text-[9px] font-mono text-muted-foreground uppercase">Production_Live</span>
                </div>
                <div className="w-px h-3 bg-foreground/10" />
                <div className="flex items-center gap-2">
                  <span className="text-[8px] sm:text-[9px] font-mono text-muted-foreground uppercase">24 Nodes Online</span>
                </div>
              </div>
            </div>

            <div className="flex gap-6 sm:gap-12 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-foreground/5 pt-3 sm:pt-0">
              <Metric label="Latency" value="14ms" color="text-green-500" trend="down" />
              <Metric label="Throughput" value="128k r/s" color="text-accent" trend="up" />
            </div>
          </div>
        </div>

        {/* Decorative Tech UI Overlay */}
        <div className="absolute top-10 left-12 flex items-center gap-6 opacity-40">
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
            ))}
          </div>
          <span className="text-[8px] font-mono uppercase tracking-[0.4em] font-bold">ARC_CORE_V4</span>
        </div>
        <div className="absolute top-10 right-12 font-mono text-[9px] text-muted-foreground/40 text-right uppercase leading-relaxed">
          [S_MODE: DISTRIBUTED]
          <br />
          [V_NET: MESH_ENABLED]
        </div>
      </motion.div>
    </div>
  );
}
