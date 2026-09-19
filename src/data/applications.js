// =====================================================
// APPLICATIONS
// =====================================================

import {
  Trees,
  Waves,
  Building2,
  Utensils,
  Hotel,
  BriefcaseBusiness,
  Home,
  Car,
  Footprints,
} from "lucide-react";

import { applicationImages } from "./media";

export const applications = [
  {
    label: "GARDENS & PATIOS",
    icon: Trees,
    image: applicationImages["GARDENS & PATIOS"],
  },

  {
    label: "POOLSIDE",
    icon: Waves,
    image: applicationImages["POOLSIDE"],
  },

  {
    label: "BALCONIES & TERRACES",
    icon: Building2,
    image: applicationImages["BALCONIES & TERRACES"],
  },

  {
    label: "RESTAURANTS, CAFES & BARS",
    icon: Utensils,
    image: applicationImages["RESTAURANTS, CAFES & BARS"],
  },

  {
    label: "HOTELS & RESORTS",
    icon: Hotel,
    image: applicationImages["HOTELS & RESORTS"],
  },

  {
    label: "CORPORATE OFFICES & PARKS",
    icon: BriefcaseBusiness,
    image: applicationImages["CORPORATE OFFICES & PARKS"],
  },

  {
    label: "RESIDENTIAL SPACES",
    icon: Home,
    image: applicationImages["RESIDENTIAL SPACES"],
  },

  {
    label: "CAR PARKS",
    icon: Car,
    image: applicationImages["CAR PARKS"],
  },

  {
    label: "WALKWAYS & PAVEMENTS",
    icon: Footprints,
    image: applicationImages["WALKWAYS & PAVEMENTS"],
  },
];