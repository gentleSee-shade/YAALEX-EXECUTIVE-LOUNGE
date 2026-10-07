import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/gallery';

interface LightboxProps {
  item: GalleryItem;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCount: number;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  isOpen,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount,
}) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) onNext();
    if (diff < -50) onPrev();
    touchStartX.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#14110F]/95 backdrop-blur-md p-4 sm:p-6"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top action bar: counter and close */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-[#C9BFB2]">
        <div className="text-xs uppercase tracking-[0.2em]">
          {currentIndex + 1} / {totalCount}
        </div>
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center text-[#F3EDE4] hover:text-[#B7895F] bg-[#1E1A17] rounded-xs border border-[#2A241F] transition-colors focus-visible:outline-2 focus-visible:outline-[#B7895F]"
          aria-label="Close image viewer"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] w-full flex flex-col items-center justify-center">
        <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-xs bg-[#1E1A17] border border-[#2A241F]">
          <img
            src={item.src}
            alt={item.alt}
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
            className="max-h-[72vh] w-auto max-w-full object-contain photo-treatment"
          />

          {/* Designed fallback in case local file not yet uploaded */}
          <div className="p-12 text-center text-[#C9BFB2]">
            <p className="font-serif text-lg text-[#F3EDE4] mb-1">{item.placeholderLabel}</p>
            <p className="text-xs uppercase tracking-wider text-[#B7895F]">Yaalex Executive Lodge</p>
          </div>
        </div>

        {/* Caption */}
        {item.caption && (
          <p className="font-sans text-xs sm:text-sm text-[#C9BFB2] mt-3 text-center max-w-xl">
            {item.caption}
          </p>
        )}
      </div>

      {/* Navigation Controls */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1E1A17]/80 hover:bg-[#1E1A17] border border-[#2A241F] text-[#F3EDE4] hover:text-[#B7895F] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#B7895F]"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
      </button>

      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1E1A17]/80 hover:bg-[#1E1A17] border border-[#2A241F] text-[#F3EDE4] hover:text-[#B7895F] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#B7895F]"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 stroke-[1.5]" />
      </button>
    </div>
  );
};
