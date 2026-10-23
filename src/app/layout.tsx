import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import { BRAND_INFO } from "@/data/treks";

export const metadata: Metadata = {
  title: {
    default: `${BRAND_INFO.name} — ${BRAND_INFO.tagline}`,
    template: `%s | ${BRAND_INFO.name}`,
  },
  description:
    "Hinter Roots is a premium Himalayan adventure and trekking travel company specializing in curated, nature-conscious mountain expeditions across Garhwal & Uttarakhand.",
  keywords: [
    "Himalayan trekking",
    "Kuari Pass Trek",
    "Kedarkantha Trek",
    "Chopta Tungnath",
    "Har Ki Dun",
    "Dayara Bugyal",
    "Roopkund",
    "Uttarakhand trekking",
    "Luxury mountain adventure",
    "Hinter Roots",
  ],
  authors: [{ name: "Hinter Roots Adventures" }],
  creator: "Hinter Roots",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hinterroots.com",
    title: `${BRAND_INFO.name} — ${BRAND_INFO.tagline}`,
    description:
      "A cinematic, nature-conscious Himalayan trekking company for those who seek to explore beyond ordinary tourism.",
    siteName: BRAND_INFO.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Hinter Roots Himalayan Expeditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_INFO.name} — ${BRAND_INFO.tagline}`,
    description: "Find Your Way Beyond the Ordinary with Hinter Roots Himalayan Treks.",
    images: ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-forest-950 text-ivory-100 min-h-screen flex flex-col font-sans selection:bg-gold-accent selection:text-forest-950">
        <ScrollAnimationProvider />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
