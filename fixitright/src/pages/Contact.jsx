import { useState } from "react";
import { Phone, Mail, MapPin, Clock3, CheckCircle2, Send } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { services } from "../data/services";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Tell us what's wrong, we'll tell you what it costs"
        subtitle="Book online in under a minute, or call the number below to talk to a real person right now."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-panel">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red/10 text-red"><Phone size={19} /></span>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-widest text-ink">Call</p>
                  <a href="tel:18005551234" className="mt-1 block text-lg font-bold text-ink hover:text-red">(800) 555-1234</a>
                  <p className="mt-1 text-xs text-ink-soft/50">Answered 7am – 9pm, every day</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-panel">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red/10 text-red"><Mail size={19} /></span>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-widest text-ink">Email</p>
                  <p className="mt-1 text-lg font-bold text-ink">hello@callagaragedoor.example</p>
                  <p className="mt-1 text-xs text-ink-soft/50">Replies within one business day</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-panel">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red/10 text-red"><MapPin size={19} /></span>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-widest text-ink">Dispatch office</p>
                  <p className="mt-1 text-lg font-bold text-ink">120 Overhead Ave, Fairview</p>
                  <p className="mt-1 text-xs text-ink-soft/50">Vans dispatch from twelve neighbourhoods</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-panel">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red/10 text-red"><Clock3 size={19} /></span>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-widest text-ink">Hours</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Mon–Sun: 7:00am – 9:00pm</p>
                  <p className="mt-1 text-xs text-ink-soft/50">Emergency dispatch available after hours</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-panel-lg sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red/10 text-red">
                    <CheckCircle2 size={30} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight text-ink">Request received</h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-soft/60">
                    A dispatcher will call you back shortly to confirm a time window.
                    For anything urgent, please call us directly.
                  </p>
                  <a href="tel:18005551234" className="mt-6 flex items-center gap-2 rounded-full bg-red px-6 py-3 text-sm font-bold text-white">
                    <Phone size={15} /> (800) 555-1234
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-wider text-ink-soft/60">Full name</span>
                      <input
                        required
                        type="text"
                        placeholder="Jordan Lee"
                        className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-red"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-wider text-ink-soft/60">Phone number</span>
                      <input
                        required
                        type="tel"
                        placeholder="(800) 555-1234"
                        className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-red"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-soft/60">Email</span>
                    <input
                      required
                      type="email"
                      placeholder="jordan@email.com"
                      className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-red"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-soft/60">What do you need?</span>
                    <select className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-red">
                      {services.map((s) => (
                        <option key={s.slug}>{s.title}</option>
                      ))}
                      <option>New door installation</option>
                      <option>Something else</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-soft/60">Tell us what's happening</span>
                    <textarea
                      rows={4}
                      placeholder="e.g. Door stopped halfway and won't respond to the remote"
                      className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-red"
                    />
                  </label>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-red px-7 py-4 text-sm font-bold text-white shadow-panel transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-dark hover:shadow-panel-lg sm:w-auto"
                  >
                    <Send size={16} /> Request a callback
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
