import { HTMLMotionProps } from "framer-motion";

export const ANIMATION_VARIANTS: Record<string, HTMLMotionProps<"div">> = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  fadeInDelayed: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const UI_STRINGS = {
  hero: {
    role: "Backend & Distributed Systems",
    overrideRole: "SYSTEM_OVERRIDE_ACTIVE",
    title: "Designing scalable systems for high-load applications.",
    overrideTitle: "Building high-performance distributed architecture that scales.",
    description: "I'm a backend engineer focused on distributed architecture, real-time data, and AI-integrated systems. I build software that's reliable, fast, and engineered to scale.",
  },
  system: {
    statusActive: "System Status: Active",
    statusOverride: "CORE_STATUS: OVERRIDE",
    descriptionActive: "Optimizing distributed execution pipelines for production reliability.",
    descriptionOverride: "Executing high-throughput data streams across virtualized environments.",
  }
};
