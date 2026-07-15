import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-red">Neighbours say</p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
          Straight talk, no upsell
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 0.08}
            className="relative rounded-2xl border border-black/5 bg-white p-8 shadow-panel transition-shadow duration-300 hover:shadow-panel-lg"
          >
            <Quote className="absolute right-6 top-6 text-panel-dark" size={36} />
            <div className="flex text-amber">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="relative mt-4 text-[15px] leading-relaxed text-ink-soft/80">"{t.quote}"</p>
            <p className="mt-5 font-display text-sm font-bold uppercase tracking-tight text-ink">
              {t.name} <span className="font-body font-normal normal-case text-ink-soft/50">· {t.area}</span>
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
