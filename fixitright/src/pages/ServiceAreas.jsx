import { MapPin, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import { serviceAreas } from "../data/content";

export default function ServiceAreas() {
  return (
    <>
      <PageHero
        crumb="Service Areas"
        eyebrow="Where we work"
        title="Twelve neighbourhoods, one dispatch line"
        subtitle="Technicians are based across the region, so most calls get a same-day or next-day slot no matter which of these areas you're in."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area, i) => (
            <Reveal
              key={area}
              delay={i * 0.04}
              className="group flex items-center justify-between rounded-2xl border border-black/5 bg-white p-6 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-panel-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red/10 text-red">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="font-display text-base font-bold uppercase tracking-tight text-ink">{area}</p>
                  <p className="text-xs text-ink-soft/50">Same-day slots available</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl bg-ink p-10 text-center text-paper sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-xl font-bold uppercase tracking-tight">Not seeing your area?</h3>
            <p className="mt-1 text-sm text-paper/60">Call us anyway — we cover several surrounding towns not listed here.</p>
          </div>
          <a
            href="tel:18005551234"
            className="flex shrink-0 items-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Phone size={16} /> (800) 555-1234
          </a>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}
