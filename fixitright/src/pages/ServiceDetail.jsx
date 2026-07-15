import { useParams, Link } from "react-router-dom";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { services } from "../data/services";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug) ?? services[0];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero crumb={service.title} eyebrow="Service" title={service.title} subtitle={service.short} />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-paper">
              <service.icon size={26} />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
              What's included
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft/70">{service.description}</p>

            <ul className="mt-8 space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl bg-panel px-5 py-4">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-red" />
                  <span className="text-sm font-medium text-ink-soft/80">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:18005551234"
                className="flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white shadow-panel transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-dark hover:shadow-panel-lg"
              >
                <Phone size={16} /> Call for this service
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
              >
                Book online
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-panel">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-ink">Other services</h3>
              <ul className="mt-4 space-y-1">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="group flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-ink-soft transition-colors hover:bg-panel hover:text-red"
                    >
                      <span className="flex items-center gap-2"><s.icon size={16} className="text-red" /> {s.title}</span>
                      <ArrowRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-ink p-5 text-paper">
                <p className="font-mono text-[10px] uppercase tracking-widest text-amber">Response time</p>
                <p className="mt-1 font-display text-2xl font-bold">Under 1 hr</p>
                <p className="mt-1 text-xs text-paper/50">in most service areas, most days of the week</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
