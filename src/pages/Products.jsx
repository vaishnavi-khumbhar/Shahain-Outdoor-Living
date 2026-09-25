import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Seo from "../components/Seo";
import ImageFrame from "../components/ImageFrame";
import ContactCta from "../components/ContactCta";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";

import { productCategories } from "../data/products";
import { media } from "../data/media";

/* =========================================================
   CATEGORY IMAGE MAP
   Keys must match productCategories[].slug exactly.
========================================================= */

const categoryImages = {
  "outdoor-furniture": media.outdoorFurnitureImage,
  awnings: media.awningsImage,
  umbrellas: media.outdoorUmbrellasImage,
  "shade-sails": media.shadeSailsImage,
  "tensile-structures": media.tensileStructuresImage,
};

export default function Products() {
  return (
    <>
      <Seo
        title="Products"
        description="Explore Shahain Furniture's range of outdoor furniture, awnings, umbrellas, gazebos, shade sails and tensile structures for residential, hospitality and commercial spaces."
        path="/products"
      />

      {/* =====================================================
          HERO (text left, image right)
      ===================================================== */}

      <section className="bg-navy pb-16 pt-32 sm:pb-20 sm:pt-30 lg:pb-28 lg:pt-30">
        <div className="container-shahain grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal direction="up">
              <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">
                Products
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h1 className="mt-5 max-w-2xl font-heading text-[clamp(2.2rem,5.5vw,4rem)] font-medium leading-[1.08] text-ivory">
                Outdoor products built for every season.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="mt-6 max-w-lg font-body text-sm leading-relaxed text-ivory/65 sm:text-base">
                All-weatherproof furniture, awnings, umbrellas, gazebos, shade
                sails and tensile structures — for gardens, terraces,
                poolsides and beaches.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal direction="up" delay={0.15}>
              <ImageFrame
                src={media.outdoorUmbrellasImage}
                alt="Shahain Furniture products"
                ratio="aspect-[4/3]"
                label="Outdoor Products"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT GRID (with images)
      ===================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shahain">
          <Stagger className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
            {productCategories.map((category) => (
              <StaggerItem key={category.slug}>
                <Link
                  to={`/products/${category.slug}`}
                  className="group block"
                >
                  <ImageFrame
                    src={categoryImages[category.slug]}
                    alt={category.title}
                    ratio="aspect-[4/3]"
                    label={category.title}
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="mt-4 border-t border-sand/60 pt-4 sm:mt-5 sm:pt-5">
                    <span className="font-body text-xs uppercase tracking-[0.18em] text-champagne sm:text-[11px] sm:tracking-[0.2em]">
                      {category.title}
                    </span>

                    <div className="mt-2 flex items-center justify-between gap-3">
                      <h3 className="font-heading text-xl leading-snug text-navy transition-colors duration-300 group-hover:text-champagne sm:text-lg">
                        {category.description}
                      </h3>

                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-champagne transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ContactCta />
    </>
  );
}