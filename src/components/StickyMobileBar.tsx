import React from 'react';
import { Phone, Navigation, Calendar } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useEnquiry } from '../context/EnquiryContext';

interface StickyMobileBarProps {
  isMenuOpen?: boolean;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ isMenuOpen = false }) => {
  const { openEnquiry, isOpen: isEnquiryOpen } = useEnquiry();

  // Hide when enquiry drawer or mobile menu is active
  if (isMenuOpen || isEnquiryOpen) {
    return null;
  }

  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#1E1A17]/95 backdrop-blur-md border-t border-[#2A241F] pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
    >
      <div className="grid grid-cols-3 divide-x divide-[#2A241F] h-14">
        {/* Call */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center text-[#F3EDE4] hover:text-[#B7895F] active:bg-[#2A241F] transition-colors focus-visible:outline-none"
        >
          <Phone className="w-4 h-4 stroke-[1.5] text-[#B7895F] mb-0.5" />
          <span className="text-[10px] font-sans font-medium uppercase tracking-[0.16em]">
            Call
          </span>
        </a>

        {/* Directions */}
        <a
          href={siteConfig.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-[#F3EDE4] hover:text-[#B7895F] active:bg-[#2A241F] transition-colors focus-visible:outline-none"
        >
          <Navigation className="w-4 h-4 stroke-[1.5] text-[#B7895F] mb-0.5" />
          <span className="text-[10px] font-sans font-medium uppercase tracking-[0.16em]">
            Directions
          </span>
        </a>

        {/* Book / Check Availability */}
        <button
          type="button"
          onClick={() => openEnquiry()}
          className="flex flex-col items-center justify-center bg-[#B7895F] text-[#14110F] font-medium active:bg-[#A57850] transition-colors focus-visible:outline-none"
        >
          <Calendar className="w-4 h-4 stroke-[1.75] mb-0.5" />
          <span className="text-[10px] font-sans uppercase tracking-[0.16em] font-semibold">
            Book
          </span>
        </button>
      </div>
    </aside>
  );
};
