import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Car,
  Footprints,
  Hotel,
  Quote,
  ShieldCheck,
  Trees,
  UtensilsCrossed,
  Waves,
  Handshake,
  BadgeIndianRupee,
  Award,
} from "lucide-react";

import Seo from "../components/Seo";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ImageFrame from "../components/ImageFrame";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import ContactCta from "../components/ContactCta";
import { productCategories, getProductBySlug } from "../data/products";
import { clients } from "../data/clients";
import { projectShowcase } from "../data/projects";
import { blogPosts } from "../data/blog";
import { siteConfig, ctaLabels } from "../data/siteConfig";
import { applications } from "../data/applications";
import { media, applicationImages } from "../data/media";
/* =========================================================
   BLOG CATEGORY → PRODUCT CATEGORY
========================================================= */

const blogCategoryToSlug = {
  "Outdoor Furniture": "outdoor-furniture",
  Awnings: "awnings",
  "Shade Sails": "shade-sails",
  "Outdoor Umbrellas": "umbrellas",
  "Tensile Structures": "tensile-structures",
};

/* =========================================================
   APPLICATIONS
========================================================= */


/* =========================================================
   DIFFERENTIATORS
========================================================= */

const differentiators = [
  {
    icon: Award,
    number: "25+",
    title: "Years of Experience",
    description:
      "Years of experience in outdoor living solutions, delivering dependable products for residential and commercial spaces.",
  },
  {
    icon: Handshake,
    title: "Customer-Centric Approach",
    description:
      "We understand your space, requirements and style to create outdoor solutions that work beautifully for you.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Competitive Pricing",
    description:
      "Premium outdoor furniture, awnings and shade solutions at competitive prices without compromising on quality.",
  },
  {
    icon: ShieldCheck,
    title: "Commitment to Quality",
    description:
      "Carefully selected materials, strong construction and attention to detail for long-lasting outdoor performance.",
  },
];

/* =========================================================
   CATEGORY / PROJECT DATA
========================================================= */

const furnitureCategory = getProductBySlug("outdoor-furniture");

const featuredProjects = projectShowcase.slice(0, 3);

const featuredPosts = blogPosts.slice(0, 3);

/* =========================================================
   PROJECT IMAGES
========================================================= */

const projectImages = {
  "outdoor-furniture": media.furnitureMenu,
  awnings: media.awningsMenu,
  umbrellas: media.umbrellasMenu,
  "shade-sails": media.shadeSailsMenu,
  "tensile-structures": media.tensileStructuresMenu,
};

