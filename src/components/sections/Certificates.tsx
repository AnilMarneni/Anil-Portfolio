"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, ShieldCheck, Globe, X, Maximize2 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Magnetic } from "@/components/ui/Magnetic";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/layout/Container";

const certificates = [
  { 
    title: "Infosys SpringBoard Internship", 
    provider: "Infosys Springboard", 
    date: "Feb 2026",
    credentialId: "INF-INT-2026",
    link: "https://drive.google.com/drive/folders/1q0zjd3BjwAQG75eyZ8N4p5Yn_K3yihID",
    image: "/images/certifications/Infosys SpringBoard Internship_page-0001.jpg",
    category: "Professional Experience"
  },
  { 
    title: "GDG Hyderabad Agentathon", 
    provider: "Google Developer Groups", 
    date: "2025",
    credentialId: "GDG-HYD-25",
    link: "https://drive.google.com/drive/folders/1q0zjd3BjwAQG75eyZ8N4p5Yn_K3yihID",
    image: "/images/certifications/GDG Hyderabad Agentathon_page-0001.jpg",
    category: "AI & Agents"
  },
  { 
    title: "Programming in Java (NPTEL)", 
    provider: "NPTEL / IIT", 
    date: "2024",
    credentialId: "NPTEL-JAVA-24",
    link: "https://drive.google.com/drive/folders/1q0zjd3BjwAQG75eyZ8N4p5Yn_K3yihID",
    image: "/images/certifications/Programming in Java NPTEL_page-0001.jpg",
    category: "Core Engineering"
  },
  { 
    title: "AIML for Geodata Analysis", 
    provider: "ISRO", 
    date: "2024",
    credentialId: "ISRO-GEO-24",
    link: "https://drive.google.com/drive/folders/1q0zjd3BjwAQG75eyZ8N4p5Yn_K3yihID",
    image: "/images/certifications/AIML for Geodata Analysis_page-0001.jpg",
    category: "AI & Data Science"
  },
  { 
    title: "Adobe Hackathon Participation", 
    provider: "Adobe", 
    date: "2025",
    credentialId: "ADBE-HK-25",
    link: "https://drive.google.com/drive/folders/1q0zjd3BjwAQG75eyZ8N4p5Yn_K3yihID",
    image: "/images/certifications/Adobe Hackathon Participation Certificate.jpg",
    category: "Innovation"
  },
  { 
    title: "Software Engineer Intern", 
    provider: "HackerRank", 
    date: "2026",
    credentialId: "SWE-HR-26",
    link: "https://drive.google.com/drive/folders/1q0zjd3BjwAQG75eyZ8N4p5Yn_K3yihID",
    image: "/images/certifications/Software Engineer Intern_page-0001.jpg",
    category: "Software Engineering"
  }
];

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
  const driveLink = "https://drive.google.com/drive/folders/1q0zjd3BjwAQG75eyZ8N4p5Yn_K3yihID";

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCert]);

  return (
    <Container id="certificates" className="relative bg-background">
      <div className="absolute inset-0 grid-bg opacity-[0.05] pointer-events-none" />
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
             <ShieldCheck size={14} className="text-accent" />
             <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent">Credential Verification</span>
          </div>
          <SectionHeader 
            label="Certifications"
            title="Verified"
            subtitle="technical credentials."
            className="mb-0"
          />
        </div>
        
        <div className="flex flex-col items-end gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-40 mr-4">Central Repository</span>
            <Magnetic>
              <a 
                href={driveLink} 
                target="_blank" 
                className="group flex items-center gap-4 px-8 py-5 rounded-full bg-foreground text-background hover:bg-accent transition-all shadow-2xl hover:shadow-accent/20 active:scale-95"
              >
                <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-60 mb-1">Access All Docs</span>
                    <span className="text-sm font-bold">Google Drive Ledger</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ExternalLink size={18} />
                </div>
              </a>
            </Magnetic>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col p-8 rounded-[2.5rem] border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.04] hover:border-accent/20 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-6">
               <div className="p-3 rounded-xl bg-accent/5 text-accent border border-accent/10">
                  <Award size={20} />
               </div>
               <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] opacity-40">
                  {cert.category}
               </span>
            </div>

            <div 
                className="relative aspect-[1.414/1] rounded-2xl bg-foreground/[0.03] border border-foreground/5 overflow-hidden mb-6 cursor-zoom-in group/img"
                onClick={() => setSelectedCert(cert)}
            >
                <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-background/40 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <Maximize2 size={14} /> Preview Certificate
                    </div>
                </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-lg font-bold leading-tight group-hover:text-accent transition-colors">{cert.title}</h3>
               <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground pt-4 border-t border-foreground/5">
                  <span>{cert.provider}</span>
                  <span>{cert.date}</span>
               </div>
            </div>

            <button 
                onClick={() => setSelectedCert(cert)}
                className="mt-8 w-full py-4 rounded-xl border border-foreground/10 text-[11px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
            >
               Verify Credential
            </button>
          </motion.div>
        ))}
      </div>

      {/* Verification Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 bg-background/90 backdrop-blur-2xl"
          >
            <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-8 right-8 p-3 rounded-full hover:bg-foreground/5 transition-colors z-[110]"
            >
                <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-7xl">
                {/* Certificate Image Frame */}
                <motion.div 
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="lg:col-span-8 relative aspect-[1.414/1] rounded-[2rem] border border-foreground/10 bg-foreground/[0.02] shadow-2xl overflow-hidden"
                >
                    <Image 
                        src={selectedCert.image} 
                        alt={selectedCert.title} 
                        fill 
                        className="object-contain" 
                    />
                    {/* Visual Stamp */}
                    <div className="absolute bottom-12 right-12 w-24 h-24 rounded-full border-4 border-accent/20 flex items-center justify-center opacity-50 bg-background/10 backdrop-blur-sm">
                        <div className="text-[10px] font-mono font-bold text-accent -rotate-12">AUTHENTICATED</div>
                    </div>
                </motion.div>

                {/* Info Sidebar */}
                <div className="lg:col-span-4 flex flex-col justify-center space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 text-accent">
                            <ShieldCheck size={20} />
                            <span className="text-xs font-mono font-bold uppercase tracking-widest">Verified Credential</span>
                        </div>
                        <h2 className="text-4xl font-bold leading-tight">{selectedCert.title}</h2>
                        <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase">{selectedCert.provider}</p>
                    </div>

                    <div className="space-y-4 p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/5">
                        <div className="flex justify-between py-2 border-b border-foreground/5">
                            <span className="text-[10px] font-mono opacity-50">Credential ID</span>
                            <span className="text-[10px] font-mono font-bold">{selectedCert.credentialId}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-foreground/5">
                            <span className="text-[10px] font-mono opacity-50">Issue Date</span>
                            <span className="text-[10px] font-mono font-bold">{selectedCert.date}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-[10px] font-mono opacity-50">Validation</span>
                            <span className="text-[10px] font-mono font-bold text-green-500">Verified by Provider</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Magnetic>
                            <a 
                                href={selectedCert.link}
                                target="_blank"
                                className="flex items-center justify-between p-6 rounded-2xl bg-foreground text-background font-bold group"
                            >
                                View in Drive Repository
                                <Globe size={20} className="group-hover:rotate-12 transition-transform" />
                            </a>
                        </Magnetic>
                    </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}
