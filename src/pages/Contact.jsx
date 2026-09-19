import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { productCategories } from "../data/products";
import { siteConfig, ctaLabels } from "../data/siteConfig";

const inputClasses =
  "w-full border border-sand/70 bg-transparent px-4 py-3.5 font-body text-sm text-navy placeholder:text-gray/60 outline-none transition-colors duration-200 focus:border-champagne";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "", message: "" });

  const handleChange = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const subject = encodeURIComponent(`Enquiry from ${form.name || "the Shahain website"}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterested in: ${form.interest || "Not specified"}\n\nMessage:\n${form.message}`
  );

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Shahain Outdoor Living in Pune for premium outdoor furniture, awnings, umbrellas, shade sails and tensile structures. Call, WhatsApp or send an enquiry."
        path="/contact"
      />

      <section className="bg-navy pb-20 pt-40 lg:pb-28 lg:pt-52">
        <div className="container-shahain">
          <Reveal direction="up">
            <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">Contact</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="mt-5 max-w-2xl text-balance font-heading text-[clamp(2.2rem,5.5vw,4rem)] font-medium leading-[1.08] text-ivory">
              Let's discuss your outdoor space.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-20">
        <div className="container-shahain grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Contact details */}
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Reach Us" title="Get in touch" className="mb-10" />
            <div className="flex flex-col gap-6">
              <a href={siteConfig.contact.phoneHref} className="flex items-start gap-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-sand/70 text-navy transition-colors group-hover:border-champagne group-hover:text-champagne">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block font-body text-xs uppercase tracking-[0.16em] text-gray">Call</span>
                  <span className="mt-1 block font-heading text-lg text-navy">{siteConfig.contact.phone}</span>
                </span>
              </a>
              <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-sand/70 text-navy transition-colors group-hover:border-champagne group-hover:text-champagne">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block font-body text-xs uppercase tracking-[0.16em] text-gray">WhatsApp</span>
                  <span className="mt-1 block font-heading text-lg text-navy">{siteConfig.contact.whatsappNumber}</span>
                </span>
              </a>
              <a href={siteConfig.contact.emailHref} className="flex items-start gap-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-sand/70 text-navy transition-colors group-hover:border-champagne group-hover:text-champagne">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block font-body text-xs uppercase tracking-[0.16em] text-gray">Email</span>
                  <span className="mt-1 block font-heading text-lg text-navy">{siteConfig.contact.email}</span>
                </span>
              </a>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-sand/70 text-navy">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block font-body text-xs uppercase tracking-[0.16em] text-gray">Visit</span>
                  <span className="mt-1 block max-w-[220px] font-heading text-lg leading-snug text-navy">
                    {siteConfig.contact.address}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <SectionHeading eyebrow="Send an Enquiry" title="Tell us about your project" className="mb-10" />
            <form
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `${siteConfig.contact.emailHref}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="sm:col-span-1">
                <label className="mb-2 block font-body text-xs uppercase tracking-[0.14em] text-gray" htmlFor="name">
                  Name
                </label>
                <input id="name" required value={form.name} onChange={handleChange("name")} className={inputClasses} placeholder="Your name" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block font-body text-xs uppercase tracking-[0.14em] text-gray" htmlFor="phone">
                  Phone
                </label>
                <input id="phone" required value={form.phone} onChange={handleChange("phone")} className={inputClasses} placeholder="Your phone number" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block font-body text-xs uppercase tracking-[0.14em] text-gray" htmlFor="email">
                  Email
                </label>
                <input id="email" type="email" required value={form.email} onChange={handleChange("email")} className={inputClasses} placeholder="you@email.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block font-body text-xs uppercase tracking-[0.14em] text-gray" htmlFor="interest">
                  Interested In
                </label>
                <select id="interest" value={form.interest} onChange={handleChange("interest")} className={`${inputClasses} appearance-none`}>
                  <option value="">Select a product category</option>
                  {productCategories.map((category) => (
                    <option key={category.slug} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block font-body text-xs uppercase tracking-[0.14em] text-gray" htmlFor="message">
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
              <div className="sm:col-span-2 mt-2">
                <Button type="submit" variant="primary">
                  {ctaLabels.enquire}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
