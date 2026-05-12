"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, File as ResumeIcon, Send } from "lucide-react";
import dynamic from "next/dynamic";
import { portfolioData } from "@/data/portfolio";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { Magnetic } from "@/components/ui/Magnetic";
import { useSystemOverride } from "@/context/SystemOverrideContext";
import { ANIMATION_VARIANTS, UI_STRINGS } from "@/constants";
import { useProfileTap } from "@/hooks/useProfileTap";

// Lazy load the bounty poster since it's a heavy hidden feature
const BountyPoster = dynamic(() => import("@/components/ui/BountyPoster").then(mod => mod.BountyPoster), {
  ssr: false,
});

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBountyOpen, setIsBountyOpen] = useState(false);
  const { isOverrideActive } = useSystemOverride();
  const { handleTap: handleProfileTap } = useProfileTap(5, () => setIsBountyOpen(true));

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center container-px pt-24 lg:pt-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
          <motion.div {...ANIMATION_VARIANTS.fadeIn}>
            <span className="ui-label text-accent font-semibold mb-3 sm:mb-4 block">
              {isOverrideActive ? UI_STRINGS.hero.overrideRole : UI_STRINGS.hero.role}
            </span>
            <h1 className="h1 mb-4 sm:mb-6">
              {isOverrideActive ? (
                <>Building high-performance <span className="text-muted-foreground">distributed architecture</span> that scales.</>
              ) : (
                <>Designing <span className="text-muted-foreground">scalable systems</span> for high-load applications.</>
              )}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {UI_STRINGS.hero.description}
            </p>
          </motion.div>

          <motion.div
            {...ANIMATION_VARIANTS.fadeInDelayed}
            className="space-y-8 sm:space-y-10 pb-12"
          >
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Magnetic strength={0.2}>
                <a 
                  href="#projects"
                  className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-medium flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl hover:shadow-accent/20 active:scale-95"
                >
                  View Projects <ArrowUpRight size={18} />
                </a>
              </Magnetic>
              
              <Magnetic strength={0.2}>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 border border-foreground/10 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-foreground/5 transition-all group active:scale-95"
                >
                  <ResumeIcon size={18} className="group-hover:text-accent transition-colors" />
                  Preview Resume
                </button>
              </Magnetic>
            </div>

            {/* Socials / Secondary Links */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-3">
                <Magnetic strength={0.3}>
                  <a 
                    href={portfolioData.contact.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                    aria-label="GitHub Profile"
                  >
                    <div className="p-3 border border-foreground/5 rounded-full group-hover:bg-foreground/5 transition-colors">
                      <Github size={18} />
                    </div>
                    <span>GitHub</span>
                  </a>
                </Magnetic>
                
                <div className="w-px h-4 bg-foreground/10 mx-2" />

                <Magnetic strength={0.3}>
                  <a 
                    href={`mailto:${portfolioData.contact.email}`}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                    aria-label="Contact via Email"
                  >
                    <div className="p-3 border border-foreground/5 rounded-full group-hover:bg-foreground/5 transition-colors">
                      <Send size={18} />
                    </div>
                    <span>Contact</span>
                  </a>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>

        <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        {isBountyOpen && <BountyPoster isOpen={isBountyOpen} onClose={() => setIsBountyOpen(false)} />}

        {/* Right Content - Visual */}
        <div className="lg:col-span-5 relative hidden lg:block h-[600px]">
          <motion.div
            {...ANIMATION_VARIANTS.scaleUp}
            className="relative w-full h-full"
          >
            {/* Editorial Portrait Container */}
            <div 
                onClick={handleProfileTap}
                className={`absolute inset-0 rounded-[3rem] overflow-hidden bg-foreground/5 border border-foreground/10 group shadow-2xl cursor-pointer transition-all duration-500 ${isOverrideActive ? "ring-4 ring-accent/20" : ""}`}
            >
                <Image
                    src="/images/profile/anil-hero.webp.jpeg"
                    alt={portfolioData.name}
                    fill
                    className={`object-cover transition-all duration-1000 group-hover:scale-105 ${isOverrideActive ? "sepia-[0.3] contrast-[1.2] brightness-[0.7]" : "grayscale-[20%] contrast-[1.1] brightness-[0.9]"}`}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isOverrideActive ? "bg-accent/20 mix-blend-overlay opacity-100" : "bg-accent/5 mix-blend-overlay opacity-0"}`} />
            </div>
            
            {/* Asymmetric Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 p-6 glass rounded-2xl border-foreground/10 shadow-2xl max-w-[240px] z-20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2 h-2 rounded-full animate-pulse ${isOverrideActive ? "bg-accent" : "bg-green-500"}`} />
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">
                    {isOverrideActive ? UI_STRINGS.system.statusOverride : UI_STRINGS.system.statusActive}
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: isOverrideActive ? "100%" : "85%" }} 
                    transition={{ delay: 1, duration: 1 }}
                    className="h-full bg-accent" 
                  />
                </div>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  {isOverrideActive 
                    ? UI_STRINGS.system.descriptionOverride
                    : UI_STRINGS.system.descriptionActive
                  }
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[50%] lg:w-1/3 h-1/2 bg-accent/5 blur-[80px] lg:blur-[120px] -z-10 rounded-full opacity-50 lg:opacity-100" />
      <div className="absolute bottom-0 left-0 w-[40%] lg:w-1/4 h-1/3 bg-foreground/5 blur-[70px] lg:blur-[100px] -z-10 rounded-full opacity-50 lg:opacity-100" />
    </section>
  );
}
