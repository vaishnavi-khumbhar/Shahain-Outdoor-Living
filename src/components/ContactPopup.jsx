import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "./Button";
import { productCategories } from "../data/products";
import { siteConfig } from "../data/siteConfig";

// ── Tunable settings ─────────────────────────────────────
const DELAY_MS = 2000; // how long after page load/navigation before it shows
const SESSION_KEY = "shahain_popup_submitted";

// Set this to true if you'd rather it show ONLY ONCE per
// browser tab (recommended for better UX) instead of on
// every single page navigation.
const SHOW_ONCE_PER_SESSION = false;
// ──────────────────────────────────────────────────────────

const inputClasses =
  "w-full border border-sand/70 bg-transparent px-3.5 py-3 font-body text-sm text-navy placeholder:text-gray/60 outline-none transition-colors duration-200 focus:border-champagne";

export default function ContactPopup() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "", message: "" });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  useEffect(() => {
    // Never show on the Contact page itself
    if (location.pathname === "/contact") return;

    // If it's already been submitted once this session, and
    // the "once per session" flag is on, don't show it again
    if (SHOW_ONCE_PER_SESSION && sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
      `Hi Shahain Outdoor Living, I'd like to enquire about your products.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Interested in: ${form.interest || "Not specified"}\n` +
      (form.message ? `\nMessage:\n${form.message}` : "");

    const whatsappHref = `${siteConfig.contact.whatsapp}${
      siteConfig.contact.whatsapp.includes("?") ? "&" : "?"
    }text=${encodeURIComponent(message)}`;

    window.open(whatsappHref, "_blank", "noopener,noreferrer");

    sessionStorage.setItem(SESSION_KEY, "true");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/70 px-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md border border-sand/60 bg-ivory p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-gray transition-colors hover:text-navy"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <span className="font-body text-xs font-medium uppercase tracking-[0.24em] text-champagne">
              Get a Quote
            </span>

            <h3 className="mt-3 font-heading text-2xl leading-snug text-navy">
              Tell us about your outdoor space
            </h3>

            <p className="mt-2 font-body text-sm leading-relaxed text-gray">
              Share a few details and our team will get back to you.
            </p>

            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                required
                value={form.name}
                onChange={handleChange("name")}
                className={inputClasses}
                placeholder="Your name"
              />

              <input
                required
                value={form.phone}
                onChange={handleChange("phone")}
                className={inputClasses}
                placeholder="Your phone number"
              />

              <select
                value={form.interest}
                onChange={handleChange("interest")}
                className={`${inputClasses} appearance-none`}
              >
                <option value="">Interested in (optional)</option>
                {productCategories.map((category) => (
                  <option key={category.slug} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>

              <textarea
                rows={3}
                value={form.message}
                onChange={handleChange("message")}
                className={inputClasses}
                placeholder="Your message (optional)"
              />

              <Button type="submit" variant="primary" className="mt-1 w-full">
                Send 
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}