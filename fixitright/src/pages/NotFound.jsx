import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="slat-lines-dark flex min-h-[70vh] flex-col items-center justify-center bg-ink px-6 text-center text-paper">
      <p className="font-display text-8xl font-bold text-red-light">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight">
        This door isn't on our route
      </h1>
      <p className="mt-2 max-w-sm text-paper/55">
        The page you're looking for moved, or never existed. Let's get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link to="/" className="rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
          Back to home
        </Link>
        <a href="tel:18005551234" className="flex items-center gap-2 rounded-full border-2 border-paper/25 px-7 py-3.5 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-paper hover:text-ink">
          <Phone size={16} /> Call us
        </a>
      </div>
    </section>
  );
}
