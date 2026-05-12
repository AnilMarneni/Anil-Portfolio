"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-20 space-y-6 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="ui-label text-accent">{label}</span>
        <h2 className="h2 mt-4">
          {title} {subtitle && <span className="text-muted-foreground">{subtitle}</span>}
        </h2>
        {description && (
          <p className="text-muted-foreground text-lg max-w-2xl mt-6 leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
