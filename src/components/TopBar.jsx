import { useEffect, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34v7.03C18.34 21.21 22 17.06 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-[60] flex h-7 translate-y-0 items-center bg-navy text-ivory transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:h-8 ${
        scrolled ? "lg:-translate-y-full" : "lg:translate-y-0"
      }`}
    >
      <div className="container-shahain flex w-full items-center justify-between font-body text-[12px] font-semibold tracking-[0.02em] lg:text-[13px]">
        {/* LEFT — address (desktop only) */}
        <div className="hidden items-center gap-2 text-ivory/80 lg:flex">
          <MapPin className="h-4 w-4 shrink-0 text-champagne" strokeWidth={1.6} />
          {siteConfig.contact.address}
        </div>

        {/* MOBILE — phone */}
        <a
          href={siteConfig.contact.phoneHref}
          className="flex items-center gap-1.5 font-bold text-ivory lg:hidden"
        >
          <Phone className="h-3.5 w-3.5 text-champagne" strokeWidth={1.8} />
          {siteConfig.contact.phone}
        </a>

        {/* RIGHT — email / phone (desktop) + social (always) */}
        <div className="flex items-center gap-3.5 lg:gap-5">
          <a
            href={siteConfig.contact.emailHref}
            className="hidden items-center gap-2 text-ivory/80 transition-colors duration-200 hover:text-champagne lg:inline-flex"
          >
            <Mail className="h-4 w-4 text-champagne" strokeWidth={1.6} />
            {siteConfig.contact.email}
          </a>

          <span className="hidden h-3.5 w-px bg-ivory/25 lg:block" />

          <a
            href={siteConfig.contact.phoneHref}
            className="hidden items-center gap-2 font-bold text-ivory transition-colors duration-200 hover:text-champagne lg:inline-flex"
          >
            <Phone className="h-4 w-4 text-champagne" strokeWidth={1.6} />
            {siteConfig.contact.phone}
          </a>

          <span className="hidden h-3.5 w-px bg-ivory/25 lg:block" />

          <div className="flex items-center gap-3">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ivory/80 transition-colors duration-200 hover:text-champagne">
              <FacebookIcon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ivory/80 transition-colors duration-200 hover:text-champagne">
              <InstagramIcon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}