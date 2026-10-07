export type GalleryCategory = 'all' | 'rooms' | 'exterior' | 'pool' | 'restaurant' | 'property';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'rooms' | 'exterior' | 'pool' | 'restaurant' | 'property';
  caption: string;
  placeholderLabel: string;
  objectPosition?: string;
  featuredOnHome?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "ext-1",
    src: "/images/exterior-01.jpg",
    alt: "Exterior facade of Yaalex Executive Lodge in Takoradi",
    category: "exterior",
    caption: "Yaalex Executive Lodge front entrance on J.B. Danquah Road",
    placeholderLabel: "Add photo: Lodge Exterior & Entrance",
    featuredOnHome: true,
  },
  {
    id: "pool-1",
    src: "/images/pool-01.jpg",
    alt: "Swimming pool at Yaalex Executive Lodge",
    category: "pool",
    caption: "Outdoor swimming pool for lodge guests",
    placeholderLabel: "Add photo: Swimming Pool",
    featuredOnHome: true,
  },
  {
    id: "dining-1",
    src: "/images/restaurant-01.jpg",
    alt: "On-site restaurant dining room at Yaalex Executive Lodge",
    category: "restaurant",
    caption: "On-site restaurant dining hall",
    placeholderLabel: "Add photo: Restaurant Dining Area",
    featuredOnHome: true,
  },
  {
    id: "room-1",
    src: "/images/room-type1-01.jpg",
    alt: "Comfortable guest bedroom at Yaalex Executive Lodge",
    category: "rooms",
    caption: "Guest room interior and bedding",
    placeholderLabel: "Add photo: Guest Bedroom",
    featuredOnHome: true,
  },
  {
    id: "prop-1",
    src: "/images/parking-01.jpg",
    alt: "Secure vehicle parking at Yaalex Executive Lodge",
    category: "property",
    caption: "On-site guest parking area",
    placeholderLabel: "Add photo: Secure Guest Parking",
    featuredOnHome: true,
  },
  {
    id: "ext-2",
    src: "/images/exterior-02.jpg",
    alt: "Lodge grounds and architectural facade",
    category: "exterior",
    caption: "Lodge grounds and access road",
    placeholderLabel: "Add photo: Property Grounds",
  },
  {
    id: "pool-2",
    src: "/images/pool-02.jpg",
    alt: "Poolside loungers and relaxation area",
    category: "pool",
    caption: "Poolside seating for guests",
    placeholderLabel: "Add photo: Poolside Seating",
  },
  {
    id: "dining-2",
    src: "/images/restaurant-02.jpg",
    alt: "Restaurant table setting and meal service",
    category: "restaurant",
    caption: "Breakfast and dinner dining setting",
    placeholderLabel: "Add photo: Restaurant Table Detail",
  },
  {
    id: "room-2",
    src: "/images/room-type2-01.jpg",
    alt: "Spacious executive room accommodation",
    category: "rooms",
    caption: "Executive room arrangement",
    placeholderLabel: "Add photo: Executive Room Suite",
  },
  {
    id: "prop-2",
    src: "/images/property-01.jpg",
    alt: "Lodge reception and welcoming foyer",
    category: "property",
    caption: "Guest reception and entry foyer",
    placeholderLabel: "Add photo: Reception Foyer",
  },
];
