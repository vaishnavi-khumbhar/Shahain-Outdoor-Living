import { useEffect } from "react";
import { siteConfig } from "../data/siteConfig";

export default function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${siteConfig.name}`
      : `${siteConfig.name} | ${siteConfig.tagline}`;

    document.title = fullTitle;

    const setMeta = (attr, key, value) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const desc = description || siteConfig.description;
    const url = `${siteConfig.url}${path === "/" ? "" : path}`;

    setMeta("name", "description", desc);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:site_name", siteConfig.name);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path]);

  return null;
}