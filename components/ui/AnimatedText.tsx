'use client';

import { motion, useReducedMotion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  animation?: 'words' | 'chars';
  delay?: number;
  className?: string;
}

export function AnimatedText({ text, as: Tag = 'h1', animation = 'words', delay = 0, className = '' }: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  if (!text) return null;
  const items = animation === 'words' ? text.split(' ') : text.split('');
  const separator = animation === 'words' ? '\u00A0' : '';

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: animation === 'words' ? 0.12 : 0.03, delayChildren: delay } } }}
        className="inline"
      >
        {items.map((item, i) => (
          <motion.span
            key={`${item}-${i}`}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } } }}
            className="inline-block"
          >
            {item}{i < items.length - 1 ? separator : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
