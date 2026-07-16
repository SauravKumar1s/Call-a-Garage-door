import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Link2, Camera, Play } from "lucide-react";
import { services } from "../data/services";
import { serviceAreas } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white text-ink">
      {/* Subtle background pattern – light version */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJIMjR2LTJoMTJ6bTAtNnYySDI0di0yaDEyem0tNiA0djJIMjR2LTJoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {/* Brand column */}
        <div>
          <span className="flex items-center gap-3">

            <span className="font-display text-lg font-bold uppercase tracking-tight text-ink">
              Call <span className="text-red">Garage</span> Door
            </span>
          </span>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft/70">
            Licensed, insured garage door repair and installation. One call gets you a real
            technician, a real price, and a door that works — same day, most days.
          </p>
          <div className="mt-5 flex gap-3">
            {[Link2, Camera, Play].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-red hover:bg-red hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-ink">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-sm text-ink-soft/70 transition-colors hover:text-red"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas column */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-ink">
            Service Areas
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {serviceAreas.slice(0, 8).map((a) => (
              <li key={a}>
                <Link
                  to="/service-areas"
                  className="text-sm text-ink-soft/70 transition-colors hover:text-red"
                >
                  {a}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-ink">
            Talk to us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft/70">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-red" /> (800) 555-1234
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-red" /> hello@callagaragedoor.example
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-red" />
              120 Overhead Ave, Fairview — open 7am–9pm daily
            </li>
          </ul>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full bg-red px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Book a technician
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-ink/10 px-6 py-5 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Call a Garage Door. All rights reserved.</p>
          <p>Licensed &amp; insured · Demo site — content for illustration only</p>
        </div>
      </div>
    </footer>
  );
}