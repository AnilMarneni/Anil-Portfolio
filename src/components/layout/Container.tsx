"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "main" | "header" | "footer";
  id?: string;
}

export function Container({
  children,
  className = "",
  as: Component = "section",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`container-px py-24 ${className}`}
    >
      {children}
    </Component>
  );
}
