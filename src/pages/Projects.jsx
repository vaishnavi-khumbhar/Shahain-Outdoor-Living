import { Link } from "react-router-dom";

import Seo from "../components/Seo";
import ImageFrame from "../components/ImageFrame";
import Reveal, {
  Stagger,
  StaggerItem,
} from "../components/Reveal";
import ContactCta from "../components/ContactCta";

import { projectShowcase } from "../data/projects";
import { media } from "../data/media";

export default function Projects() {
  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Seo
        title="Projects"
        description="A look at where Shahain Outdoor Living's furniture, awnings, umbrellas, shade sails and tensile structures have been delivered across hospitality, commercial and residential projects."
        path="/projects"
      />

      {/* =====================================================
          HERO — real photography behind the headline
      ===================================================== */}

      <section className="relative overflow-hidden bg-navy pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-48">
        <div className="absolute inset-0">
          <img
            src={media.heroSlide2}
            alt=""
            className="h-full w-full object-cover opacity-45"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/40" />
        </div>

        <div className="container-shahain relative">

          <Reveal direction="up">
            <span
              className="
                font-body
                text-xs
                font-medium
                uppercase
                tracking-[0.28em]
                text-champagne
              "
            >
              Projects
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h1
              className="
                mt-5
                max-w-2xl
                font-heading
                text-[clamp(2.2rem,5.5vw,4rem)]
                font-medium
                leading-[1.08]
                text-ivory
              "
            >
              Where our work lives.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p
              className="
                mt-6
                max-w-lg
                font-body
                text-sm
                leading-relaxed
                text-ivory/65
                sm:text-base
              "
            >
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

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shahain">

          <Stagger
            className="
              grid
              grid-cols-1
              gap-x-8
              gap-y-14
              sm:grid-cols-2
              sm:gap-y-16
              lg:grid-cols-3
            "
          >

            {projectShowcase.map((project, index) => (
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
                  className="
                    group
                    block
                    w-full
                  "
                >

                  {/* =================================================
                      PROJECT IMAGE
                  ================================================= */}

                  <ImageFrame
                    src={project.image}
                    alt={project.title}
                    ratio="aspect-[4/5]"
                    label={project.title}
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* =================================================
                      PROJECT INFO
                  ================================================= */}

                  <div className="mt-5 border-t border-sand/60 pt-5">

                    <span
                      className="
                        block
                        font-body
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-champagne
                        sm:text-[11px]
                      "
                    >
                      {project.sector}
                    </span>

                    <h3
                      className="
                        mt-2
                        font-heading
                        text-lg
                        leading-snug
                        text-navy
                        transition-colors
                        duration-300
                        group-hover:text-champagne
                        sm:text-xl
                      "
                    >
                      {project.title}
                    </h3>

                    {/* =================================================
                        CLIENTS
                    ================================================= */}

                    <div
                      className="
                        mt-4
                        flex
                        flex-wrap
                        gap-2
                      "
                    >

                      {project.clients.map((client) => (
                        <span
                          key={client}
                          className="
                            border
                            border-sand/60
                            px-2.5
                            py-1.5
                            font-body
                            text-[9px]
                            uppercase
                            leading-tight
                            tracking-[0.06em]
                            text-gray
                            sm:px-3
                            sm:text-[10px]
                            sm:tracking-[0.08em]
                          "
                        >
                          {client}
                        </span>
                      ))}

                    </div>

                  </div>

                </Link>

              </StaggerItem>
            ))}

          </Stagger>

          {/* =====================================================
              CLIENT LIST
          ===================================================== */}

          <Reveal
            direction="up"
            className="
              mt-14
              flex
              justify-center
              sm:mt-16
            "
          >
            <Link
              to="/clients"
              className="
                font-body
                text-[11px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-champagne
                link-underline
                sm:text-[12.5px]
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