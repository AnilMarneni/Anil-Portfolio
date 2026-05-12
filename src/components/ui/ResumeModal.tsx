"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[90vh] bg-card border border-foreground/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-foreground/5 bg-card/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Resume Preview</h3>
                  <p className="text-xs text-muted-foreground">Marneni_Anil_Chiranjeeth_Resume.pdf</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/Marneni_Anil_Chiranjeeth_Resume.pdf"
                  download="Marneni_Anil_Chiranjeeth_Resume.pdf"
                  className="p-2.5 hover:bg-foreground/5 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                  title="Download Resume"
                >
                  <Download size={20} />
                </a>
                <a
                  href="/Marneni_Anil_Chiranjeeth_Resume.pdf"
                  target="_blank"
                  className="p-2.5 hover:bg-foreground/5 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                  title="Open in New Tab"
                >
                  <ExternalLink size={20} />
                </a>
                <div className="w-px h-6 bg-foreground/10 mx-2" />
                <button
                  onClick={onClose}
                  className="p-2.5 hover:bg-foreground/5 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Viewer */}
            <div className="flex-1 bg-muted/30 overflow-auto p-4 md:p-8 flex justify-center">
              <div className="w-full max-w-4xl bg-white shadow-lg rounded-sm overflow-hidden min-h-[1100px]">
                <iframe
                  src="/Marneni_Anil_Chiranjeeth_Resume.pdf#toolbar=0"
                  className="w-full h-full border-none min-h-[1100px]"
                  title="Resume PDF"
                />
              </div>
            </div>
            
            {/* Mobile Footer (visible only on small screens) */}
            <div className="md:hidden p-4 border-t border-foreground/5 bg-card/50 flex gap-2">
                <a
                  href="/Marneni_Anil_Chiranjeeth_Resume.pdf"
                  download="Marneni_Anil_Chiranjeeth_Resume.pdf"
                  className="flex-1 py-3 bg-foreground text-background rounded-xl font-medium flex items-center justify-center gap-2"
                >
                  <Download size={18} /> Download
                </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

