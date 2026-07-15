import { Phone } from "lucide-react";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-red py-20">
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
      <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-black/10" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Door won't budge? Don't force it.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/85">
            Forcing a stuck door can snap a cable or bend a track in seconds.
            One call gets a technician moving toward you, not a hold queue.
          </p>
          <a
            href="tel:18005551234"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white shadow-panel-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <Phone size={17} /> Call (800) 555-1234 now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
