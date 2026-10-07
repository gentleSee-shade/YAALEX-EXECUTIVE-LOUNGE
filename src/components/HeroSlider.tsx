import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from './Button';
import { useEnquiry } from '../context/EnquiryContext';
import { siteConfig } from '../data/siteConfig';

interface HeroSlide {
  id: string;
  src: string;
  alt: string;
  label: string;
}

const slides: HeroSlide[] = [
  {
    id: 'exterior',
    src: '/images/exterior-01.jpg',
    alt: 'Yaalex Executive Lodge entrance in Takoradi, Ghana',
    label: 'Exterior & Grounds',
  },
  {
    id: 'room',
    src: '/images/room-type1-01.jpg',
    alt: 'Guest rooms at Yaalex Executive Lodge',
    label: 'Guest Accommodations',
  },
  {
    id: 'pool',
    src: '/images/pool-01.jpg',
    alt: 'Swimming pool at Yaalex Executive Lodge',
    label: 'Outdoor Pool',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openEnquiry } = useEnquiry();
  const timerRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    timerRef.current = window.setInterval(() => {
      nextSlide();
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  // Handle visibility change (pause when tab hidden)
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  const scrollToWelcome = (e: React.MouseEvent) => {
    e.preventDefault();
    const welcomeEl = document.getElementById('welcome-section');
    if (welcomeEl) {
      welcomeEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-label="Welcome and Lodge Highlights"
      className="relative min-h-[640px] h-[100svh] w-full bg-[#14110F] text-[#F3EDE4] overflow-hidden flex items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Fallback designed placeholder layer if image file does not yet exist */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2A241F] via-[#1E1A17] to-[#14110F]" />

            <img
              src={slide.src}
              alt={slide.alt}
              onError={(e) => {
                // If local image missing, hide broken element so dark atmospheric gradient displays
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
              className="w-full h-full object-cover photo-treatment object-center scale-100 transition-transform duration-[7000ms] ease-out will-change-transform"
            />

            {/* Dark Cinematic Vignette & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] via-[#14110F]/65 to-[#14110F]/80" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#14110F]/30 to-[#14110F]/90 pointer-events-none" />
          </div>
        );
      })}

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-20 pt-28 sm:pt-32">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow Label (No fake stars) */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-6 h-[1px] bg-[#B7895F]/70" aria-hidden="true" />
            <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.25em] text-[#B7895F]">
              EXECUTIVE LODGE · TAKORADI
            </p>
            <span className="w-6 h-[1px] bg-[#B7895F]/70" aria-hidden="true" />
          </div>

          {/* Headline H1 */}
          <h1 className="font-serif fluid-h1 font-normal text-[#F3EDE4] tracking-tight mb-5 sm:mb-6 max-w-2xl drop-shadow-sm">
            Stay Comfortably in Takoradi.
          </h1>

          {/* Supporting line */}
          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#C9BFB2] max-w-2xl mx-auto leading-relaxed font-light mb-8 sm:mb-10">
            A welcoming executive lodge offering comfortable accommodation and essential hotel amenities for business and leisure travellers.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openEnquiry()}
              className="w-full sm:w-auto min-w-[200px]"
            >
              Check Availability
            </Button>

            <a
              href="#welcome-section"
              onClick={scrollToWelcome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans uppercase tracking-[0.18em] text-[#F3EDE4] hover:text-[#B7895F] transition-colors py-3 group focus-visible:outline-2 focus-visible:outline-[#B7895F]"
            >
              <span>Explore the Lodge</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#B7895F]" />
            </a>
          </div>
        </div>
      </div>

      {/* Slider Left & Right Controls */}
      <div className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20">
        <button
          type="button"
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white/20 hover:border-[#B7895F] bg-[#14110F]/40 hover:bg-[#14110F]/80 text-white flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-[#B7895F]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>
      <div className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20">
        <button
          type="button"
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white/20 hover:border-[#B7895F] bg-[#14110F]/40 hover:bg-[#14110F]/80 text-white flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-[#B7895F]"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

      {/* Vertical "Scroll" Indicator on Right Edge (Larita inspiration benchmark) */}
      <div className="hidden md:flex flex-col items-center gap-2 absolute right-8 bottom-12 z-20 select-none">
        <span className="font-sans uppercase text-[10px] tracking-[0.25em] text-[#C9BFB2]/70 rotate-90 origin-bottom translate-y-3">
          SCROLL
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#B7895F] to-transparent mt-8 animate-pulse" />
      </div>

      {/* Slide Indicators & Subtle Google Trust Badge at Bottom Edge */}
      <div className="absolute bottom-6 left-4 sm:left-8 right-4 sm:right-24 z-20 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Slide Dots */}
        <div className="flex items-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentIndex ? 'w-8 bg-[#B7895F]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}: ${slide.label}`}
              aria-current={idx === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>

        {/* Verified Google Trust Badge (Section 1.2 / H1) */}
        <a
          href={siteConfig.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xs bg-[#1E1A17]/80 backdrop-blur-xs border border-[#2A241F] text-xs text-[#C9BFB2] hover:text-[#F3EDE4] transition-colors focus-visible:outline-2 focus-visible:outline-[#B7895F]"
          title="View reviews on Google Maps"
        >
          <span className="font-serif font-bold text-[#F3EDE4] group-hover:text-[#B7895F]">G</span>
          <span className="text-white font-medium">{siteConfig.rating}/5</span>
          <span className="text-[#C9BFB2]/80">from {siteConfig.reviewCount} Google reviews</span>
        </a>
      </div>
    </section>
  );
};
