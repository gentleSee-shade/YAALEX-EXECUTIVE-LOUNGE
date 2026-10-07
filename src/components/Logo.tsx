import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  imageSrc?: string;
  light?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ imageSrc, light = true, className = '', onClick }) => {
  if (imageSrc) {
    return (
      <Link to="/" onClick={onClick} className={`inline-flex items-center ${className}`} aria-label="Yaalex Executive Lodge - Home">
        <img src={imageSrc} alt="Yaalex Executive Lodge" className="h-10 w-auto object-contain" />
      </Link>
    );
  }

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`group inline-flex flex-col tracking-wider focus-visible:outline-none ${className}`}
      aria-label="Yaalex Executive Lodge - Home"
    >
      <span
        className={`font-serif text-[1.35rem] sm:text-[1.55rem] tracking-[0.16em] leading-none transition-colors duration-200 ${
          light ? 'text-[#F3EDE4] group-hover:text-[#B7895F]' : 'text-[#1C1814] group-hover:text-[#8A6340]'
        }`}
      >
        YAALEX
      </span>
      <span
        className={`font-sans text-[0.62rem] sm:text-[0.68rem] tracking-[0.28em] font-medium uppercase mt-1 transition-colors duration-200 ${
          light ? 'text-[#B7895F]' : 'text-[#8A6340]'
        }`}
      >
        EXECUTIVE LODGE
      </span>
    </Link>
  );
};
