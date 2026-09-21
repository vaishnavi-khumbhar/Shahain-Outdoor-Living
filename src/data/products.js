import { media } from "./media";

export const productCategories = [
  { slug: "outdoor-furniture", title: "Outdoor Furniture", description: "All-weather outdoor furniture for gardens, patios, terraces, hotels and restaurants." },
  { slug: "awnings", title: "Awnings", description: "Elegant and durable awnings for commercial, residential and outdoor spaces." },
  { slug: "umbrellas", title: "Outdoor Umbrellas", description: "Premium outdoor umbrellas for poolside, terrace, cafe and hospitality spaces." },
  { slug: "shade-sails", title: "Shade Sails", description: "Modern shade sail solutions for clubs, cafes, resorts and outdoor areas." },
  { slug: "tensile-structures", title: "Tensile Structures", description: "Architectural tensile structures designed for large outdoor spaces and developments." },
];

export const products = [
  {
    slug: "outdoor-furniture", title: "Outdoor Furniture", heroLabel: "Outdoor Furniture",
    description: "All-weather furniture designed for gardens, patios, poolsides, restaurants and hospitality spaces.",
    category: "Furniture",
    intro: "All-weatherproof furniture designed for gardens, patios, poolsides, restaurants and hospitality spaces.",
    heroImage: media.furnitureHero, galleryImage: media.furnitureGallery,
    groups: [
      { title: "Dining", items: ["Dining Sets", "Dining Chairs", "Bar Tables & Stools"] },
      { title: "Lounge", items: ["Sofas & Sectionals", "Lounge Chairs", "Daybeds"] },
      { title: "Poolside & Café", items: ["Poolside Loungers", "Café Seating"] },
    ],
  },
  {
    slug: "awnings", title: "Awnings", heroLabel: "Awnings",
    description: "Stylish and practical awnings providing shade and weather protection for commercial and residential spaces.",
    category: "Shade Solutions",
    intro: "Stylish and practical awnings providing shade and weather protection for commercial and residential spaces.",
    heroImage: media.awningsHero, galleryImage: media.awningsGallery,
    groups: [
      { title: "Retractable Awnings", items: ["Manual", "Motorized"] },
      { title: "Fixed Awnings", items: ["Window Awnings", "Entrance Canopies"] },
    ],
  },
  {
    slug: "umbrellas", title: "Outdoor Umbrellas", heroLabel: "Outdoor Umbrellas",
    description: "Premium outdoor umbrellas for hotels, resorts, restaurants, cafes and poolside areas.",
    category: "Shade Solutions",
    intro: "Premium outdoor umbrellas for hotels, resorts, restaurants, cafes and poolside areas.",
    heroImage: media.umbrellaOverview, galleryImage: media.umbrellaGallery,
    groups: [
      { title: "Cantilever Umbrellas", items: ["Single-Post", "Side-Post"] },
      { title: "Center-Pole Umbrellas", items: ["Round", "Square", "Rectangular"] },
    ],
  },
  {
    slug: "shade-sails", title: "Shade Sails", heroLabel: "Shade Sails",
    description: "Contemporary shade sail solutions for clubs, bars, resorts, playgrounds and outdoor spaces.",
    category: "Shade Solutions",
    intro: "Contemporary shade sail solutions for clubs, bars, resorts, playgrounds and outdoor spaces.",
    heroImage: media.shadeSailOverview, galleryImage: media.shadeSailGallery,
    groups: [
      { title: "Fabric Types", items: ["HDPE Mesh", "PVC-Coated"] },
      { title: "Configurations", items: ["Single Sail", "Multi-Sail Layouts"] },
    ],
  },
  {
    slug: "tensile-structures", title: "Tensile Structures", heroLabel: "Tensile Structures",
    description: "Large-scale tensile structures combining architectural design, shade and weather protection.",
    category: "Structures",
    intro: "Large-scale tensile structures combining architectural design, shade and weather protection.",
    heroImage: media.tensileOverview, galleryImage: media.tensileGallery,
    groups: [
      { title: "Structure Types", items: ["Conical", "Hyperbolic Paraboloid", "Cable-Net"] },
      { title: "Applications", items: ["Entrance Canopies", "Parking Shades", "Amphitheatre Roofs"] },
    ],
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getAllProducts = () => products;
export const getProductCategory = (slug) => productCategories.find((c) => c.slug === slug);