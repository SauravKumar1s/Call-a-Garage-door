import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  CircleDot,
  Wrench,
  Cog,
} from "lucide-react";
import { services } from "../data/services";
import { serviceAreas } from "../data/content";

const NAV_LINK =
  "relative py-2 text-sm font-semibold tracking-wide text-ink-soft transition-colors hover:text-red after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-red after:transition-all after:duration-300 hover:after:w-full";

function Dropdown({ label, children, open, setOpen }) {
  const ref = useRef(null);
  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [setOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`${NAV_LINK} flex items-center gap-1`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-xl border border-black/5 bg-white shadow-panel-lg"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false);
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-black/5 bg-white/90 backdrop-blur-md shadow-panel"
          : "border-transparent bg-white"
      }`}
    >
      {/* Top strip */}
      <div className="hidden items-center justify-between bg-ink px-6 py-1.5 text-paper/80 md:flex lg:px-10">
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
          <CircleDot size={12} className="text-amber animate-pulse" />
          Technician on call today
        </p>
        <p className="font-mono text-[11px] uppercase tracking-wider">
          Serving {serviceAreas.slice(0, 3).join(", ")} & 9 more areas
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-ink to-ink-light shadow-md transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
            <Wrench
              size={20}
              className="absolute -left-1 -top-1 rotate-45 text-amber drop-shadow-md"
            />
            <Cog
              size={24}
              className="text-paper/90 animate-[spin_12s_linear_infinite]"
            />
          </div>
          <span className="leading-none">
       <span className="block font-display text-[14px] font-bold uppercase tracking-tight text-ink">
  Call  <span className="text-red">Garage</span> Door
</span>
            <span className="block font-mono text-[6px] uppercase tracking-[0.2em] text-ink-soft/60">
              Repair · Install · Same-day
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={NAV_LINK} end>
            Home
          </NavLink>
          <NavLink to="/about" className={NAV_LINK}>
            About
          </NavLink>
          <Dropdown label="Services" open={servicesOpen} setOpen={setServicesOpen}>
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                onClick={() => setServicesOpen(false)}
                className="flex items-center gap-3 border-b border-black/[0.04] px-4 py-3 text-sm font-medium text-ink-soft transition-colors last:border-none hover:bg-panel hover:text-red"
              >
                <s.icon size={16} className="shrink-0 text-red" />
                {s.title}
              </Link>
            ))}
          </Dropdown>
          <NavLink to="/installation" className={NAV_LINK}>
            Installation
          </NavLink>
          <NavLink to="/portfolio" className={NAV_LINK}>
            Before &amp; After
          </NavLink>
          <Dropdown label="Service Areas" open={areasOpen} setOpen={setAreasOpen}>
            <div className="grid grid-cols-2 gap-1 p-3">
              {serviceAreas.map((a) => (
                <Link
                  key={a}
                  to="/service-areas"
                  onClick={() => setAreasOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-panel hover:text-red"
                >
                  {a}
                </Link>
              ))}
            </div>
          </Dropdown>
          <NavLink to="/blog" className={NAV_LINK}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={NAV_LINK}>
            Contact
          </NavLink>
        </nav>

        {/* CTA buttons & mobile icons */}
        <div className="flex items-center gap-3">
          {/* Desktop call button (hidden on mobile) */}
          <a
            href="tel:18005551234"
            className="hidden items-center gap-2 rounded-full bg-red px-5 py-2.5 text-sm font-bold text-white shadow-panel transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-dark hover:shadow-panel-lg md:flex"
          >
            <Phone size={16} className="animate-[wiggle_1.8s_ease-in-out_infinite]" />
            (800) 555-1234
          </a>

          {/* Desktop book online button (hidden on mobile) */}
          <Link
            to="/contact"
            className="hidden rounded-full border-2 border-ink px-5 py-2.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-paper md:inline-flex"
          >
            Book online
          </Link>

          {/* 🔔 MOBILE CALL ICON – always visible, animated */}
          <a
            href="tel:18005551234"
            className="lg:hidden flex items-center justify-center h-11 w-11 rounded-full bg-red text-white shadow-md transition-colors hover:bg-red-dark"
            aria-label="Call now"
          >
            <Phone
              size={22}
              className="animate-phone-ring"
            />
          </a>

          {/* Hamburger menu button (mobile only) */}
          <button
            className="rounded-md p-2 text-ink lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV – with collapsible services */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Installation", "/installation"],
                ["Before & After", "/portfolio"],
                ["Service Areas", "/service-areas"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-ink-soft hover:bg-panel hover:text-red"
                >
                  {label}
                </Link>
              ))}

              {/* Collapsible Services */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen((o) => !o)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-ink-soft hover:bg-panel hover:text-red"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-panel hover:text-red"
                        >
                          <s.icon size={15} className="text-red" /> {s.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile call button inside menu */}
              <a
                href="tel:18005551234"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-red px-5 py-3 text-sm font-bold text-white"
              >
                <Phone size={16} /> Call (123) 456-7890
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom animation for phone ring */}
      <style>{`
        @keyframes phone-ring {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(10deg); }
          30% { transform: rotate(-10deg); }
          45% { transform: rotate(7deg); }
          60% { transform: rotate(-7deg); }
          75% { transform: rotate(3deg); }
          90% { transform: rotate(-3deg); }
        }
        .animate-phone-ring {
          animation: phone-ring 1.6s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}