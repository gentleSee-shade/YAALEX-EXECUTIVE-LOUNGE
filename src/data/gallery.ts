import { imagePath } from './imagePaths';

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
    id: 'ext-1',
    src: imagePath('lodge-entrance.jpeg'),
    alt: 'Main entrance and facade of Yaalex Executive Lodge in Takoradi',
    category: 'exterior',
    caption: 'Yaalex Executive Lodge entrance',
    placeholderLabel: 'Lodge entrance',
    featuredOnHome: true,
  },
  {
    id: 'pool-1',
    src: imagePath('swimming-pool.jpeg'),
    alt: 'Outdoor swimming pool at Yaalex Executive Lodge',
    category: 'pool',
    caption: 'Outdoor swimming pool',
    placeholderLabel: 'Swimming pool',
    featuredOnHome: true,
  },
  {
    id: 'dining-1',
    src: imagePath('restaurant-dining-room.jpeg'),
    alt: 'Dining room at Yaalex Executive Lodge',
    category: 'restaurant',
    caption: 'On-site restaurant dining room',
    placeholderLabel: 'Restaurant dining room',
    featuredOnHome: true,
  },
  {
    id: 'room-5',
    src: imagePath('guest-room-05.jpeg'),
    alt: 'Guest room with a bed and sitting area',
    category: 'rooms',
    caption: 'Guest bedroom and sitting area',
    placeholderLabel: 'Guest room',
    featuredOnHome: true,
  },
  {
    id: 'property-1',
    src: imagePath('lodge-reception.jpeg'),
    alt: 'Reception and lobby at Yaalex Executive Lodge',
    category: 'property',
    caption: 'Reception and lobby',
    placeholderLabel: 'Lodge reception',
    featuredOnHome: true,
  },
  {
    id: 'ext-2',
    src: imagePath('lodge-entry-walkway.jpeg'),
    alt: 'Walkway leading toward the lodge entrance',
    category: 'exterior',
    caption: 'Walkway to the lodge',
    placeholderLabel: 'Lodge entrance walkway',
  },
  {
    id: 'ext-3',
    src: imagePath('lodge-exterior-road.jpeg'),
    alt: 'Exterior view of Yaalex Executive Lodge from the road',
    category: 'exterior',
    caption: 'Lodge exterior and road',
    placeholderLabel: 'Lodge exterior',
  },
  {
    id: 'property-2',
    src: imagePath('lodge-interior-lobby.jpeg'),
    alt: 'Interior lobby and seating at Yaalex Executive Lodge',
    category: 'property',
    caption: 'Interior lobby',
    placeholderLabel: 'Lodge lobby',
  },
  {
    id: 'property-3',
    src: imagePath('lodge-lobby-overview.jpeg'),
    alt: 'Overview of the lodge lobby and shared interior',
    category: 'property',
    caption: 'Lobby overview',
    placeholderLabel: 'Lodge lobby',
  },
  {
    id: 'room-1',
    src: imagePath('guest-room-01.jpeg'),
    alt: 'Guest bedroom with a bed',
    category: 'rooms',
    caption: 'Guest bedroom',
    placeholderLabel: 'Guest bedroom',
  },
  {
    id: 'room-2',
    src: imagePath('guest-room-02.jpeg'),
    alt: 'Guest bed in a green-walled room',
    category: 'rooms',
    caption: 'Guest bed and room interior',
    placeholderLabel: 'Guest room interior',
  },
  {
    id: 'room-3',
    src: imagePath('guest-room-03.jpeg'),
    alt: 'Guest room with a lounge seating area',
    category: 'rooms',
    caption: 'Guest room seating area',
    placeholderLabel: 'Guest room seating',
  },
  {
    id: 'room-4',
    src: imagePath('guest-room-04.jpeg'),
    alt: 'Guest room with bed and sofa',
    category: 'rooms',
    caption: 'Bedroom and sofa',
    placeholderLabel: 'Guest bedroom and sofa',
  },
  {
    id: 'room-6',
    src: imagePath('guest-room-06.jpeg'),
    alt: 'Guest bedroom with red bedding and wardrobe',
    category: 'rooms',
    caption: 'Bedroom and wardrobe',
    placeholderLabel: 'Guest bedroom',
  },
  {
    id: 'room-7',
    src: imagePath('guest-room-07.jpeg'),
    alt: 'Guest room with television and lounge seating',
    category: 'rooms',
    caption: 'Room with lounge seating',
    placeholderLabel: 'Guest room seating',
  },
  {
    id: 'room-8',
    src: imagePath('guest-room-08.jpeg'),
    alt: 'Guest bedroom with red bedding',
    category: 'rooms',
    caption: 'Guest bedroom',
    placeholderLabel: 'Guest bedroom',
  },
  {
    id: 'room-9',
    src: imagePath('guest-room-09.jpeg'),
    alt: 'Guest room with bed and seating',
    category: 'rooms',
    caption: 'Bedroom and seating',
    placeholderLabel: 'Guest bedroom',
  },
  {
    id: 'room-10',
    src: imagePath('guest-room-10.jpeg'),
    alt: 'Guest bedroom with a bed and chairs',
    category: 'rooms',
    caption: 'Bedroom and chairs',
    placeholderLabel: 'Guest bedroom',
  },
  {
    id: 'property-family',
    src: imagePath('family-at-lodge.jpeg'),
    alt: 'Children enjoying time together at the lodge',
    category: 'property',
    caption: 'Family-friendly stay',
    placeholderLabel: 'Family at the lodge',
  },
  {
    id: 'property-laundry',
    src: imagePath('laundry-service.jpeg'),
    alt: 'Laundry service garments prepared for a guest',
    category: 'property',
    caption: 'Guest laundry service',
    placeholderLabel: 'Laundry service',
  },
  {
    id: 'property-laundry-room',
    src: imagePath('laundry-shop.jpeg'),
    alt: 'Laundry shop interior and service staff',
    category: 'property',
    caption: 'Laundry shop',
    placeholderLabel: 'Laundry service',
  },
  {
    id: 'property-hallway',
    src: imagePath('lodge-interior-hallway.jpeg'),
    alt: 'Interior hallway and seating at the lodge',
    category: 'property',
    caption: 'Interior hallway',
    placeholderLabel: 'Lodge hallway',
  },
];
