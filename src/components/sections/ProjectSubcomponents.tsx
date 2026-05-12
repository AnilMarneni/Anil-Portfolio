"use client";

import { motion } from "framer-motion";
import { Cpu, Network, Zap, Database } from "lucide-react";
import { Project } from "@/types";

export const CategoryIcon = ({ category, size = 20 }: { category: string; size?: number }) => {
  switch (category) {
    case "distributed-systems":
      return <Network size={size} className="text-accent" />;
    case "ai":
      return <Cpu size={size} className="text-accent" />;
    case "real-time":
      return <Zap size={size} className="text-accent" />;
    default:
      return <Database size={size} className="text-accent" />;
  }
};

export function SystemTopology({ architecture }: { architecture: Project["architecture"] }) {
  return (
    <div className="relative h-[240px] flex items-center justify-center overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 400 200" className="max-w-md">
        {/* Connection Lines */}
        {architecture.connections.map((conn, i) => {
          const fromIdx = architecture.nodes.findIndex((n) => n.id === conn.from);
          const toIdx = architecture.nodes.findIndex((n) => n.id === conn.to);
          if (fromIdx === -1 || toIdx === -1) return null;

          const x1 = 50 + fromIdx * 100;
          const y1 = 100;
          const x2 = 50 + toIdx * 100;
          const y2 = 100;

          return (
            <motion.path
              key={i}
              d={`M ${x1} ${y1} L ${x2} ${y2}`}
              className="stroke-accent/20"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          );
        })}

        {/* Nodes */}
        {architecture.nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <circle
              cx={50 + i * 100}
              cy={100}
              r="12"
              className="fill-card stroke-accent/40"
              strokeWidth="2"
            />
            <text
              x={50 + i * 100}
              y={130}
              className="fill-muted-foreground text-[10px] font-mono"
              textAnchor="middle"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
