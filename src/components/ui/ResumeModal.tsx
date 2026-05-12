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
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-foreground/5 bg-card/50 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 bg-accent/10 rounded-lg text-accent shrink-0">
                  <FileText size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground truncate">Resume Preview</h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground truncate">Marneni_Anil_Resume.pdf</p>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-4">
                <a
                  href="/Marneni_Anil_Chiranjeeth_Resume.pdf"
                  download="Marneni_Anil_Chiranjeeth_Resume.pdf"
                  className="p-2 sm:p-2.5 hover:bg-foreground/5 rounded-full transition-colors text-muted-foreground hover:text-foreground hidden sm:block"
                  title="Download Resume"
                >
                  <Download size={20} />
                </a>
                <a
                  href="/Marneni_Anil_Chiranjeeth_Resume.pdf"
                  target="_blank"
                  className="p-2 sm:p-2.5 hover:bg-foreground/5 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                  title="Open in New Tab"
                >
                  <ExternalLink size={20} />
                </a>
                <div className="w-px h-6 bg-foreground/10 mx-1 sm:mx-2" />
                <button
                  onClick={onClose}
                  className="p-2 sm:p-2.5 hover:bg-foreground/5 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Viewer */}
            <div className="flex-1 bg-muted/30 overflow-y-auto flex flex-col items-center custom-scrollbar">
              <div className="w-full flex justify-center p-0 sm:p-8 min-h-full">
                <div className="w-full max-w-4xl bg-white shadow-lg sm:rounded-sm overflow-hidden min-h-[1200px] sm:min-h-[1600px] h-auto lg:h-full">
                  <iframe
                    src="/Marneni_Anil_Chiranjeeth_Resume.pdf#view=FitH"
                    className="w-full h-[1200px] sm:h-[1600px] lg:h-full border-none"
                    title="Resume PDF"
                  />
                </div>
              </div>
            </div>
            
            {/* Mobile Footer (visible only on small screens) */}
            <div className="sm:hidden p-4 border-t border-foreground/5 bg-card/50 flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 border border-foreground/10 rounded-xl font-medium flex items-center justify-center gap-2"
                >
                  Close
                </button>
                <a
                  href="/Marneni_Anil_Chiranjeeth_Resume.pdf"
                  download="Marneni_Anil_Chiranjeeth_Resume.pdf"
                  className="flex-[2] py-3 bg-foreground text-background rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform"
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

