import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

/**
 * Editorial image frame. Pass `src` once real photography is available —
 * until then it renders a refined placeholder in brand tones so layouts read
 * as a finished, image-first design rather than a broken-image state.
 */
export default function ImageFrame({
  src,
  alt = "",
  label,
  ratio = "aspect-[4/5]",
  className = "",
  zoom = true,
  border = true,
}) {
  return (
    <div
      className={`relative overflow-hidden ${ratio} ${border ? "border border-sand/60" : ""} bg-navy/[0.04] ${className}`}
    >
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          initial={zoom ? { scale: 1.08 } : false}
          whileInView={zoom ? { scale: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy via-navy-light to-deep-navy px-6 text-center">
          <ImageIcon strokeWidth={1} className="h-8 w-8 text-sand/70" />
          {label ? (
            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-sand/70">{label}</span>
          ) : null}
        </div>
      )}
    </div>
  );
}
