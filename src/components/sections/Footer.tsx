"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container as="footer" className="py-12 border-t border-foreground/5 bg-foreground/[0.01]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <Link href="/" className="text-2xl font-bold tracking-tighter block">
            {portfolioData.name.toUpperCase()}<span className="text-accent">.</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Designing and engineering resilient backend systems and distributed architectures for the next era of computing.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-4">
            <a href={portfolioData.contact.github} target="_blank" className="p-3 rounded-full hover:bg-foreground/5 transition-colors">
              <Github size={20} className="text-muted-foreground hover:text-foreground" />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" className="p-3 rounded-full hover:bg-foreground/5 transition-colors">
              <Linkedin size={20} className="text-muted-foreground hover:text-foreground" />
            </a>
            <a href={`mailto:${portfolioData.contact.email}`} className="p-3 rounded-full hover:bg-foreground/5 transition-colors">
              <Mail size={20} className="text-muted-foreground hover:text-foreground" />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase font-bold opacity-60 hover:opacity-100 transition-opacity"
          >
            Back to Top <ChevronUp size={14} />
          </button>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          © 2026 {portfolioData.name.toUpperCase()}. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          ENGINEERED IN {portfolioData.location.toUpperCase()}
        </p>
      </div>
    </Container>
  );
}
