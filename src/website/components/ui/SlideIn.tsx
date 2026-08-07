"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface SlideInProps {
    children: ReactNode;
    className?: string;
    offsetY?: number;
    duration?: number;
    delay?: number;
    once?: boolean;
    amount?: number;
}

const SlideIn = ({
    children,
    className = "",
    offsetY = 60,
    duration = 0.8,
    delay = 0,
    once = false,
    amount = 0.3,
}: SlideInProps) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: offsetY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount }}
            transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default SlideIn;
