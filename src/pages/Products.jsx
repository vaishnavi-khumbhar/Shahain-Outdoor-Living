import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import ContactCta from "../components/ContactCta";
import Reveal from "../components/Reveal";
import { productCategories } from "../data/products";

export default function Products() {
  return (
    <>
      <Seo
        title="Products"
        description="Explore Shahain Outdoor Living's range: outdoor furniture, awnings, umbrellas, shade sails and tensile structures — for residential, hospitality and commercial spaces."
        path="/products"
      />

      <section className="bg-navy pb-20 pt-40 lg:pb-28 lg:pt-52">
        <div className="container-shahain">
          <Reveal direction="up">
            <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">Products</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="mt-5 max-w-2xl text-balance font-heading text-[clamp(2.2rem,5.5vw,4rem)] font-medium leading-[1.08] text-ivory">
              Outdoor products built for every season.
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-ivory/65">
              All-weatherproof furniture, awnings, umbrellas, shade sails and tensile structures — for gardens,
              terraces, poolsides and beaches.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-20">
        <div className="container-shahain grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <ProductCard key={category.slug} category={category} index={index} />
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
