import { ShieldCheck, Users, Wrench, Award } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import Counter from "../components/Counter";
import { stats } from "../data/content";

const values = [
  { icon: ShieldCheck, title: "Upfront pricing", body: "You approve a flat price before any tool touches your door — no surprise line items." },
  { icon: Wrench, title: "Stocked vans", body: "Every technician carries the springs, cables, and rollers to finish most jobs in one visit." },
  { icon: Users, title: "Local crews", body: "Technicians live in the areas they service, so you're never waiting on someone driving across town." },
  { icon: Award, title: "Manufacturer trained", body: "Certified on every major opener and door brand we install, not just the ones that pay commission." },
];

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Who we are"
        title="A garage door company built around one phone call"
        subtitle="Call a Garage Door started with a simple frustration: getting a straight answer, a fair price, and someone who actually shows up. Seventeen years later, that's still the whole business model."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-red">Our story</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              From one van to a dozen, without losing the plot
            </h2>
            <div className="mt-5 space-y-4 text-ink-soft/70">
              <p>
                We started as a single technician answering his own phone at 6am. The doors he
                fixed were never fancy — mostly springs that let go on cold mornings and openers
                that finally gave up after a decade of grinding.
              </p>
              <p>
                What grew the company wasn't marketing. It was showing up when we said we would,
                pricing the job before starting it, and fixing the actual problem instead of
                selling a new door every time. That's still how every technician on our team
                is trained today.
              </p>
              <p>
                Today we run a dozen fully stocked vans across twelve neighbourhoods, but the
                promise hasn't changed: call once, get a straight answer, and get your door
                working again.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
              alt="Technician team working on a garage door"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-panel-lg"
            />
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 rounded-2xl bg-ink p-10 text-paper sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold sm:text-4xl"><Counter value={s.value} suffix={s.suffix} /></p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-paper/45">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-panel py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-red">What we stand for</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Four rules every technician follows
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="rounded-2xl border border-black/5 bg-white p-7 shadow-panel transition-shadow duration-300 hover:shadow-panel-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red/10 text-red">
                  <v.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold uppercase tracking-tight text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft/60">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
