import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
  titleClassName = "",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <Reveal direction="up" delay={0}>
          <span
            className={`mb-4 block font-body text-xs font-medium uppercase tracking-[0.28em] ${
              light ? "text-champagne" : "text-champagne"
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal direction="up" delay={0.08}>
        <h2
          className={`text-balance font-heading text-[clamp(1.9rem,4vw,3.25rem)] font-medium leading-[1.1] ${
            light ? "text-ivory" : "text-navy"
          } ${titleClassName}`}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal direction="up" delay={0.16}>
          <p
            className={`mt-5 max-w-xl text-balance font-body text-[15px] leading-relaxed ${
              light ? "text-ivory/75" : "text-gray"
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
