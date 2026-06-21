"use client";

import { AtSign, Mail, MapPin, Clock } from "lucide-react";

const BOOKING_URL = "https://miyalashavenue.as.me/schedule/7e1b2b0e";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f7f7f7]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-xl font-semibold tracking-wide text-black">
              MIYA LASH AVENUE
            </span>
            <p className="mt-4 text-sm leading-relaxed text-black/50">
              Premium lash extensions crafted with precision, passion, and the
              finest materials for your natural beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Reviews", href: "#reviews" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-black/50 transition-colors hover:text-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-black transition-colors hover:text-black/60"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
              Hours
            </h4>
            <ul className="space-y-3 text-sm text-black/50">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-black/60" />
                <div>
                  <p>Mon — Fri: 9am — 7pm</p>
                  <p>Saturday: 10am — 5pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@miyalashavenue.com"
                  className="flex items-center gap-2 text-sm text-black/50 transition-colors hover:text-black"
                >
                  <Mail className="h-4 w-4" />
                  info@miyalashavenue.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-black/50">
                <MapPin className="h-4 w-4 shrink-0" />
                Montreal, Canada
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-black/50 transition-colors hover:text-black"
                >
                  <AtSign className="h-4 w-4" />
                  @miyalashavenue
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-8 text-center">
          <p className="text-sm text-black/35">
            &copy; {new Date().getFullYear()} Miya Lash Avenue. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
