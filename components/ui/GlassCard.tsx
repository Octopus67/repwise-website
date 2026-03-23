'use client';

import { motion, useReducedMotion } from 'motion/react';
import { springs } from '@/lib/animations';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-3xl p-6 ${className}`}
      whileHover={hover && !prefersReducedMotion ? { scale: 1.02, borderColor: 'rgba(6,182,212,0.3)' } : undefined}
      transition={springs.snappy}
    >
      {children}
    </motion.div>
  );
}
