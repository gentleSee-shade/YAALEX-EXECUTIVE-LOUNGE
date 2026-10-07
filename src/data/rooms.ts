export interface Room {
  id: string;
  name: string;
  description: string;
  bed?: string;
  occupancy?: string;
  size?: string;
  view?: string;
  facilities: string[];
  price?: number; // In GHS (GH₵) - if undefined or 0, displays "Rates on request"
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
    placeholderLabel: string;
  }>;
  isPlaceholder: boolean;
}

export const rooms: Room[] = [
  {
    id: "room-type-1",
    name: "Room Type 1 (Replace)",
    description: "Comfortable private room designed for business travellers and short-stay visitors in Takoradi, with quiet workspace and en-suite bathroom.",
    bed: "", // Unverified
    occupancy: "", // Unverified
    size: "", // Unverified
    view: "", // Unverified
    facilities: ["Wi-Fi", "Air Conditioning", "En-suite Bathroom"],
    price: undefined, // Unverified -> "Rates on request"
    images: [
      {
        src: "/images/room-type1-01.jpg",
        alt: "Yaalex Executive Lodge - Room Type 1 interior",
        caption: "Room Type 1 primary view",
        placeholderLabel: "Add photo: Room Type 1 Master",
      },
      {
        src: "/images/room-type1-02.jpg",
        alt: "Yaalex Executive Lodge - Room Type 1 bathroom and desk",
        caption: "Room Type 1 work area",
        placeholderLabel: "Add photo: Room Type 1 Desk Area",
      },
      {
        src: "/images/room-type1-03.jpg",
        alt: "Yaalex Executive Lodge - Room Type 1 detail",
        caption: "Room Type 1 en-suite bathroom",
        placeholderLabel: "Add photo: Room Type 1 Bathroom",
      },
    ],
    isPlaceholder: true,
  },
  {
    id: "room-type-2",
    name: "Room Type 2 (Replace)",
    description: "Spacious accommodation suitable for professionals on longer assignments or couples seeking extra room and comfort.",
    bed: "", // Unverified
    occupancy: "", // Unverified
    size: "", // Unverified
    view: "", // Unverified
    facilities: ["Wi-Fi", "Air Conditioning", "En-suite Bathroom"],
    price: undefined, // Unverified -> "Rates on request"
    images: [
      {
        src: "/images/room-type2-01.jpg",
        alt: "Yaalex Executive Lodge - Room Type 2 bedroom area",
        caption: "Room Type 2 bedroom",
        placeholderLabel: "Add photo: Room Type 2 Master",
      },
      {
        src: "/images/room-type2-02.jpg",
        alt: "Yaalex Executive Lodge - Room Type 2 seating corner",
        caption: "Room Type 2 seating area",
        placeholderLabel: "Add photo: Room Type 2 Seating",
      },
    ],
    isPlaceholder: true,
  },
  {
    id: "room-type-3",
    name: "Room Type 3 (Replace)",
    description: "Comfortable room configuration accommodating families or groups travelling together with easy access to lodge amenities.",
    bed: "", // Unverified
    occupancy: "", // Unverified
    size: "", // Unverified
    view: "", // Unverified
    facilities: ["Wi-Fi", "Air Conditioning", "En-suite Bathroom"],
    price: undefined, // Unverified -> "Rates on request"
    images: [
      {
        src: "/images/room-type3-01.jpg",
        alt: "Yaalex Executive Lodge - Room Type 3 family accommodation",
        caption: "Room Type 3 overview",
        placeholderLabel: "Add photo: Room Type 3 Master",
      },
      {
        src: "/images/room-type3-02.jpg",
        alt: "Yaalex Executive Lodge - Room Type 3 wardrobe and entry",
        caption: "Room Type 3 entrance",
        placeholderLabel: "Add photo: Room Type 3 Storage",
      },
    ],
    isPlaceholder: true,
  },
];
