import { Link } from "react-router-dom";

import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import ImageFrame from "../components/ImageFrame";
import Reveal, {
  Stagger,
  StaggerItem,
} from "../components/Reveal";
import ContactCta from "../components/ContactCta";

import { projectShowcase } from "../data/projects";
import { getProductBySlug } from "../data/products";

export default function Projects() {
  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Seo
        title="Projects"
        description="A look at where Shahain Outdoor Living's furniture, awnings, umbrellas, shade sails and tensile structures have been delivered — across hospitality, commercial and residential projects."
        path="/projects"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-navy pb-20 pt-40 lg:pb-28 lg:pt-52">
        <div className="container-shahain">

          <Reveal direction="up">
            <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">
              Projects
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h1 className="mt-5 max-w-2xl text-balance font-heading text-[clamp(2.2rem,5.5vw,4rem)] font-medium leading-[1.08] text-ivory">
              Where our work lives.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-ivory/65">
              Outdoor furniture, awnings, umbrellas, shade sails and tensile
              structures delivered across hospitality, commercial and
              residential projects.
            </p>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          PROJECT GRID
      ===================================================== */}

      <section className="py-20 lg:py-20">
        <div className="container-shahain">

          <Stagger
            className="
              grid
              grid-cols-1
              gap-x-8
              gap-y-16
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {projectShowcase.map((project, index) => {
              const product = getProductBySlug(project.category);

              return (
                <StaggerItem
                  key={project.slug}
                  className={
                    index === 1
                      ? "lg:translate-y-10"
                      : ""
                  }
                >

                  <Link
                    to={`/products/${project.category}`}
                    className="group block"
                  >

                    {/* =================================================
                        PROJECT IMAGE
                    ================================================= */}

                    <ImageFrame
                      src={project.image}
                      alt={project.title}
                      ratio="aspect-[4/5]"
                      label={
                        product?.heroLabel ??
                        project.title
                      }
                      className="
                        overflow-hidden
                        transition-transform
                        duration-700
                        group-hover:scale-[1.02]
                      "
                    />

                    {/* =================================================
                        PROJECT INFO
                    ================================================= */}

                    <div className="mt-5 border-t border-sand/60 pt-5">

                      <span
                        className="
                          font-body
                          text-[11px]
                          uppercase
                          tracking-[0.2em]
                          text-champagne
                        "
                      >
                        {project.sector}
                      </span>

                      <h3
                        className="
                          mt-2
                          font-heading
                          text-xl
                          leading-snug
                          text-navy
                          transition-colors
                          duration-300
                          group-hover:text-champagne
                        "
                      >
                        {project.title}
                      </h3>

                      {/* =================================================
                          CLIENTS
                      ================================================= */}

                      <div className="mt-4 flex flex-wrap gap-2">

                        {project.clients.map((client) => (
                          <span
                            key={client}
                            className="
                              border
                              border-sand/60
                              px-3
                              py-1.5
                              font-body
                              text-[10px]
                              uppercase
                              tracking-[0.08em]
                              text-gray
                            "
                          >
                            {client}
                          </span>
                        ))}

                      </div>

                    </div>

                  </Link>

                </StaggerItem>
              );
            })}

          </Stagger>

          {/* =====================================================
              CLIENT LIST
          ===================================================== */}

          <Reveal
            direction="up"
            className="mt-16 flex justify-center"
          >
            <Link
              to="/clients"
              className="
                font-body
                text-[12.5px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-champagne
                link-underline
              "
            >
              See the Full Client List →
            </Link>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <ContactCta
        eyebrow="Start Your Project"
        title="Have a space in mind?"
        description="Tell us about it — we'll help you find the right furniture, shade or structure for it."
      />
    </>
  );
}