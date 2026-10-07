import React, { useEffect, useState } from 'react';
import { rooms, Room } from '../data/rooms';
import { siteConfig } from '../data/siteConfig';
import { useEnquiry } from '../context/EnquiryContext';
import { ImageSlot } from '../components/ImageSlot';
import { Button } from '../components/Button';
import { FinalCTA } from '../components/FinalCTA';
import { Check, Info, Clock, Calendar } from 'lucide-react';

export const Rooms: React.FC = () => {
  const { openEnquiry } = useEnquiry();
  const [selectedImageIndices, setSelectedImageIndices] = useState<Record<string, number>>({});

  useEffect(() => {
    document.title = "Rooms & Suites | Yaalex Executive Lodge Takoradi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore rooms and accommodations at Yaalex Executive Lodge in Takoradi, Ghana. Comfortable spaces with air conditioning, Wi-Fi, and en-suite facilities.'
      );
    }
  }, []);

  const handleThumbnailClick = (roomId: string, imgIndex: number) => {
    setSelectedImageIndices((prev) => ({ ...prev, [roomId]: imgIndex }));
  };

  const hasGoodToKnow = Boolean(siteConfig.checkInTime || siteConfig.checkOutTime);

  return (
    <div className="bg-[#F6F2EC] text-[#1C1814]">
      {/* 1. Page Hero (Shorter, Dark) */}
      <section className="bg-[#14110F] text-[#F3EDE4] pt-32 pb-16 sm:pb-20 border-b border-[#2A241F]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.25em] text-[#B7895F] mb-3">
            ACCOMMODATION
          </p>
          <h1 className="font-serif fluid-h1 font-normal text-[#F3EDE4] mb-4">
            Rooms
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#C9BFB2] max-w-xl mx-auto font-light leading-relaxed">
            Quiet, comfortable rooms arranged for restful nights and executive stays in Takoradi.
          </p>
        </div>
      </section>

      {/* 2. Room Card List: One Full-Width Card Per Room Type (Alternating) */}
      <section className="section-padding max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 sm:space-y-20">
          {rooms.map((room: Room, index: number) => {
            const isImageRight = index % 2 === 0;
            const currentImgIndex = selectedImageIndices[room.id] || 0;
            const activeImage = room.images[currentImgIndex] || room.images[0];

            return (
              <article
                key={room.id}
                id={room.id}
                className="bg-[#FFFFFF] border border-[#E2D8CA] rounded-xs shadow-sm overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-7 bg-[#2A241F] flex flex-col justify-between ${
                      isImageRight ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="w-full h-full min-h-[340px] sm:min-h-[420px]">
                      <ImageSlot
                        src={activeImage?.src}
                        alt={activeImage?.alt || room.name}
                        placeholderLabel={activeImage?.placeholderLabel || `Add photo: ${room.name}`}
                        aspectRatioClass="h-full w-full min-h-[340px] sm:min-h-[420px]"
                        className="h-full w-full"
                      />
                    </div>

                    {/* Thumbnails row if room has multiple images */}
                    {room.images.length > 1 && (
                      <div className="p-3 bg-[#1E1A17] border-t border-[#2A241F] flex items-center gap-3 overflow-x-auto">
                        {room.images.map((img, imgIdx) => (
                          <button
                            key={img.src}
                            type="button"
                            onClick={() => handleThumbnailClick(room.id, imgIdx)}
                            className={`w-16 h-12 flex-shrink-0 rounded-xs overflow-hidden border transition-all ${
                              currentImgIndex === imgIdx
                                ? 'border-[#B7895F] opacity-100 ring-1 ring-[#B7895F]'
                                : 'border-transparent opacity-60 hover:opacity-90'
                            }`}
                            aria-label={`View photo ${imgIdx + 1} of ${room.name}`}
                          >
                            <img
                              src={img.src}
                              alt=""
                              onError={(e) => {
                                (e.currentTarget as HTMLElement).style.display = 'none';
                              }}
                              className="w-full h-full object-cover"
                            />
                            <div className="w-full h-full bg-[#2A241F] flex items-center justify-center text-[9px] text-[#C9BFB2]">
                              P{imgIdx + 1}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Details Column */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                      isImageRight ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Rate and Sample Tag */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div>
                          {room.price ? (
                            <span className="font-serif text-2xl text-[#1C1814] font-normal">
                              GH₵ {room.price}{' '}
                              <span className="text-xs font-sans text-[#6B6158]">/ night</span>
                            </span>
                          ) : (
                            <span className="text-sm font-sans font-medium text-[#8A6340]">
                              Rates on request
                            </span>
                          )}
                        </div>

                        {room.isPlaceholder && (
                          <span className="inline-flex items-center px-2 py-0.5 text-[10px] uppercase tracking-wider bg-[#EDE6DC] text-[#6B6158] rounded-xs font-sans">
                            Sample Room
                          </span>
                        )}
                      </div>

                      {/* Room Name */}
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1814] font-normal mb-3">
                        {room.name}
                      </h2>

                      {/* Description */}
                      <p className="font-sans text-sm sm:text-base text-[#6B6158] leading-relaxed mb-6">
                        {room.description}
                      </p>

                      {/* Verified specs */}
                      <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-6 pt-4 border-t border-[#EDE6DC]">
                        {room.bed && (
                          <div className="text-xs text-[#1C1814] flex items-center gap-2">
                            <span className="text-[#8A6340] font-bold">·</span>
                            <span>{room.bed}</span>
                          </div>
                        )}
                        {room.occupancy && (
                          <div className="text-xs text-[#1C1814] flex items-center gap-2">
                            <span className="text-[#8A6340] font-bold">·</span>
                            <span>{room.occupancy}</span>
                          </div>
                        )}
                        {room.size && (
                          <div className="text-xs text-[#1C1814] flex items-center gap-2">
                            <span className="text-[#8A6340] font-bold">·</span>
                            <span>{room.size}</span>
                          </div>
                        )}
                        {room.view && (
                          <div className="text-xs text-[#1C1814] flex items-center gap-2">
                            <span className="text-[#8A6340] font-bold">·</span>
                            <span>{room.view}</span>
                          </div>
                        )}

                        {room.facilities.map((fac) => (
                          <div key={fac} className="text-xs text-[#1C1814] flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#8A6340] flex-shrink-0" />
                            <span>{fac}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pre-selected Action */}
                    <div className="pt-6 border-t border-[#EDE6DC]">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => openEnquiry(room.name)}
                        className="w-full justify-center"
                        icon={<Calendar className="w-4 h-4" />}
                      >
                        Check Availability
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. "Good to Know" Band (Rendered only if values exist in config) */}
      {hasGoodToKnow && (
        <section className="bg-[#EDE6DC] py-12 border-t border-[#E2D8CA]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#8A6340]">
                GUEST INFORMATION
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1C1814] font-normal mt-1">
                Good to Know
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#1C1814]">
              {siteConfig.checkInTime && (
                <div className="flex items-center gap-3 bg-[#FFFFFF] px-5 py-3 rounded-xs border border-[#E2D8CA]">
                  <Clock className="w-4 h-4 text-[#8A6340]" />
                  <span>Check-in: <strong>{siteConfig.checkInTime}</strong></span>
                </div>
              )}
              {siteConfig.checkOutTime && (
                <div className="flex items-center gap-3 bg-[#FFFFFF] px-5 py-3 rounded-xs border border-[#E2D8CA]">
                  <Clock className="w-4 h-4 text-[#8A6340]" />
                  <span>Check-out: <strong>{siteConfig.checkOutTime}</strong></span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 4. Final CTA */}
      <FinalCTA />
    </div>
  );
};
