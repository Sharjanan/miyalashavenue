"use client";

import { motion } from "framer-motion";

const galleryItems = [
  { label: "Classic Set", gradient: "from-black/10 via-white to-white" },
  { label: "Volume Set", gradient: "from-black/[0.07] via-white to-white" },
  { label: "Hybrid Set", gradient: "from-black/10 via-white to-white" },
  { label: "Mega Volume", gradient: "from-black/[0.08] via-black/[0.02] to-white" },
  { label: "Lash Lift", gradient: "from-black/[0.06] via-white to-white" },
  { label: "Natural Glam", gradient: "from-black/10 via-black/[0.03] to-white" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-black/15 bg-black/[0.03] px-3 py-1 text-xs font-medium tracking-widest uppercase text-black">
            Gallery
          </span>
          <h2 className="logo-display mt-4 text-3xl text-black sm:text-4xl lg:text-5xl">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-black/50">
            A showcase of lash artistry — each set crafted to perfection.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-black/15 bg-white">
                    <span className="logo-display text-2xl text-black">
                      {item.label.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium tracking-wide text-black/60">
                    {item.label}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
