'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, BRAND } from '@/lib/constants';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);
  const bgColor = useTransform(bgOpacity, (v: number) => `rgba(10,14,19,${v})`);
  const borderColor = useTransform(borderOpacity, (v: number) => `rgba(255,255,255,${v})`);
  const blur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);

  if (prefersReducedMotion) {
    return (
      <>
        <header
          className="fixed top-0 left-0 right-0 z-50"
          style={{ backgroundColor: 'rgba(10,14,19,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >
          <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-[#F1F5F9]">{BRAND.name}</Link>
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#06B6D4] transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
            <div className="hidden md:block"><Link href="/download"><Button size="sm">Download</Button></Link></div>
          </nav>
        </header>
      </>
    );
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: bgColor, borderBottomColor: borderColor, borderBottomWidth: 1, backdropFilter: blur }}
      >
        <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#F1F5F9]">
            {BRAND.name}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#06B6D4] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/download">
              <Button size="sm">Download</Button>
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden text-[#F1F5F9] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden bg-[#0A0E13]/95 backdrop-blur-lg border-t border-white/5 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-[#94A3B8] hover:text-[#F1F5F9] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/download" className="block mt-4" onClick={() => setMobileOpen(false)}>
              <Button className="w-full">Download</Button>
            </Link>
          </div>
        )}
      </motion.header>
    </>
  );
}
