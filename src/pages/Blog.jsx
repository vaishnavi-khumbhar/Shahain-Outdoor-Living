import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3 } from "lucide-react";

import Seo from "../components/Seo";
import ImageFrame from "../components/ImageFrame";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import ContactCta from "../components/ContactCta";
import { blogPosts } from "../data/blog";

export default function Blog() {
  return (
    <>
      <Seo
        title="Style Blog"
        description="Guides and ideas on outdoor furniture, awnings, umbrellas, shade sails and tensile structures from Shahain Outdoor Living."
        path="/blog"
      />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-navy pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-48">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-champagne/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-[-80px] h-96 w-96 rounded-full bg-champagne/5 blur-3xl" />

        <div className="container-shahain relative z-10">
          <Reveal direction="up">
            <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">
              Style Blog
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.05] text-ivory">
              Ideas for outdoor living.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ivory/65 lg:text-lg">
              Guides on choosing, styling and caring for outdoor furniture,
              awnings, umbrellas and shade structures.
            </p>
          </Reveal>

          {/* Decorative line */}
          <Reveal direction="up" delay={0.3}>
            <div className="mt-10 h-px w-24 bg-champagne/70" />
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          BLOG GRID
      ===================================================== */}
      <section className="py-20 sm:py-20 lg:py-20">
        <div className="container-shahain">
          <Stagger className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {blogPosts.map((post, index) => (
              <StaggerItem key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <ImageFrame
                      src={post.image}
                      alt={post.title}
                      ratio="aspect-[4/3]"
                      label={post.category}
                      className="transition-transform duration-700 group-hover:scale-[1.035]"
                    />

                    {/* Image overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Read button */}
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-champagne text-navy opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight
                        className="h-4 w-4"
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-5 border-t border-sand/60 pt-5">
                    {/* Category + read time */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">
                        {post.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-sand" />

                      <span className="inline-flex items-center gap-1.5 font-body text-[10px] uppercase tracking-[0.14em] text-gray">
                        <Clock3 className="h-3 w-3" strokeWidth={1.5} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-3 font-heading text-xl leading-snug text-navy transition-colors duration-300 group-hover:text-champagne lg:text-[22px]">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="mt-3 line-clamp-3 font-body text-sm leading-relaxed text-gray">
                      {post.excerpt}
                    </p>

                    {/* Read article */}
                    <div className="mt-5 inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-navy transition-all duration-300 group-hover:gap-3 group-hover:text-champagne">
                      Read Article
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <ContactCta />
    </>
  );
}