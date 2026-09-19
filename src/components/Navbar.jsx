import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { mainNav } from "../data/navigation";
import { siteConfig, ctaLabels } from "../data/siteConfig";
import logo from "../assets/logo/shahain-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(19,32,56,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="container-shahain flex h-24 items-center justify-between lg:h-20">
        <Link
          to="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03]"
          aria-label="Shahain Outdoor Living — Home"
        >
          <img src={logo} alt="Shahain Outdoor Living" className="h-12 w-auto lg:h-14" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {mainNav.map((item) => (
            <div
              key={item.path}
              className="group relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.path)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `link-underline flex items-center gap-1 pb-1 font-body text-[12.5px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                    isActive
                      ? "text-champagne"
                      : solid
                        ? "text-navy hover:text-champagne"
                        : "text-ivory hover:text-champagne"
                  }`
                }
              >
                {item.label}
                {item.children ? (
                  <ChevronDown
                    className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180"
                    strokeWidth={2.5}
                  />
                ) : null}
              </NavLink>

              {item.children ? (
                <AnimatePresence>
                  {openDropdown === item.path ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4"
                    >
                      <div className="border border-sand/60 border-t-2 border-t-champagne bg-ivory shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block border-b border-sand/40 px-5 py-3.5 font-body text-[12.5px] uppercase tracking-[0.1em] text-navy/80 last:border-b-0 hover:bg-navy hover:text-ivory transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className={`flex items-center gap-2 font-body text-[12.5px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 hover:text-champagne ${
              solid ? "text-navy" : "text-ivory"
            }`}
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={2} />
            {siteConfig.contact.phone}
          </a>
          <Link
            to="/contact"
            className={`border px-6 py-3 font-body text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
              solid
                ? "border-navy text-navy hover:bg-navy hover:text-ivory"
                : "border-ivory/70 text-ivory hover:bg-ivory hover:text-navy"
            }`}
          >
            {ctaLabels.enquire}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center transition-colors duration-300 lg:hidden ${
            solid ? "text-navy" : "text-ivory"
          }`}
        >
          {open ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-ivory lg:hidden"
          >
            <nav className="container-shahain flex flex-col gap-1 pb-8 pt-2">
              {mainNav.map((item) => (
                <MobileNavItem key={item.path} item={item} />
              ))}
              <div className="mt-6 flex flex-col gap-3 border-t border-sand/50 pt-6">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-2 font-body text-sm font-medium uppercase tracking-[0.14em] text-navy"
                >
                  <Phone className="h-4 w-4" /> {siteConfig.contact.phone}
                </a>
                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center justify-center bg-navy px-6 py-4 font-body text-[12.5px] font-medium uppercase tracking-[0.16em] text-ivory"
                >
                  {ctaLabels.enquire}
                </Link>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function MobileNavItem({ item }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link to={item.path} className="border-b border-sand/40 py-4 font-heading text-xl text-navy">
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-sand/40">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between py-4 font-heading text-xl text-navy"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {expanded ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pb-3"
          >
            {item.children.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                className="block py-2.5 pl-4 font-body text-[13px] uppercase tracking-[0.12em] text-navy/70"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}