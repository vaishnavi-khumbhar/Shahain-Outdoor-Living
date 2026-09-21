import { ImageIcon } from "lucide-react";

export default function ImageFrame({
  src,
  alt = "",
  label,
  ratio = "aspect-[4/5]",
  className = "",
  border = true,
}) {
  return (
    <div
      className={`
        relative
        w-full
        ${ratio}
        overflow-hidden
        bg-navy/[0.04]
        ${border ? "border border-sand/60" : ""}
        ${className}
      `}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="
            absolute
            inset-0
            block
            h-full
            w-full
            object-cover
            object-center
          "
        />
      ) : (
        <div
          className="
            absolute
            inset-0
            flex
            h-full
            w-full
            flex-col
            items-center
            justify-center
            gap-3
            bg-gradient-to-br
            from-navy
            via-navy-light
            to-deep-navy
            px-6
            text-center
          "
        >
          <ImageIcon
            strokeWidth={1}
            className="h-8 w-8 text-sand/70"
          />

          {label && (
            <span
              className="
                font-body
                text-[11px]
                uppercase
                tracking-[0.2em]
                text-sand/70
              "
            >
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}