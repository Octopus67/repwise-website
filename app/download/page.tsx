import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Download | Repwise',
  description: 'Download Repwise for iOS and Android. Completely free.',
  alternates: { canonical: '/download' },
};

export default function DownloadPage() {
  return (
    <section className="pt-32 pb-24 px-6 text-center">
      <ScrollReveal>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Download Repwise
        </h1>
        <p className="text-[#94A3B8] text-lg mb-12">
          Available on iOS and Android
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <span aria-disabled="true" role="link" className="inline-flex items-center gap-3 bg-white/[0.05] border border-white/[0.1] rounded-2xl px-6 py-4 opacity-50 cursor-not-allowed" title="Coming Soon">
            <svg className="w-8 h-8 text-[#F1F5F9]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-[#94A3B8]">Download on the</div>
              <div className="text-lg font-semibold text-[#F1F5F9] leading-tight">App Store</div>
              <div className="text-xs text-[#64748B]">Coming Soon</div>
            </div>
          </span>

          <span aria-disabled="true" role="link" className="inline-flex items-center gap-3 bg-white/[0.05] border border-white/[0.1] rounded-2xl px-6 py-4 opacity-50 cursor-not-allowed" title="Coming Soon">
            <svg className="w-8 h-8 text-[#F1F5F9]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.18 23.73c.44.27.98.25 1.49-.01l11.55-6.67-2.92-2.93-10.12 9.61zM.53 1.27C.2 1.6 0 2.1 0 2.74v18.53c0 .64.2 1.13.53 1.47l.08.07 10.37-10.37v-.24L.61 1.83.53 1.27zM20.16 10.12L17 8.3l-3.22 3.22L17 14.74l3.16-1.82c.9-.52.9-1.37 0-1.89v-.91zM4.67.27L16.22 6.94l-2.92 2.93L3.18.27c-.51-.26-1.05-.28-1.49-.01L4.67.27z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-[#94A3B8]">Get it on</div>
              <div className="text-lg font-semibold text-[#F1F5F9] leading-tight">Google Play</div>
              <div className="text-xs text-[#64748B]">Coming Soon</div>
            </div>
          </span>
        </div>
        <p className="text-sm text-[#64748B] mb-12">App Store links will be available soon.</p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="w-48 h-48 mx-auto border-2 border-dashed border-white/[0.1] rounded-2xl flex items-center justify-center">
          <span className="text-[#64748B] text-sm">QR Code</span>
        </div>
        <p className="text-[#64748B] text-sm mt-4">Scan to download on your device</p>
      </ScrollReveal>
    </section>
  );
}
