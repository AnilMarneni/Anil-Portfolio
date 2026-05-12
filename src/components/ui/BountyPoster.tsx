"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldAlert, Cpu } from "lucide-react";
import Image from "next/image";

interface BountyPosterProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BountyPoster({ isOpen, onClose }: BountyPosterProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (!audioRef.current) {
        audioRef.current = new Audio("/audio/franky-eyecatcher.mp3");
        audioRef.current.volume = 0.4;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl overflow-hidden"
        >
          {/* Flying Decoy Papers (One Piece Break Style) */}
          {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ 
                    x: i % 2 === 0 ? -1000 : 1000, 
                    y: Math.random() * 1000 - 500, 
                    rotate: Math.random() * 360,
                    opacity: 0 
                }}
                animate={{ 
                    x: i % 2 === 0 ? 1500 : -1500, 
                    y: Math.random() * 1000 - 500, 
                    rotate: Math.random() * 720,
                    opacity: [0, 1, 1, 0] 
                }}
                transition={{ 
                    duration: 0.5, 
                    delay: i * 0.05,
                    ease: "easeOut"
                }}
                className="absolute w-64 aspect-[1/1.4] bg-[#f4e4bc] border-4 border-[#3d2b1f] opacity-20 pointer-events-none"
            />
          ))}

          {/* Film Grain & Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={onClose}
            className="absolute top-8 right-8 p-4 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors z-50"
          >
            <X size={24} />
          </motion.button>

          <motion.div
            initial={{ scale: 2, rotate: 45, y: -1000, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, rotate: -15, y: 500, opacity: 0 }}
            transition={{ 
                type: "spring", 
                damping: 12, 
                stiffness: 100,
                delay: 0.2 // Minimal delay for punchy feel
            }}
            className="relative w-full max-w-[480px] aspect-[1/1.4] bg-[#f4e4bc] dark:bg-[#2a241a] p-8 shadow-[0_0_100px_rgba(0,0,0,0.6)] border-[12px] border-[#3d2b1f] overflow-hidden"
          >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')]" />
            
            {/* Burnt Edges Effect */}
            <div className="absolute inset-0 border-[20px] border-transparent shadow-[inset_0_0_100px_rgba(0,0,0,0.4)] pointer-events-none" />

            <div className="relative h-full flex flex-col items-center text-[#3d2b1f] dark:text-[#f4e4bc]/80">
              {/* Wanted Header */}
              <div className="w-full text-center mb-6 border-b-4 border-[#3d2b1f] pb-4">
                <h2 className="text-7xl font-black tracking-tighter uppercase italic">WANTED</h2>
              </div>

              {/* Portrait Container */}
              <div className="relative w-full aspect-square border-8 border-[#3d2b1f] bg-[#3d2b1f]/10 overflow-hidden shadow-inner group">
                <Image
                  src="/images/profile/anil-hero.webp.jpeg"
                  alt="Marneni Anil Chiranjeeth"
                  fill
                  className="object-cover object-top scale-110 sepia-[0.6] contrast-[1.2] brightness-[0.8] grayscale-[0.2]"
                />
                {/* Infrastructure Overlay on Image */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                    <Cpu size={120} />
                </div>
              </div>

              {/* Name & Alias */}
              <div className="w-full mt-8 text-center space-y-1">
                <h3 className="text-2xl font-bold tracking-widest uppercase">Marneni Anil Chiranjeeth</h3>
                <p className="text-[10px] font-mono font-black tracking-[0.3em] uppercase opacity-60">“THE DISTRIBUTED ENGINEER”</p>
              </div>

              {/* Bounty Value */}
              <div className="mt-auto w-full pt-6 flex flex-col items-center border-t-4 border-[#3d2b1f]/20">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-black">฿ 930,000,000</span>
                </div>
                <div className="mt-2 text-[8px] font-mono font-bold tracking-widest opacity-40 uppercase">
                    Dead or Alive | Low Latency Threat | Event Driven
                </div>
              </div>

              {/* Secret Engineering Insignia */}
              <div className="absolute -bottom-4 -left-4 opacity-5 rotate-12">
                 <ShieldAlert size={120} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

