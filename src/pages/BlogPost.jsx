import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

import Seo from "../components/Seo";
import ImageFrame from "../components/ImageFrame";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import Button from "../components/Button";
import ContactCta from "../components/ContactCta";

import { blogPosts, getPostBySlug } from "../data/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  /*
   * Show other articles as related posts.
   * Current article is excluded.
   */
  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />

      <article>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-navy pb-16 pt-36 sm:pt-40 lg:pb-20 lg:pt-48">
          {/* Background glow */}
          <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-champagne/10 blur-3xl" />

          <div className="container-shahain relative z-10">
            <div className="max-w-4xl">
              {/* Back to blog */}
              <Reveal direction="up">
                <Link
                  to="/blog"
                  className="group mb-8 inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.18em] text-ivory/50 transition-colors duration-300 hover:text-champagne"
                >
                  <ArrowLeft
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1"
                    strokeWidth={1.6}
                  />
                  Back to Blog
                </Link>
              </Reveal>

              {/* Category */}
              <Reveal direction="up" delay={0.08}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">
                    {post.category}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-champagne/60" />

                  <span className="inline-flex items-center gap-1.5 font-body text-[11px] uppercase tracking-[0.14em] text-ivory/45">
                    <Clock3
                      className="h-3 w-3"
                      strokeWidth={1.5}
                    />
                    {post.readTime}
                  </span>
                </div>
              </Reveal>

              {/* Title */}
              <Reveal direction="up" delay={0.16}>
                <h1 className="mt-5 max-w-4xl text-balance font-heading text-[clamp(2.2rem,5.5vw,4rem)] font-medium leading-[1.08] text-ivory">
                  {post.title}
                </h1>
              </Reveal>

              {/* Excerpt */}
              <Reveal direction="up" delay={0.24}>
                <p className="mt-6 max-w-2xl text-balance font-body text-base leading-relaxed text-ivory/60 lg:text-lg">
                  {post.excerpt}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =====================================================
            ARTICLE
        ===================================================== */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-shahain">
            {/* FEATURE IMAGE */}
            <Reveal direction="up">
              <div className="mx-auto max-w-5xl overflow-hidden">
                <ImageFrame
                  src={post.image}
                  alt={post.title}
                  ratio="aspect-[16/9]"
                  label={post.category}
                  className="transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>
            </Reveal>

            {/* ARTICLE BODY */}
            <div className="mx-auto mt-14 max-w-3xl lg:mt-16">
              <Reveal
                direction="up"
                className="flex flex-col gap-7"
              >
                {post.body.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? "font-body text-lg leading-[1.9] text-navy/90 lg:text-xl"
                        : "font-body text-base leading-[1.9] text-navy/75"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>

              {/* CTA */}
              <Reveal
                direction="up"
                delay={0.1}
                className="mt-12 border-t border-sand/60 pt-8"
              >
                <Button to="/contact" variant="outline">
                  Discuss Your Project
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =====================================================
            RELATED POSTS
        ===================================================== */}
        {related.length > 0 && (
          <section className="border-t border-sand/50 bg-white/40 py-20 sm:py-24 lg:py-28">
            <div className="container-shahain">
              <Reveal direction="up">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                  <div>
                    <span className="font-body text-[11px] font-medium uppercase tracking-[0.24em] text-champagne">
                      Continue Reading
                    </span>

                    <h2 className="mt-3 font-heading text-3xl font-medium text-navy lg:text-4xl">
                      More from the blog
                    </h2>
                  </div>

                  <Link
                    to="/blog"
                    className="group inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors duration-300 hover:text-champagne"
                  >
                    View All Articles
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1.6}
                    />
                  </Link>
                </div>
              </Reveal>

              <Stagger className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {related.map((item) => (
                  <StaggerItem key={item.slug}>
                    <Link
                      to={`/blog/${item.slug}`}
                      className="group block"
                    >
                      {/* Related image */}
                      <div className="overflow-hidden">
                        <ImageFrame
                          src={item.image}
                          alt={item.title}
                          ratio="aspect-[4/3]"
                          label={item.category}
                          className="transition-transform duration-700 group-hover:scale-[1.035]"
                        />
                      </div>

                      {/* Related content */}
                      <div className="mt-4 border-t border-sand/60 pt-4">
                        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">
                          {item.category}
                        </span>

                        <h3 className="mt-2 font-heading text-lg leading-snug text-navy transition-colors duration-300 group-hover:text-champagne">
                          {item.title}
                        </h3>

                        <div className="mt-4 inline-flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-navy">
                          Read More
                          <ArrowUpRight
                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            strokeWidth={1.6}
                          />
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        )}
      </article>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <ContactCta />
    </>
  );
}