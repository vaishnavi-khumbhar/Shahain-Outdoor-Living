import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position to the top on every route change. Kept separate
 * from Seo so scroll behavior isn't coupled to whether a page happens to
 * render a <Seo> tag, and so it only ever fires once per navigation
 * regardless of how many components on the page re-render.
 *
 * Mounted once in Layout, inside the Router context.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
