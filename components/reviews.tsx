"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "Absolutely love my lashes! Miya is so talented and really took the time to understand the look I wanted. I get compliments everywhere I go.",
    name: "Sarah M.",
    service: "Volume Set",
    rating: 5,
  },
  {
    quote:
      "Best lash experience I've ever had. The attention to detail is incredible and they lasted so much longer than any other set I've had.",
    name: "Jasmine K.",
    service: "Hybrid Set",
    rating: 5,
  },
  {
    quote:
      "I was nervous about getting extensions for the first time, but Miya made me feel so comfortable. The results are stunning and so natural-looking!",
    name: "Emily R.",
    service: "Classic Set",
    rating: 5,
  },
  {
    quote:
      "The lash lift completely changed my morning routine. My natural lashes look amazing and I don't even need mascara anymore.",
    name: "Nicole T.",
    service: "Lash Lift & Tint",
    rating: 5,
  },
];

export function Reviews() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-black/15 bg-black/[0.03] px-3 py-1 text-xs font-medium tracking-widest uppercase text-black">
            Reviews
          </span>
          <h2 className="logo-display mt-4 text-3xl text-black sm:text-4xl lg:text-5xl">
            What Clients Say
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-black/10 bg-white p-8 text-center sm:p-12"
            >
              <Quote className="mx-auto mb-6 h-8 w-8 text-black/25" />
              <p className="logo-display text-xl leading-relaxed text-black/80 sm:text-2xl">
                &ldquo;{reviews[current].quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-1">
                {Array.from({ length: reviews[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-black text-black"
                  />
                ))}
              </div>
              <p className="mt-4 font-semibold text-black">
                {reviews[current].name}
              </p>
              <p className="text-sm text-black/55">
                {reviews[current].service}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/60 transition-colors hover:border-black hover:text-black"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-black"
                      : "w-2 bg-black/20 hover:bg-black/40"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/60 transition-colors hover:border-black hover:text-black"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
