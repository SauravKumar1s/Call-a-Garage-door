import Reveal from "./Reveal";

const garageProcess = [
  {
    title: "Call or Book Online",
    body: "Tell us what’s going on – broken spring, opener issue, or a full replacement. We’ll give you a straight‑up price and a same‑day window.",
  },
  {
    title: "On‑Site Diagnosis",
    body: "A licensed technician arrives in a fully‑stocked van. They inspect your door, confirm the problem, and walk you through the options.",
  },
  {
    title: "Repair or Install",
    body: "Most repairs are completed in under an hour with parts we carry on the truck. If you need a new door, we install it right then and there.",
  },
  {
    title: "Test & Clean Up",
    body: "We cycle the door multiple times, adjust the balance, lube everything, and leave your garage cleaner than we found it.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-16 sm:py-24 text-ink">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJIMjR2LTJoMTJ6bTAtNnYySDI0di0yaDEyem0tNiA0djJIMjR2LTJoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-amber">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            From call to closed door
          </h2>
        </Reveal>

        {/* Steps grid: 2 cols on mobile, 4 on large */}
        <div className="relative mt-10 grid grid-cols-2 gap-6 sm:mt-14 lg:grid-cols-4 lg:gap-10">
          {/* Connecting line – desktop only */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink/10 lg:block" />

          {garageProcess.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-red bg-white font-display text-base font-bold text-red shadow-sm sm:h-12 sm:w-12 sm:text-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-sm font-bold uppercase tracking-tight sm:mt-5 sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft/70 sm:mt-2 sm:text-sm">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}