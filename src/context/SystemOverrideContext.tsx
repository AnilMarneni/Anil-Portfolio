"use client";

import { useState, useEffect, createContext, useContext, ReactNode, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { TerminalPanel } from "@/components/ui/TerminalPanel";
import { TelemetryOverlays } from "@/components/ui/TelemetryOverlays";

interface SystemOverrideContextType {
  isOverrideActive: boolean;
}

const OverrideContext = createContext<SystemOverrideContextType>({
  isOverrideActive: false,
});

export const useSystemOverride = () => useContext(OverrideContext);

interface SystemOverrideProviderProps {
  children: ReactNode;
}

export function SystemOverrideProvider({ children }: SystemOverrideProviderProps) {
  const [isOverrideActive, setIsOverrideActive] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const sequenceRef = useRef("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Shortcut: Ctrl + Shift + D
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") {
        e.preventDefault();
        setIsOverrideActive((prev) => !prev);
        return;
      }

      // Typing Sequence: :sys
      if (e.key.length === 1) {
        sequenceRef.current = (sequenceRef.current + e.key.toLowerCase()).slice(-4);
        if (sequenceRef.current === ":sys") {
          setIsOverrideActive(true);
          setIsTerminalOpen(true);
          sequenceRef.current = "";
        }
      }

      // Escape to close terminal but keep override
      if (e.key === "Escape") {
        setIsTerminalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <OverrideContext.Provider value={{ isOverrideActive }}>
      {children}
      
      <AnimatePresence>
        {isOverrideActive && <TelemetryOverlays isActive={isOverrideActive} />}
      </AnimatePresence>

      <AnimatePresence>
        {isTerminalOpen && (
          <TerminalPanel onClose={() => setIsTerminalOpen(false)} />
        )}
      </AnimatePresence>
    </OverrideContext.Provider>
  );
}
