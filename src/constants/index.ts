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
    role: "Backend & Systems-Focused Developer",
    overrideRole: "SYSTEM_OVERRIDE_ACTIVE",
    title: "Building scalable backend systems and real-time web applications.",
    overrideTitle: "Designing production-inspired backend architectures and workflows.",
    description: "I'm a backend-focused student engineer passionate about building clean APIs, caching layer workflows, and scalable systems. I love translating database designs and distributed concepts into practical software.",
  },
  system: {
    statusActive: "System Status: Active",
    statusOverride: "CORE_STATUS: OVERRIDE",
    descriptionActive: "Calibrating backend workflows for local container environments.",
    descriptionOverride: "Executing asynchronous task events across containerized worker nodes.",
  }
};
