"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, X, Send, ChevronRight } from "lucide-react";

interface TerminalPanelProps {
  onClose: () => void;
}

export function TerminalPanel({ onClose }: TerminalPanelProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ cmd: string; resp: string }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let resp = "";

    switch (cmd) {
      case "help":
        resp = "Available commands: help, whoami, projects, architecture, skills, resume, uptime, system-status, coffee, clear";
        break;
      case "whoami":
        resp = "Marneni Anil Chiranjeeth | Distributed Systems Engineer | low-latency threat detected.";
        break;
      case "uptime":
        resp = "Production System Uptime: 1,422 hours without incident.";
        break;
      case "projects":
        resp = "Initializing project manifest... [Distributed Code Execution Engine], [Real-Time Transaction Monitor]. Navigate to #projects for deep dive.";
        break;
      case "architecture":
        resp = "Visualizing distributed mesh grid... [Ingress] -> [Compute] -> [Data] -> [Observability]. Check #architecture for the live viz.";
        break;
      case "resume":
        resp = "Accessing Career Ledger... One-Page CV available for download at #resume.";
        break;
      case "system-status":
        resp = "OVERRIDE_ACTIVE: TRUE | NODES: OPTIMIZED | LATENCY: <1ms";
        break;
      case "reset":
        resp = "Deactivating System Override... Reverting to standard operations.";
        setTimeout(() => window.location.reload(), 1500);
        break;
      case "coffee":
        resp = "Error: Coffee machine not found on local network. Please brew manually.";
        break;
      case "sudo":
        resp = "Unauthorized access attempt logged. System override is already at max permission.";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        resp = `Command not found: ${cmd}. Type 'help' for options.`;
    }

    setHistory([...history, { cmd: input, resp }]);
    setInput("");
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="fixed bottom-8 left-8 right-8 lg:left-auto lg:w-[500px] z-[300] pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-label="System Terminal Console"
    >
      <div className="glass rounded-2xl border border-foreground/10 shadow-2xl overflow-hidden flex flex-col h-[400px]">
        {/* Terminal Header */}
        <div className="px-4 py-3 border-b border-foreground/5 flex items-center justify-between bg-foreground/[0.02]">
          <div className="flex items-center gap-2">
            <TerminalIcon size={14} className="text-accent" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-60">
              Production Console v2.0
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-foreground/5 rounded"
            aria-label="Close terminal"
          >
            <X size={14} />
          </button>
        </div>

        {/* Terminal History */}
        <div
          ref={scrollRef}
          className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-4 no-scrollbar"
        >
          <div className="text-muted-foreground opacity-40">
            System initialized. Restricted access active.
          </div>
          {history.map((item, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-accent">
                <ChevronRight size={12} />
                <span>{item.cmd}</span>
              </div>
              <div className="pl-4 text-muted-foreground">{item.resp}</div>
            </div>
          ))}
        </div>

        {/* Terminal Input */}
        <form
          onSubmit={handleCommand}
          className="p-4 border-t border-foreground/5 flex items-center gap-3"
        >
          <span className="text-accent font-bold">
            <ChevronRight size={16} />
          </span>
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs"
            placeholder="Enter command..."
          />
          <button type="submit" className="text-muted-foreground hover:text-accent">
            <Send size={14} />
          </button>
        </form>
      </div>
    </motion.div>
  );
}
