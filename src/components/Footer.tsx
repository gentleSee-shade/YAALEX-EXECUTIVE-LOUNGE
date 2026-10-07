import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';
import { siteConfig } from '../data/siteConfig';
import { useEnquiry } from '../context/EnquiryContext';
import { Phone, MapPin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { openEnquiry } = useEnquiry();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1A17] text-[#C9BFB2] border-t border-[#2A241F] pt-16 pb-24 lg:pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#2A241F]">
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-4">
            <Logo light={true} />
            <p className="font-sans text-sm leading-relaxed text-[#C9BFB2]/90 pt-2">
              A comfortable executive lodge for business and leisure stays in Takoradi, Ghana. Providing genuine hospitality and essential amenities.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => openEnquiry()}
              >
                Check Availability
              </Button>
            </div>
          </div>

          {/* Column 2: Explore Navigation */}
          <div>
            <h3 className="font-serif text-base text-[#F3EDE4] tracking-wide mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.14em]">
              <li>
                <Link to="/" className="hover:text-[#B7895F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#B7895F] transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/dining" className="hover:text-[#B7895F] transition-colors">
                  Dining & Restaurant
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="hover:text-[#B7895F] transition-colors">
                  Facilities & Amenities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#B7895F] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-[#B7895F] transition-colors">
                  Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="font-serif text-base text-[#F3EDE4] tracking-wide mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B7895F] flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-[#F3EDE4] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B7895F] flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-[#C9BFB2]/90">
                  {siteConfig.address}
                  <span className="block text-[11px] text-[#B7895F] mt-0.5">
                    Plus Code: {siteConfig.plusCode}
                  </span>
                </span>
              </li>

              {siteConfig.whatsappNumber && (
                <li className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-[#B7895F] flex-shrink-0 mt-0.5" />
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F3EDE4] transition-colors text-xs"
                  >
                    WhatsApp: {siteConfig.whatsappNumber}
                  </a>
                </li>
              )}

              {siteConfig.email && (
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B7895F] flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-[#F3EDE4] transition-colors text-xs"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Column 4: Find Us & Reviews */}
          <div>
            <h3 className="font-serif text-base text-[#F3EDE4] tracking-wide mb-4">
              Find Us
            </h3>
            <p className="text-xs text-[#C9BFB2]/90 leading-relaxed mb-3">
              Located on J.B. Danquah Road in the Nkroful neighbourhood of Takoradi, Western Region, Ghana.
            </p>
            <a
              href={siteConfig.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#B7895F] hover:text-[#d1a073] transition-colors font-medium mb-4"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="pt-2">
              <a
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#C9BFB2] hover:text-[#F3EDE4] transition-colors"
              >
                <span className="font-serif font-bold text-[#F3EDE4]">G</span>
                <span>{siteConfig.rating}/5 from {siteConfig.reviewCount} Google reviews</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C9BFB2]/70">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#F3EDE4] transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-[#2A241F]">·</span>
            <Link to="/terms" className="hover:text-[#F3EDE4] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
