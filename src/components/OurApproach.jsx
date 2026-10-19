// src/components/OurApproach.jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Understanding your space, requirement and how it will be used.",
  },
  {
    number: "02",
    title: "Recommend",
    description: "Recommending the right furniture, awning or shade solution for it.",
  },
  {
    number: "03",
    title: "Install",
    description: "Professional installation with close attention to fit and finish.",
  },
  {
    number: "04",
    title: "Support",
    description: "Dependable after-sales service, focused on your long-term needs.",
  },
];

export default function OurApproach() {
  return (
    <section className="bg-ivory py-16 sm:py-20 lg:py-24">
      <div className="container-shahain">
        {/* Heading */}
        <div className="mx-auto mb-6 max-w-xl text-center sm:mb-8 lg:mb-10">
                      <Reveal direction="up">
            <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">
              How We Work
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-4 font-heading text-[clamp(1.8rem,4vw,2.75rem)] font-medium text-navy">
              Our Approach
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.18}>
            <div className="mx-auto mt-4 h-px w-16 bg-champagne" />
          </Reveal>
        </div>

        {/* Steps */}
        <Stagger className="relative grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4 lg:gap-x-10">
          {/* Connecting line — draws itself on scroll-in */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-champagne/40 lg:block"
          />

          {steps.map((step, index) => (
            <StaggerItem key={step.number} className="relative">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden border border-transparent bg-transparent p-4 transition-colors duration-300 hover:border-sand/60 hover:bg-white hover:shadow-[0_20px_40px_rgba(19,32,56,0.08)] sm:p-5"
              >
                <div className="flex items-start gap-2">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1 + index * 0.1,
                    }}
                    className="font-heading text-[clamp(2.2rem,4vw,3rem)] font-medium leading-none text-navy/20 transition-colors duration-300 group-hover:text-champagne/70"
                  >
                    {step.number}
                  </motion.span>
                  <motion.span
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne transition-colors duration-300 group-hover:bg-navy"
                  />
                </div>

                <h3 className="mt-4 font-heading text-lg text-navy transition-colors duration-300 group-hover:text-champagne sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[220px] font-body text-sm leading-relaxed text-gray">
                  {step.description}
                </p>

                <div className="mt-4 h-[2px] w-0 bg-champagne transition-all duration-500 ease-out group-hover:w-12" />
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* CTA */}
        <Reveal direction="up" className="mt-14 flex justify-center sm:mt-16">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 border border-navy px-6 py-3 font-body text-[12px] font-medium uppercase tracking-[0.16em] text-navy transition-colors duration-300 hover:bg-navy hover:text-ivory"
          >
            See Our Approach
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}