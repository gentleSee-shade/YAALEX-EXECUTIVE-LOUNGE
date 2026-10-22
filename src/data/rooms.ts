import { imagePath } from './imagePaths';

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
        src: imagePath('guest-room-05.jpeg'),
        alt: "Guest room with bed and sitting area at Yaalex Executive Lodge",
        caption: "Room Type 1 primary view",
        placeholderLabel: "Guest room",
      },
      {
        src: imagePath('guest-room-06.jpeg'),
        alt: "Guest bedroom with red bedding and wardrobe",
        caption: "Bedroom and wardrobe",
        placeholderLabel: "Guest bedroom",
      },
      {
        src: imagePath('guest-room-08.jpeg'),
        alt: "Guest bedroom with red bedding",
        caption: "Guest bedroom",
        placeholderLabel: "Guest bedroom",
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
        src: imagePath('guest-room-10.jpeg'),
        alt: "Guest bedroom with bed and chairs",
        caption: "Bedroom and chairs",
        placeholderLabel: "Guest bedroom",
      },
      {
        src: imagePath('guest-room-09.jpeg'),
        alt: "Guest room with bed and seating",
        caption: "Bedroom and seating",
        placeholderLabel: "Guest bedroom",
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
        src: imagePath('guest-room-07.jpeg'),
        alt: "Guest room with television and lounge seating",
        caption: "Room with lounge seating",
        placeholderLabel: "Guest room",
      },
      {
        src: imagePath('guest-room-04.jpeg'),
        alt: "Guest room with bed and sofa",
        caption: "Bedroom and sofa",
        placeholderLabel: "Guest room",
      },
    ],
    isPlaceholder: true,
  },
];
