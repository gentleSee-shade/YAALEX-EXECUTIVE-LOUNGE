import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { rooms } from '../data/rooms';
import { useEnquiry } from '../context/EnquiryContext';
import { Button } from './Button';
import { ImageSlot } from './ImageSlot';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export const RoomSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openEnquiry } = useEnquiry();
  const touchStartX = useRef<number | null>(null);

  const currentRoom = rooms[currentIndex] || rooms[0];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % rooms.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  };

  return (
    <section aria-labelledby="rooms-slider-heading" className="bg-[#EDE6DC] section-padding text-[#1C1814] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.2em] text-[#8A6340] mb-2 sm:mb-3">
            COMFORTABLE STAYS
          </p>
          <h2 id="rooms-slider-heading" className="font-serif fluid-h2 font-normal text-[#1C1814]">
            Your Room, Your Space.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B6158] mt-3">
            Simple, comfortable lodging accommodations tailored for restful evenings in Takoradi.
          </p>
        </div>

        {/* Featured Room Card (Larita structural benchmark) */}
        <div
          className="relative max-w-5xl mx-auto"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label="Rooms Collection"
        >
          {/* Card Frame */}
          <div
            className="bg-[#FFFFFF] border border-[#E2D8CA] rounded-xs shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[460px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left Column: Room Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Price or Rates on request */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="text-xs uppercase tracking-[0.14em] text-[#6B6158]">
                    {currentRoom.price ? (
                      <span className="font-serif text-2xl text-[#1C1814] font-normal">
                        GH₵ {currentRoom.price}{' '}
                        <span className="text-xs font-sans text-[#6B6158]">/ night</span>
                      </span>
                    ) : (
                      <span className="text-sm font-sans font-medium text-[#8A6340]">
                        Rates on request
                      </span>
                    )}
                  </div>

                  {currentRoom.isPlaceholder && (
                    <span className="inline-flex items-center px-2 py-0.5 text-[10px] uppercase tracking-wider bg-[#EDE6DC] text-[#6B6158] rounded-xs font-sans">
                      Sample Room
                    </span>
                  )}
                </div>

                {/* Room Title */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1814] font-normal mb-3">
                  {currentRoom.name}
                </h3>

                {/* Short description */}
                <p className="font-sans text-sm text-[#6B6158] leading-relaxed mb-6">
                  {currentRoom.description}
                </p>

                {/* Facilities List (2 columns) */}
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-8 pt-4 border-t border-[#EDE6DC]">
                  {/* Verified facts only */}
                  {currentRoom.bed && (
                    <div className="text-xs text-[#1C1814] flex items-center gap-2">
                      <span className="text-[#8A6340] font-bold">·</span>
                      <span>{currentRoom.bed}</span>
                    </div>
                  )}
                  {currentRoom.occupancy && (
                    <div className="text-xs text-[#1C1814] flex items-center gap-2">
                      <span className="text-[#8A6340] font-bold">·</span>
                      <span>{currentRoom.occupancy}</span>
                    </div>
                  )}
                  {currentRoom.size && (
                    <div className="text-xs text-[#1C1814] flex items-center gap-2">
                      <span className="text-[#8A6340] font-bold">·</span>
                      <span>{currentRoom.size}</span>
                    </div>
                  )}
                  {currentRoom.view && (
                    <div className="text-xs text-[#1C1814] flex items-center gap-2">
                      <span className="text-[#8A6340] font-bold">·</span>
                      <span>{currentRoom.view}</span>
                    </div>
                  )}

                  {currentRoom.facilities.slice(0, 4).map((f) => (
                    <div key={f} className="text-xs text-[#1C1814] flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#8A6340] flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#EDE6DC]">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => openEnquiry(currentRoom.name)}
                  className="flex-1"
                >
                  Check Availability
                </Button>
                <Link
                  to="/rooms"
                  className="inline-flex items-center justify-center border border-[#8A6340] text-[#8A6340] hover:bg-[#8A6340]/10 text-xs font-sans uppercase font-medium tracking-[0.14em] px-4 py-3 rounded-xs transition-colors"
                >
                  View Rooms
                </Link>
              </div>
            </div>

            {/* Right Column: Large Room Image */}
            <div className="lg:col-span-7 bg-[#2A241F] min-h-[300px] lg:min-h-full">
              <ImageSlot
                src={currentRoom.images[0]?.src}
                alt={currentRoom.images[0]?.alt || currentRoom.name}
                placeholderLabel={currentRoom.images[0]?.placeholderLabel || `Add photo: ${currentRoom.name}`}
                aspectRatioClass="h-full w-full min-h-[300px] lg:min-h-full"
                className="h-full"
              />
            </div>
          </div>

          {/* Circular Previous / Next Arrows at Card Edges */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#E2D8CA] text-[#1C1814] shadow-md flex items-center justify-center hover:bg-[#F6F2EC] hover:text-[#8A6340] transition-colors focus-visible:outline-2 focus-visible:outline-[#8A6340] z-10"
            aria-label="Previous room"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#E2D8CA] text-[#1C1814] shadow-md flex items-center justify-center hover:bg-[#F6F2EC] hover:text-[#8A6340] transition-colors focus-visible:outline-2 focus-visible:outline-[#8A6340] z-10"
            aria-label="Next room"
          >
            <ChevronRight className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {rooms.map((room, idx) => (
            <button
              key={room.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === currentIndex ? 'w-8 bg-[#8A6340]' : 'w-2 bg-[#C9BFB2] hover:bg-[#8A6340]/50'
              }`}
              aria-label={`Show room ${idx + 1}`}
              aria-current={idx === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
