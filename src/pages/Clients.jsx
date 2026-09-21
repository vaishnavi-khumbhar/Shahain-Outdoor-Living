import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import ContactCta from "../components/ContactCta";
import { clientSectors } from "../data/clients";
import { media } from "../data/media";

export default function Clients() {
  return (
    <>
      <Seo
        title="Our Clients"
        description="Shahain Outdoor Living has worked with hotels, restaurants, corporate groups and developers including JW Marriott, Hilton, Ritz Carlton, Bajaj Auto and Forbes Marshal."
        path="/clients"
      />

      {/* =====================================================
          HERO — real photography behind the headline
      ===================================================== */}
      <section className="relative overflow-hidden bg-navy pb-20 pt-40 lg:pb-28 lg:pt-52">
        <div className="absolute inset-0">
          <img
            src={media.aboutSection}
            alt=""
            className="h-full w-full object-cover opacity-45"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/40" />
        </div>

        <div className="container-shahain relative">
          <Reveal direction="up">
            <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">Our Clients</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="mt-5 max-w-2xl text-balance font-heading text-[clamp(2.2rem,5.5vw,4rem)] font-medium leading-[1.08] text-ivory">
              Trusted by hotels, restaurants and developers.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          CLIENT SECTORS — spacing tightened, responsive
      ===================================================== */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-shahain flex flex-col gap-12 sm:gap-14 lg:gap-16">
          {clientSectors.map((sector) => (
            <div key={sector.title}>
              <SectionHeading eyebrow={sector.description} title={sector.title} className="mb-6 sm:mb-8" />
              <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {sector.examples.map((client) => (
                  <StaggerItem key={client}>
                    <div className="group flex h-24 items-center justify-center border border-sand/60 px-4 text-center transition-colors duration-300 hover:bg-navy">
                      <span className="font-heading text-sm leading-snug text-navy transition-colors duration-300 group-hover:text-ivory sm:text-base">
                        {client}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </section>

      <ContactCta title="Join the list of spaces we've shaped." />
    </>
  );
}