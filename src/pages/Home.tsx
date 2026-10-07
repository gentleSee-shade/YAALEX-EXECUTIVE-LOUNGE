import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { QuickInfoStrip } from '../components/QuickInfoStrip';
import { ReviewsStrip } from '../components/ReviewsStrip';
import { RoomSlider } from '../components/RoomSlider';
import { FacilitiesGrid } from '../components/FacilitiesGrid';
import { PoolFeatureBand } from '../components/PoolFeatureBand';
import { MapBlock } from '../components/MapBlock';
import { FinalCTA } from '../components/FinalCTA';
import { ImageSlot } from '../components/ImageSlot';
import { Button } from '../components/Button';
import { siteConfig } from '../data/siteConfig';
import { galleryItems } from '../data/gallery';
import { useEnquiry } from '../context/EnquiryContext';
import {
  Wifi,
  Utensils,
  Car,
  Shirt,
  Waves,
  HeartHandshake,
  Bed,
  ArrowRight
} from 'lucide-react';

export const Home: React.FC = () => {
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    document.title = "Yaalex Executive Lodge | Takoradi, Ghana";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'A comfortable executive lodge for business and leisure stays in Takoradi, Ghana. Featuring on-site dining, swimming pool, free Wi-Fi, and dedicated parking.'
      );
    }
  }, []);

  const previewGallery = galleryItems.slice(0, 5);

  return (
    <div>
      {/* H1. Hero */}
      <HeroSlider />

      {/* H2. Quick Info Strip */}
      <QuickInfoStrip />

      {/* H3. Welcome Section */}
      <section
        id="welcome-section"
        aria-labelledby="welcome-heading"
        className="section-padding bg-[#F6F2EC] text-[#1C1814]"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Two Overlapping Portrait Photos (offset downward) */}
            <div className="lg:col-span-6 relative flex items-start gap-4 sm:gap-6 pt-4 pb-8">
              <div className="w-[58%] shadow-lg">
                <ImageSlot
                  src="/images/exterior-01.jpg"
                  alt="Yaalex Executive Lodge exterior facade in Takoradi"
                  placeholderLabel="Add photo: Exterior Entrance"
                  aspectRatioClass="aspect-[3/4]"
                  className="rounded-xs"
                />
              </div>
              <div className="w-[50%] -ml-6 sm:-ml-10 mt-12 sm:mt-16 shadow-2xl relative z-10">
                <ImageSlot
                  src="/images/room-type1-01.jpg"
                  alt="Yaalex Executive Lodge comfortable room interior"
                  placeholderLabel="Add photo: Room Interior"
                  aspectRatioClass="aspect-[3/4]"
                  className="rounded-xs border-4 border-[#F6F2EC]"
                />
              </div>
            </div>

            {/* Right: Welcome Text */}
            <div className="lg:col-span-6 space-y-5">
              <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.2em] text-[#8A6340]">
                WELCOME TO YAALEX
              </p>
              <h2
                id="welcome-heading"
                className="font-serif fluid-h2 font-normal text-[#1C1814] leading-[1.2]"
              >
                A Comfortable Base in Takoradi.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#6B6158] leading-relaxed">
                Whether you're visiting Takoradi for business, travelling with family, or simply looking for a comfortable place to stay, Yaalex Executive Lodge provides a convenient base for your visit.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#6B6158] leading-relaxed">
                Located on E. Addo along J.B. Danquah Road in the Nkroful neighbourhood, our property connects you conveniently to the city's key commercial nodes while offering peaceful accommodation at the end of each day.
              </p>
              <div className="pt-2">
                <Link
                  to="/amenities"
                  className="inline-flex items-center gap-2 text-xs uppercase font-sans font-medium tracking-[0.16em] text-[#8A6340] hover:text-[#5E3F24] transition-colors py-2 group"
                >
                  <span>Explore Facilities</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H4. Reviews Strip */}
      <ReviewsStrip />

      {/* H5. Rooms Preview */}
      <RoomSlider />

      {/* H6. Amenities Grid */}
      <FacilitiesGrid />

      {/* H7. Pool Feature Band */}
      <PoolFeatureBand />

      {/* H8. Dining Section */}
      <section
        aria-labelledby="dining-preview-heading"
        className="section-padding bg-[#F6F2EC] text-[#1C1814]"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Asymmetric Restaurant Image */}
            <div className="lg:col-span-7">
              <ImageSlot
                src="/images/restaurant-01.jpg"
                alt="On-site restaurant dining area at Yaalex Executive Lodge"
                placeholderLabel="Add photo: Restaurant Dining Area"
                aspectRatioClass="aspect-[16/10]"
                className="rounded-xs shadow-md"
              />
            </div>

            {/* Right: Dining Copy */}
            <div className="lg:col-span-5 space-y-4">
              <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.2em] text-[#8A6340]">
                ON-SITE RESTAURANT
              </p>
              <h2
                id="dining-preview-heading"
                className="font-serif fluid-h2 font-normal text-[#1C1814]"
              >
                Dine Without Leaving the Lodge.
              </h2>
              <p className="font-sans text-base text-[#6B6158] leading-relaxed">
                Enjoy convenient dining during your stay at Yaalex Executive Lodge. Our on-site kitchen offers prepared meals for lodge guests and local visitors looking for a comfortable table in Takoradi.
              </p>

              <div className="pt-3">
                {siteConfig.menuUrl ? (
                  <Button
                    asAnchor
                    href={siteConfig.menuUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                  >
                    View Menu
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => openEnquiry('Dining Enquiry')}
                  >
                    Ask About Dining
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H9. For Business. For Rest. (Dark Section) */}
      <section
        aria-labelledby="business-heading"
        className="section-padding bg-[#1E1A17] text-[#F3EDE4] border-t border-[#2A241F]"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.25em] text-[#B7895F] mb-3">
              FOCUSED ACCOMMODATION
            </p>
            <h2
              id="business-heading"
              className="font-serif fluid-h2 font-normal text-[#F3EDE4] mb-4"
            >
              For Business. For Rest.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#C9BFB2] leading-relaxed font-light">
              After a day of meetings, work or travel, return to a comfortable environment where you can rest, reconnect and prepare for the next day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-6 bg-[#2A241F] border border-[#B7895F]/15 rounded-xs">
              <Wifi className="w-6 h-6 stroke-[1.25] text-[#B7895F] mb-4" />
              <h3 className="font-serif text-lg text-[#F3EDE4] font-normal mb-1">Wi-Fi Connection</h3>
              <p className="text-xs sm:text-sm text-[#C9BFB2] leading-relaxed">
                Check emails, attend remote calls, and keep communications flowing.
              </p>
            </div>

            <div className="p-6 bg-[#2A241F] border border-[#B7895F]/15 rounded-xs">
              <Utensils className="w-6 h-6 stroke-[1.25] text-[#B7895F] mb-4" />
              <h3 className="font-serif text-lg text-[#F3EDE4] font-normal mb-1">On-Site Restaurant</h3>
              <p className="text-xs sm:text-sm text-[#C9BFB2] leading-relaxed">
                Enjoy hot breakfast and evening meals without having to commute across town.
              </p>
            </div>

            <div className="p-6 bg-[#2A241F] border border-[#B7895F]/15 rounded-xs">
              <Car className="w-6 h-6 stroke-[1.25] text-[#B7895F] mb-4" />
              <h3 className="font-serif text-lg text-[#F3EDE4] font-normal mb-1">Secure Parking</h3>
              <p className="text-xs sm:text-sm text-[#C9BFB2] leading-relaxed">
                Dedicated on-site vehicle parking for peace of mind between trips.
              </p>
            </div>

            <div className="p-6 bg-[#2A241F] border border-[#B7895F]/15 rounded-xs">
              <Shirt className="w-6 h-6 stroke-[1.25] text-[#B7895F] mb-4" />
              <h3 className="font-serif text-lg text-[#F3EDE4] font-normal mb-1">Laundry Service</h3>
              <p className="text-xs sm:text-sm text-[#C9BFB2] leading-relaxed">
                Keep shirts and garments fresh throughout extended business stays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H10. A Stay for the Whole Family (Light Section) */}
      <section
        aria-labelledby="family-heading"
        className="section-padding bg-[#EDE6DC] text-[#1C1814]"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.2em] text-[#8A6340] mb-3">
              FAMILY TRAVEL
            </p>
            <h2
              id="family-heading"
              className="font-serif fluid-h2 font-normal text-[#1C1814] mb-4"
            >
              A Stay for the Whole Family
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#6B6158] leading-relaxed">
              Comfortable accommodation and convenient facilities for travellers visiting Takoradi with family.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E2D8CA]">
              <HeartHandshake className="w-5 h-5 stroke-[1.25] text-[#8A6340] mb-3" />
              <h3 className="font-serif text-base text-[#1C1814] font-normal mb-1">Kid-Friendly</h3>
              <p className="text-xs text-[#6B6158] leading-relaxed">
                A warm, accommodating atmosphere for parents and children.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E2D8CA]">
              <Waves className="w-5 h-5 stroke-[1.25] text-[#8A6340] mb-3" />
              <h3 className="font-serif text-base text-[#1C1814] font-normal mb-1">Swimming Pool</h3>
              <p className="text-xs text-[#6B6158] leading-relaxed">
                Outdoor pool for leisure afternoons and refreshing swims.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E2D8CA]">
              <Utensils className="w-5 h-5 stroke-[1.25] text-[#8A6340] mb-3" />
              <h3 className="font-serif text-base text-[#1C1814] font-normal mb-1">Restaurant</h3>
              <p className="text-xs text-[#6B6158] leading-relaxed">
                Convenient family meals without navigating busy streets.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E2D8CA]">
              <Car className="w-5 h-5 stroke-[1.25] text-[#8A6340] mb-3" />
              <h3 className="font-serif text-base text-[#1C1814] font-normal mb-1">Free Parking</h3>
              <p className="text-xs text-[#6B6158] leading-relaxed">
                Easy loading and unloading for luggage and family vehicles.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E2D8CA]">
              <Bed className="w-5 h-5 stroke-[1.25] text-[#8A6340] mb-3" />
              <h3 className="font-serif text-base text-[#1C1814] font-normal mb-1">Comfortable Rooms</h3>
              <p className="text-xs text-[#6B6158] leading-relaxed">
                Private spaces where the whole family can rest and recharge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H11. Gallery Preview (Asymmetric 5-tile grid) */}
      <section
        aria-labelledby="gallery-preview-heading"
        className="section-padding bg-[#F6F2EC] text-[#1C1814]"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.2em] text-[#8A6340] mb-2 sm:mb-3">
                THE LODGE
              </p>
              <h2
                id="gallery-preview-heading"
                className="font-serif fluid-h2 font-normal text-[#1C1814]"
              >
                See Yaalex for Yourself.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase font-sans font-medium tracking-[0.16em] text-[#8A6340] hover:text-[#5E3F24] transition-colors py-1 group"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Asymmetric 5-tile Grid (2 large, 3 smaller) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            {/* Tile 1 (Large left) */}
            <div className="md:col-span-7">
              <ImageSlot
                src={previewGallery[0]?.src}
                alt={previewGallery[0]?.alt || "Lodge exterior"}
                placeholderLabel={previewGallery[0]?.placeholderLabel || "Add photo: Exterior"}
                aspectRatioClass="aspect-[16/10]"
                className="rounded-xs shadow-sm"
              />
            </div>

            {/* Tile 2 (Large right) */}
            <div className="md:col-span-5">
              <ImageSlot
                src={previewGallery[1]?.src}
                alt={previewGallery[1]?.alt || "Swimming pool"}
                placeholderLabel={previewGallery[1]?.placeholderLabel || "Add photo: Swimming Pool"}
                aspectRatioClass="aspect-[16/10]"
                className="rounded-xs shadow-sm"
              />
            </div>

            {/* Tile 3 */}
            <div className="md:col-span-4">
              <ImageSlot
                src={previewGallery[2]?.src}
                alt={previewGallery[2]?.alt || "Restaurant"}
                placeholderLabel={previewGallery[2]?.placeholderLabel || "Add photo: Restaurant"}
                aspectRatioClass="aspect-[4/3]"
                className="rounded-xs shadow-sm"
              />
            </div>

            {/* Tile 4 */}
            <div className="md:col-span-4">
              <ImageSlot
                src={previewGallery[3]?.src}
                alt={previewGallery[3]?.alt || "Guest Room"}
                placeholderLabel={previewGallery[3]?.placeholderLabel || "Add photo: Guest Bedroom"}
                aspectRatioClass="aspect-[4/3]"
                className="rounded-xs shadow-sm"
              />
            </div>

            {/* Tile 5 */}
            <div className="md:col-span-4">
              <ImageSlot
                src={previewGallery[4]?.src}
                alt={previewGallery[4]?.alt || "Parking area"}
                placeholderLabel={previewGallery[4]?.placeholderLabel || "Add photo: Secure Parking"}
                aspectRatioClass="aspect-[4/3]"
                className="rounded-xs shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* H12. Find Us Map Block */}
      <MapBlock />

      {/* H13. Final Booking CTA */}
      <FinalCTA />
    </div>
  );
};
