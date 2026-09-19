export const mainNav = [
  { label: "Home", path: "/" },
  {
    label: "Products",
    path: "/products",
    children: [
      { label: "Outdoor Furniture", path: "/products/outdoor-furniture" },
      { label: "Awnings", path: "/products/awnings" },
      { label: "Outdoor Umbrellas", path: "/products/umbrellas" },
      { label: "Shade Sails", path: "/products/shade-sails" },
      { label: "Tensile Structures", path: "/products/tensile-structures" },
    ],
  },
  { label: "Projects", path: "/projects" },
  { label: "Journal", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

// Full sitemap — includes pages kept out of the primary nav (Solutions,
// Clients) to keep the top bar short, per the luxury/editorial brief.
export const footerNav = {
  products: [
    { label: "Outdoor Furniture", path: "/products/outdoor-furniture" },
    { label: "Awnings", path: "/products/awnings" },
    { label: "Outdoor Umbrellas", path: "/products/umbrellas" },
    { label: "Shade Sails", path: "/products/shade-sails" },
    { label: "Tensile Structures", path: "/products/tensile-structures" },
  ],
  company: [
    { label: "About Us", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Solutions", path: "/solutions" },
    { label: "Our Clients", path: "/clients" },
    { label: "Journal", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ],
};
