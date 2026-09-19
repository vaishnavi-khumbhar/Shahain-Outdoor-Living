import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ImageFrame from "./ImageFrame";
import Reveal from "./Reveal";

export default function ProductCard({ category, index = 0 }) {
  return (
    <Reveal direction="up" delay={index * 0.08} className="group">
      <Link to={`/products/${category.slug}`} className="block">
        <ImageFrame
          src={category.heroImage}
          alt={category.name}
          ratio="aspect-[4/5]"
          label={category.heroLabel}
          className="transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="mt-5 flex items-start justify-between gap-4 border-t border-sand/60 pt-5">
          <div>
            <h3 className="font-heading text-xl text-navy">{category.name}</h3>
            <p className="mt-1.5 font-body text-sm text-gray">{category.tagline}</p>
          </div>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-champagne transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            strokeWidth={1.5}
          />
        </div>
      </Link>
    </Reveal>
  );
}