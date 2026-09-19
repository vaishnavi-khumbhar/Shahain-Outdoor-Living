import { useEffect } from "react";

const SITE_TITLE = "Shahain Outdoor Living";

/**
 * Lightweight per-page SEO: sets document title + meta description without
 * pulling in a Helmet dependency. Restores nothing on unmount since the next
 * page always sets its own values immediately (React Router SPA navigation).
 */
export default function Seo({ title, description, path }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title ? `${title} | ${SITE_TITLE}` : SITE_TITLE);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && path) {
      canonical.setAttribute("href", `https://www.shahain.com${path}`);
    }
  }, [title, description, path]);

  return null;
}
