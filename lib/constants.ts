export const BRAND = {
  name: 'Repwise',
  tagline: 'Science-Based Fitness: Training + Nutrition in One App',
  domain: 'repwise.app',
  telegram: 'https://t.me/repwiseCommunity',
  appStore: '#', // Placeholder until apps are published
  playStore: '#', // Placeholder until apps are published
} as const;

export const PRICING = {
  monthly: 9.99,
  yearly: 79.99,
  yearlySavings: '33%',
  trialDays: 7,
  competitorTotal: 402,
  savings: '78%',
} as const;

export const STATS = [
  { value: 3000000, suffix: '+', label: 'Foods in Database' },
  { value: 27, label: 'Micronutrients Tracked' },
  { value: 4, label: 'Types of PR Detection' },
  { value: 60, suffix: '+', label: 'Features' },
] as const;

export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
] as const;
