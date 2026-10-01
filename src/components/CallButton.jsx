import { Mail } from "lucide-react";
import { ctaLabels } from "../data/siteConfig";

export default function ContactButton() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-contact-popup"));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Open the enquiry form"
      className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-navy text-champagne shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 hover:bg-deep-navy"
    >
      <Mail className="h-6 w-6" strokeWidth={1.5} />

      {/* Desktop hover label */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-navy px-4 py-2 font-body text-[12px] font-medium uppercase tracking-[0.12em] text-ivory opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 lg:block">
        {ctaLabels.enquire}
      </span>
    </button>
  );
}