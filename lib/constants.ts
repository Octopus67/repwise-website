export const BRAND = {
  name: 'Repwise',
  tagline: 'Science-Based Fitness: Training + Nutrition in One App',
  domain: 'repwise.app',
  telegram: 'https://t.me/repwiseCommunity',
  appStore: '#', // Placeholder until apps are published
  playStore: '#', // Placeholder until apps are published
} as const;

export const PRICING = {
  coachingMonthly: 9.99,
  coachingYearly: 79.99,
} as const;

export const STATS = [
  { value: 3000000, suffix: '+', label: 'Foods in Database' },
  { value: 27, label: 'Micronutrients Tracked' },
  { value: 4, label: 'Types of PR Detection' },
  { value: 60, suffix: '+', label: 'Features' },
] as const;

export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Science', href: '/features#science' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Learn', href: '/blog' },
  { label: 'About', href: '/about' },
] as const;
