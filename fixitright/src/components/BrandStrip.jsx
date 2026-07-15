import { brands } from "../data/content";
import Reveal from "./Reveal";

export default function BrandStrip() {
  return (
    <section className="border-y border-black/5 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-soft/45">
            Certified to install &amp; service every major brand
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {brands.map((b) => (
            <span
              key={b}
              className="font-display text-lg font-bold uppercase tracking-tight text-ink-soft/30 transition-colors duration-300 hover:text-ink"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
