"use client";

import { motion } from "framer-motion";
import { Heart, Award, Clock, Shield } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Certified Artist",
    description: "Professionally trained and certified lash technician",
  },
  {
    icon: Heart,
    title: "Premium Products",
    description: "Only the highest quality, cruelty-free lash materials",
  },
  {
    icon: Clock,
    title: "Lasting Results",
    description: "Extensions that maintain their beauty for 2-4 weeks",
  },
  {
    icon: Shield,
    title: "Safe & Hygienic",
    description: "Strict sanitation protocols for your safety and comfort",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-black/15 bg-black/[0.03] px-3 py-1 text-xs font-medium tracking-widest uppercase text-black">
              About
            </span>
            <h2 className="logo-display mt-4 text-3xl text-black sm:text-4xl lg:text-5xl">
              Your Lashes,{" "}
              <span className="text-gradient-gold">Our Passion</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-black/55">
              At Miya Lash Avenue, we believe every pair of eyes tells a unique
              story. Our mission is to enhance your natural beauty with
              meticulously applied lash extensions that make you feel confident
              and radiant every day.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-black/55">
              With a keen eye for detail and a dedication to the craft, every
              appointment is a personalized experience designed around your
              desired look and lifestyle.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:border-black/25"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-black/[0.03]">
                  <item.icon className="h-5 w-5 text-black" />
                </div>
                <h3 className="mb-1 font-semibold text-black">{item.title}</h3>
                <p className="text-sm text-black/50">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
