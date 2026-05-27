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
    role: "Backend & Systems-Oriented Developer",
    overrideRole: "SYSTEM_OVERRIDE_ACTIVE",
    title: "Designing scalable backends and systems-oriented architectures.",
    overrideTitle: "Building modular, production-inspired backend systems that scale.",
    description: "I'm a backend-focused student engineer passionate about designing clean MERN APIs, caching layer workflows, and scalable systems. I love translating database design and distributed concepts into reliable software.",
  },
  system: {
    statusActive: "System Status: Active",
    statusOverride: "CORE_STATUS: OVERRIDE",
    descriptionActive: "Calibrating systems-oriented workflows for local container environments.",
    descriptionOverride: "Executing asynchronous task events across containerized worker nodes.",
  }
};
