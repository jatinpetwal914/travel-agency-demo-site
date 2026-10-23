import React from "react";
import { Metadata } from "next";
import { TREKS } from "@/data/treks";
import TrekGrid from "@/components/TrekGrid";
import Image from "next/image";
import { Compass, Mountain, ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "All Himalayan Treks & Expeditions",
  description:
    "Explore our complete portfolio of nine hand-crafted Himalayan treks in Uttarakhand. Featuring Kuari Pass, Kedarkantha, Chopta Tungnath, Har Ki Dun, Dayara Bugyal, and more.",
};

export default function TreksCatalogPage() {
  return (
    <div className="w-full min-h-screen pt-24 pb-20">
      {/* Editorial Header Banner */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden rounded-3xl mb-12 glass-card">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop"
            alt="Garhwal Himalayas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/40" />
        </div>

        <div data-reveal="up" className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/80 border border-gold-accent/40 text-gold-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Compass className="w-3.5 h-3.5" />
            Hinter Roots Expedition Portfolio
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-ivory-50 tracking-tight leading-tight">
            The Complete Himalayan Trek Catalog
          </h1>
          <p className="mt-4 text-stone-subtle text-base sm:text-lg font-light leading-relaxed">
            Nine authentic routes across the Garhwal Himalayas. Each expedition is designed with
            uncompromising attention to gradual acclimatization, safety margins, wilderness ethics, and
            transformative mountain solitude.
          </p>

          {/* Quick Metrics Bar */}
          <div data-reveal="fade" data-reveal-delay="150" className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-ivory-100/10">
            <div className="flex items-center gap-3">
              <Mountain className="w-5 h-5 text-gold-accent" />
              <div>
                <p className="font-mono text-lg font-bold text-ivory-50">9 Expeditions</p>
                <p className="text-[11px] text-stone-subtle">Curated Routes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-accent" />
              <div>
                <p className="font-mono text-lg font-bold text-ivory-50">15,750 ft</p>
                <p className="text-[11px] text-stone-subtle">Highest Pass / Tarn</p>
              </div>
            </div>
            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <Award className="w-5 h-5 text-gold-accent" />
              <div>
                <p className="font-mono text-lg font-bold text-ivory-50">100% Local</p>
                <p className="text-[11px] text-stone-subtle">Garhwali Roots</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trek Grid Discovery */}
      <TrekGrid
        treks={TREKS}
        title="Find Your Ideal Mountain Trail"
        subtitle="Filter by trail grade to discover the journey best aligned with your endurance and mountain experience."
        eyebrow="Trek Catalog"
      />
    </div>
  );
}
