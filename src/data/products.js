import { media } from "./media";

// =====================================================
// PRODUCT CATEGORIES
// =====================================================

export const productCategories = [
  // =====================================================
  // OUTDOOR FURNITURE
  // =====================================================

  {
    slug: "outdoor-furniture",

    name: "Outdoor Furniture",

    shortName: "Outdoor Furniture",

    tagline: "Furniture that belongs outdoors.",

    intro:
      "Premium outdoor furniture designed for gardens, patios, terraces, poolside spaces, restaurants, hotels and commercial environments.",

    heroLabel: "Outdoor Furniture",

    // Separate furniture images
    heroImage: media.furnitureBanner,
    overviewImage: media.furnitureOverview,
    galleryImage: media.furnitureGallery,
    cardImage: media.furnitureMenu,

    materials: [
      "Powder-Coated Metal",
      "All-Weather Wicker",
      "Outdoor Fabrics",
      "Weatherproof Finishes",
    ],

    groups: [
      {
        title: "Outdoor Seating",
        description:
          "Comfortable seating designed for everyday outdoor use.",
        items: [
          "Outdoor Chairs",
          "Lounge Chairs",
          "Sofas",
          "Armchairs",
          "Benches",
        ],
      },

      {
        title: "Outdoor Dining",
        description:
          "Dining furniture for residential and hospitality spaces.",
        items: [
          "Dining Tables",
          "Dining Chairs",
          "Bar Tables",
          "Bar Stools",
        ],
      },

      {
        title: "Lounge Furniture",
        description:
          "Relaxed furniture for terraces, gardens and poolside areas.",
        items: [
          "Sun Loungers",
          "Day Beds",
          "Coffee Tables",
          "Side Tables",
        ],
      },

      {
        title: "Custom Outdoor Furniture",
        description:
          "Furniture solutions planned around your space and requirements.",
        items: [
          "Custom Sizes",
          "Custom Finishes",
          "Commercial Furniture",
          "Hospitality Furniture",
        ],
      },
    ],

    applications: [
      "Gardens & Patios",
      "Poolsides",
      "Balconies & Terraces",
      "Restaurants, Cafes & Bars",
      "Hotels & Resorts",
      "Corporate Offices & Parks",
      "Residential Spaces",
    ],
  },

  // =====================================================
  // AWNINGS
  // =====================================================

  {
    slug: "awnings",

    name: "Awnings",

    shortName: "Awnings",

    tagline: "Shade and shelter, beautifully engineered.",

    intro:
      "Retractable and fixed awnings designed to provide practical shade and weather protection for homes, restaurants, offices and commercial spaces.",

    heroLabel: "Awnings",

    // Current available awning image
    heroImage: media.awningsImage,

    // Use separate available site image
    overviewImage: media.applicationsImage,

    // Different image for gallery
    galleryImage: media.blogAwnings,

    // Card image
    cardImage: media.awningsImage,

    materials: [
      "Outdoor Acrylic Fabric",
      "Powder-Coated Aluminium",
      "Weatherproof Components",
      "UV-Resistant Fabrics",
    ],

    groups: [
      {
        title: "Retractable Awnings",
        description:
          "Flexible shade systems that allow you to control light and outdoor comfort.",
        items: [
          "Motorised Awnings",
          "Manual Awnings",
          "Patio Awnings",
          "Window Awnings",
        ],
      },

      {
        title: "Fixed Awnings",
        description:
          "Permanent shade structures for areas requiring consistent coverage.",
        items: [
          "Fixed Canopies",
          "Entrance Awnings",
          "Commercial Awnings",
          "Walkway Awnings",
        ],
      },

      {
        title: "Vertical Awnings",
        description:
          "Vertical shading solutions for windows and outdoor areas.",
        items: [
          "Drop Awnings",
          "Vertical Screens",
          "Window Shading",
        ],
      },

      {
        title: "Car Park & Commercial Shade",
        description:
          "Large-area shade solutions for commercial applications.",
        items: [
          "Car Park Shade",
          "Commercial Parking",
          "Outdoor Seating",
          "Walkways",
        ],
      },
    ],

    applications: [
      "Gardens & Patios",
      "Balconies & Terraces",
      "Restaurants, Cafes & Bars",
      "Hotels & Resorts",
      "Corporate Offices",
      "Car Parks",
      "Walkways & Pavements",
    ],
  },

  // =====================================================
  // OUTDOOR UMBRELLAS
  // =====================================================

  {
    slug: "umbrellas",

    name: "Outdoor Umbrellas",

    shortName: "Outdoor Umbrellas",

    tagline: "Flexible shade for every outdoor setting.",

    intro:
      "Premium outdoor umbrellas for restaurants, cafes, hotels, resorts, gardens, poolside spaces and commercial outdoor seating.",

    heroLabel: "Outdoor Umbrellas",

    heroImage: media.outdoorUmbrellasImage,

    overviewImage: media.applicationsImage,

    galleryImage: media.blogUmbrellas,

    cardImage: media.outdoorUmbrellasImage,

    materials: [
      "Outdoor Acrylic Fabric",
      "Aluminium Frames",
      "Powder-Coated Components",
      "Weather-Resistant Materials",
    ],

    groups: [
      {
        title: "Cantilever Umbrellas",
        description:
          "Large-format umbrellas designed to provide unobstructed shade.",
        items: [
          "Roma Umbrellas",
          "Side-Pole Umbrellas",
          "Large Cantilever Systems",
        ],
      },

      {
        title: "Centre Pole Umbrellas",
        description:
          "Classic umbrella systems suitable for dining and lounge areas.",
        items: [
          "Round Umbrellas",
          "Square Umbrellas",
          "Garden Umbrellas",
          "Cafe Umbrellas",
        ],
      },

      {
        title: "Commercial Umbrellas",
        description:
          "Heavy-duty umbrellas designed for hospitality and commercial spaces.",
        items: [
          "Restaurant Umbrellas",
          "Hotel Umbrellas",
          "Poolside Umbrellas",
          "Cafe Umbrellas",
        ],
      },
    ],

    applications: [
      "Gardens & Patios",
      "Poolsides",
      "Restaurants, Cafes & Bars",
      "Hotels & Resorts",
      "Beach Areas",
      "Corporate Outdoor Spaces",
    ],
  },

  // =====================================================
  // SHADE SAILS
  // =====================================================

  {
    slug: "shade-sails",

    name: "Shade Sails",

    shortName: "Shade Sails",

    tagline: "Architectural shade with a lighter footprint.",

    intro:
      "Modern shade sail solutions that combine practical sun protection with clean architectural forms for residential and commercial outdoor spaces.",

    heroLabel: "Shade Sails",

    heroImage: media.shadeSailsImage,

    overviewImage: media.applicationsImage,

    galleryImage: media.blogShadeSails,

    cardImage: media.shadeSailsImage,

    materials: [
      "High-Performance Fabric",
      "Stainless Steel Hardware",
      "Tensioned Cables",
      "Weatherproof Fixings",
    ],

    groups: [
      {
        title: "Residential Shade Sails",
        description:
          "Elegant shade solutions for gardens, patios and terraces.",
        items: [
          "Garden Shade",
          "Patio Shade",
          "Terrace Shade",
          "Poolside Shade",
        ],
      },

      {
        title: "Commercial Shade Sails",
        description:
          "Large-area shade solutions for commercial outdoor environments.",
        items: [
          "Restaurant Shade",
          "Cafe Shade",
          "School Shade",
          "Commercial Spaces",
        ],
      },

      {
        title: "Custom Shade Structures",
        description:
          "Designed around the dimensions and requirements of your site.",
        items: [
          "Custom Shapes",
          "Multiple Sail Systems",
          "Custom Fabric Colours",
          "Custom Fixing Solutions",
        ],
      },
    ],

    applications: [
      "Gardens & Patios",
      "Poolsides",
      "Balconies & Terraces",
      "Restaurants, Cafes & Bars",
      "Hotels & Resorts",
      "Schools & Parks",
      "Walkways & Pavements",
    ],
  },

  // =====================================================
  // TENSILE STRUCTURES
  // =====================================================

  {
    slug: "tensile-structures",

    name: "Tensile Structures",

    shortName: "Tensile Structures",

    tagline: "Engineered shade with architectural presence.",

    intro:
      "Tensile fabric structures designed for large outdoor spaces, entrances, walkways, parking areas, hospitality environments and commercial projects.",

    heroLabel: "Tensile Structures",

    heroImage: media.tensileStructuresImage,

    overviewImage: media.applicationsImage,

    galleryImage: media.blogTensile,

    cardImage: media.tensileStructuresImage,

    materials: [
      "Architectural Fabric",
      "Steel Structures",
      "Engineered Cables",
      "Weatherproof Membranes",
    ],

    groups: [
      {
        title: "Entrance Structures",
        description:
          "Distinctive covered entrances for hotels, offices and commercial buildings.",
        items: [
          "Entrance Canopies",
          "Drop-Off Canopies",
          "Reception Covers",
        ],
      },

      {
        title: "Walkway Structures",
        description:
          "Weather protection for pedestrian movement between outdoor spaces.",
        items: [
          "Covered Walkways",
          "Pedestrian Canopies",
          "Connecting Structures",
        ],
      },

      {
        title: "Car Park Structures",
        description:
          "Large-area shade structures for parking and vehicle areas.",
        items: [
          "Car Park Shade",
          "Parking Canopies",
          "Commercial Parking",
        ],
      },

      {
        title: "Hospitality Structures",
        description:
          "Architectural outdoor structures for hotels, resorts and restaurants.",
        items: [
          "Poolside Structures",
          "Outdoor Dining",
          "Resort Canopies",
          "Event Structures",
        ],
      },
    ],

    applications: [
      "Hotels & Resorts",
      "Restaurants, Cafes & Bars",
      "Corporate Offices & Parks",
      "Car Parks",
      "Walkways & Pavements",
      "Airports",
      "Commercial Spaces",
    ],
  },
];

// =====================================================
// GET PRODUCT BY SLUG
// =====================================================

export const getProductBySlug = (slug) =>
  productCategories.find((product) => product.slug === slug);