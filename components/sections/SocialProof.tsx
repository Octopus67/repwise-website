import { STATS } from '@/lib/constants';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function SocialProof() {
  return (
    <ScrollReveal>
      <section aria-label="Key statistics" className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md px-8 py-10">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i < STATS.length - 1 ? 'md:border-r md:border-white/[0.06]' : ''}`}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={'suffix' in stat ? stat.suffix : ''}
                className="text-3xl font-bold text-[#F1F5F9]"
              />
              <p className="mt-1 text-sm text-[#64748B]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
