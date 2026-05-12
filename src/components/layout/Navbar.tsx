"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Moon, Sun, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isLocked) return;
    
    if (latest > lastScrollY.current && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY.current = latest;
  });

  const handleLinkClick = () => {
    setIsLocked(true);
    setIsVisible(true);
    setIsOpen(false);
    // Unlock after the scroll animation is likely finished
    setTimeout(() => setIsLocked(false), 1000);
  };

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Architecture", href: "#architecture" },
    { name: "Resume", href: "#resume" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <motion.div 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex items-center gap-2 p-2 rounded-full glass pointer-events-auto border-foreground/10"
      >
        <div className="flex items-center px-4 py-2 mr-2">
          <Link href="/" className="text-sm font-bold tracking-tighter">
            AC<span className="text-accent">.</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="px-4 py-2 text-xs font-medium transition-colors hover:text-accent rounded-full hover:bg-foreground/5"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="h-4 w-px bg-foreground/10 mx-2 hidden md:block" />

        <div className="flex items-center gap-1">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 transition-colors rounded-full hover:bg-foreground/5 text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <div className="hidden md:flex items-center gap-1">
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors rounded-full hover:bg-foreground/5 text-muted-foreground hover:text-foreground"
              aria-label="GitHub Repository"
            >
              <Github size={16} />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors rounded-full hover:bg-foreground/5 text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden transition-colors rounded-full hover:bg-foreground/5"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-6 top-24 z-40 md:hidden p-6 glass rounded-3xl border-foreground/10"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-lg font-medium py-2 border-b border-foreground/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 pt-4">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${portfolioData.contact.email}`}>
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

