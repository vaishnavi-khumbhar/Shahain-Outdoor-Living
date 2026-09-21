import { blogImages } from "./media";

// =========================================================
// BLOG POSTS
// =========================================================

export const blogPosts = [
  {
    slug: "choosing-outdoor-furniture-material-pune-climate",
    title: "Choosing the Right Outdoor Furniture Material for Pune's Climate",
    category: "Outdoor Furniture",
    readTime: "4 min read",
    image: blogImages.furniture,
    excerpt:
      "Wood, wicker and metal each behave differently through Pune's heat, monsoon and dust. Here's how to choose.",
    body: [
      "Pune's climate swings between sharp summer heat, a heavy monsoon and a cool, dry winter — and outdoor furniture has to survive all three without losing its finish or its structure.",
      "Wood brings warmth and a classic look, but needs a weatherproof finish and periodic resealing if it's left uncovered through the monsoon. It's a strong choice for covered patios and verandas.",
      "Wicker — natural or synthetic — is lighter and works well for loungers and accent seating. Synthetic (all-weather) wicker resists moisture better than natural cane and is the more practical pick for poolside or fully exposed spaces.",
      "Metal furniture, powder-coated to resist corrosion, holds up well to sun and rain and suits a more contemporary, minimal look. It's a common choice for restaurant and cafe seating, where durability under daily use matters more than anything else.",
      "In practice, most outdoor spaces do best with a mix: metal or wicker for pieces that stay exposed, and wood for furniture under a covered area such as a veranda or awning.",
    ],
  },

  {
    slug: "retractable-vs-fixed-awnings",
    title: "Retractable vs Fixed Awnings: Which Suits Your Space?",
    category: "Awnings",
    readTime: "3 min read",
    image: blogImages.awnings,
    excerpt:
      "The right awning depends on how much control you want over shade, light and airflow through the year.",
    body: [
      "Retractable awnings give you control — extend them for shade during peak sun, retract them when you want light or when strong wind picks up. That makes them a good fit for patios, terraces and window shading where needs change through the day and across seasons.",
      "Fixed awnings, by contrast, are built for permanent, year-round coverage — freestanding, conservatory or vertical styles that don't need to be adjusted. They suit spaces where the shaded area is used consistently, such as a covered walkway or a permanent outdoor seating zone.",
      "For commercial spaces like restaurants and cafes, a combination often works best: fixed awnings over core seating areas, with retractable options over flexible or seasonal seating.",
    ],
  },

  {
    slug: "caring-for-shade-sails-through-the-monsoon",
    title: "Caring for Your Shade Sail Through the Monsoon",
    category: "Shade Sails",
    readTime: "3 min read",
    image: blogImages.shadeSails,
    excerpt:
      "A few simple habits keep a shade sail looking sharp and performing well after monsoon season.",
    body: [
      "Shade sails are built from high-quality, weatherproof material, but a little seasonal care goes a long way toward keeping them looking their best.",
      "Before the monsoon sets in, check the tensioning cables and fixing points — a sail that's been slightly loosened by wind over the summer should be re-tensioned so water doesn't pool in the fabric.",
      "After heavy rain, look for any debris (leaves, branches) that may have collected in the folds of the sail, and clear it so water drains freely rather than sitting and stressing the fabric.",
      "Once the season passes, a simple rinse with clean water removes dust and residue, keeping the colour and material in good condition for the next stretch of sun.",
    ],
  },

  {
    slug: "outdoor-umbrellas-for-restaurants-and-cafes",
    title: "Outdoor Umbrellas for Restaurants and Cafes: A Buyer's Guide",
    category: "Outdoor Umbrellas",
    readTime: "4 min read",
    image: blogImages.umbrellas,
    excerpt:
      "What to weigh up when choosing umbrellas for a commercial outdoor seating area.",
    body: [
      "For restaurants and cafes, outdoor umbrellas need to do three things well: provide consistent shade, survive daily wear, and fit the look of the space.",
      "Cantilever-style umbrellas, like a square Roma umbrella, keep the base and pole clear of the seating area entirely — useful where floor space around tables is tight or where a central pole would get in the way of service.",
      "Centre-pole umbrellas are simpler to install and move, which suits spaces where the outdoor layout changes with the season or with events.",
      "Material matters as much as style: polyester, canvas and acrylic all offer weatherproof performance, but differ in how they handle direct sun, colour retention and cleaning — worth discussing against your specific setting before ordering at scale.",
    ],
  },

  {
    slug: "why-hotels-choose-tensile-structures",
    title: "Why Hotels Choose Tensile Structures for Outdoor Seating",
    category: "Tensile Structures",
    readTime: "3 min read",
    image: blogImages.tensile,
    excerpt:
      "Tensile structures offer a different kind of resistance and visual language than traditional awnings.",
    body: [
      "Cone-shaped tensile structures serve the same purpose as a traditional awning — shade and weather protection — but are built for greater resistance, which is why they show up often in walkways, pavements and open seating areas at hotels and resorts.",
      "Their form also reads differently: instead of a flat or box-shaped canopy, a tensile structure has a sculptural quality that can become a visual feature of the space rather than just functional cover.",
      "For hospitality settings with high footfall — entrances, poolside walkways, outdoor lounges — that combination of durability and design presence is often the deciding factor.",
    ],
  },

  {
    slug: "styling-a-small-balcony-or-terrace",
    title: "Five Ways to Style a Small Balcony or Terrace",
    category: "Residential",
    readTime: "3 min read",
    image: blogImages.balcony,
    excerpt:
      "Small outdoor spaces need furniture and shade chosen for scale, not just style.",
    body: [
      "A compact balcony or terrace benefits from furniture chosen for its footprint first, style second. A two-seater bistro set or a single armchair with a small accent table will usually work harder than an oversized lounge set that leaves no room to move.",
      "Vertical shade — a centre-pole umbrella or a compact window box awning — protects the space without requiring the floor area a larger structure would need.",
      "Light, easy-to-carry furniture pieces make it simple to rearrange the space by season, tucking things away when not needed.",
      "A single strong material choice (all one metal finish, or one wicker tone) tends to read as more intentional than a mix, especially in a small footprint.",
      "Finally, think about what the space is used for most — morning coffee, evening unwinding — and let that use decide the layout, rather than fitting furniture in and hoping a use emerges.",
    ],
  },
];

export const getPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug);