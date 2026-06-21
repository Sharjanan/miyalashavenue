"use client";

import { motion } from "framer-motion";
import { Eye, Sparkles, Layers, Sun, Droplets, Star } from "lucide-react";

const BOOKING_URL = "https://miyalashavenue.as.me/schedule/7e1b2b0e";

const services = [
  {
    icon: Eye,
    title: "Classic Lashes",
    description:
      "A single extension applied to each natural lash for a subtle, mascara-like enhancement that looks effortlessly natural.",
    price: "From $120",
  },
  {
    icon: Layers,
    title: "Volume Lashes",
    description:
      "Handmade fans of ultra-fine extensions for a dramatic, full and fluffy look with lightweight comfort.",
    price: "From $160",
  },
  {
    icon: Sparkles,
    title: "Hybrid Lashes",
    description:
      "The best of both worlds — a mix of classic and volume techniques for textured, multidimensional fullness.",
    price: "From $140",
  },
  {
    icon: Star,
    title: "Mega Volume",
    description:
      "Ultra-dense, glamorous lash sets using the finest diameter extensions for maximum impact and drama.",
    price: "From $200",
  },
  {
    icon: Sun,
    title: "Lash Lift & Tint",
    description:
      "A semi-permanent curl and color treatment for your natural lashes — no extensions needed.",
    price: "From $80",
  },
  {
    icon: Droplets,
    title: "Lash Removal",
    description:
      "Safe, gentle removal of existing extensions with a nourishing treatment to keep your natural lashes healthy.",
    price: "From $30",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-black/15 bg-black/[0.03] px-3 py-1 text-xs font-medium tracking-widest uppercase text-black">
            Services
          </span>
          <h2 className="logo-display mt-4 text-3xl text-black sm:text-4xl lg:text-5xl">
            Our Lash Services
          </h2>
          <p className="mt-4 text-lg text-black/50">
            Every set is customized to complement your eye shape and desired look.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl border border-black/10 bg-white p-8 transition-all duration-300 hover:border-black/25 hover:bg-black/[0.02]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03]">
                <service.icon className="h-5 w-5 text-black" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-black">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-black/50">
                {service.description}
              </p>
              <span className="text-sm font-semibold text-black">
                {service.price}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
