"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  animation?: "fade" | "slide-up" | "scale";
}

export default function AnimatedWrapper({ children, delay = 0, animation = "fade" }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const variants: Record<string, Variants> = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6, delay } },
      exit: { opacity: 0, transition: { duration: 0.4 } },
    },
    "slide-up": {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: ["easeOut"] },
      },
      exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay, ease: ["easeOut"] },
      },
      exit: { opacity: 0, scale: 0.8, transition: { duration: 0.4 } },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "exit"}
      variants={variants[animation]}
    >
      {children}
    </motion.div>
  );
}
