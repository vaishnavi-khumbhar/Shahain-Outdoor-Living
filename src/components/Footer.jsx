import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import { footerNav } from "../data/navigation";
import { siteConfig } from "../data/siteConfig";
import logo from "../assets/logo/shahain-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-ivory">
      <div className="container-shahain grid grid-cols-1 gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:py-24">
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={logo} alt="Shahain Outdoor Living" className="h-12 w-auto" />
          <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-ivory/60">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Shahain Outdoor Living on Facebook"
              className="flex h-9 w-9 items-center justify-center border border-ivory/25 text-ivory/70 transition-colors hover:border-champagne hover:text-champagne"
            >
              <FacebookIcon className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Shahain Outdoor Living on Instagram"
              className="flex h-9 w-9 items-center justify-center border border-ivory/25 text-ivory/70 transition-colors hover:border-champagne hover:text-champagne"
            >
              <InstagramIcon className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-champagne">Products</h3>
          <ul className="mt-6 space-y-3">
            {footerNav.products.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-body text-sm text-ivory/70 transition-colors hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-champagne">Company</h3>
          <ul className="mt-6 space-y-3">
            {footerNav.company.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-body text-sm text-ivory/70 transition-colors hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-champagne">Get in Touch</h3>
          <ul className="mt-6 space-y-4">
            <li>
              <a href={siteConfig.contact.phoneHref} className="flex items-start gap-3 font-body text-sm text-ivory/70 hover:text-ivory">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.contact.emailHref} className="flex items-start gap-3 font-body text-sm text-ivory/70 hover:text-ivory">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3 font-body text-sm text-ivory/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
              {siteConfig.contact.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-shahain flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-body text-xs text-ivory/45">
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="font-body text-xs text-ivory/45">Pune, India &middot; Since {siteConfig.founded}</p>
        </div>
      </div>
    </footer>
  );
}