/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  const heroRef = useRef(null);

  /* =======================================================
     HERO SLIDER
  ======================================================= */

  const heroImages = [
    media.heroSlide1,
    media.heroSlide2,
    media.heroSlide3,
  ];

  const [heroSlide, setHeroSlide] = useState(0);

  const prefersReducedMotion = useReducedMotion();

  /* =======================================================
     AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  /* =======================================================
     HERO SCROLL ANIMATION
  ======================================================= */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "22%"]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.85],
    [1, 0]
  );

  /* =======================================================
     APPLICATION IMAGES

     Using your 5 actual product images.
  ======================================================= */

 
  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Seo
        title="Premium Outdoor Furniture, Awnings & Umbrellas in Pune"
        description="Shahain Outdoor Living crafts premium outdoor furniture, retractable awnings, umbrellas, shade sails and tensile structures for homes, hotels and businesses. Based in Pune since 1999."
        path="/"
      />

      {/* =====================================================
          1. HERO SLIDER
      ===================================================== */}

      <section
        ref={heroRef}
        className="relative flex min-h-[78svh] items-end overflow-hidden bg-navy lg:min-h-[86svh]"
      >
        {/* =================================================
            SLIDER BACKGROUND
        ================================================= */}

        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          {heroImages.map((image, index) => (
            <motion.img
              key={image}
              src={image}
              alt={
                index === 0
                  ? "Premium outdoor living solutions"
                  : index === 1
                  ? "Premium outdoor furniture"
                  : "Premium outdoor awnings and shade solutions"
              }
              initial={false}
              animate={{
                opacity: heroSlide === index ? 1 : 0,
                scale: heroSlide === index ? 1 : 1.06,
              }}
              transition={{
                opacity: {
                  duration: 1.3,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 6,
                  ease: "linear",
                },
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ))}

          {/* Main dark overlay */}

          <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/70 to-navy/25" />

          {/* Bottom gradient */}

          <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/20 to-transparent" />

          {/* Luxury gold glow */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(184,155,98,0.18),transparent_42%)]" />
        </motion.div>

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <motion.div
          style={{ opacity: heroOpacity }}
          className="container-shahain relative z-10 flex flex-col gap-5 pb-14 pt-20 sm:gap-6 sm:pb-20 sm:pt-24 lg:gap-7 lg:pb-24 lg:pt-28"
        >
          <Reveal direction="up" duration={0.8}>
            <span className="font-body text-xs font-medium uppercase tracking-[0.32em] text-champagne">
              Pune &middot; Since {siteConfig.founded}
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1} duration={0.9}>
            <h1 className="max-w-4xl text-balance font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.04] text-ivory">
              Outdoor Living, Designed to Endure.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2} duration={0.9}>
            <p className="max-w-lg text-balance font-body text-base leading-relaxed text-ivory/75 lg:text-lg">
              Premium furniture, awnings, umbrellas, shade sails and tensile
              structures for gardens, hotels and commercial spaces — crafted
              for every season.
            </p>
          </Reveal>

          <Reveal
            direction="up"
            delay={0.3}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button to="/contact" variant="champagne">
              {ctaLabels.quote}
            </Button>

            <Button to="/products" variant="outlineLight">
              Explore Products
            </Button>
          </Reveal>
        </motion.div>

        {/* =================================================
            SLIDER DOTS
        ================================================= */}

        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setHeroSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                heroSlide === index
                  ? "w-8 bg-champagne"
                  : "w-2 bg-ivory/50 hover:bg-ivory/90"
              }`}
            />
          ))}
        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <div className="absolute bottom-7 right-6 z-20 hidden items-center gap-2 text-ivory/50 lg:right-12 lg:flex">
         

         
        </div>
      </section>

      {/* =====================================================
          2. BRAND INTRODUCTION
      ===================================================== */}

      <section className="py-15 lg:py-20">
        <div className="container-shahain grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About Shahain"
              title="A Pune-based outdoor living company, since 1999."
              description="Shahain Outdoor Living provides all-weatherproof outdoor products — furniture, umbrellas, retractable awnings and fixed tensile fabric structures — for gardens, terraces, poolsides and beaches, serving clubs, corporate offices, hotels, restaurants and private residences."
            />

            <Reveal direction="up" delay={0.24} className="mt-8">
              <Button to="/about" variant="ghost">
                More About Us
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ImageFrame
              src={media.aboutSection}
              alt="Shahain Outdoor Living outdoor solutions"
              ratio="aspect-[16/10]"
              label="Shahain Outdoor Living"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          3. OUTDOOR SOLUTIONS
      ===================================================== */}

      <section className="border-t border-sand/50 bg-white/20 py-20 lg:py-20">
        <div className="container-shahain">
          <SectionHeading
            eyebrow="Outdoor Solutions"
            title="Outdoor products built for every season."
            description="Five categories of all-weather outdoor living solutions — from furniture to fabric structures."
            align="center"
            className="mb-16 lg:mb-20"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <ProductCard
                key={category.slug}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. FEATURED OUTDOOR FURNITURE
      ===================================================== */}

      {furnitureCategory ? (
        <section className="py-20 lg:py-20">
          <div className="container-shahain grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <ImageFrame
                src={media.furnitureBanner}
                alt="Premium outdoor furniture for gardens and patios"
                ratio="aspect-[4/5]"
                label="Outdoor Furniture"
              />
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <SectionHeading
                eyebrow="Featured Category"
                title="Outdoor furniture, built to accentuate the space."
                description={furnitureCategory.intro}
              />

              <Reveal
                direction="up"
                delay={0.2}
                className="mt-8 flex flex-col gap-4"
              >
                {furnitureCategory.groups.map((group) => (
                  <div
                    key={group.title}
                    className="border-t border-sand/60 pt-4"
                  >
                    <h3 className="font-heading text-lg text-navy">
                      {group.title}
                    </h3>

                    <p className="mt-1 font-body text-sm text-gray">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </Reveal>

              
            </div>
          </div>
        </section>
      ) : null}

      {/* =====================================================
          5. FEATURED PROJECTS
      ===================================================== */}

      <section className="border-t border-sand/50 bg-white/40 py-20 lg:py-20">
        <div className="container-shahain">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Where our work lives."
            description="Outdoor furniture, awnings, umbrellas, shade sails and tensile structures delivered across hospitality, commercial and residential projects."
            align="center"
            className="mb-16 lg:mb-20"
          />

          <Stagger className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const projectCategory = getProductBySlug(project.category);

              const projectImage =
                projectImages[project.category] ||
                projectCategory?.galleryImage ||
                projectCategory?.heroImage;

              return (
                <StaggerItem
                  key={project.slug}
                  className={index === 1 ? "lg:translate-y-10" : ""}
                >
                  <Link
                    to={`/products/${project.category}`}
                    className="group block"
                  >
                    <ImageFrame
                      src={projectImage}
                      alt={project.title}
                      ratio="aspect-[4/5]"
                      label={project.title}
                      className="transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="mt-5 border-t border-sand/60 pt-5">
                      <span className="font-body text-[11px] uppercase tracking-[0.2em] text-champagne">
                        {project.sector}
                      </span>

                      <h3 className="mt-2 font-heading text-xl text-navy">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal
            direction="up"
            className="mt-16 flex justify-center"
          >
            <Button to="/projects" variant="ghost">
              View All Projects
            </Button>
          </Reveal>
        </div>
      </section>

 {/* =====================================================
    6. APPLICATIONS
===================================================== */}

<section className="py-20 lg:py-28">
  <div className="container-shahain">

    <SectionHeading
      eyebrow="Applications"
      title="Wherever outdoor space matters."
      align="center"
      className="mb-16 lg:mb-20"
    />

    <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {applications.map((application) => {
        const Icon = application.icon;
        const image = application.image;

        return (
          <StaggerItem key={application.label}>

            <div
              className="
                group
                relative
                min-h-[240px]
                overflow-hidden
                border
                border-sand/60
                bg-navy
                sm:min-h-[260px]
                lg:min-h-[240px]
              "
            >

              {/* IMAGE */}

              <img
                src={image}
                alt={application.label}
                loading="lazy"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-navy/45
                  transition-all
                  duration-500
                  group-hover:bg-navy/70
                "
              />

              {/* CONTENT */}

              <div
                className="
                  relative
                  z-10
                  flex
                  min-h-[240px]
                  h-full
                  flex-col
                  items-center
                  justify-end
                  p-5
                  text-center
                  sm:min-h-[260px]
                  lg:min-h-[240px]
                "
              >

                {/* ICON */}

                <div
                  className="
                    mb-4
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-champagne/60
                    bg-navy/45
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:border-champagne
                    group-hover:bg-champagne
                  "
                >
                  <Icon
                    className="
                      h-6
                      w-6
                      text-champagne
                      transition-colors
                      duration-300
                      group-hover:text-navy
                    "
                    strokeWidth={1.4}
                  />
                </div>

                {/* LABEL */}

                <span
                  className="
                    font-body
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-ivory
                    sm:text-[12px]
                  "
                >
                  {application.label}
                </span>

              </div>

            </div>

          </StaggerItem>
        );
      })}

    </Stagger>

  </div>
</section>
      {/* =====================================================
    7. WHY SHAHIN
===================================================== */}

<section className="relative overflow-hidden bg-navy py-20 lg:py-20">
  {/* Background decorative elements */}

  <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-champagne/5 blur-3xl" />

  <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-champagne/5 blur-3xl" />

  <div className="container-shahain relative z-10">
    {/* Heading */}

    <SectionHeading
      eyebrow="Why Shahain"
      title="What guides every piece we make."
      description="Experience, thoughtful design and uncompromising quality come together in every outdoor solution."
      align="center"
      light
      className="mb-14 lg:mb-16"
    />

    {/* Cards */}

    <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {differentiators.map((item, index) => {
        const Icon = item.icon;

        return (
          <StaggerItem key={item.title}>
            <motion.div
              whileHover={{
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="group relative h-full overflow-hidden rounded-sm border border-ivory/15 bg-ivory/[0.03] p-7 text-center backdrop-blur-sm transition-all duration-500 hover:border-champagne/60 hover:bg-ivory/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8"
            >
              {/* Hover glow */}

              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-champagne/10 blur-3xl" />
              </div>

              {/* Icon box */}

              <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                {/* Outer animated ring */}

                <div className="absolute inset-0 rounded-full border border-champagne/20 transition-all duration-700 group-hover:scale-110 group-hover:border-champagne/50" />

                {/* Inner circle */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-full border border-champagne/30 bg-champagne/[0.08] transition-all duration-500 group-hover:bg-champagne/15 group-hover:shadow-[0_0_30px_rgba(184,155,98,0.15)]"
                >
                  <Icon
                    className="h-10 w-10 text-champagne transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.35}
                  />

                  {/* Small sparkle */}

                 
                </motion.div>
              </div>

              {/* Number */}

              {item.number && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  className="relative mt-2 font-heading text-4xl font-medium text-ivory"
                >
                  {item.number}
                </motion.div>
              )}

              {/* Title */}

              <h3 className="relative mt-6 font-body text-[12px] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-300 group-hover:text-champagne">
                {item.title}
              </h3>

              {/* Description */}

              <p className="relative mt-4 font-body text-sm leading-relaxed text-ivory/55 transition-colors duration-300 group-hover:text-ivory/70">
                {item.description}
              </p>

              {/* Bottom animated line */}

              <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-champagne transition-all duration-500 group-hover:w-20" />
            </motion.div>
          </StaggerItem>
        );
      })}
    </Stagger>
  </div>
</section>

      {/* =====================================================
          8. CLIENTS
      ===================================================== */}

      <section className="border-t border-sand/50 py-24 lg:py-28">
        <div className="container-shahain">
          <SectionHeading
            eyebrow="Trusted By"
            title="Hotels, restaurants and developers across India."
            align="center"
            className="mb-14"
          />
        </div>

        <div className="overflow-hidden border-y border-sand/50 py-8">
          <div className="marquee flex w-max gap-12 whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="font-heading text-xl text-navy/40 lg:text-2xl"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        <div className="container-shahain mt-10 flex justify-center">
          <Button to="/clients" variant="ghost">
            View All Clients
          </Button>
        </div>
      </section>

      {/* =====================================================
          9. TESTIMONIAL / EXPERIENCE
      ===================================================== */}

      <section className="bg-deep-navy py-20 lg:py-20">
        <div className="container-shahain flex flex-col items-center gap-8 text-center">
          <Reveal direction="up">
            <Quote
              className="h-10 w-10 text-champagne"
              strokeWidth={1}
            />
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <p className="max-w-xl text-balance font-heading text-2xl italic leading-relaxed text-ivory/80 lg:text-3xl">
              We're gathering stories from the hotels, restaurants and homes
              we've worked with.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="max-w-md font-body text-sm leading-relaxed text-ivory/50">
              Worked with Shahain on a project? We'd like to hear about it.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <Button to="/contact" variant="outlineLight">
              Share Your Experience
            </Button>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          10. STYLE JOURNAL
      ===================================================== */}

      <section className="py-20 lg:py-20">
        <div className="container-shahain">
          <SectionHeading
            eyebrow="Style Journal"
            title="Ideas for outdoor living."
            description="Guides on choosing, styling and caring for outdoor furniture, awnings, umbrellas and shade structures."
            align="center"
            className="mb-16 lg:mb-20"
          />

          <Stagger className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => {
              const postCategory = blogCategoryToSlug[post.category]
                ? getProductBySlug(blogCategoryToSlug[post.category])
                : null;

              return (
                <StaggerItem key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <ImageFrame
                      src={
                        postCategory?.galleryImage ||
                        postCategory?.heroImage
                      }
                      alt={post.title}
                      ratio="aspect-[4/3]"
                      label={post.category}
                      className="transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="mt-5 flex items-start justify-between gap-4 border-t border-sand/60 pt-5">
                      <div>
                        <span className="font-body text-[11px] uppercase tracking-[0.2em] text-champagne">
                          {post.category} &middot; {post.readTime}
                        </span>

                        <h3 className="mt-2 font-heading text-lg leading-snug text-navy">
                          {post.title}
                        </h3>
                      </div>

                      <ArrowUpRight
                        className="mt-1 h-5 w-5 shrink-0 text-champagne transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        strokeWidth={1.5}
                      />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal
            direction="up"
            className="mt-16 flex justify-center"
          >
            <Button to="/blog" variant="ghost">
              Read the Journal
            </Button>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          11. FINAL CTA
      ===================================================== */}

      <ContactCta />

      {/* =====================================================
          12. FOOTER
          Rendered globally through Layout.jsx
      ===================================================== */}
    </>
  );
}