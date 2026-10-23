import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Compass, Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";
import { BRAND_INFO, TREKS } from "@/data/treks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-950 text-white overflow-hidden">
      {/* ================= FINAL CTA SECTION ================= */}
      <div className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop"
            alt="Himalayan Mountain Peaks"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-transparent" />
        </div>

        <div data-reveal="up" className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-3 block font-heading">
            Start Your Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Your Next Himalayan Adventure Starts Here
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed mb-8 font-sans">
            Experience the high-altitude trails, breathtaking ridgelines, and authentic hospitality of Uttarakhand with Hinter Roots.
          </p>

          <div data-reveal="fade" data-reveal-delay="150" className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/treks"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide transition-all shadow-xl hover:scale-105 font-heading"
            >
              <span>Explore Treks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs tracking-wide transition-all font-heading"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= COMPREHENSIVE FOOTER ================= */}
      <div className="border-t border-white/10 py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                {BRAND_INFO.name}
              </span>
            </Link>

            <p className="text-gray-300 text-sm font-normal leading-relaxed max-w-sm mt-1">
              &ldquo;{BRAND_INFO.tagline}&rdquo;
            </p>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Himalayan trekking experiences, outdoor adventures, and mountain travel in Uttarakhand.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Himalayan Treks */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Himalayan Treks
            </h4>
            <ul className="flex flex-col gap-1.5 text-xs text-gray-300">
              {TREKS.map((trek) => (
                <li key={trek.id}>
                  <Link href={`/treks/${trek.slug}`} className="hover:text-blue-400 transition-colors">
                    {trek.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-gray-300">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/treks" className="hover:text-blue-400 transition-colors">
                  All 9 Treks
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-400 hover:text-white transition-colors">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Operations Base
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.baseOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} {BRAND_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/policies" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policies#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/policies#cancellation" className="hover:text-white transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
