import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { useEnquiry } from '../context/EnquiryContext';
import { Button } from './Button';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative bg-[#14110F] text-[#F3EDE4] py-20 sm:py-28 overflow-hidden"
    >
      {/* Dark Subtle Vignette Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] via-[#1E1A17] to-[#14110F] opacity-95" />
      <div className="absolute inset-0 bg-radial-gradient from-[#B7895F]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.25em] text-[#B7895F] mb-3">
            RESERVATIONS & ENQUIRIES
          </p>
          <h2
            id="cta-heading"
            className="font-serif fluid-h2 font-normal text-[#F3EDE4] mb-4"
          >
            Ready for Your Stay?
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#C9BFB2] leading-relaxed mb-8 sm:mb-10 font-light">
            Check availability and contact Yaalex Executive Lodge to plan your stay in Takoradi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openEnquiry()}
              icon={<Calendar className="w-4 h-4" />}
            >
              Check Availability
            </Button>

            <Button
              asAnchor
              href={`tel:${siteConfig.phoneRaw}`}
              variant="secondary-dark"
              size="lg"
              icon={<Phone className="w-4 h-4" />}
            >
              Call {siteConfig.phone}
            </Button>

            {siteConfig.whatsappNumber && (
              <Button
                asAnchor
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary-dark"
                size="lg"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                WhatsApp
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
