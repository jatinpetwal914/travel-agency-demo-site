import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { TREKS, BRAND_INFO } from "@/data/treks";
import BookingInquiryForm from "@/components/BookingInquiryForm";
import TrekCard from "@/components/TrekCard";
import {
  Mountain,
  Calendar,
  Compass,
  MapPin,
  Check,
  X,
  MessageCircle,
  ShieldAlert,
  HelpCircle,
  ArrowRight,
  Footprints,
  Clock,
  Navigation,
} from "lucide-react";

interface TrekPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return TREKS.map((trek) => ({
    slug: trek.slug,
  }));
}

export async function generateMetadata({ params }: TrekPageProps): Promise<Metadata> {
  const trek = TREKS.find((t) => t.slug === params.slug);
  if (!trek) return { title: "Trek Not Found" };

  return {
    title: `${trek.name} (${trek.maxAltitudeString}) — Hinter Roots`,
    description: trek.description,
    openGraph: {
      title: `${trek.name} — Hinter Roots Himalayan Expeditions`,
      description: trek.description,
      images: [
        {
          url: trek.heroImage,
          width: 1200,
          height: 630,
          alt: trek.name,
        },
      ],
    },
  };
}

export default function TrekDetailPage({ params }: TrekPageProps) {
  const trek = TREKS.find((t) => t.slug === params.slug);

  if (!trek) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Hinter Roots! I am interested in inquiring about the ${trek.name} (${trek.maxAltitudeString}). Could you share available dates and group slots?`
  );

  const relatedTreks = TREKS.filter((t) => t.id !== trek.id).slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-forest-950 text-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[65vh] min-h-[480px] max-h-[750px] overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={trek.heroImage}
            alt={trek.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/treks" className="hover:text-white transition-colors">
              Treks
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{trek.name}</span>
          </nav>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            {trek.region} • {trek.state}
          </span>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-tight hero-title-shadow">
            {trek.name}
          </h1>

          <p className="mt-2 text-base sm:text-lg text-gray-200 font-normal max-w-2xl leading-relaxed">
            {trek.tagline}
          </p>
        </div>
      </section>

      {/* 2. Key Verified Statistics Strip */}
      <section data-reveal="fade" className="border-y border-white/10 bg-forest-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400 mb-1">Max Altitude</span>
              <div className="flex items-center gap-1 font-heading text-base sm:text-lg font-bold text-blue-400">
                <Mountain className="w-4 h-4" />
                <span>{trek.maxAltitudeString}</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400 mb-1">Duration</span>
              <div className="flex items-center gap-1 font-heading text-base sm:text-lg font-bold text-white">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>{trek.durationString}</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400 mb-1">Difficulty Grade</span>
              <span className="font-heading text-sm sm:text-base font-bold text-emerald-400">
                {trek.difficulty}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400 mb-1">Trail Distance</span>
              <div className="flex items-center gap-1 font-heading text-base sm:text-lg font-bold text-white">
                <Footprints className="w-4 h-4 text-blue-400" />
                <span>{trek.distanceString}</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400 mb-1">Basecamp</span>
              <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-white">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{trek.basecamp}</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400 mb-1">Starting Price</span>
              <span className="font-heading text-base sm:text-lg font-bold text-blue-400">
                {trek.startingPrice || "Inquire"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-12">
            {/* Overview */}
            <div data-reveal="up">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 block font-heading">
                Overview
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                About the {trek.name}
              </h2>
              <p className="text-gray-300 text-base leading-relaxed font-normal font-sans">
                {trek.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div data-reveal="up" data-reveal-delay="100" className="p-7 rounded-2xl bg-forest-900/60 border border-white/10">
              <h3 className="font-heading text-xl font-bold text-white mb-4">
                Key Highlights
              </h3>
              <ul className="space-y-3 font-sans">
                {trek.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div data-reveal="up">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading text-2xl font-bold text-white">
                  Day-by-Day Itinerary
                </h3>
                <span className="text-xs font-semibold text-blue-400 font-heading">
                  {trek.itinerary.length} Days
                </span>
              </div>

              <div className="space-y-4">
                {trek.itinerary.map((day, dIdx) => (
                  <div
                    key={day.day}
                    data-reveal="up"
                    data-reveal-delay={Math.min(dIdx * 60 + 50, 300).toString()}
                    className="p-6 rounded-2xl bg-forest-900/60 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-white">
                        Day {day.day}: {day.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        {day.distance && (
                          <span className="flex items-center gap-1">
                            <Navigation className="w-3 h-3 text-blue-400" />
                            {day.distance}
                          </span>
                        )}
                        {day.altitude && (
                          <span className="flex items-center gap-1 text-emerald-400">
                            <Mountain className="w-3 h-3" />
                            {day.altitude}
                          </span>
                        )}
                        {day.duration && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-blue-400" />
                            {day.duration}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {day.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fitness & Best Season */}
            <div data-reveal="up" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-forest-900/60 border border-white/10">
                <h4 className="font-heading text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-blue-400" />
                  Fitness & Endurance
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  {trek.fitnessRequirement}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-forest-900/60 border border-white/10">
                <h4 className="font-heading text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  Best Time to Visit
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  {trek.bestSeason}
                </p>
              </div>
            </div>

            {/* Inclusions and Exclusions */}
            <div data-reveal="up" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-forest-900/60 border border-white/10">
                <h4 className="font-heading text-base font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  What is Included
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {trek.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-forest-900/60 border border-white/10">
                <h4 className="font-heading text-base font-bold text-rose-400 mb-3 flex items-center gap-2">
                  <X className="w-4 h-4" />
                  What is Excluded
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {trek.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Packing Checklist */}
            <div data-reveal="up" className="p-6 rounded-2xl bg-forest-900/60 border border-white/10">
              <h4 className="font-heading text-xl font-bold text-white mb-4">
                Packing Checklist
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {trek.packingList.map((cat, idx) => (
                  <div key={idx}>
                    <h5 className="font-bold text-blue-400 text-xs uppercase mb-2">
                      {cat.category}
                    </h5>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {trek.faqs && trek.faqs.length > 0 && (
              <div>
                <h4 className="font-heading text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-400" />
                  Questions About {trek.name}
                </h4>
                <div className="space-y-3">
                  {trek.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-forest-900/60 border border-white/10">
                      <h5 className="font-heading text-base font-semibold text-white mb-1.5">
                        {faq.question}
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div data-reveal="left" data-reveal-delay="150" className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-2xl bg-forest-900/80 border border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-heading font-bold text-sm uppercase tracking-wider">
                    Quick WhatsApp Chat
                  </span>
                </div>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                  Have questions about dates, group slots, or fitness preparation for {trek.name}?
                </p>
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>

              <BookingInquiryForm initialTrekName={trek.name} compact={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Treks */}
      <section className="py-16 border-t border-white/10 bg-forest-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading text-2xl font-bold text-white">
              More Himalayan Expeditions
            </h3>
            <Link
              href="/treks"
              className="text-xs font-semibold text-blue-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>All 9 Treks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTreks.map((rel) => (
              <TrekCard key={rel.id} trek={rel} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
