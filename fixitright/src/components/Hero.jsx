import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Bell,
  User,
  X,
  Wrench,
} from "lucide-react";

// ✅ EDIT THIS OBJECT to change any text, numbers, or contact info
const content = {
  // Headline & description – note: the main tagline is now at the bottom
  subTagline: "LOCAL TECHNICIANS - SAME-DAY APPOINTMENTS",
  title: "Garage Door Repair & Installation",
  subtitle: "Toronto & Across the GTA",
  description:
    "Need your garage door fixed today? Fix it! Right Garage Doors provides same-day garage door repair, opener repair, spring replacement, cable repair, and garage door replacement across Vaughan, Toronto, and nearby GTA communities.",

  // Phone & CTA
  phone: "416-779-8772",
  ctaText: "Request Service Online",

  // Bottom tagline (moved from top, text slightly different)
  bottomTagline: "RESIDENTIAL GARAGE DOOR REPAIR & REPLACEMENT EXPERTS",

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
    serviceOptions: [
      "Spring Replacement",
      "Cable Repair",
      "Opener Repair",
      "Panel Replacement",
      "Full Installation",
    ],
    messageLabel: "Message",
    messagePlaceholder: "Tell us what happened...",
    submitText: "Request Service",
  },

  // Footer note inside form
  footerNote: "For urgent service, call us directly. Same-day service available.",

  // Social proof notifications – appear randomly after a few seconds
  notifications: [
    { name: "Mike", city: "Vaughan", service: "Spring Replacement", time: "2 min ago" },
    { name: "Sarah", city: "Toronto", service: "Opener Repair", time: "5 min ago" },
    { name: "David", city: "Mississauga", service: "Cable Repair", time: "12 min ago" },
    { name: "Emily", city: "Brampton", service: "Panel Replacement", time: "18 min ago" },
    { name: "James", city: "Richmond Hill", service: "Full Installation", time: "22 min ago" },
  ],
};

export default function Hero() {
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(content.notifications[0]);

  // Show a random social proof notification after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const random = content.notifications[Math.floor(Math.random() * content.notifications.length)];
      setCurrentNotification(random);
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Cycle through notifications every 10 seconds
  useEffect(() => {
    if (!showNotification) return;
    const interval = setInterval(() => {
      const random = content.notifications[Math.floor(Math.random() * content.notifications.length)];
      setCurrentNotification(random);
    }, 10000);
    return () => clearInterval(interval);
  }, [showNotification]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJIMjR2LTJoMTJ6bTAtNnYySDI0di0yaDEyem0tNiA0djJIMjR2LTJoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT COLUMN – Text & Trust */}
          <div className="flex flex-col justify-center space-y-4">
            {/* Sub-tagline (kept at top) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-amber-600">
                {content.subTagline}
              </p>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              {content.title}
              <br />
              <span className="text-red-600">{content.subtitle}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base"
            >
              {content.description}
            </motion.p>

            {/* CENTERED CALL BUTTON WITH RINGING ANIMATION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center justify-center space-y-3"
            >
              {/* Ringing call button */}
              <div className="relative">
                {/* Pulsing ring behind the button */}
                <motion.div
                  className="absolute -inset-3 rounded-full border-2 border-red-500/60"
                  animate={{ scale: [1, 2], opacity: [0.7, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                />
                <motion.a
                  href={`tel:${content.phone.replace(/-/g, "")}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                >
                  {/* Ringing phone icon */}
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 0.7 }}
                  >
                    <Phone size={20} className="fill-current" />
                  </motion.span>
                  <span className="text-lg font-bold tracking-wide">{content.phone}</span>
                </motion.a>
              </div>

              {/* Secondary CTA */}
              <Link
                to="/request-service"
                className="group flex items-center gap-1 text-sm font-semibold text-amber-600 transition hover:text-amber-500"
              >
                {content.ctaText}
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-gray-200 pt-4 lg:justify-start"
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
                  <span className="text-sm font-bold text-gray-800">{stat.value}</span>
                  <span className="text-xs text-gray-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN – Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-gray-200 sm:p-7">
              <h2 className="mb-1 text-lg font-bold text-gray-800 sm:text-xl">
                Request Garage Door Service
              </h2>
              <p className="mb-5 text-xs text-gray-500 sm:text-sm">
                Tell us what happened and our team will contact you as soon as possible.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                {/* Row: Name & Phone */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      {content.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={content.form.namePlaceholder}
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 transition hover:border-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      {content.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      placeholder={content.form.phonePlaceholder}
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 transition hover:border-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Row: Email & City */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      {content.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      placeholder={content.form.emailPlaceholder}
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 transition hover:border-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      {content.form.cityLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={content.form.cityPlaceholder}
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 transition hover:border-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Service Needed */}
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    {content.form.serviceLabel}
                  </label>
                  <select className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 transition hover:border-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                    <option value="">Select a service</option>
                    {content.form.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    {content.form.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={content.form.messagePlaceholder}
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 transition hover:border-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {content.form.submitText}
                </motion.button>
              </form>

              {/* Footer note inside form */}
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <Phone size={14} className="text-red-500" />
                <span>{content.footerNote}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: reviews + service area + moved tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-center sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-800">4.9 ★★★★★</span>
            <span className="text-sm text-gray-500">500+ Google Reviews</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Clock size={18} className="text-red-500" />
            <span>SERVING THE GTA 7 DAYS A WEEK, 7AM–MIDNIGHT</span>
          </div>
        </motion.div>

        {/* MOVED & CHANGED TAGLINE – Now at the very bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 text-center"
        >
          <p className="text-base font-semibold uppercase tracking-widest text-red-600 sm:text-lg">
            {content.bottomTagline}
          </p>
        </motion.div>
      </div>

      {/* Social Proof Floating Notification – unchanged */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 max-w-xs rounded-xl bg-white p-4 shadow-2xl ring-1 ring-gray-200"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <User size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">
                  {currentNotification.name} from {currentNotification.city}
                </p>
                <p className="text-xs text-gray-500">
                  just booked a <span className="font-medium text-gray-700">{currentNotification.service}</span>
                </p>
                <p className="mt-1 text-xs text-gray-400">{currentNotification.time}</p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}