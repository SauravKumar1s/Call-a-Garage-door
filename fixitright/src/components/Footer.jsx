import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Link2, Camera, Play } from "lucide-react";
import { services } from "../data/services";
import { serviceAreas } from "../data/content";

export default function Footer() {
  return (
    <footer className="slat-lines-dark relative overflow-hidden bg-ink text-paper/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 flex-col justify-center gap-[3px] rounded-lg bg-paper/10 p-2">
              <span className="h-[3px] w-full rounded-full bg-red" />
              <span className="h-[3px] w-full rounded-full bg-amber" />
              <span className="h-[3px] w-full rounded-full bg-paper" />
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-tight text-paper">
              Call a <span className="text-red-light">Garage</span> Door
            </span>
          </span>
          <p className="mt-4 text-sm leading-relaxed text-paper/60">
            Licensed, insured garage door repair and installation. One call gets you a real
            technician, a real price, and a door that works — same day, most days.
          </p>
          <div className="mt-5 flex gap-3">
            {[Link2, Camera, Play].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-red hover:bg-red hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-paper">Services</h4>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-sm text-paper/60 transition-colors hover:text-red-light">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-paper">Service Areas</h4>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {serviceAreas.slice(0, 8).map((a) => (
              <li key={a}>
                <Link to="/service-areas" className="text-sm text-paper/60 transition-colors hover:text-red-light">
                  {a}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-paper">Talk to us</h4>
          <ul className="mt-4 space-y-3 text-sm text-paper/60">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-red-light" /> (800) 555-1234
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-red-light" /> hello@callagaragedoor.example
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-red-light" />
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

      <div className="border-t border-paper/10 px-6 py-5 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-wider text-paper/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Call a Garage Door. All rights reserved.</p>
          <p>Licensed &amp; insured · Demo site — content for illustration only</p>
        </div>
      </div>
    </footer>
  );
}
