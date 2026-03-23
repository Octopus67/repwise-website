'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export function StickyMobileCTA() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0A0E13]/95 backdrop-blur-lg border-t border-white/5 p-4"
      style={!prefersReducedMotion ? { opacity } : undefined}
    >
      <Link
        href="/download"
        className="block w-full bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F172A] font-semibold text-center py-3 rounded-xl transition-colors"
      >
        Get Repwise Free
      </Link>
    </motion.div>
  );
}
