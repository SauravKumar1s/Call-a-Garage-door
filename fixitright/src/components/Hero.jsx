import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Star, ChevronRight } from "lucide-react";

// ✅ EDIT THIS OBJECT to change any text, numbers, or contact info
const content = {
  // Headline & description
  tagline: "RESIDENTIAL GARAGE DOOR REPAIR & REPLACEMENT",
  subTagline: "LOCAL TECHNICIANS - SAME-DAY APPOINTMENTS",
  title: "Garage Door Repair & Installation",
  subtitle: "Toronto & Across the GTA",
  description:
    "Need your garage door fixed today? Fix it! Right Garage Doors provides same-day garage door repair, opener repair, spring replacement, cable repair, and garage door replacement across Vaughan, Toronto, and nearby GTA communities.",

  // Phone & CTA
  phone: "416-779-8772",
  ctaText: "Request Service Online",

  // Stats (shown below the form)
  stats: [
    { value: "4.9", suffix: " ★★★★★", label: "500+ Google Reviews" },
    { value: "SERVING THE GTA", suffix: "", label: "7 DAYS A WEEK, 7AM-MIDNIGHT" },
  ],

  // Form fields (labels and placeholders)
  form: {
    nameLabel: "Name *",
    namePlaceholder: "Your full name",
    phoneLabel: "Phone *",
    phonePlaceholder: "(416) 555-1234",
    emailLabel: "Email *",
    emailPlaceholder: "you@example.com",
    cityLabel: "City",
    cityPlaceholder: "e.g., Toronto",
    serviceLabel: "- Service Needed -",
    serviceOptions: ["Spring Replacement", "Cable Repair", "Opener Repair", "Panel Replacement", "Full Installation"],
    messageLabel: "Message",
    messagePlaceholder: "Tell us what happened...",
    submitText: "Request Service",
  },

  // Trust badges (icons + text)
  trustBadges: [
    { icon: Phone, text: "For urgent service, call us directly. Same-day service available." },
  ],

  // Footer note
  footerNote: "For urgent service, call us directly. Same-day service available.",
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.10),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT COLUMN – Text & Trust */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
                {content.tagline}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-amber-400/80">
                {content.subTagline}
              </p>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {content.title}
              <br />
              <span className="text-red-500">{content.subtitle}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg"
            >
              {content.description}
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-red-400" />
                <a href={`tel:${content.phone.replace(/-/g, '')}`} className="font-bold text-white hover:text-red-400 transition">
                  {content.phone}
                </a>
              </div>
              <span className="hidden h-6 w-px bg-gray-700 sm:block" />
              <Link
                to="/request-service"
                className="group flex items-center gap-1 font-medium text-amber-400 hover:text-amber-300 transition"
              >
                {content.ctaText}
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Bottom stats (from image) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-gray-800 pt-6"
            >
              {content.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {idx === 0 && (
                    <span className="flex text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </span>
                  )}
                  <span className="text-sm font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-gray-400">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN – Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-6 shadow-2xl ring-1 ring-white/10 sm:p-8">
              <h2 className="mb-6 text-xl font-bold text-white">Request Garage Door Service</h2>
              <p className="mb-6 text-sm text-gray-300">
                Tell us what happened and our team will contact you as soon as possible.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                {/* Row: Name & Phone */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-300">{content.form.nameLabel}</label>
                    <input
                      type="text"
                      placeholder={content.form.namePlaceholder}
                      className="mt-1 w-full rounded-lg border border-gray-700 bg-black/40 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300">{content.form.phoneLabel}</label>
                    <input
                      type="tel"
                      placeholder={content.form.phonePlaceholder}
                      className="mt-1 w-full rounded-lg border border-gray-700 bg-black/40 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Row: Email & City */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-300">{content.form.emailLabel}</label>
                    <input
                      type="email"
                      placeholder={content.form.emailPlaceholder}
                      className="mt-1 w-full rounded-lg border border-gray-700 bg-black/40 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300">{content.form.cityLabel}</label>
                    <input
                      type="text"
                      placeholder={content.form.cityPlaceholder}
                      className="mt-1 w-full rounded-lg border border-gray-700 bg-black/40 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Service Needed */}
                <div>
                  <label className="block text-xs font-medium text-gray-300">{content.form.serviceLabel}</label>
                  <select
                    className="mt-1 w-full rounded-lg border border-gray-700 bg-black/40 px-4 py-2.5 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  >
                    <option value="">Select a service</option>
                    {content.form.serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-gray-800 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-gray-300">{content.form.messageLabel}</label>
                  <textarea
                    rows={3}
                    placeholder={content.form.messagePlaceholder}
                    className="mt-1 w-full rounded-lg border border-gray-700 bg-black/40 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-red-600 px-6 py-3 font-bold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700 hover:shadow-red-700/40 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {content.form.submitText}
                </button>
              </form>

              {/* Urgent note */}
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                <Phone size={14} className="text-red-400" />
                <span>{content.footerNote}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section: reviews & service area (from image) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-center sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.9 ★★★★★</span>
            <span className="text-sm text-gray-400">500+ Google Reviews</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <Clock size={18} className="text-red-400" />
            <span>SERVING THE GTA 7 DAYS A WEEK, 7AM–MIDNIGHT</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}