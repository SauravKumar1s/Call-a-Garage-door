import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile (adjust breakpoint as needed)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Items per page: 1 on mobile, 2 on desktop
  const itemsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Reset current index if it exceeds total pages after resize
  useEffect(() => {
    if (currentIndex >= totalPages) setCurrentIndex(0);
  }, [totalPages, currentIndex]);

  // Auto‑slide every 4 seconds on mobile only
  useEffect(() => {
    if (!isMobile) return; // no auto‑slide on desktop
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile, totalPages]);

  // Manual navigation
  const goTo = useCallback((index) => {
    setCurrentIndex((index + totalPages) % totalPages);
  }, [totalPages]);

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  // Get testimonials for current page
  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-red">
          Neighbours say
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
          Straight talk, no upsell
        </h2>
      </Reveal>

      {/* Carousel container */}
      <div className="relative mt-12">
        {/* Testimonial cards with transition */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className={`grid gap-6 ${
                isMobile ? "grid-cols-1" : "grid-cols-2"
              }`}
            >
              {visibleTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="relative rounded-2xl border border-black/5 bg-white p-8 shadow-panel transition-shadow duration-300 hover:shadow-panel-lg"
                >
                  <Quote className="absolute right-6 top-6 text-panel-dark" size={36} />
                  <div className="flex text-amber">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={15} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="relative mt-4 text-[15px] leading-relaxed text-ink-soft/80">
                    "{t.quote}"
                  </p>
                  <p className="mt-5 font-display text-sm font-bold uppercase tracking-tight text-ink">
                    {t.name}{" "}
                    <span className="font-body font-normal normal-case text-ink-soft/50">
                      · {t.area}
                    </span>
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows & dots – visible on all screens, but more useful on mobile */}
        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-black/10 bg-white p-2 text-ink shadow-sm transition hover:bg-panel hover:text-red"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-red scale-125"
                      : "bg-ink/20 hover:bg-ink/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="rounded-full border border-black/10 bg-white p-2 text-ink shadow-sm transition hover:bg-panel hover:text-red"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}