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

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          container-shahain
          grid
          grid-cols-1
          gap-12
          py-16
          text-center
          sm:grid-cols-2
          sm:text-left
          lg:grid-cols-4
          lg:gap-10
          lg:py-24
        "
      >

        {/* =====================================================
            BRAND
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            sm:col-span-2
            sm:items-start
            lg:col-span-1
          "
        >
          <img
            src={logo}
            alt="Shahain Furniture"
            className="h-12 w-auto object-contain"
          />

          <p
            className="
              mt-6
              max-w-xs
              font-body
              text-[17px]
              leading-relaxed
              text-ivory/65
            "
          >
            {siteConfig.description}
          </p>

          {/* SOCIAL ICONS */}

          <div className="mt-6 flex items-center justify-center gap-4 sm:justify-start">

            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Shahain Furniture on Facebook"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                border
                border-ivory/25
                text-ivory/70
                transition-colors
                hover:border-champagne
                hover:text-champagne
              "
            >
              <FacebookIcon
                className="h-4 w-4"
                strokeWidth={1.5}
              />
            </a>

            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Shahain Furniture on Instagram"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                border
                border-ivory/25
                text-ivory/70
                transition-colors
                hover:border-champagne
                hover:text-champagne
              "
            >
              <InstagramIcon
                className="h-4 w-4"
                strokeWidth={1.5}
              />
            </a>

          </div>
        </div>


        {/* =====================================================
            PRODUCTS
        ===================================================== */}

        <div className="flex flex-col items-center sm:items-start">

          <h3
            className="
              font-body
              text-base
              font-semibold
              uppercase
              tracking-[0.24em]
              text-champagne
            "
          >
            Products
          </h3>

          <ul className="mt-6 space-y-3.5">

            {footerNav.products.map((link) => (
              <li key={link.path}>

                <Link
                  to={link.path}
                  className="
                    font-body
                    text-[17px]
                    text-ivory/70
                    transition-colors
                    hover:text-champagne
                  "
                >
                  {link.label}
                </Link>

              </li>
            ))}

          </ul>

        </div>


        {/* =====================================================
            COMPANY
        ===================================================== */}

        <div className="flex flex-col items-center sm:items-start">

          <h3
            className="
              font-body
              text-base
              font-semibold
              uppercase
              tracking-[0.24em]
              text-champagne
            "
          >
            Company
          </h3>

          <ul className="mt-6 space-y-3.5">

            {footerNav.company.map((link) => (
              <li key={link.path}>

                <Link
                  to={link.path}
                  className="
                    font-body
                    text-[17px]
                    text-ivory/70
                    transition-colors
                    hover:text-champagne
                  "
                >
                  {link.label}
                </Link>

              </li>
            ))}

          </ul>

        </div>


        {/* =====================================================
            GET IN TOUCH
        ===================================================== */}

        <div className="flex flex-col items-center sm:items-start">

          <h3
            className="
              font-body
              text-base
              font-semibold
              uppercase
              tracking-[0.24em]
              text-champagne
            "
          >
            Get in Touch
          </h3>

          <ul className="mt-6 space-y-4">

            {/* PHONE */}

            <li>

              <a
                href={siteConfig.contact.phoneHref}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  font-body
                  text-[17px]
                  text-ivory/70
                  transition-colors
                  hover:text-champagne
                  sm:justify-start
                "
              >

                <Phone
                  className="h-4 w-4 shrink-0"
                  strokeWidth={1.5}
                />

                <span>
                  {siteConfig.contact.phone}
                </span>

              </a>

            </li>


            {/* EMAIL */}

            <li>

              <a
                href={siteConfig.contact.emailHref}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  font-body
                  text-[17px]
                  text-ivory/70
                  transition-colors
                  hover:text-champagne
                  sm:justify-start
                "
              >

                <Mail
                  className="h-4 w-4 shrink-0"
                  strokeWidth={1.5}
                />

                <span className="break-all">
                  {siteConfig.contact.email}
                </span>

              </a>

            </li>


            {/* ADDRESS */}

            <li
              className="
                flex
                items-start
                justify-center
                gap-3
                font-body
                text-[17px]
                leading-relaxed
                text-ivory/70
                sm:justify-start
              "
            >

              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0"
                strokeWidth={1.5}
              />

              <span className="max-w-[260px]">
                {siteConfig.contact.address}
              </span>

            </li>

          </ul>

        </div>

      </div>


      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div className="border-t border-ivory/10">

        <div
          className="
            container-shahain
            flex
            flex-col
            items-center
            justify-center
            gap-3
            py-6
            text-center
            sm:flex-row
            sm:justify-between
            sm:text-left
          "
        >

          <p className="font-body text-[14px] text-ivory/50">
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>


          <p className="font-body text-[14px] text-ivory/50">

            Designed &amp; Developed By{" "}

            <a
              href="https://www.advertisingandbrandingmarketing.com/"
              target="_blank"
              rel="noreferrer"
              className="
                font-semibold
                text-champagne
                underline
                decoration-champagne/40
                underline-offset-4
                transition-colors
                hover:text-ivory
                hover:decoration-ivory/60
              "
            >
              Advertising Branding &amp; Marketing
            </a>

          </p>

        </div>

      </div>

    </footer>
  );
}