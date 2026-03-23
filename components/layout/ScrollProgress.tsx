'use client';

import { motion, useScroll, useReducedMotion } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#06B6D4] z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
