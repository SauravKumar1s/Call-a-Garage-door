import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="slat-lines-dark relative overflow-hidden bg-ink py-20 text-paper">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(212,42,42,0.16),transparent_45%)]" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-paper/45">
            <Link to="/" className="transition-colors hover:text-red-light">Home</Link>
            <ChevronRight size={13} />
            <span className="text-paper/70">{crumb}</span>
          </div>
          {eyebrow && (
            <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-widest text-amber">{eyebrow}</p>
          )}
          <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-4 max-w-2xl text-paper/60">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
