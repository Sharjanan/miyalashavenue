import Image from "next/image";
import { ArrowRight, AtSign, Mail, MapPin } from "lucide-react";
import { Wordmark } from "@/components/wordmark";

const BOOKING_URL = "https://miyalashavenue.as.me/schedule/7e1b2b0e";

const services = [
  { name: "Classic Set", detail: "Soft, natural definition", price: "$95" },
  { name: "Hybrid Set", detail: "Classic and volume blend", price: "$100" },
  { name: "Volume Set", detail: "Full, lightweight volume", price: "$110" },
  { name: "Mega Volume", detail: "Maximum density and drama", price: "$120" },
  { name: "Wet Set", detail: "Textured, glossy finish", price: "$110" },
  { name: "Wispy Sets", detail: "Custom spikes and texture", price: "From $110" },
];

const informationPanels = [
  { src: "/booking-reference-3.png", alt: "Miya Lash Avenue booking policies" },
  { src: "/booking-reference-4.png", alt: "How to prepare before your lash appointment" },
  { src: "/booking-reference-5.png", alt: "Important lash appointment reminders" },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" aria-label="Miya Lash Avenue home">
            <Wordmark compact />
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="transition-opacity hover:opacity-55">Services</a>
            <a href="#artist" className="transition-opacity hover:opacity-55">Artist</a>
            <a href="#policies" className="transition-opacity hover:opacity-55">Policies</a>
            <a href="#contact" className="transition-opacity hover:opacity-55">Contact</a>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-black/75 sm:px-7"
          >
            Book Now
          </a>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[760px] items-center pt-28">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div>
            <p className="font-display mb-7 text-xs font-bold uppercase tracking-[0.35em]">Saint-Leonard, Montreal</p>
            <h1 className="logo-display max-w-3xl text-[4.5rem] leading-[0.78] sm:text-[6.5rem] lg:text-[8rem]">
              Your lashes,
              <span className="block">elevated.</span>
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-8 text-black/65 sm:text-xl">
              Customized lash sets designed by Sharmiya to complement your eyes,
              your style, and the way you want to feel.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-black/75"
              >
                Choose Appointment <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#artist" className="rounded-full border border-black px-8 py-4 text-sm font-bold uppercase tracking-[0.13em] transition-colors hover:bg-black hover:text-white">
                Meet Sharmiya
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl border border-black/10 bg-[#fbfaf8] p-3 shadow-[18px_18px_0_#000] lg:mr-4">
            <Image
              src="/booking-reference-1.png"
              alt="Meet Sharmiya, the artist behind Miya Lash Avenue"
              width={1000}
              height={500}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-black bg-[#fbfaf8] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.35em]">Choose your look</p>
              <h2 className="mt-2 font-script text-7xl leading-none sm:text-8xl">Services</h2>
            </div>
            <p className="max-w-md text-black/60">Full sets are customized at every appointment. A non-refundable $25 deposit is required to book.</p>
          </div>
          <div className="grid border-l border-t border-black sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.name}
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="group border-b border-r border-black bg-white p-7 transition-colors hover:bg-black hover:text-white sm:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-lg font-extrabold uppercase">{service.name}</h3>
                    <p className="mt-2 text-sm opacity-60">{service.detail}</p>
                  </div>
                  <span className="shrink-0 text-lg font-semibold">{service.price}</span>
                </div>
                <span className="mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] opacity-0 transition-opacity group-hover:opacity-100">
                  Book service <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="artist" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em]">The face behind the sets</p>
            <h2 className="mt-2 font-script text-7xl leading-none sm:text-8xl">Meet the artist</h2>
          </div>
          <div className="overflow-hidden border border-black/15 bg-[#fbfaf8] shadow-[12px_12px_0_#000]">
            <Image
              src="/booking-reference-1.png"
              alt="Sharmiya, lash artist and founder of Miya Lash Avenue"
              width={1000}
              height={500}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section id="policies" className="bg-black py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-white/55">Before you book</p>
            <h2 className="mt-2 font-script text-7xl leading-none sm:text-8xl">Good to know</h2>
          </div>
          <div className="space-y-6">
            {informationPanels.map((panel) => (
              <div key={panel.src} className="overflow-hidden bg-[#fbfaf8] p-2">
                <Image src={panel.src} alt={panel.alt} width={1000} height={500} className="h-auto w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em]">Questions?</p>
            <h2 className="mt-2 font-script text-7xl leading-none sm:text-8xl">Let&apos;s connect</h2>
            <div className="mt-10 space-y-5 text-lg">
              <a href="mailto:miyalashavenue@outlook.com" className="flex items-center gap-4 hover:opacity-55"><Mail className="h-5 w-5" /> miyalashavenue@outlook.com</a>
              <p className="flex items-center gap-4"><MapPin className="h-5 w-5" /> Saint-Leonard, QC H1Z 4C6</p>
              <a href="https://instagram.com/miyalashavenue" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:opacity-55"><AtSign className="h-5 w-5" /> @miyalashavenue</a>
            </div>
          </div>
          <div className="border border-black/10 bg-[#fbfaf8] p-2">
            <Image src="/booking-reference-2.png" alt="Miya Lash Avenue contact information" width={1000} height={500} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section className="border-t border-black bg-[#fbfaf8] py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <Wordmark />
          <h2 className="mx-auto mt-10 max-w-3xl font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl">Ready to book your next set?</h2>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white hover:bg-black/75">
            Begin Booking <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="bg-black px-5 py-8 text-center text-xs uppercase tracking-[0.18em] text-white/55">
        © {new Date().getFullYear()} Miya Lash Avenue · Saint-Leonard, Montreal
      </footer>
    </main>
  );
}
