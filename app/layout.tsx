import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Italianno, Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miyalashavenue.com"),
  title: {
    default: "Miya Lash Avenue | Premium Lash Extensions",
    template: "%s | Miya Lash Avenue",
  },
  description:
    "Premium lash extensions and eye beauty services. Classic, volume, and hybrid lash sets crafted with precision and care.",
  keywords: [
    "lash extensions",
    "eyelash extensions",
    "volume lashes",
    "classic lashes",
    "hybrid lashes",
    "lash lift",
    "beauty salon",
    "Miya Lash Avenue",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Miya Lash Avenue",
    title: "Miya Lash Avenue | Premium Lash Extensions",
    description:
      "Premium lash extensions and eye beauty services crafted with precision and care.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${bodoni.variable} ${montserrat.variable} ${italianno.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full bg-white text-black antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
