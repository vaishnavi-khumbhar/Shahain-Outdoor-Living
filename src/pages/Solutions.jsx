import { Link } from "react-router-dom";
import { Building2, Home as HomeIcon, Hotel, Users } from "lucide-react";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import ImageFrame from "../components/ImageFrame";
import Reveal from "../components/Reveal";
import ContactCta from "../components/ContactCta";
import { solutions } from "../data/solutions";
import { getProductBySlug } from "../data/products";
import { media } from "../data/media";

const icons = {
  residential: HomeIcon,
  hospitality: Hotel,
  commercial: Building2,
};

// Maps each solution slug to a fitting existing image from media.js
const solutionImages = {
  residential: media.applicationImages["RESIDENTIAL SPACES"],
  hospitality: media.applicationImages["HOTELS & RESORTS"],
  commercial: media.applicationImages["CORPORATE OFFICES & PARKS"],
};

// Commercial & Corporate Projects — who we serve, and who we partner with.
const commercialSectors = [
  "Hotels & Resorts",
  "Restaurants & Cafés",
  "Corporate Offices",
  "Commercial Properties",
  "Educational Institutions",
];

const projectPartners = [
  "Architects",
  "Interior Designers",
  "Landscape Designers",
  "Builders",
  "Developers",
];

export default function Solutions() {
  return (
    <>
      <Seo
        title="Solutions"
        description="Outdoor living solutions for residential, hospitality and commercial spaces — furniture, awnings, umbrellas and tensile structures suited to each setting."
        path="/solutions"
      />

      <section className="bg-navy pb-20 pt-40 lg:pb-28 lg:pt-52">
        <div className="container-shahain">
          <Reveal direction="up">
            <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">Solutions</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="mt-5 max-w-2xl text-balance font-heading text-[clamp(2.2rem,5.5vw,4rem)] font-medium leading-[1.08] text-ivory">
              Outdoor solutions for every kind of space.
            </h1>
          </Reveal>
        </div>
      </section>

      {solutions.map((solution, index) => {
        const Icon = icons[solution.slug];
        const reversed = index % 2 === 1;

        return (
          <section key={solution.slug} className={`py-20 lg:py-28 ${index % 2 === 1 ? "bg-white/40" : ""}`}>
            <div className="container-shahain grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
              <div className={`lg:col-span-5 ${reversed ? "lg:order-2 lg:col-start-8" : ""}`}>
                <ImageFrame
                  src={solutionImages[solution.slug]}
                  alt={solution.name}
                  ratio="aspect-[4/5]"
                  label={solution.name}
                />
              </div>
              <div className={`lg:col-span-6 ${reversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
                <Reveal direction="up">
                  <Icon className="h-8 w-8 text-champagne" strokeWidth={1.25} />
                </Reveal>
                <SectionHeading eyebrow={solution.tagline} title={solution.name} description={solution.description} className="mt-6" />
                <Reveal direction="up" delay={0.2} className="mt-8 flex flex-wrap gap-3">
                  {solution.spaces.map((space) => (
                    <span key={space} className="border border-sand/70 px-4 py-2 font-body text-[12px] uppercase tracking-[0.12em] text-navy">
                      {space}
                    </span>
                  ))}
                </Reveal>
                <Reveal direction="up" delay={0.28} className="mt-8 flex flex-wrap gap-3">
                  {solution.relatedProducts.map((slug) => {
                    const product = getProductBySlug(slug);
                    if (!product) return null;
                    return (
                      <Link
                        key={slug}
                        to={`/products/${slug}`}
                        className="font-body text-[12.5px] font-medium uppercase tracking-[0.14em] text-champagne link-underline"
                      >
                        {product.title}
                      </Link>
                    );
                  })}
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* =====================================================
          COMMERCIAL & CORPORATE PROJECTS
      ===================================================== */}

      <section className="border-t border-sand/50 bg-navy py-20 lg:py-28">
        <div className="container-shahain">
          <Reveal direction="up">
            <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">
              Commercial &amp; Corporate Projects
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-5 max-w-2xl text-balance font-heading text-[clamp(1.9rem,4.5vw,3rem)] font-medium leading-[1.15] text-ivory">
              Your Space. Your Requirement. Our Solution.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.16}>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ivory/70">
              Commercial outdoor spaces need to look good, work efficiently
              and stand up to everyday use. Shahain Furniture provides
              outdoor furniture and shade solutions for:
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.22} className="mt-8 flex flex-wrap gap-3">
            {commercialSectors.map((sector) => (
              <span
                key={sector}
                className="border border-ivory/25 px-4 py-2 font-body text-[12px] uppercase tracking-[0.12em] text-ivory/85"
              >
                {sector}
              </span>
            ))}
          </Reveal>

          <Reveal direction="up" delay={0.3} className="mt-12 border-t border-ivory/15 pt-10">
            <div className="flex items-start gap-4">
              <Users className="mt-1 h-6 w-6 shrink-0 text-champagne" strokeWidth={1.5} />
              <div>
                <p className="font-body text-base leading-relaxed text-ivory/70">
                  We also work with architects, interior designers, landscape
                  designers, builders and developers on customised outdoor
                  requirements.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {projectPartners.map((partner) => (
                    <span
                      key={partner}
                      className="font-body text-[11px] font-medium uppercase tracking-[0.14em] text-champagne"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.36}>
            <p className="mt-10 max-w-2xl font-body text-base leading-relaxed text-ivory/70">
              From furniture to large-scale shade solutions, we help create
              spaces that are functional, inviting and designed around your
              project.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4} className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-champagne px-7 py-4 font-body text-[12.5px] font-medium uppercase tracking-[0.16em] text-champagne transition-colors duration-300 hover:bg-champagne hover:text-navy"
            >
              Planning a Project? Let's Talk
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}