import { Phone } from "lucide-react";
import { siteConfig, ctaLabels } from "../data/siteConfig";

export default function CallButton() {
  return (
    <a
      href={siteConfig.contact.phoneHref}
      aria-label={`Call Shahain Outdoor Living at ${siteConfig.contact.phone}`}
      className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0EA5E9] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 hover:bg-[#0284C7]"
    >
      <Phone className="h-6 w-6" strokeWidth={1.5} />

      {/* Desktop hover label */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-navy px-4 py-2 font-body text-[12px] font-medium uppercase tracking-[0.12em] text-ivory opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 lg:block">
        {ctaLabels.call}
      </span>
    </a>
  );
}