import React, { useEffect } from 'react';
import { amenitiesList, Amenity } from '../data/amenities';
import { siteConfig } from '../data/siteConfig';
import { ImageSlot } from '../components/ImageSlot';
import { FinalCTA } from '../components/FinalCTA';
import {
  Wifi,
  Car,
  Waves,
  Shirt,
  Utensils,
  HeartHandshake,
  Clock,
  Bed
} from 'lucide-react';

export const Amenities: React.FC = () => {
  useEffect(() => {
    document.title = "Facilities & Amenities | Yaalex Executive Lodge Takoradi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore confirmed amenities at Yaalex Executive Lodge in Takoradi: Wi-Fi, swimming pool, on-site restaurant, free parking, laundry service, and kid-friendly environment.'
      );
    }
  }, []);

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'wifi':
        return <Wifi className="w-6 h-6 stroke-[1.25] text-[#8A6340]" />;
      case 'parking':
        return <Car className="w-6 h-6 stroke-[1.25] text-[#8A6340]" />;
      case 'pool':
        return <Waves className="w-6 h-6 stroke-[1.25] text-[#8A6340]" />;
      case 'laundry':
        return <Shirt className="w-6 h-6 stroke-[1.25] text-[#8A6340]" />;
      case 'restaurant':
        return <Utensils className="w-6 h-6 stroke-[1.25] text-[#8A6340]" />;
      case 'family':
        return <HeartHandshake className="w-6 h-6 stroke-[1.25] text-[#8A6340]" />;
      default:
        return <Wifi className="w-6 h-6 stroke-[1.25] text-[#8A6340]" />;
    }
  };

  const getAmenityImage = (id: string) => {
    switch (id) {
      case 'wifi':
        return { src: '/images/room-type1-02.jpg', placeholder: 'Add photo: Wi-Fi & Work Area' };
      case 'parking':
        return { src: '/images/parking-01.jpg', placeholder: 'Add photo: On-Site Parking' };
      case 'pool':
        return { src: '/images/pool-01.jpg', placeholder: 'Add photo: Swimming Pool' };
      case 'laundry':
        return { src: '/images/property-01.jpg', placeholder: 'Add photo: Laundry Service' };
      case 'restaurant':
        return { src: '/images/restaurant-01.jpg', placeholder: 'Add photo: Restaurant Dining' };
      case 'kid-friendly':
        return { src: '/images/pool-02.jpg', placeholder: 'Add photo: Family & Pool Area' };
      default:
        return { src: '/images/exterior-01.jpg', placeholder: 'Add photo: Amenity' };
    }
  };

  return (
    <div className="bg-[#F6F2EC] text-[#1C1814]">
      {/* 1. Page Hero */}
      <section className="bg-[#14110F] text-[#F3EDE4] pt-32 pb-16 sm:pb-20 border-b border-[#2A241F]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.25em] text-[#B7895F] mb-3">
            CONVENIENCE & COMFORT
          </p>
          <h1 className="font-serif fluid-h1 font-normal text-[#F3EDE4] mb-4">
            Amenities
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#C9BFB2] max-w-xl mx-auto font-light leading-relaxed">
            Essential lodge services and leisure facilities to ensure a comfortable stay in Takoradi.
          </p>
        </div>
      </section>

      {/* 2. Detailed Cards for each Confirmed Amenity */}
      <section className="section-padding max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesList.map((amenity: Amenity) => {
            const imgInfo = getAmenityImage(amenity.id);

            return (
              <div
                key={amenity.id}
                className="bg-[#FFFFFF] border border-[#E2D8CA] rounded-xs overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div>
                  <ImageSlot
                    src={imgInfo.src}
                    alt={amenity.title}
                    placeholderLabel={imgInfo.placeholder}
                    aspectRatioClass="aspect-[16/10]"
                  />
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xs bg-[#F6F2EC] flex items-center justify-center border border-[#EDE6DC]">
                        {getAmenityIcon(amenity.iconName)}
                      </div>
                      <h2 className="font-serif text-xl text-[#1C1814] font-normal">
                        {amenity.title}
                      </h2>
                    </div>
                    <p className="font-sans text-sm text-[#6B6158] leading-relaxed">
                      {amenity.detailedDescription}
                    </p>

                    {/* Specific details if configured */}
                    {amenity.id === 'pool' && siteConfig.poolHours && (
                      <div className="mt-4 pt-3 border-t border-[#EDE6DC] flex items-center gap-2 text-xs text-[#8A6340]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Pool Hours: {siteConfig.poolHours}</span>
                      </div>
                    )}
                    {amenity.id === 'restaurant' && siteConfig.restaurantHours && (
                      <div className="mt-4 pt-3 border-t border-[#EDE6DC] flex items-center gap-2 text-xs text-[#8A6340]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Dining Hours: {siteConfig.restaurantHours}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3a. For Business. For Rest. (Dark Section Reused) */}
      <section
        aria-labelledby="business-amenities-heading"
        className="section-padding bg-[#1E1A17] text-[#F3EDE4] border-t border-[#2A241F]"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.25em] text-[#B7895F] mb-3">
              FOCUSED ACCOMMODATION
            </p>
            <h2
              id="business-amenities-heading"
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
              <h3 className="font-serif text-lg text-[#F3EDE4] font-normal mb-1">Wi-Fi</h3>
              <p className="text-xs sm:text-sm text-[#C9BFB2] leading-relaxed">
                Stay connected throughout your visit across rooms and common areas.
              </p>
            </div>

            <div className="p-6 bg-[#2A241F] border border-[#B7895F]/15 rounded-xs">
              <Utensils className="w-6 h-6 stroke-[1.25] text-[#B7895F] mb-4" />
              <h3 className="font-serif text-lg text-[#F3EDE4] font-normal mb-1">Restaurant</h3>
              <p className="text-xs sm:text-sm text-[#C9BFB2] leading-relaxed">
                Enjoy hot meals on site without having to travel across the city.
              </p>
            </div>

            <div className="p-6 bg-[#2A241F] border border-[#B7895F]/15 rounded-xs">
              <Car className="w-6 h-6 stroke-[1.25] text-[#B7895F] mb-4" />
              <h3 className="font-serif text-lg text-[#F3EDE4] font-normal mb-1">Free Parking</h3>
              <p className="text-xs sm:text-sm text-[#C9BFB2] leading-relaxed">
                Convenient parking space reserved for lodge guests arriving by vehicle.
              </p>
            </div>

            <div className="p-6 bg-[#2A241F] border border-[#B7895F]/15 rounded-xs">
              <Shirt className="w-6 h-6 stroke-[1.25] text-[#B7895F] mb-4" />
              <h3 className="font-serif text-lg text-[#F3EDE4] font-normal mb-1">Laundry Service</h3>
              <p className="text-xs sm:text-sm text-[#C9BFB2] leading-relaxed">
                Clothing care services for travellers on extended commercial stays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3b. A Stay for the Whole Family (Light Section Reused) */}
      <section
        aria-labelledby="family-amenities-heading"
        className="section-padding bg-[#EDE6DC] text-[#1C1814]"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.2em] text-[#8A6340] mb-3">
              FAMILY TRAVEL
            </p>
            <h2
              id="family-amenities-heading"
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
                A warm, welcoming lodge environment for travelling families.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E2D8CA]">
              <Waves className="w-5 h-5 stroke-[1.25] text-[#8A6340] mb-3" />
              <h3 className="font-serif text-base text-[#1C1814] font-normal mb-1">Pool</h3>
              <p className="text-xs text-[#6B6158] leading-relaxed">
                Outdoor swimming pool for afternoon family recreation.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E2D8CA]">
              <Utensils className="w-5 h-5 stroke-[1.25] text-[#8A6340] mb-3" />
              <h3 className="font-serif text-base text-[#1C1814] font-normal mb-1">Restaurant</h3>
              <p className="text-xs text-[#6B6158] leading-relaxed">
                Hot meals ready for dinner without leaving the premises.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E2D8CA]">
              <Car className="w-5 h-5 stroke-[1.25] text-[#8A6340] mb-3" />
              <h3 className="font-serif text-base text-[#1C1814] font-normal mb-1">Free Parking</h3>
              <p className="text-xs text-[#6B6158] leading-relaxed">
                Easy loading and vehicle access for family journeys.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-xs border border-[#E2D8CA]">
              <Bed className="w-5 h-5 stroke-[1.25] text-[#8A6340] mb-3" />
              <h3 className="font-serif text-base text-[#1C1814] font-normal mb-1">Rooms</h3>
              <p className="text-xs text-[#6B6158] leading-relaxed">
                Comfortable private spaces to rest after travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <FinalCTA />
    </div>
  );
};
