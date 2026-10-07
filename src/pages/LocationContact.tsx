import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { EnquiryForm } from '../components/EnquiryForm';
import { FinalCTA } from '../components/FinalCTA';
import { MapPin, Phone, Mail, MessageSquare, Navigation, Clock } from 'lucide-react';
import { Button } from '../components/Button';

export const LocationContact: React.FC = () => {
  useEffect(() => {
    document.title = "Location & Contact | Yaalex Executive Lodge Takoradi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Find Yaalex Executive Lodge in Takoradi, Ghana on E. Addo, J.B. Danquah Road, Nkroful. Direct phone +233 31 229 0817, Google Maps directions, and online enquiry.'
      );
    }
  }, []);

  return (
    <div className="bg-[#F6F2EC] text-[#1C1814]">
      {/* 1. Page Hero */}
      <section className="bg-[#14110F] text-[#F3EDE4] pt-32 pb-16 sm:pb-20 border-b border-[#2A241F]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.25em] text-[#B7895F] mb-3">
            TAKORADI, GHANA
          </p>
          <h1 className="font-serif fluid-h1 font-normal text-[#F3EDE4] mb-4">
            Find Us in Takoradi
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#C9BFB2] max-w-xl mx-auto font-light leading-relaxed">
            Direct location details, contact numbers, and online availability enquiry.
          </p>
        </div>
      </section>

      {/* 2. Location Map & Direct Contact Card */}
      <section className="section-padding max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
          {/* Map Column */}
          <div className="lg:col-span-7 bg-[#2A241F] rounded-xs overflow-hidden border border-[#D5CABB] min-h-[380px] shadow-sm">
            <iframe
              src={siteConfig.mapEmbedUrl}
              title="Google Map showing location of Yaalex Executive Lodge in Takoradi"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] border-0"
            />
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E2D8CA] rounded-xs p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase font-medium tracking-[0.16em] text-[#8A6340]">
                  Address
                </span>
                <h2 className="font-serif text-2xl text-[#1C1814] font-normal mt-1 mb-2">
                  {siteConfig.name}
                </h2>
                <div className="flex items-start gap-3 text-sm text-[#6B6158]">
                  <MapPin className="w-4 h-4 text-[#8A6340] flex-shrink-0 mt-1" />
                  <div>
                    <p>{siteConfig.address}</p>
                    <p className="text-xs text-[#8A6340] font-medium mt-1">
                      Plus Code: {siteConfig.plusCode}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE6DC]">
                <span className="text-xs uppercase font-medium tracking-[0.16em] text-[#8A6340]">
                  Direct Phone
                </span>
                <div className="flex items-center gap-3 mt-2">
                  <Phone className="w-4 h-4 text-[#8A6340]" />
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="font-serif text-lg text-[#1C1814] hover:text-[#8A6340] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {siteConfig.email && (
                <div className="pt-4 border-t border-[#EDE6DC]">
                  <span className="text-xs uppercase font-medium tracking-[0.16em] text-[#8A6340]">
                    Email
                  </span>
                  <div className="flex items-center gap-3 mt-2">
                    <Mail className="w-4 h-4 text-[#8A6340]" />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-[#1C1814] hover:text-[#8A6340] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              )}

              {siteConfig.whatsappNumber && (
                <div className="pt-4 border-t border-[#EDE6DC]">
                  <span className="text-xs uppercase font-medium tracking-[0.16em] text-[#8A6340]">
                    WhatsApp
                  </span>
                  <div className="flex items-center gap-3 mt-2">
                    <MessageSquare className="w-4 h-4 text-[#8A6340]" />
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1C1814] hover:text-[#8A6340] transition-colors"
                    >
                      {siteConfig.whatsappNumber}
                    </a>
                  </div>
                </div>
              )}

              {(siteConfig.checkInTime || siteConfig.checkOutTime) && (
                <div className="pt-4 border-t border-[#EDE6DC]">
                  <span className="text-xs uppercase font-medium tracking-[0.16em] text-[#8A6340]">
                    Lodge Times
                  </span>
                  <div className="flex items-center gap-3 mt-2 text-xs text-[#6B6158]">
                    <Clock className="w-4 h-4 text-[#8A6340]" />
                    <span>
                      {siteConfig.checkInTime && `Check-in: ${siteConfig.checkInTime} `}
                      {siteConfig.checkOutTime && `· Check-out: ${siteConfig.checkOutTime}`}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-8 mt-6 border-t border-[#EDE6DC]">
              <Button
                asAnchor
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<Navigation className="w-4 h-4" />}
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>

        {/* 3. Inline Full Enquiry Form */}
        <div className="max-w-3xl mx-auto bg-[#1E1A17] text-[#F3EDE4] border border-[#2A241F] rounded-xs p-6 sm:p-10 shadow-lg">
          <div className="text-center mb-8">
            <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#B7895F]">
              SEND AN ENQUIRY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EDE4] font-normal mt-1">
              Check Availability Online
            </h2>
            <p className="text-xs sm:text-sm text-[#C9BFB2] mt-2">
              Fill in your planned dates and contact details below. Our team will verify room availability and contact you directly.
            </p>
          </div>

          <EnquiryForm initialRoom="none" />
        </div>
      </section>

      {/* 4. Final CTA Band */}
      <FinalCTA />
    </div>
  );
};
