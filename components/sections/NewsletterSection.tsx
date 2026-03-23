'use client';

import { useState, FormEvent } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement).value;
    if (honeypot) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error((await res.json()).message ?? 'Something went wrong');
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
      setStatus('error');
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <ScrollReveal>
          <GlassCard className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mb-2">Stay in the Loop</h2>
            <p className="text-[#94A3B8] mb-6">Get training tips, nutrition science, and product updates. No spam.</p>

            {status === 'success' ? (
              <p role="status" className="text-[#06B6D4] font-medium">You&apos;re in! Check your inbox.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[#F1F5F9] placeholder:text-[#64748B] focus:outline-none focus:border-[#06B6D4] transition-colors"
                />
                <Button type="submit" variant="primary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
                </Button>
              </form>
            )}
            {status === 'error' && <p role="alert" className="text-red-400 text-sm mt-3">{errorMsg}</p>}
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
