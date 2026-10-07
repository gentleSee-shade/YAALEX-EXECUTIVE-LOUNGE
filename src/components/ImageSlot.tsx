import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface ImageSlotProps {
  src?: string;
  alt: string;
  placeholderLabel?: string;
  className?: string;
  aspectRatioClass?: string; // e.g. "aspect-[4/3]", "aspect-[16/9]", "aspect-[3/4]"
  objectPosition?: string;
  priority?: boolean;
  darkOverlay?: boolean;
  children?: React.ReactNode;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  src,
  alt,
  placeholderLabel = "Add photo",
  className = "",
  aspectRatioClass = "aspect-[16/10]",
  objectPosition = "center",
  priority = false,
  darkOverlay = false,
  children,
}) => {
  const [loadError, setLoadError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const hasValidSrc = Boolean(src && src.trim().length > 0 && !loadError);

  return (
    <div
      className={`relative overflow-hidden bg-[#2A241F] ${aspectRatioClass} ${className}`}
    >
      {hasValidSrc ? (
        <>
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            style={{ objectPosition }}
            onLoad={() => setIsLoaded(true)}
            onError={() => setLoadError(true)}
            className={`w-full h-full object-cover photo-treatment transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#2A241F] via-[#1E1A17] to-[#14110F] animate-pulse" />
          )}
        </>
      ) : (
        /* Designed placeholder when photo is not yet supplied */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#2A241F] via-[#1E1A17] to-[#14110F] text-[#C9BFB2] select-none">
          {/* Subtle architectural frame */}
          <div className="absolute inset-3 border border-[#B7895F]/20 pointer-events-none" />
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#B7895F]/50 pointer-events-none" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#B7895F]/50 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#B7895F]/50 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#B7895F]/50 pointer-events-none" />

          {/* Decorative subtle geometry */}
          <div className="w-10 h-10 rounded-full border border-[#B7895F]/30 flex items-center justify-center mb-3 text-[#B7895F]">
            <Camera className="w-5 h-5 stroke-[1.25]" />
          </div>

          <p className="font-sans font-medium uppercase tracking-[0.2em] text-[11px] text-[#B7895F] text-center max-w-[85%]">
            {placeholderLabel}
          </p>
          <p className="font-sans text-[11px] text-[#C9BFB2]/70 mt-1 text-center max-w-[80%] line-clamp-1">
            Yaalex Executive Lodge · Takoradi
          </p>
        </div>
      )}

      {/* Dark gradient overlay if required (e.g. for heroes or feature bands) */}
      {darkOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110F]/90 via-[#14110F]/60 to-[#14110F]/30 pointer-events-none" />
      )}

      {children}
    </div>
  );
};
