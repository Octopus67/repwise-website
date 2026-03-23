import type { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Blog — Repwise',
  description: 'Training science, nutrition tips, and product updates from the Repwise team.',
  alternates: { canonical: '/blog' },
};

const posts = [
  { title: 'Why Volume Landmarks Matter More Than You Think', date: 'Jan 15, 2025', category: 'Science', excerpt: 'Understanding MV, MEV, MAV, and MRV is the key to unlocking consistent hypertrophy gains without burning out.' },
  { title: 'The Problem With Calorie Counting Apps', date: 'Jan 8, 2025', category: 'Nutrition', excerpt: 'Most nutrition apps get one thing fundamentally wrong. Here\'s how adaptive TDEE tracking fixes it.' },
  { title: 'Repwise Launch: What We Built and Why', date: 'Jan 1, 2025', category: 'Product', excerpt: 'The story behind building the first app that combines hypertrophy science with full nutrition tracking.' },
];

export default function BlogPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-4">Blog</h1>
          <p className="text-[#94A3B8] text-lg text-center mb-16">
            Articles on training science, nutrition, and product updates. More coming soon.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <GlassCard>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[#06B6D4] bg-[#06B6D4]/10 px-2.5 py-1 rounded-full">{post.category}</span>
                  <span className="text-xs text-[#64748B]">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-[#F1F5F9] mb-1">{post.title}</h2>
                <span className="text-xs text-[#64748B] italic">Coming Soon</span>
                <p className="text-[#94A3B8] text-sm leading-relaxed mt-2">{post.excerpt}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
