import { Phone } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { ctaLabels, siteConfig } from "../data/siteConfig";

export default function ContactCta({
  eyebrow = "Start a Project",
  title = "Let's discuss your outdoor space.",
  description = "Tell us about your project and our team will get back to you with the right furniture, shade or structure solution.",
}) {
  return (
    <section className="bg-deep-navy py-16 sm:py-20 lg:py-32">
      <div className="container-shahain flex flex-col items-center gap-6 sm:gap-8 text-center">

        {/* Eyebrow */}
        <Reveal direction="up">
          <span className="font-body text-[11px] sm:text-xs font-medium uppercase tracking-[0.24em] sm:tracking-[0.28em] text-champagne">
            {eyebrow}
          </span>
        </Reveal>

        {/* Title */}
        <Reveal direction="up" delay={0.08}>
          <h2
            className="
              max-w-2xl
              text-balance
              font-heading
              text-[clamp(1.8rem,7vw,3.25rem)]
              font-medium
              leading-[1.15]
              text-ivory
            "
          >
            {title}
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal direction="up" delay={0.16}>
          <p
            className="
              max-w-xl
              px-2
              text-balance
              font-body
              text-[14px]
              sm:text-[15px]
              leading-relaxed
              text-ivory/65
            "
          >
            {description}
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal
          direction="up"
          delay={0.24}
          className="
            flex
            w-full
            flex-col
            items-center
            gap-3
            pt-2
            sm:w-auto
            sm:flex-row
            sm:gap-4
          "
        >
          {/* Discuss Button */}
          <Button
            to="/contact"
            variant="champagne"
            className="w-full justify-center sm:w-auto"
          >
            {ctaLabels.discuss}
          </Button>

          {/* Call Button */}
          <Button
            href={siteConfig.contact.phoneHref}
            variant="outlineLight"
            icon={false}
            className="w-full justify-center sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              <Phone
                className="h-4 w-4 shrink-0"
                strokeWidth={2}
              />

              <span>
                {ctaLabels.call}
              </span>
            </span>
          </Button>
        </Reveal>

      </div>
    </section>
  );
}