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
    role: "Backend & Web Developer",
    overrideRole: "SYSTEM_OVERRIDE_ACTIVE",
    title: "Building scalable backend systems and real-time web applications.",
    overrideTitle: "Designing practical backend architectures and workflows.",
    description: "I'm a final-year student developer focused on backend engineering. I enjoy building backend applications, real-time web workflows, and clean APIs using MERN, Redis, and FastAPI.",
  },
  system: {
    statusActive: "System Status: Active",
    statusOverride: "CORE_STATUS: OVERRIDE",
    descriptionActive: "Running containerized local workflows and backend test suites.",
    descriptionOverride: "Executing async background tasks across active containers.",
  }
};
