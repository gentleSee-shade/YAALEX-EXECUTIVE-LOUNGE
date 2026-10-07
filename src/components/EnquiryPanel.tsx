import React, { useEffect, useRef } from 'react';
import { useEnquiry } from '../context/EnquiryContext';
import { X, Calendar } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

export const EnquiryPanel: React.FC = () => {
  const { isOpen, closeEnquiry, selectedRoom } = useEnquiry();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button or first interactive element
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeEnquiry();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, closeEnquiry]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-drawer-title"
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Dimmed backdrop */}
      <div
        onClick={closeEnquiry}
        className="fixed inset-0 bg-[#14110F]/80 backdrop-blur-xs transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Drawer content: bottom sheet on small screens, right drawer on desktop */}
      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-lg h-full max-h-[100dvh] bg-[#1E1A17] text-[#F3EDE4] shadow-2xl flex flex-col overflow-hidden border-l border-[#2A241F] transition-transform duration-300 ease-out animate-in slide-in-from-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#2A241F] bg-[#14110F]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-[#B7895F]/30 flex items-center justify-center text-[#B7895F]">
              <Calendar className="w-4 h-4 stroke-[1.5]" />
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#B7895F]">
                Direct Reservation
              </p>
              <h2 id="enquiry-drawer-title" className="font-serif text-lg sm:text-xl text-[#F3EDE4]">
                Check Availability
              </h2>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeEnquiry}
            className="w-10 h-10 flex items-center justify-center rounded-xs text-[#C9BFB2] hover:text-white hover:bg-[#2A241F] transition-colors focus-visible:outline-2 focus-visible:outline-[#B7895F]"
            aria-label="Close enquiry panel"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 overscroll-contain">
          <EnquiryForm initialRoom={selectedRoom} onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
};
