import { Phone, Ruler, Truck, HardHat, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { projects } from "../data/projects";

const steps = [
  { icon: Ruler, title: "Free measure & quote", body: "We measure your opening, confirm headroom and track clearance, and quote every door tier — no pressure to upgrade." },
  { icon: Truck, title: "Door ships & arrives", body: "Most in-stock doors arrive within 5–10 business days; we call to schedule the install as soon as it's in." },
  { icon: HardHat, title: "Old door removed", body: "We remove and responsibly dispose of your old door, track, and opener — nothing left in your driveway." },
  { icon: Sparkles, title: "New door installed & tested", body: "Full install, balance test, and a walkthrough of your new opener, remotes, and keypad before we leave." },
];

export default function Installation() {
  return (
    <>
      <PageHero
        crumb="Installation"
        eyebrow="New doors"
        title="A new door installed in a day, not a week"
        subtitle="From flush steel to carriage-style wood-look, we install every major brand with a same-week measure and a one-day install for in-stock doors."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <BeforeAfterSlider before={projects[2].before} after={projects[2].after} />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-red">How installs work</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Four steps, one visit for the heavy lifting
            </h2>
            <div className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <div key={s.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red/10 text-red">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase tracking-tight text-ink">
                      {String(i + 1).padStart(2, "0")} — {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft/60">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-panel py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-red">Door tiers</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Three tiers, all professionally installed
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { tier: "Standard steel", desc: "Single-layer steel, 25-gauge, ideal for detached garages and outbuildings.", price: "From $950 installed" },
              { tier: "Insulated steel", desc: "Two-layer construction with polystyrene or polyurethane core for year-round comfort.", price: "From $1,450 installed", highlight: true },
              { tier: "Carriage & wood-look", desc: "Flush or carriage-style faces in steel, composite, or real wood for a custom look.", price: "From $2,100 installed" },
            ].map((t, i) => (
              <Reveal
                key={t.tier}
                delay={i * 0.08}
                className={`rounded-2xl border p-8 shadow-panel transition-all duration-300 hover:-translate-y-1.5 hover:shadow-panel-lg ${
                  t.highlight ? "border-red bg-ink text-paper" : "border-black/5 bg-white"
                }`}
              >
                {t.highlight && (
                  <span className="rounded-full bg-red px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-white">
                    Most popular
                  </span>
                )}
                <h3 className={`mt-4 font-display text-xl font-bold uppercase tracking-tight ${t.highlight ? "text-paper" : "text-ink"}`}>
                  {t.tier}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${t.highlight ? "text-paper/60" : "text-ink-soft/60"}`}>{t.desc}</p>
                <p className={`mt-5 font-display text-lg font-bold ${t.highlight ? "text-amber" : "text-red"}`}>{t.price}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <a
              href="tel:18005551234"
              className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white shadow-panel transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-dark hover:shadow-panel-lg"
            >
              <Phone size={16} /> Get a free measure &amp; quote
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
