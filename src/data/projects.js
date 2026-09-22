import { projectImages } from "./media";

// =========================================================
// PROJECT SHOWCASE
// =========================================================

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

  // =======================================================
  // HOTEL UMBRELLAS
  // =======================================================

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

  // =======================================================
  // COMMERCIAL AWNINGS
  // =======================================================

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

  // =======================================================
  // TENSILE STRUCTURES
  // =======================================================

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

  // =======================================================
  // SHADE SAILS
  // =======================================================

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

  // =======================================================
  // RESIDENTIAL FURNITURE
  // =======================================================

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

  // =======================================================
  // COMPLETED AWNING INSTALLATIONS
  // From the awnings project catalog / brochure — real,
  // named completed projects. Image reused from the existing
  // commercial-awnings placeholder; swap in a real brochure
  // photo once saved to src/assets/.
  // =======================================================

  {
    slug: "completed-awning-installations",
    category: "awnings",
    sector: "Completed Installations",
    title: "Awning Projects Delivered Across Pune & Mumbai",
    image: projectImages.commercialAwnings,

    clients: [
      "Forbes Marshall – Chakan",
      "Forbes Marshall – Kasarwadi",
      "Flour Works Restaurant, Kharadi",
      "Rocomama Restaurant, WTC Kharadi",
      "Marriott Suites",
      "Panchshil Builders",
      "Sagar Properties",
      "Mr. Vikram Kakade",
      "Mr. Narendra Firodia, Ahmednagar",
      "Private Residence, Boat Club Road",
      "Private Residence, Kondhwa",
      "Private Residence, Chembur, Mumbai",
    ],
  },
];

// =========================================================
// GET PROJECTS BY CATEGORY
// =========================================================

export const getProjectsByCategory = (categorySlug) => {
  return projectShowcase.filter(
    (project) => project.category === categorySlug
  );
};