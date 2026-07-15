import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import Reveal from "./Reveal";

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10">
      <Reveal className="max-w-xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-red">
          What we fix
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
          Six problems we solve every single day
        </h2>
        <p className="mt-4 text-ink-soft/70">
          If it moves, lifts, or locks your garage door, we carry the parts and the
          know-how to fix it on the first visit.
        </p>
      </Reveal>

      {/* Grid: 2 columns on mobile, 2 on tablet, 3 on desktop */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <Link
              to={`/services/${s.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-3 shadow-panel transition-all duration-300 hover:-translate-y-1.5 hover:shadow-panel-lg sm:p-7"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-red/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-paper transition-colors duration-300 group-hover:bg-red sm:h-12 sm:w-12">
                <s.icon size={20} className="sm:size-[22px]" />
              </div>
              <h3 className="relative mt-3 font-display text-sm font-bold uppercase tracking-tight text-ink sm:mt-5 sm:text-lg">
                {s.title}
              </h3>
              <p className="relative mt-1 flex-1 text-xs leading-relaxed text-ink-soft/65 sm:mt-2 sm:text-sm">
                {s.short}
              </p>
              <span className="relative mt-3 flex items-center gap-1 text-xs font-bold text-red sm:mt-5 sm:text-sm">
                Learn more
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-[15px]"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}