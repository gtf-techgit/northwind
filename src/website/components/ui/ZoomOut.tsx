"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ZoomOutProps {
  children: ReactNode;
  className?: string;
  initialScale?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}

const ZoomOut = ({
  children,
  className = "",
  initialScale = 1.3,
  duration = 1.2,
  delay = 0,
  once = false,
  amount = 0.3,
}: ZoomOutProps) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: initialScale }}
      whileInView={{ scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomOut;
