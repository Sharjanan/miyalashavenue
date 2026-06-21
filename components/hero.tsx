"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Wordmark } from "@/components/wordmark";

const BOOKING_URL = "https://miyalashavenue.as.me/schedule/7e1b2b0e";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.025] blur-[150px]" />
        <div className="absolute right-[20%] top-[60%] h-[400px] w-[500px] rounded-full bg-black/[0.02] blur-[120px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-4 pt-32 pb-20 text-center sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeUp} className="mb-8 flex justify-center">
          <Wordmark />
        </motion.div>

        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/[0.03] px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-black">
            <Sparkles className="h-3.5 w-3.5" />
            Premium Lash Studio
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="logo-display mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-black">Elevate Your</span>
          <br />
          <span className="text-gradient-gold">Natural Beauty</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-black/55 sm:text-xl"
        >
          Expertly crafted lash extensions tailored to enhance your unique eye
          shape. Classic, volume, and hybrid sets designed for effortless elegance.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-black px-8 text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-black/80 sm:w-auto"
          >
            Book Your Appointment
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-8 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:border-black hover:bg-black/[0.03] sm:w-auto"
          >
            View Services
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
