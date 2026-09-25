import { Link } from "react-router-dom";
import { Layers, ShieldCheck, Palette } from "lucide-react";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import ImageFrame from "../components/ImageFrame";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import ContactCta from "../components/ContactCta";
import { siteConfig } from "../data/siteConfig";
import { productCategories } from "../data/products";
import { media } from "../data/media";

const principles = [
  {
    icon: ShieldCheck,
    title: "Built for Weather",
    description: "All-weatherproof furniture and structures, finished to survive changing seasons.",
  },
  {
    icon: Layers,
    title: "Material Range",
    description: "Wood, wicker, metal, polyester, canvas and acrylic — matched to the setting.",
  },
  {
    icon: Palette,
    title: "Classic to Contemporary",
    description: "Styles that span classic silhouettes to modern, contemporary design.",
  },
];

const gallery = [
  { src: media.furnitureCafe, label: "Outdoor Furniture" },
  { src: media.awningsGallery, label: "Awnings" },
  { src: media.umbrellaRoma, label: "Outdoor Umbrellas" },
];

// Sectors served — company-wide, matches the "Our Story" copy
// (homes, hospitality and commercial spaces).
const sectorsServed = ["Residential", "Commercial", "Hospitality", "Retail"];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Shahain Furniture is a Pune-based outdoor living company, established in 1999, providing premium outdoor furniture, awnings, umbrellas, gazebos and tensile structures."
        path="/about"
      />

      {/* Hero — real photography behind the headline */}
      <section className="relative overflow-hidden bg-navy pb-20 pt-40 lg:pb-28 lg:pt-52">
        <div className="absolute inset-0">
          <img
            src={media.heroSlide1}
            alt=""
            className="h-full w-full object-cover opacity-45"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/40" />
        </div>

        <div className="container-shahain relative">
          <Reveal direction="up">
            <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">About Us</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-[clamp(2.2rem,5.5vw,4rem)] font-medium leading-[1.08] text-ivory">
              A Pune-based outdoor living company, since {siteConfig.founded}.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Our Story — real photography */}
      <section className="py-20 lg:py-20">
        <div className="container-shahain grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ImageFrame
              src={media.aboutSection}
              alt="Shahain Furniture"
              ratio="aspect-[4/5]"
              className="shadow-xl shadow-navy/10"
            />
          </div>
          <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-8">
            <SectionHeading
              eyebrow="Our Story"
              title="Your Outdoor Space Deserves More."
              description="A beautiful outdoor space isn't just about how it looks — it's about how comfortably you can live, relax and enjoy it."
            />

            <Reveal direction="up" delay={0.1} className="mt-4 flex flex-col gap-4">
              <p className="font-body text-sm leading-relaxed text-gray sm:text-[15px]">
                That belief has shaped Shahain Enterprise since we began our
                journey in Pune in 1999.
              </p>
              <p className="font-body text-sm leading-relaxed text-gray sm:text-[15px]">
                Over the years, we've grown to offer premium outdoor
                furniture, awnings, umbrellas, gazebos and tensile structures
                for homes, hospitality and commercial spaces.
              </p>
              <p className="font-body text-sm leading-relaxed text-gray sm:text-[15px]">
                Through changing trends and evolving spaces, one thing has
                remained constant — our commitment to quality. Today, we
                continue to create outdoor solutions that look beautiful,
                feel comfortable and are made to last.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.16} className="mt-6 border-t border-sand/60 pt-6">
              <p className="font-heading text-lg italic leading-snug text-navy">
                Shahain Furniture — Premium Outdoor Living Since 1999.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.22} className="mt-6 flex flex-wrap gap-3">
              {sectorsServed.map((sector) => (
                <span
                  key={sector}
                  className="border border-sand/70 px-4 py-2 font-body text-[12px] uppercase tracking-[0.14em] text-navy"
                >
                  {sector}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-sand/50 bg-white/40 py-20 lg:py-20">
        <div className="container-shahain">
          <SectionHeading eyebrow="How We Work" title="What guides every piece we make." align="center" className="mb-16 lg:mb-20" />
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {principles.map((principle) => (
              <StaggerItem key={principle.title}>
                <div className="group h-full border border-sand/60 bg-ivory p-8 transition-all duration-300 hover:-translate-y-1 hover:border-champagne hover:shadow-xl hover:shadow-navy/5 lg:p-10">
                  <principle.icon
                    className="h-7 w-7 text-champagne transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.25}
                  />
                  <h3 className="mt-6 font-heading text-xl text-navy">{principle.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-gray">{principle.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Photography strip — real work, asymmetric editorial grid */}
      <section className="py-20 lg:py-20">
        <div className="container-shahain">
          <SectionHeading eyebrow="Our Work" title="What we make, in place." align="center" className="mb-14 lg:mb-16" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal key={item.label} direction="up" delay={index * 0.1}>
                <div className="group relative overflow-hidden">
                  <ImageFrame
                    src={item.src}
                    alt={item.label}
                    ratio="aspect-[4/5]"
                    className="transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0" />
                  <span className="pointer-events-none absolute bottom-5 left-5 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-ivory">
                    {item.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Make */}
      <section className="border-t border-sand/50 bg-white/40 py-20 lg:py-20">
        <div className="container-shahain">
          <SectionHeading
            eyebrow="What We Make"
            title="Five categories of outdoor living."
            align="center"
            className="mb-14"
          />
          <Reveal direction="up" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {productCategories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/products/${category.slug}`}
                  className="border border-sand/70 px-5 py-2.5 font-body text-[12.5px] uppercase tracking-[0.14em] text-navy transition-colors duration-300 hover:border-champagne hover:bg-navy hover:text-ivory"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.16} className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link to="/solutions" className="font-body text-[12.5px] font-medium uppercase tracking-[0.14em] text-champagne link-underline">
              See Our Solutions
            </Link>
            <Link to="/projects" className="font-body text-[12.5px] font-medium uppercase tracking-[0.14em] text-champagne link-underline">
              View Our Projects
            </Link>
            <Link to="/clients" className="font-body text-[12.5px] font-medium uppercase tracking-[0.14em] text-champagne link-underline">
              See Our Clients
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCta
        eyebrow="Work With Us"
        title="Have an Outdoor Space in Mind?"
        description="Let's make more of it."
      />
    </>
  );
}