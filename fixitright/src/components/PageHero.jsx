import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white py-20 text-ink">
      {/* Same subtle pattern as the main Hero */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJIMjR2LTJoMTJ6bTAtNnYySDI0di0yaDEyem0tNiA0djJIMjR2LTJoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
      {/* A soft red radial glow to match the brand */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(212,42,42,0.06),transparent_45%)]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-soft/60">
            <Link to="/" className="transition-colors hover:text-red">Home</Link>
            <ChevronRight size={13} />
            <span className="text-ink-soft/80">{crumb}</span>
          </div>
          {eyebrow && (
            <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-widest text-amber">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-4 max-w-2xl text-ink-soft/70">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}