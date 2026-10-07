import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 sm:mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <p
          className={`font-sans font-medium uppercase text-[12px] sm:text-[13px] tracking-[0.2em] mb-2.5 sm:mb-3 ${
            dark ? 'text-[#B7895F]' : 'text-[#8A6340]'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif fluid-h2 font-normal leading-[1.2] ${
          dark ? 'text-[#F3EDE4]' : 'text-[#1C1814]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 font-sans text-base sm:text-lg leading-relaxed ${
            dark ? 'text-[#C9BFB2]' : 'text-[#6B6158]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
