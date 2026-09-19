import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-body text-[13px] font-medium uppercase tracking-[0.14em] transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne";

const variants = {
  primary: "bg-navy text-ivory px-7 py-4 hover:bg-deep-navy",
  champagne: "bg-champagne text-navy px-7 py-4 hover:bg-sand",
  outline: "border border-navy text-navy px-7 py-4 hover:bg-navy hover:text-ivory",
  outlineLight: "border border-ivory/70 text-ivory px-7 py-4 hover:bg-ivory hover:text-navy",
  ghost: "text-navy px-0 py-1 hover:text-champagne",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon = true,
  type = "button",
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`group ${classes}`} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${classes}`} {...rest}>
      {content}
    </button>
  );
}
