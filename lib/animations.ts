import type { Transition, Variants } from 'motion/react';

export const springs = {
  snappy: { type: 'spring' as const, stiffness: 400, damping: 30 },
  smooth: { type: 'spring' as const, stiffness: 100, damping: 20 },
  bouncy: { type: 'spring' as const, stiffness: 300, damping: 10 },
  gentle: { type: 'spring' as const, stiffness: 50, damping: 15 },
  apple: { type: 'spring' as const, stiffness: 170, damping: 26 },
} satisfies Record<string, Transition>;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: springs.smooth },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: springs.smooth },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: springs.smooth },
};
