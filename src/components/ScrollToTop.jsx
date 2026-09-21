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
    // Deferred to the next frame so it runs after the new page has
    // painted, rather than racing the outgoing page's layout/unmount —
    // avoids the browser's scroll-anchoring snapping it back down.
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}