import { process } from "../data/content";
import Reveal from "./Reveal";

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper">
      <div className="slat-lines-dark absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-amber">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            From call to closed door
          </h2>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-paper/10 lg:block" />
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-red bg-ink font-display text-lg font-bold text-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/55">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
