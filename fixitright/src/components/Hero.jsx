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
  // Headline & description
  subTagline: "LOCAL TECHNICIANS - SAME-DAY APPOINTMENTS",
  title: "Garage Door Repair & Installation",
  subtitle: "Toronto & Across the GTA",
  description:
    "Need your garage door fixed today? Fix it! Right Garage Doors provides same-day garage door repair, opener repair, spring replacement, cable repair, and garage door replacement across Vaughan, Toronto, and nearby GTA communities.",

  // Phone & CTA
  phone: "123-456-7890",
  ctaText: "Request Service Online",

  // Bottom tagline
  bottomTagline: "RESIDENTIAL GARAGE DOOR REPAIR & REPLACEMENT EXPERTS",

  // 👇 ARRAY of Google reviews – now auto‑changing
googleReviews: [
    {
      name: "Michael T.",
      rating: 5,
      date: "2 weeks ago",
      text: "Called them for a broken spring and they showed up the same day. Technician was fast and professional. Highly recommend!",
    },
    {
      name: "Sarah L.",
      rating: 5,
      date: "3 weeks ago",
      text: "Amazing service! Our garage door opener died on a Sunday and they came within 2 hours. Very fair pricing.",
    },
    {
      name: "David R.",
      rating: 5,
      date: "1 month ago",
      text: "New door installation looks fantastic. The team was clean, polite, and finished ahead of schedule.",
    },
    // --- New Reviews ---
    {
      name: "Jessica M.",
      rating: 5,
      date: "1 week ago",
      text: "My sensor was acting up and the door wouldn't close. They walked me through a quick fix over the phone, and when I needed a part, they installed it the next day. Great customer care.",
    },
    {
      name: "Robert K.",
      rating: 5,
      date: "2 months ago",
      text: "Replaced my old noisy opener with a new belt-drive model. It's so quiet now! The price was competitive and the work was top-notch.",
    },
    {
      name: "Emily C.",
      rating: 5,
      date: "3 weeks ago",
      text: "I was in a rush to get my door fixed before a big storm. They squeezed me into their schedule and got it done quickly. Very reliable.",
    },
    {
      name: "James W.",
      rating: 4,
      date: "2 months ago",
      text: "Fixed my cable that snapped off the drum. The tech explained what happened and made sure everything was balanced before he left. Good job.",
    },
    {
      name: "Patricia S.",
      rating: 5,
      date: "1 month ago",
      text: "Bought a custom wood door from them. The quality is incredible and the installation was flawless. They really transformed my curb appeal.",
    },
    {
      name: "Christopher Y.",
      rating: 5,
      date: "1 week ago",
      text: "They came out to do routine maintenance and lubricate the tracks. Very thorough and gave me tips on keeping it running smoothly. Worth every penny.",
    },
    {
      name: "Amanda R.",
      rating: 5,
      date: "1 month ago",
      text: "I accidentally backed into my garage door... They came the next morning and made it look brand new. I was so relieved!",
    },
  ],

  // Form fields
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

  // Social proof notifications
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
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Social proof notification logic
  useEffect(() => {
    const timer = setTimeout(() => {
      const random = content.notifications[Math.floor(Math.random() * content.notifications.length)];
      setCurrentNotification(random);
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showNotification) return;
    const interval = setInterval(() => {
      const random = content.notifications[Math.floor(Math.random() * content.notifications.length)];
      setCurrentNotification(random);
    }, 10000);
    return () => clearInterval(interval);
  }, [showNotification]);

  // 🔄 Auto‑rotate Google reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % content.googleReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentReview = content.googleReviews[currentReviewIndex];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJIMjR2LTJoMTJ6bTAtNnYySDI0di0yaDEyem0tNiA0djJIMjR2LTJoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center space-y-4">
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
              <div className="relative">
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
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 0.7 }}
                  >
                    <Phone size={20} className="fill-current" />
                  </motion.span>
                  <span className="text-lg font-bold tracking-wide">{content.phone}</span>
                </motion.a>
              </div>
              <Link
                to="/request-service"
                className="group flex items-center gap-1 text-sm font-semibold text-amber-600 transition hover:text-amber-500"
              >
                {content.ctaText}
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* 🔄 AUTO‑CHANGING GOOGLE REVIEW CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto max-w-sm rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-200 overflow-hidden"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <User size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {/* Name stays static outside animation for layout stability */}
                        {currentReview.name}
                      </p>
                      <p className="text-xs text-gray-500">{currentReview.date}</p>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 shrink-0"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                  {/* Stars (static) */}
                  <div className="mt-1 flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < currentReview.rating ? "currentColor" : "none"}
                        strokeWidth={1.5}
                        stroke="currentColor"
                      />
                    ))}
                  </div>
                  {/* Auto‑changing review text with animation */}
                  <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentReviewIndex}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-1 text-sm text-gray-700"
                      >
                        {currentReview.text}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN – Contact Form (unchanged) */}
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

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {content.form.submitText}
                </motion.button>
              </form>

              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <Phone size={14} className="text-red-500" />
                <span>{content.footerNote}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 📣 BIG GOOGLE STYLE REVIEW BADGE (still static overall rating) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 sm:p-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-8">
              <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-4">
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 shrink-0"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center gap-1 text-amber-400 sm:justify-start">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-1 text-2xl font-extrabold text-gray-900">4.9</p>
                  <p className="text-sm font-medium text-gray-700">350+ Google Reviews</p>
                </div>
              </div>

              <div className="hidden h-12 w-px bg-gray-200 sm:block" />

              <div className="flex items-center gap-3 text-gray-800">
                <Clock size={28} className="text-red-500 shrink-0" />
                <div>
                  <p className="text-base font-bold uppercase tracking-wide">Serving the GTA</p>
                  <p className="text-sm text-gray-600">7 Days a Week, 7am – Midnight</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM TAGLINE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-base font-semibold uppercase tracking-widest text-red-600 sm:text-lg">
            {content.bottomTagline}
          </p>
        </motion.div>
      </div>

      {/* Social Proof Floating Notification */}
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
                  just booked a{" "}
                  <span className="font-medium text-gray-700">{currentNotification.service}</span>
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