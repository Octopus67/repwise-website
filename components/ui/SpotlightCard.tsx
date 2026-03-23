'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { springs } from '@/lib/animations';
import type { ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-3xl p-6 overflow-hidden ${className}`}
      whileHover={!prefersReducedMotion ? { scale: 1.02, borderColor: 'rgba(6,182,212,0.3)' } : undefined}
      transition={springs.snappy}
    >
      {isHovered && !prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6,182,212,0.06), transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
