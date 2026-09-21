import { motion } from "framer-motion";
import { siteConfig, ctaLabels } from "../data/siteConfig";

const enquiryMessage =
  "Hi Shahain Outdoor Living, I'd like to enquire about your outdoor furniture, awnings, umbrellas, shade sails or tensile structures. Please share more details.";

export default function WhatsAppButton() {
  const whatsappHref = `${siteConfig.contact.whatsapp}${
    siteConfig.contact.whatsapp.includes("?") ? "&" : "?"
  }text=${encodeURIComponent(enquiryMessage)}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Shahain Outdoor Living on WhatsApp"
      className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105"
    >
      {/* Live pulse ring */}

      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.6, 1.6], opacity: [0.55, 0, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
      />

      <svg viewBox="0 0 32 32" fill="currentColor" className="relative h-7 w-7" aria-hidden="true">
        <path d="M16.02 4C9.39 4 4 9.37 4 15.98c0 2.11.56 4.16 1.62 5.97L4 28l6.22-1.6a12.05 12.05 0 0 0 5.8 1.47h.01c6.62 0 12.01-5.37 12.01-11.98C28.04 9.28 22.65 4 16.02 4Zm0 21.94h-.01a9.9 9.9 0 0 1-5.07-1.39l-.36-.21-3.69.95.98-3.58-.24-.37a9.86 9.86 0 0 1-1.53-5.36c0-5.47 4.46-9.92 9.94-9.92 2.65 0 5.14 1.03 7.02 2.9a9.85 9.85 0 0 1 2.9 6.99c0 5.47-4.46 9.99-9.94 9.99Zm5.45-7.44c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>

      {/* Desktop hover label */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-navy px-4 py-2 font-body text-[12px] font-medium uppercase tracking-[0.12em] text-ivory opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 lg:block">
        {ctaLabels.whatsapp}
      </span>
    </a>
  );
}