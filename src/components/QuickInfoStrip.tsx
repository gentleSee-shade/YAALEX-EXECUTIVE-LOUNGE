import React from 'react';
import { Bed, Wifi, Car, Utensils } from 'lucide-react';

export const QuickInfoStrip: React.FC = () => {
  const items = [
    {
      icon: <Bed className="w-6 h-6 stroke-[1.25] text-[#8A6340]" />,
      title: "Comfortable stay",
      description: "Comfortable accommodation in Takoradi.",
    },
    {
      icon: <Wifi className="w-6 h-6 stroke-[1.25] text-[#8A6340]" />,
      title: "Free Wi-Fi",
      description: "Stay connected throughout your visit.",
    },
    {
      icon: <Car className="w-6 h-6 stroke-[1.25] text-[#8A6340]" />,
      title: "Free parking",
      description: "Convenient parking for guests arriving by car.",
    },
    {
      icon: <Utensils className="w-6 h-6 stroke-[1.25] text-[#8A6340]" />,
      title: "On-site restaurant",
      description: "Dine without leaving the lodge.",
    },
  ];

  return (
    <section aria-label="Lodge Highlights at a Glance" className="relative z-30 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20">
      <div className="bg-[#FFFFFF] text-[#1C1814] info-strip-shadow border border-[#EDE6DC] rounded-xs p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#EDE6DC]">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 pt-5 sm:pt-0 ${
                index > 0 ? 'lg:pl-8' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xs bg-[#F6F2EC] flex items-center justify-center flex-shrink-0 border border-[#EDE6DC]">
                {item.icon}
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg text-[#1C1814] font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#6B6158] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
