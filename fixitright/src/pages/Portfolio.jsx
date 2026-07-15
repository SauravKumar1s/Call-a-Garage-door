import { useState, useMemo } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { projects } from "../data/projects";

export default function Portfolio() {
  const tags = useMemo(() => ["All", ...new Set(projects.map((p) => p.tag))], []);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <>
      <PageHero
        crumb="Before & After"
        eyebrow="Portfolio"
        title="Before & after: real garage doors, real drag-to-compare"
        subtitle="Every project below is a door our team actually repaired or replaced. Drag the handle on any photo to see the full transformation."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                active === tag
                  ? "bg-red text-white shadow-panel"
                  : "bg-panel text-ink-soft/70 hover:bg-panel-dark"
              }`}
            >
              {tag}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.07}>
              <BeforeAfterSlider before={p.before} after={p.after} />
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-red/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-red">
                  {p.tag}
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-soft/40">
                  {p.city}
                </span>
              </div>
              <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-ink">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft/60">{p.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
