export interface SiteConfig {
  name: string;
  tagline: string;
  category: string;
  address: string;
  street: string;
  neighborhood: string;
  city: string;
  country: string;
  plusCode: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string; // Left blank until confirmed by client
  email: string; // Left blank until confirmed by client
  googleReviewsUrl: string;
  googleMapsDirectionsUrl: string;
  mapEmbedUrl: string;
  menuUrl: string; // Optional: Left blank until menu PDF or link is provided
  poolVideoUrl: string; // Optional: Left blank until property video is available
  checkInTime: string; // e.g. "14:00" - hidden if empty
  checkOutTime: string; // e.g. "11:00" - hidden if empty
  restaurantHours: string; // hidden if empty
  poolHours: string; // hidden if empty
  formEndpoint: string; // POST endpoint for enquiry form; if empty, graceful fallback to direct channels
  rating: number;
  reviewCount: number;
  socials: {
    facebook?: string;
    instagram?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Yaalex Executive Lodge",
  tagline: "A comfortable executive lodge for business and leisure stays in Takoradi.",
  category: "3-star hotel / executive lodge",
  address: "E. Addo, J.B. Danquah Road, Nkroful, Takoradi, Ghana",
  street: "E. Addo, J.B. Danquah Road",
  neighborhood: "Nkroful",
  city: "Takoradi",
  country: "Ghana",
  plusCode: "X722+VXR",
  phone: "+233 31 229 0817",
  phoneRaw: "+233312290817",
  whatsappNumber: "", // Unverified - set e.g. "+233312290817" when confirmed
  email: "", // Unverified - set lodge email when confirmed
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Yaalex+Executive+Lodge+Takoradi",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Yaalex+Executive+Lodge,+E.+Addo,+J.B.+Danquah+Road,+Takoradi,+Ghana",
  mapEmbedUrl: "https://www.google.com/maps?q=Yaalex+Executive+Lodge,+Takoradi,+Ghana&output=embed",
  menuUrl: "", // Unverified
  poolVideoUrl: "", // Unverified
  checkInTime: "", // Unverified - client to confirm
  checkOutTime: "", // Unverified - client to confirm
  restaurantHours: "", // Unverified - client to confirm
  poolHours: "", // Unverified - client to confirm
  formEndpoint: "", // Optional backend or webhook URL
  rating: 3.9,
  reviewCount: 257,
  socials: {},
};
