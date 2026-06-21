"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const BOOKING_URL = "https://miyalashavenue.as.me/schedule/7e1b2b0e";

export function BookingCTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.04] via-white to-black/[0.02] p-12 text-center sm:p-20"
        >
          <div className="absolute inset-0 shimmer" />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-1.5 text-sm font-medium text-black"
            >
              <Calendar className="h-4 w-4" />
              Book Your Appointment
            </motion.div>

            <h2 className="logo-display text-3xl text-black sm:text-4xl lg:text-5xl">
              Ready for Your{" "}
              <span className="text-gradient-gold">Dream Lashes</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-black/50">
              Book your appointment today and let us create the perfect lash look
              tailored just for you.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-black px-8 text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-black/80 sm:w-auto"
              >
                Schedule Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
