import { useState } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ExternalLink,
} from "lucide-react";

import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

import { productCategories } from "../data/products";
import { siteConfig, ctaLabels } from "../data/siteConfig";
import { media } from "../data/media";

const GOOGLE_MAPS_LINK =
  "https://share.google/1P2WwKaB1HrONL3Nw";

const inputClasses =
  "w-full rounded-none border border-sand/70 bg-transparent px-4 py-3.5 font-body text-sm text-navy placeholder:text-gray/60 outline-none transition-all duration-200 focus:border-champagne focus:ring-1 focus:ring-champagne/20";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

 const whatsappMessage = encodeURIComponent(
  `Hello Shahain Furniture,

I would like to enquire about your outdoor living solutions.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Interested In: ${form.interest || "Not specified"}

Message:
${form.message || "No message provided"}

Thank you.`
);

const whatsappNumber = siteConfig.contact.whatsappNumber.replace(/\D/g, "");

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Seo
        title="Contact Us"
        description="Get in touch with Shahain Furniture in Pune for premium outdoor furniture, awnings, umbrellas, gazebos and tensile structures. Call, WhatsApp or send an enquiry."
        path="/contact"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-navy pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-28 lg:pt-52">
        {/* Background Image */}

        <div className="absolute inset-0">
          <img
            src={media.applicationsImage}
            alt=""
            className="h-full w-full object-cover opacity-40"
            loading="eager"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/40" />
        </div>

        {/* Hero Content */}

        <div className="container-shahain relative">
          <Reveal direction="up">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.28em] text-champagne sm:text-xs">
              Contact
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h1
              className="
                mt-5
                max-w-2xl
                font-heading
                text-[clamp(2.2rem,8vw,4rem)]
                font-medium
                leading-[1.08]
                text-ivory
              "
            >
              Let's discuss your outdoor space.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-ivory/65 sm:text-base">
              Tell us about your outdoor space, requirements and vision.
              Our team will help you find the right solution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="py-14 sm:py-20 lg:py-24">
        <div
          className="
            container-shahain
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-12
            lg:gap-16
          "
        >
          {/* =================================================
              CONTACT DETAILS
          ================================================= */}

          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Reach Us"
              title="Get in touch"
              className="mb-8 sm:mb-10"
            />

            <div className="flex flex-col gap-6">
              {/* PHONE */}

              <a
                href={siteConfig.contact.phoneHref}
                className="group flex items-start gap-4"
              >
                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-sand/70
                    text-navy
                    transition-colors
                    group-hover:border-champagne
                    group-hover:text-champagne
                  "
                >
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </span>

                <span className="min-w-0">
                  <span className="block font-body text-[10px] uppercase tracking-[0.16em] text-gray sm:text-xs">
                    Call
                  </span>

                  <span className="mt-1 block break-words font-heading text-base text-navy sm:text-lg">
                    {siteConfig.contact.phone}
                  </span>
                </span>
              </a>

              {/* WHATSAPP */}

              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4"
              >
                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-sand/70
                    text-navy
                    transition-colors
                    group-hover:border-champagne
                    group-hover:text-champagne
                  "
                >
                  <MessageCircle
                    className="h-4 w-4"
                    strokeWidth={1.5}
                  />
                </span>

                <span className="min-w-0">
                  <span className="block font-body text-[10px] uppercase tracking-[0.16em] text-gray sm:text-xs">
                    WhatsApp
                  </span>

                  <span className="mt-1 block break-words font-heading text-base text-navy sm:text-lg">
                    {siteConfig.contact.whatsappNumber}
                  </span>
                </span>
              </a>

              {/* EMAIL */}

              <a
                href={siteConfig.contact.emailHref}
                className="group flex items-start gap-4"
              >
                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-sand/70
                    text-navy
                    transition-colors
                    group-hover:border-champagne
                    group-hover:text-champagne
                  "
                >
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>

                <span className="min-w-0">
                  <span className="block font-body text-[10px] uppercase tracking-[0.16em] text-gray sm:text-xs">
                    Email
                  </span>

                  <span className="mt-1 block break-all font-heading text-base text-navy sm:text-lg">
                    {siteConfig.contact.email}
                  </span>
                </span>
              </a>

              {/* ADDRESS */}

              <div className="flex items-start gap-4">
                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-sand/70
                    text-navy
                  "
                >
                  <MapPin
                    className="h-4 w-4"
                    strokeWidth={1.5}
                  />
                </span>

                <span className="min-w-0">
                  <span className="block font-body text-[10px] uppercase tracking-[0.16em] text-gray sm:text-xs">
                    Visit
                  </span>

                  <span className="mt-1 block max-w-[260px] font-heading text-base leading-snug text-navy sm:text-lg">
                    {siteConfig.contact.address}
                  </span>
                </span>
              </div>

              {/* =================================================
                  GOOGLE MAP BUTTON
              ================================================= */}

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-2
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  border
                  border-navy
                  px-5
                  py-3
                  font-body
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-navy
                  transition-all
                  duration-300
                  hover:bg-navy
                  hover:text-ivory
                "
              >
                <MapPin className="h-4 w-4" strokeWidth={1.5} />

                Open Location in Google Maps

                <ExternalLink
                  className="h-3.5 w-3.5"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <div className="lg:col-span-7 lg:col-start-6">
            <SectionHeading
              eyebrow="Send an Enquiry"
              title="Tell us about your project"
              className="mb-8 sm:mb-10"
            />

            <form
              className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
              "
             onSubmit={(e) => {
  e.preventDefault();

  window.open(
    whatsappLink,
    "_blank",
    "noopener,noreferrer"
  );
}}
            >
              {/* NAME */}

              <div>
                <label
                  className="mb-2 block font-body text-[10px] uppercase tracking-[0.14em] text-gray sm:text-xs"
                  htmlFor="name"
                >
                  Name
                </label>

                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                  className={inputClasses}
                  placeholder="Your name"
                />
              </div>

              {/* PHONE */}

              <div>
                <label
                  className="mb-2 block font-body text-[10px] uppercase tracking-[0.14em] text-gray sm:text-xs"
                  htmlFor="phone"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  required
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className={inputClasses}
                  placeholder="Your phone number"
                />
              </div>

              {/* EMAIL */}

              <div className="sm:col-span-2">
                <label
                  className="mb-2 block font-body text-[10px] uppercase tracking-[0.14em] text-gray sm:text-xs"
                  htmlFor="email"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  className={inputClasses}
                  placeholder="you@email.com"
                />
              </div>

              {/* INTEREST */}

              <div className="sm:col-span-2">
                <label
                  className="mb-2 block font-body text-[10px] uppercase tracking-[0.14em] text-gray sm:text-xs"
                  htmlFor="interest"
                >
                  Interested In
                </label>

                <select
                  id="interest"
                  value={form.interest}
                  onChange={handleChange("interest")}
                  className={`${inputClasses} appearance-none`}
                >
                  <option value="">
                    Select a product category
                  </option>

                  {productCategories.map((category) => (
                    <option
                      key={category.slug}
                      value={category.title}
                    >
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* MESSAGE */}

              <div className="sm:col-span-2">
                <label
                  className="mb-2 block font-body text-[10px] uppercase tracking-[0.14em] text-gray sm:text-xs"
                  htmlFor="message"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  className={inputClasses}
                  placeholder="Tell us about your space and requirements"
                />
              </div>

              {/* BUTTON */}

              <div className="mt-1 sm:col-span-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  {ctaLabels.enquire}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
    GOOGLE MAP
===================================================== */}

<section className="pb-16 sm:pb-20 lg:pb-24">
  <div className="container-shahain">

    <Reveal direction="up">
      <div className="overflow-hidden border border-sand/70">

        {/* MAP */}
        <a
          href="https://share.google/1P2WwKaB1HrONL3Nw"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Shahain Furniture location in Google Maps"
          className="group relative block"
        >
          <div className="relative h-[320px] sm:h-[400px] lg:h-[480px]">

            <iframe
              title="Shahain Furniture Location"
              src="https://www.google.com/maps?q=Shahain%20Outdoor%20Living%20Pune&output=embed"
              className="
                pointer-events-none
                h-full
                w-full
                border-0
                grayscale-[10%]
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* CLICK OVERLAY */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-navy/0
                transition-all
                duration-300
                group-hover:bg-navy/20
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  border
                  border-white
                  bg-navy/90
                  px-5
                  py-3
                  font-body
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-ivory
                  opacity-100
                  shadow-lg
                  transition-all
                  duration-300
                  group-hover:bg-champagne
                  group-hover:text-navy
                "
              >
                <MapPin
                  className="h-4 w-4"
                  strokeWidth={1.5}
                />

                Open in Google Maps
              </div>
            </div>

          </div>
        </a>

        {/* LOCATION INFO */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            bg-navy
            px-5
            py-6
            text-center
            sm:flex-row
            sm:px-8
            sm:text-left
          "
        >
          <div>
            <span
              className="
                font-body
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-champagne
              "
            >
              Our Location
            </span>

            <p
              className="
                mt-2
                max-w-xl
                font-body
                text-sm
                leading-relaxed
                text-ivory/70
              "
            >
              {siteConfig.contact.address}
            </p>
          </div>

          <a
            href="https://share.google/1P2WwKaB1HrONL3Nw"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              border
              border-champagne
              px-5
              py-3
              font-body
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-champagne
              transition-all
              duration-300
              hover:bg-champagne
              hover:text-navy
            "
          >
            <MapPin
              className="h-4 w-4"
              strokeWidth={1.5}
            />

            Get Directions
          </a>
        </div>

      </div>
    </Reveal>

  </div>
</section>
    </>
  );
}