import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';
import { ClientCursor } from '@/components/layout/ClientCursor';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Repwise | Science-Based Fitness: Training + Nutrition in One App',
  description: 'Adaptive TDEE tracking, progressive overload detection, and hypertrophy-optimized coaching. Built for serious lifters.',
  metadataBase: new URL('https://repwise.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0A0E13] text-[#F1F5F9] font-sans antialiased">
        <SmoothScrollProvider>
          <ClientCursor />
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyMobileCTA />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
