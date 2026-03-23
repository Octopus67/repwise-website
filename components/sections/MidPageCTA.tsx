'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

export function MidPageCTA() {
  return (
    <section className="py-16 px-6 bg-white/[0.02]">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-2xl font-semibold text-[#F1F5F9] mb-6">Ready to try it?</p>
          <Link href="/download">
            <Button variant="primary">Start Your Free Trial</Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
