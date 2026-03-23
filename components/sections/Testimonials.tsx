import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F1F5F9] text-center mb-4">
            What Lifters Are Saying
          </h2>
          <p className="text-[#94A3B8] text-center max-w-2xl mx-auto mb-8">
            We're collecting feedback from our early users. Real testimonials coming soon.
          </p>
          <div className="flex justify-center">
            <a
              href="https://t.me/repwiseCommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#06B6D4] hover:text-[#0891B2] transition-colors"
            >
              Join our Telegram community to share your experience →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
