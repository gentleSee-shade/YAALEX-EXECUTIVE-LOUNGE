import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { galleryItems } from '../data/gallery';
import { useEnquiry } from '../context/EnquiryContext';
import { ImageSlot } from '../components/ImageSlot';
import { Button } from '../components/Button';
import { FinalCTA } from '../components/FinalCTA';
import { Utensils, Clock, FileText, MessageSquare } from 'lucide-react';

export const Dining: React.FC = () => {
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    document.title = "Dining & Restaurant | Yaalex Executive Lodge Takoradi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'On-site restaurant at Yaalex Executive Lodge in Takoradi, Ghana. Convenient dining and freshly prepared meals for guests and local visitors.'
      );
    }
  }, []);

  const diningGallery = galleryItems.filter((i) => i.category === 'restaurant');

  return (
    <div className="bg-[#F6F2EC] text-[#1C1814]">
      {/* 1. Page Hero */}
      <section className="bg-[#14110F] text-[#F3EDE4] pt-32 pb-16 sm:pb-20 border-b border-[#2A241F]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.25em] text-[#B7895F] mb-3">
            ON-SITE RESTAURANT
          </p>
          <h1 className="font-serif fluid-h1 font-normal text-[#F3EDE4] mb-4">
            Dining
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#C9BFB2] max-w-xl mx-auto font-light leading-relaxed">
            Dine without leaving the lodge with freshly prepared meals in a welcoming, relaxed setting.
          </p>
        </div>
      </section>

      {/* 2. Intro with Restaurant Imagery */}
      <section className="section-padding max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#8A6340]">
              WARM HOSPITALITY
            </span>
            <h2 className="font-serif fluid-h2 font-normal text-[#1C1814]">
              Wholesome Dining for Lodge Guests
            </h2>
            <p className="font-sans text-base text-[#6B6158] leading-relaxed">
              At Yaalex Executive Lodge, our on-site restaurant provides a reliable, welcoming setting where staying guests and local visitors can enjoy wholesome breakfast, lunch, and dinner.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#6B6158] leading-relaxed">
              Whether you are gearing up for morning business meetings in Sekondi-Takoradi or returning in the evening after travel, our kitchen offers comforting food in an unpretentious atmosphere.
            </p>

            {/* Opening Hours Block (Rendered ONLY if configured) */}
            {siteConfig.restaurantHours && (
              <div className="p-4 bg-[#EDE6DC] border border-[#E2D8CA] rounded-xs flex items-center gap-3 text-sm text-[#1C1814]">
                <Clock className="w-5 h-5 text-[#8A6340] flex-shrink-0" />
                <div>
                  <p className="font-medium">Restaurant Hours</p>
                  <p className="text-xs text-[#6B6158] mt-0.5">{siteConfig.restaurantHours}</p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-6">
            <ImageSlot
              src="/images/restaurant-01.jpg"
              alt="Restaurant dining room at Yaalex Executive Lodge"
              placeholderLabel="Add photo: Restaurant Dining Room"
              aspectRatioClass="aspect-[4/3]"
              className="rounded-xs shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 3. Image Mosaic (From Gallery Data) */}
      <section className="bg-[#EDE6DC] py-16 sm:py-20 border-t border-[#E2D8CA]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#8A6340] mb-2">
              THE DINING ROOM
            </p>
            <h2 className="font-serif fluid-h2 font-normal text-[#1C1814]">
              A Welcoming Space to Dine
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#FFFFFF] p-2 rounded-xs border border-[#E2D8CA] shadow-xs">
              <ImageSlot
                src={diningGallery[0]?.src || "/images/restaurant-01.jpg"}
                alt="Restaurant interior"
                placeholderLabel="Add photo: Dining Room Seating"
                aspectRatioClass="aspect-[4/3]"
                className="rounded-xs"
              />
              <p className="p-3 text-xs text-[#6B6158] font-sans">
                {diningGallery[0]?.caption || "Indoor restaurant seating"}
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-2 rounded-xs border border-[#E2D8CA] shadow-xs">
              <ImageSlot
                src={diningGallery[1]?.src || "/images/restaurant-02.jpg"}
                alt="Table setting"
                placeholderLabel="Add photo: Table Setup"
                aspectRatioClass="aspect-[4/3]"
                className="rounded-xs"
              />
              <p className="p-3 text-xs text-[#6B6158] font-sans">
                {diningGallery[1]?.caption || "Comfortable table setting"}
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-2 rounded-xs border border-[#E2D8CA] shadow-xs sm:col-span-2 lg:col-span-1">
              <ImageSlot
                src="/images/pool-01.jpg"
                alt="Poolside beverage and dining"
                placeholderLabel="Add photo: Poolside Refreshment"
                aspectRatioClass="aspect-[4/3]"
                className="rounded-xs"
              />
              <p className="p-3 text-xs text-[#6B6158] font-sans">
                Poolside area for evening refreshments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. Menu Section (Honest handling: no invented dishes) */}
      <section className="section-padding max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto bg-[#FFFFFF] border border-[#E2D8CA] p-8 sm:p-12 rounded-xs shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#F6F2EC] border border-[#EDE6DC] mx-auto flex items-center justify-center text-[#8A6340] mb-4">
            <Utensils className="w-5 h-5 stroke-[1.5]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1814] font-normal mb-3">
            Restaurant Menu
          </h2>

          {siteConfig.menuUrl ? (
            <div>
              <p className="font-sans text-sm sm:text-base text-[#6B6158] leading-relaxed mb-6">
                Browse our current seasonal selections and dining menu.
              </p>
              <Button
                asAnchor
                href={siteConfig.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={<FileText className="w-4 h-4" />}
              >
                View Full Menu
              </Button>
            </div>
          ) : (
            <div>
              <p className="font-sans text-sm sm:text-base text-[#6B6158] leading-relaxed mb-6">
                Our kitchen offers daily dishes and seasonal favourites. For current menu choices, special dietary enquiries, or dining reservations, please speak directly with our team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => openEnquiry('Dining Enquiry')}
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Ask About Dining
                </Button>
                <Button
                  asAnchor
                  href={`tel:${siteConfig.phoneRaw}`}
                  variant="secondary"
                  size="md"
                >
                  Call +233 31 229 0817
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. Final CTA Band */}
      <FinalCTA />
    </div>
  );
};
