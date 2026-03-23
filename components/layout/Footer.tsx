import Link from 'next/link';
import { BRAND, NAV_LINKS } from '@/lib/constants';

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-transparent">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06B6D4]/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xl font-bold text-[#F1F5F9] mb-2">{BRAND.name}</p>
            <p className="text-sm text-[#64748B]">{BRAND.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#F1F5F9] mb-4">Product</p>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#F1F5F9] mb-4">Legal</p>
            <div className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">
                  {link.label}
                </Link>
              ))}
              <a href={BRAND.telegram} target="_blank" rel="noopener noreferrer" className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">
                Community
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#1E293B] text-center">
          <p className="text-sm text-[#64748B]">
            Built with 💪 for serious lifters. © {new Date().getFullYear()} {BRAND.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
