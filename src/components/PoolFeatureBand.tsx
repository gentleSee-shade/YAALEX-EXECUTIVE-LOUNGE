import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ImageSlot } from './ImageSlot';
import { Play, X } from 'lucide-react';

export const PoolFeatureBand: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section
        aria-labelledby="pool-feature-heading"
        className="relative min-h-[460px] sm:min-h-[520px] bg-[#14110F] text-[#F3EDE4] overflow-hidden flex items-center justify-center py-20"
      >
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0">
          <ImageSlot
            src="/images/pool-01.jpg"
            alt="Outdoor swimming pool at Yaalex Executive Lodge"
            placeholderLabel="Add photo: Swimming Pool Area"
            aspectRatioClass="h-full w-full"
            className="h-full w-full"
            darkOverlay={true}
          />
        </div>

        {/* Content Centered */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.25em] text-[#B7895F] mb-3">
            RELAX
          </p>
          <h2
            id="pool-feature-heading"
            className="font-serif fluid-h2 font-normal text-[#F3EDE4] mb-4 drop-shadow-sm"
          >
            Take a Moment to Unwind.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#C9BFB2] leading-relaxed max-w-xl mx-auto font-light">
            Enjoy a refreshing swim or relax by the outdoor pool during your stay at Yaalex Executive Lodge.
          </p>

          {/* Conditional Video Play Button: rendered ONLY if POOL_VIDEO_URL exists */}
          {siteConfig.poolVideoUrl && (
            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1E1A17]/80 hover:bg-[#B7895F] text-[#F3EDE4] hover:text-[#14110F] border border-[#B7895F]/50 transition-all duration-200 group"
                aria-label="Play pool video"
              >
                <div className="w-8 h-8 rounded-full bg-[#B7895F] group-hover:bg-[#14110F] flex items-center justify-center text-[#14110F] group-hover:text-[#F3EDE4] transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span className="text-xs uppercase tracking-[0.16em] font-medium">Watch Video</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal if configured */}
      {isVideoModalOpen && siteConfig.poolVideoUrl && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#B7895F] p-2"
            aria-label="Close video modal"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video bg-black">
            <iframe
              src={siteConfig.poolVideoUrl}
              title="Yaalex Lodge Pool Video"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};
