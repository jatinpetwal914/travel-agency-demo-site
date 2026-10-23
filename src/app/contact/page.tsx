import React from "react";
import { Metadata } from "next";
import { BRAND_INFO } from "@/data/treks";
import BookingInquiryForm from "@/components/BookingInquiryForm";
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Expedition Inquiries — Hinter Roots",
  description:
    "Connect with Hinter Roots to plan your Himalayan trek, check slot availability, or request custom private expedition dates in Uttarakhand.",
};

export default function ContactPage() {
  const defaultWhatsAppMsg = encodeURIComponent(
    "Hi Hinter Roots! I would like to inquire about planning an upcoming Himalayan trek."
  );

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div data-reveal="up" className="max-w-3xl mb-14">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900 border border-gold-accent/30 text-gold-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 font-heading">
          Direct Mountain Connection
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-ivory-50 tracking-tight leading-tight">
          Connect With Hinter Roots
        </h1>
        <p className="mt-4 text-stone-subtle text-base sm:text-lg font-light leading-relaxed font-sans">
          Whether you need advice choosing between treks, want to check dates for an upcoming season, or wish
          to plan a custom private expedition, we are here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Info & Base Details */}
        <div data-reveal="right" className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl glass-card space-y-6">
            <h3 className="font-heading text-2xl font-bold text-ivory-50">
              Mountain Expedition Desk
            </h3>

            <div className="space-y-5 text-sm text-stone-subtle font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-ivory-100 font-semibold mb-0.5 font-heading">
                    Operations Base
                  </p>
                  <p>{BRAND_INFO.baseOffice}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-ivory-100 font-semibold mb-0.5 font-heading">
                    Telephone
                  </p>
                  <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-gold-accent transition-colors">
                    {BRAND_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-ivory-100 font-semibold mb-0.5 font-heading">
                    Email Inquiries
                  </p>
                  <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-gold-accent transition-colors">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-ivory-100 font-semibold mb-0.5 font-heading">
                    Response Hours
                  </p>
                  <p>Mon – Sat: 9:00 AM – 7:00 PM IST</p>
                  <p className="text-xs text-stone-subtle/80">
                    Average response turnaround within 4–6 operational hours
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-4 border-t border-ivory-100/10">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${defaultWhatsAppMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider transition-colors shadow-lg font-heading"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Inquiry via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Safety & Compliance note */}
          <div data-reveal="up" className="p-6 rounded-2xl bg-forest-900/40 border border-ivory-100/10 text-xs text-stone-subtle leading-relaxed flex items-start gap-3 font-sans">
            <ShieldCheck className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
            <p>
              All submissions are strictly handled in compliance with our privacy policy. We do not sell or
              distribute your personal phone or email details.
            </p>
          </div>
        </div>

        {/* Right: Booking Inquiry Form */}
        <div data-reveal="left" data-reveal-delay="150" className="lg:col-span-7">
          <BookingInquiryForm />
        </div>
      </div>
    </div>
  );
}
