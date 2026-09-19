import { Link } from "react-router-dom";
import { Building2, Home as HomeIcon, Hotel } from "lucide-react";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import ImageFrame from "../components/ImageFrame";
import Reveal from "../components/Reveal";
import ContactCta from "../components/ContactCta";
import { solutions } from "../data/solutions";
import { getProductBySlug } from "../data/products";

const icons = {
  residential: HomeIcon,
  hospitality: Hotel,
  commercial: Building2,
};

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
                <ImageFrame ratio="aspect-[4/5]" label={solution.name} />
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
                        {product.name}
                      </Link>
                    );
                  })}
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <ContactCta />
    </>
  );
}
