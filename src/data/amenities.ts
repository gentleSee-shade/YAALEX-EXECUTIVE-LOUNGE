import React from 'react';

export interface Amenity {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: 'wifi' | 'parking' | 'pool' | 'laundry' | 'restaurant' | 'family';
  category: 'essential' | 'leisure' | 'convenience';
}

export const amenitiesList: Amenity[] = [
  {
    id: "wifi",
    title: "Wi-Fi",
    shortDescription: "Stay connected throughout your visit.",
    detailedDescription: "Complimentary wireless internet access across the property, keeping you connected for remote tasks, communication, and planning.",
    iconName: "wifi",
    category: "essential",
  },
  {
    id: "parking",
    title: "Free Parking",
    shortDescription: "Convenient parking for guests arriving by car.",
    detailedDescription: "On-site parking spaces dedicated to staying guests, providing peace of mind and hassle-free vehicle access.",
    iconName: "parking",
    category: "convenience",
  },
  {
    id: "pool",
    title: "Swimming Pool",
    shortDescription: "An outdoor pool to relax and refresh during your stay.",
    detailedDescription: "A refreshing outdoor swimming pool area designed for relaxing after a warm day in Takoradi.",
    iconName: "pool",
    category: "leisure",
  },
  {
    id: "laundry",
    title: "Laundry Service",
    shortDescription: "On-site laundry service for your clothing care.",
    detailedDescription: "Valet laundry and garment care services available for guests on extended stays or business trips.",
    iconName: "laundry",
    category: "convenience",
  },
  {
    id: "restaurant",
    title: "On-Site Restaurant",
    shortDescription: "Dine without leaving the lodge.",
    detailedDescription: "A welcoming on-site dining space serving fresh meals for breakfast, lunch, and dinner, so you don't need to navigate the city when hungry.",
    iconName: "restaurant",
    category: "essential",
  },
  {
    id: "kid-friendly",
    title: "Kid-Friendly",
    shortDescription: "A welcoming environment for families travelling together.",
    detailedDescription: "Thoughtful accommodation layout and friendly lodge environment suitable for parents and children visiting Takoradi.",
    iconName: "family",
    category: "leisure",
  },
];
