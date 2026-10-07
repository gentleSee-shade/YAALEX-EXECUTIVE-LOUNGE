import React, { useState, useEffect, useRef } from 'react';
import { galleryItems, GalleryItem, GalleryCategory } from '../data/gallery';
import { ImageSlot } from '../components/ImageSlot';
import { Lightbox } from '../components/Lightbox';
import { FinalCTA } from '../components/FinalCTA';
import { Eye } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const triggerThumbnailsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    document.title = "Photo Gallery | Yaalex Executive Lodge Takoradi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Browse photo gallery of Yaalex Executive Lodge in Takoradi, Ghana. Photos of exterior grounds, comfortable rooms, outdoor swimming pool, and restaurant.'
      );
    }
  }, []);

  const categories: Array<{ id: GalleryCategory; label: string }> = [
    { id: 'all', label: 'All' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'pool', label: 'Pool' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'property', label: 'Property' },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const handleOpenLightbox = (index: number, itemId: string, el: HTMLElement | null) => {
    triggerThumbnailsRef.current[itemId] = el;
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    if (lightboxIndex !== null && filteredItems[lightboxIndex]) {
      const activeItemId = filteredItems[lightboxIndex].id;
      const triggerEl = triggerThumbnailsRef.current[activeItemId];
      if (triggerEl) {
        triggerEl.focus();
      }
    }
    setLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredItems.length);
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev ?? 0) - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="bg-[#F6F2EC] text-[#1C1814]">
      {/* 1. Page Hero */}
      <section className="bg-[#14110F] text-[#F3EDE4] pt-32 pb-16 sm:pb-20 border-b border-[#2A241F]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans font-medium uppercase text-xs sm:text-[13px] tracking-[0.25em] text-[#B7895F] mb-3">
            VISUAL TOUR
          </p>
          <h1 className="font-serif fluid-h1 font-normal text-[#F3EDE4] mb-4">
            Gallery
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#C9BFB2] max-w-xl mx-auto font-light leading-relaxed">
            A visual overview of Yaalex Executive Lodge, our rooms, grounds, and property facilities.
          </p>
        </div>
      </section>

      {/* 2. Filter Tabs & Live Counter */}
      <section className="pt-12 sm:pt-16 pb-8 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#E2D8CA] pb-6">
          {/* Functional filter buttons styled with clean segment aesthetic */}
          <div
            role="tablist"
            aria-label="Gallery category filters"
            className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#EDE6DC] rounded-xs"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium transition-all duration-200 rounded-xs focus-visible:outline-2 focus-visible:outline-[#8A6340] cursor-pointer ${
                    isActive
                      ? 'bg-[#1E1A17] text-[#F3EDE4] shadow-xs'
                      : 'text-[#6B6158] hover:text-[#1C1814] hover:bg-[#EDE6DC]/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Accessible count announcement */}
          <div
            aria-live="polite"
            className="text-xs uppercase tracking-[0.16em] text-[#8A6340] font-medium"
          >
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'photo' : 'photos'}
          </div>
        </div>
      </section>

      {/* 3. Mixed-Size Gallery Grid */}
      <section className="pb-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: GalleryItem, index: number) => {
            return (
              <figure
                key={item.id}
                className="group relative bg-[#FFFFFF] border border-[#E2D8CA] rounded-xs overflow-hidden shadow-xs cursor-pointer focus-within:ring-2 focus-within:ring-[#8A6340]"
                onClick={(e) => handleOpenLightbox(index, item.id, e.currentTarget)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(index, item.id, e.currentTarget);
                  }
                }}
                tabIndex={0}
                aria-label={`View photo: ${item.caption || item.alt}`}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <ImageSlot
                    src={item.src}
                    alt={item.alt}
                    placeholderLabel={item.placeholderLabel}
                    aspectRatioClass="aspect-[4/3]"
                    className="w-full h-full transition-transform duration-500 group-hover:scale-103"
                  />

                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-[#14110F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-[#1E1A17]/80 text-[#B7895F] flex items-center justify-center border border-[#B7895F]/40">
                      <Eye className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  </div>
                </div>

                <figcaption className="p-3 bg-[#FFFFFF] border-t border-[#EDE6DC] text-xs text-[#6B6158] font-sans flex items-center justify-between">
                  <span className="truncate pr-2">{item.caption}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8A6340] flex-shrink-0">
                    {item.category}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <Lightbox
          item={filteredItems[lightboxIndex]}
          isOpen={lightboxIndex !== null}
          onClose={handleCloseLightbox}
          onNext={handleNextLightbox}
          onPrev={handlePrevLightbox}
          currentIndex={lightboxIndex}
          totalCount={filteredItems.length}
        />
      )}

      {/* 5. Final CTA */}
      <FinalCTA />
    </div>
  );
};
