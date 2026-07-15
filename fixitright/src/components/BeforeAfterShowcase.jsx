import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Reveal from "./Reveal";

export default function BeforeAfterShowcase({ full = false }) {
  const list = full ? projects : projects.slice(0, 3);
  return (
    <section className="bg-panel py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-red">Real jobs, real doors</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Before &amp; after
            </h2>
            <p className="mt-4 text-ink-soft/70">
              Drag the slider on any project to see the actual transformation —
              no stock photography, just doors we've worked on.
            </p>
          </div>
          {!full && (
            <Link
              to="/portfolio"
              className="group flex shrink-0 items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
            >
              View full gallery
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <BeforeAfterSlider before={p.before} after={p.after} />
              <div className="mt-4">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-red">{p.tag}</span>
                <h3 className="mt-1 font-display text-base font-bold uppercase tracking-tight text-ink">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft/60">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
