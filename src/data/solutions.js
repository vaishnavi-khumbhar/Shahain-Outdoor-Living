// Solution-area content, composed from the applications and client sectors
// already verified on shahain.com — no invented claims.

export const solutions = [
  {
    slug: "residential",
    name: "Residential",
    tagline: "Outdoor living for homes, gardens and terraces",
    description:
      "Furniture, awnings, umbrellas and shade sails suited to gardens, patios, poolsides, balconies, porches and lawns — for private residences and residential developments alike.",
    spaces: ["Gardens & patios", "Poolsides", "Balconies & porches", "Terraces & lawns"],
    relatedProducts: ["outdoor-furniture", "awnings", "umbrellas", "shade-sails"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    tagline: "Outdoor spaces for hotels, resorts, restaurants and clubs",
    description:
      "Weatherproof furniture and shade structures for hotels, resorts, restaurants, cafes, bars and clubs — trusted by names including JW Marriott, Hilton, Ritz Carlton and 4 Points by Sheraton.",
    spaces: ["Hotel & resort outdoor seating", "Restaurants, cafes & bars", "Clubs & poolside lounges"],
    relatedProducts: ["outdoor-furniture", "umbrellas", "awnings", "tensile-structures"],
  },
  {
    slug: "commercial",
    name: "Commercial",
    tagline: "Outdoor solutions for offices, developers and industrial groups",
    description:
      "Awnings, tensile structures and outdoor furniture for corporate offices, corporate parks, car parks and residential construction sites — for developers and industrial groups such as Forbes Marshal, Bajaj Auto and Siemens.",
    spaces: ["Corporate offices & parks", "Car parks", "Walkways & pavements", "Construction site amenities"],
    relatedProducts: ["awnings", "tensile-structures", "outdoor-furniture"],
  },
];

// Reverse lookup used on product category pages ("Related Solutions"): which
// sectors is this product actually used in, per the relatedProducts above.
export const getSolutionsByProduct = (productSlug) =>
  solutions.filter((solution) => solution.relatedProducts.includes(productSlug));
