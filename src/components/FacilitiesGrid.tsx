import React from 'react';
import { Wifi, Car, Waves, Shirt, Utensils, HeartHandshake } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { amenitiesList } from '../data/amenities';

export const FacilitiesGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
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

  return (
    <section aria-labelledby="amenities-heading" className="bg-[#F6F2EC] section-padding text-[#1C1814]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="COMFORTABLE & CONVENIENT"
          title="Facilities and amenities."
          description="Everything essential for a comfortable stay in Takoradi, without unneeded clutter."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {amenitiesList.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-[#FFFFFF] border border-[#EDE6DC] p-6 sm:p-8 rounded-xs hover:border-[#8A6340]/40 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-xs bg-[#F6F2EC] flex items-center justify-center mb-5 border border-[#EDE6DC]">
                {getIcon(amenity.iconName)}
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-[#1C1814] font-normal mb-2">
                {amenity.title}
              </h3>
              <p className="font-sans text-sm text-[#6B6158] leading-relaxed">
                {amenity.shortDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
