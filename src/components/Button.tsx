import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'secondary-dark' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  asAnchor = false,
  href,
  target,
  rel,
  ...props
}) => {
  const sizeClasses = {
    sm: 'min-h-[40px] px-4 py-2 text-xs',
    md: 'min-h-[48px] px-6 py-3 text-xs tracking-[0.14em]',
    lg: 'min-h-[52px] px-8 py-3.5 text-sm tracking-[0.16em]',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#B7895F] text-[#14110F] font-medium hover:bg-[#A67850] active:bg-[#8A6340] shadow-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B7895F]',
    secondary:
      'border border-[#8A6340] text-[#8A6340] font-medium hover:bg-[#8A6340]/10 active:bg-[#8A6340]/20 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6340]',
    'secondary-dark':
      'border border-[#B7895F] text-[#F3EDE4] font-medium hover:bg-[#B7895F]/15 active:bg-[#B7895F]/25 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B7895F]',
    text:
      'text-[#8A6340] hover:text-[#6A4B2E] font-medium p-0 min-h-0 tracking-[0.14em] underline-offset-4 hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6340]',
  }[variant];

  const baseClasses = `inline-flex items-center justify-center font-sans uppercase rounded-xs transition-colors cursor-pointer select-none group text-center ${sizeClasses} ${variantClasses} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses}>
        {icon && iconPosition === 'left' && <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-0.5">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
