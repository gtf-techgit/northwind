"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  initialScale?: number;
  initialOpacity?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}

const ScaleIn = ({
  children,
  className = "",
  initialScale = 0.5,
  initialOpacity = 0.4, 
  duration = 2,
  delay = 0,
  once = false,
  amount = 0.3,
}: ScaleInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: initialScale, opacity: initialOpacity }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
