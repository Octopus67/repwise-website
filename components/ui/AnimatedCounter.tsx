'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ value, duration = 2, prefix = '', suffix = '', className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix]);

  if (prefersReducedMotion) {
    return (
      <span className={`tabular-nums font-mono ${className}`}>
        {prefix}{value.toLocaleString()}{suffix}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={`tabular-nums font-mono ${className}`}
    >
      {prefix}0{suffix}
    </span>
  );
}
