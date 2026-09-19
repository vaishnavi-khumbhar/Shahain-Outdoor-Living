import { projectImages } from "./media";

export const projectShowcase = [
  {
    slug: "hospitality-outdoor-furniture",
    category: "outdoor-furniture",
    sector: "Hospitality",
    title: "Outdoor Furniture for Hotels & Restaurants",
    image: projectImages.hospitalityOutdoorFurniture,
    clients: [
      "JW Marriott",
      "Hilton",
      "Ritz Carlton",
      "4 Points by Sheraton",
      "Rocomama",
      "Pizza Hut",
    ],
  },

  {
    slug: "hospitality-umbrellas",
    category: "umbrellas",
    sector: "Hospitality",
    title: "Poolside & Terrace Umbrellas",
    image: projectImages.hospitalityUmbrellas,
    clients: [
      "Marriott Suites",
      "Breach Candy Club, Mumbai",
      "Bombay Presidency Radio Club, Mumbai",
    ],
  },

  {
    slug: "commercial-awnings",
    category: "awnings",
    sector: "Commercial",
    title: "Awnings for Corporate Campuses",
    image: projectImages.commercialAwnings,
    clients: [
      "Forbes Marshal",
      "Krone Marshall",
      "Bajaj Auto",
      "Siemens",
      "Panchshil",
    ],
  },

  {
    slug: "residential-tensile",
    category: "tensile-structures",
    sector: "Residential Developments",
    title: "Tensile Structures for Residential Projects",
    image: projectImages.residentialTensile,
    clients: [
      "Krisala Developers",
      "Karia Developers",
      "Om Sagar Developers",
      "Kakade Builders",
    ],
  },

  {
    slug: "hospitality-shade-sails",
    category: "shade-sails",
    sector: "Hospitality",
    title: "Shade Sails for Clubs & Bars",
    image: projectImages.hospitalityShadeSails,
    clients: [
      "Flamboyante, Mumbai",
      "Boardwalk, Mumbai",
      "Agents Jack Bar",
      "Fly High",
    ],
  },

  {
    slug: "residential-furniture",
    category: "outdoor-furniture",
    sector: "Residential Developments",
    title: "Furniture for Residential Developments",
    image: projectImages.residentialFurniture,
    clients: [
      "Parmer Builders",
      "Hermes Builders",
      "Clover Builders",
      "Pittie Developers, Mumbai",
    ],
  },
];

export const getProjectsByCategory = (categorySlug) =>
  projectShowcase.filter(
    (project) => project.category === categorySlug
  );