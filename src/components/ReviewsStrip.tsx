import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ReviewsStrip: React.FC = () => {
  return (
    <section aria-label="Guest Rating" className="bg-[#EDE6DC] border-y border-[#E2D8CA] py-5 sm:py-6">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Simple text Google 'G' glyph */}
          <div className="w-8 h-8 rounded-full bg-[#1C1814] text-[#F3EDE4] flex items-center justify-center font-serif font-bold text-sm select-none">
            G
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl sm:text-2xl text-[#1C1814] font-normal">
              {siteConfig.rating}
            </span>
            <span className="text-xs sm:text-sm text-[#6B6158]">/ 5</span>
            <span className="text-xs sm:text-sm text-[#6B6158] font-sans">
              · {siteConfig.reviewCount} Google reviews
            </span>
          </div>
        </div>

        <a
          href={siteConfig.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium uppercase tracking-[0.14em] text-[#8A6340] hover:text-[#5E3F24] transition-colors group focus-visible:outline-2 focus-visible:outline-[#8A6340]"
        >
          <span>Read Guest Reviews</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};
