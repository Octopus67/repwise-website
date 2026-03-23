interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'premium' | 'success';
  className?: string;
}

const badgeStyles = {
  default: 'bg-[rgba(6,182,212,0.15)] text-[#06B6D4] border-[#06B6D4]/20',
  premium: 'bg-[rgba(212,175,55,0.15)] text-[#D4AF37] border-[#D4AF37]/20',
  success: 'bg-[rgba(34,197,94,0.15)] text-[#22C55E] border-[#22C55E]/20',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${badgeStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
