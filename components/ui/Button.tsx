import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F172A] font-semibold',
  secondary: 'bg-transparent border border-[#1E293B] hover:border-[#06B6D4] text-[#F1F5F9]',
  ghost: 'bg-transparent hover:bg-white/5 text-[#94A3B8] hover:text-[#F1F5F9]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const styles = `${variantStyles[variant]} ${sizeStyles[size]} inline-flex items-center justify-center gap-2 transition-colors duration-200 ${className}`;
    
    return (
      <button ref={ref} type="button" className={styles} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
