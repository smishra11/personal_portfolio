"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: boolean;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  distance = 24,
  blur = false,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: distance,
        filter: blur ? "blur(8px)" : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once,
        margin: "0px 0px -120px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
