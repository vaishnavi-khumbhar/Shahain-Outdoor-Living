import { Link, Navigate, useParams } from "react-router-dom";
import {
  Building2,
  Car,
  Check,
  Footprints,
  Home as HomeIcon,
  Hotel,
  MapPin,
  Plane,
  Sparkles,
  Trees,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import ImageFrame from "../components/ImageFrame";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import ContactCta from "../components/ContactCta";
import { getProductBySlug } from "../data/products";
import { getSolutionsByProduct } from "../data/solutions";

// Keyword-matched icon for each application string, so the same rule works
// across all five categories' `applications` arrays without hardcoding per
// category. Falls back to a generic marker if nothing matches.
function applicationIcon(label) {
  const value = label.toLowerCase();
  if (value.includes("pool") || value.includes("beach")) return Waves;
  if (value.includes("hotel") || value.includes("resort")) return Hotel;
  if (value.includes("restaurant") || value.includes("cafe") || value.includes("bar")) return UtensilsCrossed;
  if (value.includes("corporate") || value.includes("commercial") || value.includes("office")) return Building2;
  if (value.includes("car park")) return Car;
  if (value.includes("walkway") || value.includes("pavement")) return Footprints;
  if (value.includes("airport")) return Plane;
  if (value.includes("balcon") || value.includes("terrace") || value.includes("porch") || value.includes("lawn"))
    return HomeIcon;
  if (value.includes("garden") || value.includes("patio") || value.includes("residential") || value.includes("home"))
    return Trees;
  return Sparkles;
}

export default function ProductCategory() {
  const { categorySlug: slug } = useParams();
  const category = getProductBySlug(slug);

  if (!category) return <Navigate to="/products" replace />;

  // Fallbacks: data/products.js currently provides `title`, `description`
  // and `intro`, not `name`, `shortName` or `tagline`. These fall back
  // gracefully instead of rendering blank or crashing on .toLowerCase().
  const displayName = category.name || category.title;
  const shortName = category.shortName || category.title;
  const tagline = category.tagline || category.description;
  const overviewImage = category.overviewImage || category.galleryImage || category.heroImage;

  // Optional per-category CTA button label (e.g. "Explore Our Outdoor
  // Furniture", "Discuss Your Requirement"). Falls back to the generic
  // label if a category doesn't set its own.
  const enquireCta = category.ctaLabel || `Enquire About ${shortName}`;

  const relatedSolutions = getSolutionsByProduct(category.slug);

  return (
    <>
      <Seo
        title={displayName}
        description={`${tagline}. ${category.intro}`}
        path={`/products/${category.slug}`}
      />

      {/* 1. Hero */}
      <section className="grid grid-cols-1 lg:min-h-[640px] lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-navy px-6 py-32 pt-40 sm:px-8 lg:px-16 lg:py-24 lg:pt-24">
          <Reveal direction="up">
            <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">
              {shortName}
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="mt-5 max-w-md text-balance font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-medium leading-[1.1] text-ivory">
              {displayName}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-6 max-w-md text-balance font-body text-base leading-relaxed text-ivory/65">
              {tagline}
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3} className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-champagne px-7 py-4 font-body text-[12.5px] font-medium uppercase tracking-[0.16em] text-champagne transition-colors duration-300 hover:bg-champagne hover:text-navy"
            >
              {enquireCta}
            </Link>
          </Reveal>
        </div>
        <ImageFrame
          src={category.heroImage}
          alt={displayName}
          ratio="aspect-[4/5] lg:aspect-auto lg:h-full"
          label={category.heroLabel}
          border={false}
        />
      </section>

      {/* =====================================================
    2. PRODUCT OVERVIEW
===================================================== */}

<section className="py-14 sm:py-16 lg:py-20">
  <div className="container-shahain grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">

    {/* TEXT */}
    <div className="lg:col-span-6">
      <SectionHeading
        eyebrow="Overview"
        title={tagline}
        description={category.intro}
      />

      {category.materials ? (
        <Reveal
          direction="up"
          delay={0.2}
          className="mt-8 flex flex-wrap gap-3"
        >
          {category.materials.map((material) => (
            <span
              key={material}
              className="
                border border-sand/70
                px-5 py-2.5
                font-body text-[12.5px]
                uppercase tracking-[0.14em]
                text-navy
                transition-all duration-300
                hover:border-champagne
                hover:bg-champagne/10
              "
            >
              {material}
            </span>
          ))}
        </Reveal>
      ) : null}
    </div>

    {/* DIFFERENT OVERVIEW IMAGE */}
    <div className="lg:col-span-5 lg:col-start-8">
      <Reveal direction="right">
        <ImageFrame
          src={overviewImage}
          alt={`${displayName} overview`}
          ratio="aspect-[4/5]"
          label={category.heroLabel}
        />
      </Reveal>
    </div>

  </div>
</section>

      {/* 3. Product Categories (the range) */}
      <section className="border-t border-sand/50 bg-white/40 py-14 sm:py-16 lg:py-20">
        <div className="container-shahain">
          <SectionHeading eyebrow="The Range" title="What's included" className="mb-8 sm:mb-10 lg:mb-16" />
          <Stagger className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
            {category.groups.map((group) => (
              <StaggerItem key={group.title}>
                <div className="h-full border border-sand/60 bg-ivory p-6 sm:p-8 lg:p-10">
                  <h3 className="font-heading text-xl text-navy">{group.title}</h3>
                  {group.description ? (
                    <p className="mt-3 font-body text-sm leading-relaxed text-gray">{group.description}</p>
                  ) : null}

                                   {group.items?.length > 0 && (
                    <ul className="mt-5 space-y-3 border-t border-sand/50 pt-5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-body text-sm leading-relaxed text-gray">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.75} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {group.note ? (
                    <p className="mt-5 border-t border-sand/50 pt-4 font-body text-xs italic leading-relaxed text-gray/80">
                      {group.note}
                    </p>
                  ) : null}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4. Applications */}
      {category.applications ? (
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="container-shahain">
            <SectionHeading eyebrow="Where It's Used" title="Applications" align="center" className="mb-10 sm:mb-12 lg:mb-20" />
            <Stagger className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {category.applications.map((application) => {
                const Icon = applicationIcon(application);
                return (
                  <StaggerItem key={application}>
                    <div className="group flex h-full flex-col items-center gap-4 border border-sand/60 px-4 py-8 sm:py-10 text-center transition-colors duration-300 hover:border-champagne hover:bg-navy">
                      <Icon className="h-6 w-6 text-champagne" strokeWidth={1.25} />
                      <span className="font-body text-[12px] font-medium uppercase tracking-[0.1em] text-navy transition-colors duration-300 group-hover:text-ivory">
                        {application}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>
      ) : null}

     {/* =====================================================
    5. GALLERY — SINGLE IMAGE
===================================================== */}

<section className="border-t border-sand/50 bg-white/40 py-14 sm:py-16 lg:py-20">
  <div className="container-shahain">

    <SectionHeading
      eyebrow="Gallery"
      title={`${displayName} in place`}
      description={`Explore how our ${shortName.toLowerCase()} solutions look in real outdoor spaces.`}
      className="mb-8 sm:mb-10 lg:mb-16"
    />

    <Reveal direction="up">
      <div className="mx-auto max-w-6xl overflow-hidden">
        <ImageFrame
          src={category.galleryImage}
          alt={`${displayName} outdoor installation`}
          ratio="aspect-[16/8]"
          label={category.heroLabel}
          className="transition-transform duration-700 hover:scale-[1.01]"
        />
      </div>
    </Reveal>

  </div>
</section>

      {/* 6. Related Solutions */}
      {relatedSolutions.length > 0 ? (
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="container-shahain">
            <SectionHeading
              eyebrow="Related Solutions"
              title={`Where ${shortName.toLowerCase()} fits.`}
              align="center"
              className="mb-8 sm:mb-10 lg:mb-14"
            />
            <Stagger className={`grid grid-cols-1 gap-6 ${relatedSolutions.length === 2 ? "sm:grid-cols-2 sm:max-w-2xl sm:mx-auto" : "sm:grid-cols-3"}`}>
              {relatedSolutions.map((solution) => (
                <StaggerItem key={solution.slug}>
                  <Link
                    to="/solutions"
                    className="group flex h-full flex-col border border-sand/60 p-8 transition-colors duration-300 hover:bg-navy lg:p-10"
                  >
                    <h3 className="font-heading text-2xl text-navy group-hover:text-ivory">{solution.name}</h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-gray group-hover:text-ivory/70">
                      {solution.tagline}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.16em] text-champagne">
                      <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {solution.spaces.length} space types
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}

      {/* 7. Enquiry CTA */}
      <ContactCta
        title={`Ready to plan your ${displayName.toLowerCase()}?`}
        description="Share your space and requirements — our team will help you choose the right products."
      />
    </>
  );
}