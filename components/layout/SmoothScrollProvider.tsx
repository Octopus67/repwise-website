'use client';

import { useEffect } from 'react';
import { useReducedMotion } from 'motion/react';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    let cancelled = false;
    let rafId: number;
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      function raf(time: number) {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
