import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Phone, Navigation, Clock } from 'lucide-react';
import { Button } from './Button';

export const MapBlock: React.FC = () => {
  return (
    <section aria-labelledby="find-us-heading" className="bg-[#EDE6DC] section-padding text-[#1C1814]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.2em] text-[#8A6340] mb-2 sm:mb-3">
            LOCATION & DIRECTIONS
          </p>
          <h2 id="find-us-heading" className="font-serif fluid-h2 font-normal text-[#1C1814]">
            Find Us in Takoradi.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B6158] mt-3">
            Situated on E. Addo, J.B. Danquah Road in the Nkroful neighbourhood of Takoradi, Western Region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Map Embed (Left / 7 cols) */}
          <div className="lg:col-span-7 bg-[#2A241F] rounded-xs overflow-hidden border border-[#D5CABB] min-h-[360px] sm:min-h-[420px] shadow-sm">
            <iframe
              src={siteConfig.mapEmbedUrl}
              title="Google Map showing Yaalex Executive Lodge location in Takoradi, Ghana"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[360px] sm:min-h-[420px] border-0"
            />
          </div>

          {/* Details Card (Right / 5 cols) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E2D8CA] rounded-xs p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase font-medium tracking-[0.16em] text-[#8A6340]">
                  Property Address
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1C1814] font-normal mt-1 mb-2">
                  {siteConfig.name}
                </h3>
                <div className="flex items-start gap-3 text-sm text-[#6B6158] leading-relaxed">
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
                  Telephone Direct
                </span>
                <div className="flex items-center gap-3 mt-2">
                  <Phone className="w-4 h-4 text-[#8A6340] flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="font-serif text-lg text-[#1C1814] hover:text-[#8A6340] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Check-in / Check-out if configured */}
              {(siteConfig.checkInTime || siteConfig.checkOutTime) && (
                <div className="pt-4 border-t border-[#EDE6DC]">
                  <span className="text-xs uppercase font-medium tracking-[0.16em] text-[#8A6340]">
                    Lodge Hours
                  </span>
                  <div className="flex items-center gap-3 mt-2 text-xs text-[#6B6158]">
                    <Clock className="w-4 h-4 text-[#8A6340] flex-shrink-0" />
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
      </div>
    </section>
  );
};
