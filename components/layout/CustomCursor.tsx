'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[200] hidden md:block h-6 w-6 rounded-full border border-[#06B6D4]/50 mix-blend-difference"
      animate={{ x: pos.x - 12, y: pos.y - 12, opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}
