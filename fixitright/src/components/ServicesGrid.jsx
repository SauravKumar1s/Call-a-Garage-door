import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import Reveal from "./Reveal";

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal className="max-w-xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-red">What we fix</p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
          Six problems we solve every single day
        </h2>
        <p className="mt-4 text-ink-soft/70">
          If it moves, lifts, or locks your garage door, we carry the parts and the
          know-how to fix it on the first visit.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <Link
              to={`/services/${s.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-panel transition-all duration-300 hover:-translate-y-1.5 hover:shadow-panel-lg"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-red/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-paper transition-colors duration-300 group-hover:bg-red">
                <s.icon size={22} />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-bold uppercase tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-soft/65">{s.short}</p>
              <span className="relative mt-5 flex items-center gap-1 text-sm font-bold text-red">
                Learn more
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
