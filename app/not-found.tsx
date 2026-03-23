import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '404 — Repwise',
  description: 'Page not found. Return to the Repwise homepage.',
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold font-mono text-[#06B6D4] sm:text-9xl">404</h1>
      <p className="mt-4 text-xl text-[#94A3B8]">This page skipped leg day.</p>
      <Link href="/" className="mt-8">
        <Button variant="primary" size="md">Go Home</Button>
      </Link>
    </div>
  );
}
