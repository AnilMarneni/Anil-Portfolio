"use client";

import { motion } from "framer-motion";
import { Activity, Database, Network } from "lucide-react";

interface TelemetryOverlaysProps {
  isActive: boolean;
}

export function TelemetryOverlays({ isActive }: TelemetryOverlaysProps) {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 pointer-events-none z-[150] overflow-hidden"
    >
      {/* Global Telemetry Overlays */}
      <div className="absolute top-24 left-8 space-y-4 opacity-40">
        <div className="flex items-center gap-2 text-[10px] font-mono text-accent">
          <Activity size={12} className="animate-pulse" />
          <span>PACKET_FLOW: 1.2GB/s</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-accent">
          <Database size={12} />
          <span>REPLICA_LAG: 14ms</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-accent">
          <Network size={12} />
          <span>NODES_ACTIVE: 128</span>
        </div>
      </div>

      <div className="absolute bottom-12 right-8 opacity-20">
        <span className="text-[10px] font-mono text-accent uppercase tracking-[0.5em]">
          System Override Enabled
        </span>
      </div>

      {/* Moving Grid Lines / Packets */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-accent),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-accent),0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </motion.div>
  );
}
