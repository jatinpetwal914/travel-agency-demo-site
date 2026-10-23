import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BRAND_INFO } from "@/data/treks";
import { Compass, Mountain, Heart, Shield, Trees, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Hinter Roots Himalayan Expeditions",
  description:
    "Learn about Hinter Roots, an adventure travel company rooted in the Garhwal Himalayas. Our ethos, local mountain team, and dedication to nature-conscious trekking.",
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden rounded-3xl mb-16 glass-card">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop"
            alt="Himalayan Mountain Vista"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/40" />
        </div>

        <div data-reveal="up" className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/80 border border-gold-accent/40 text-gold-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 font-heading">
            <Compass className="w-3.5 h-3.5" />
            Our Mountain Origin
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-ivory-50 tracking-tight leading-tight">
            Rooted in Nature. Driven by Adventure.
          </h1>
          <p className="mt-4 text-stone-subtle text-base sm:text-lg font-light leading-relaxed font-sans">
            Hinter Roots was founded on a simple conviction: that the Himalayas are not merely a backdrop for
            tourism, but sacred living landscapes deserving of reverence, quiet exploration, and intimate
            local connection.
          </p>
        </div>
      </section>

      {/* Brand Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div data-reveal="right" className="lg:col-span-7 space-y-6 text-stone-subtle text-base sm:text-lg font-light leading-relaxed font-sans">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ivory-50">
              Beyond the Ordinary Trail
            </h2>
            <p>
              In recent decades, commercial trekking in the Himalayas has often drifted toward oversized
              crowds, rushed itineraries, and mounting ecological footprints on fragile alpine bugyals.
            </p>
            <p>
              At <strong className="text-ivory-100 font-semibold">{BRAND_INFO.name}</strong>, we take a different path. We design
              expeditions with intentional pacing, generous acclimatization intervals, small group caps, and
              wholesome mountain kitchens powered by local village staples.
            </p>
            <p>
              Whether traversing the historic Curzon trail across Kuari Pass, climbing to the winter summit of
              Kedarkantha, or walking among the ancient timber hamlets of Har Ki Dun, our goal is to reconnect
              travelers with the timeless stillness of high-altitude wilderness.
            </p>
          </div>

          <div data-reveal="left" data-reveal-delay="150" className="lg:col-span-5 relative h-96 sm:h-[450px] rounded-3xl overflow-hidden glass-card shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop"
              alt="Himalayan Valley View"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-forest-950/80 backdrop-blur-md border border-ivory-100/15">
              <p className="font-heading text-sm font-bold text-ivory-100">
                &ldquo;{BRAND_INFO.tagline}&rdquo;
              </p>
              <p className="text-[11px] text-stone-subtle mt-0.5">Garhwal Himalayas, Uttarakhand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-forest-900/30 border-y border-ivory-100/10 py-20 px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold font-heading">
              Our Compass
            </span>
            <h3 className="font-heading text-3xl font-bold text-ivory-50 mt-2">
              The Principles That Guide Every Step
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div data-reveal="up" data-reveal-delay="100" className="p-6 rounded-2xl glass-card hover:border-gold-accent/40 transition-all hover:-translate-y-1">
              <Trees className="w-8 h-8 text-gold-accent mb-4" />
              <h4 className="font-heading text-lg font-bold text-ivory-100 mb-2">Leave No Trace</h4>
              <p className="text-xs text-stone-subtle leading-relaxed font-sans">
                Zero plastic left behind. We haul back our own camp waste and support clean-up on communal
                mountain paths.
              </p>
            </div>

            <div data-reveal="up" data-reveal-delay="200" className="p-6 rounded-2xl glass-card hover:border-gold-accent/40 transition-all hover:-translate-y-1">
              <Mountain className="w-8 h-8 text-gold-accent mb-4" />
              <h4 className="font-heading text-lg font-bold text-ivory-100 mb-2">Respect For Weather</h4>
              <p className="text-xs text-stone-subtle leading-relaxed font-sans">
                We never force a summit against unsafe meteorological conditions. Mountain safety and life
                always come first.
              </p>
            </div>

            <div data-reveal="up" data-reveal-delay="300" className="p-6 rounded-2xl glass-card hover:border-gold-accent/40 transition-all hover:-translate-y-1">
              <Heart className="w-8 h-8 text-gold-accent mb-4" />
              <h4 className="font-heading text-lg font-bold text-ivory-100 mb-2">Empowering Locals</h4>
              <p className="text-xs text-stone-subtle leading-relaxed font-sans">
                Our guides, cooks, mule handlers, and support staff are native to the high valleys, paid fair
                wages and respected as partners.
              </p>
            </div>

            <div data-reveal="up" data-reveal-delay="400" className="p-6 rounded-2xl glass-card hover:border-gold-accent/40 transition-all hover:-translate-y-1">
              <Shield className="w-8 h-8 text-gold-accent mb-4" />
              <h4 className="font-heading text-lg font-bold text-ivory-100 mb-2">Transparent Truth</h4>
              <p className="text-xs text-stone-subtle leading-relaxed font-sans">
                We present realistic trail distances, honest fitness expectations, and verified altitudes
                without marketing hyperbole.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-reveal="up" className="text-center max-w-3xl mx-auto px-4">
        <h3 className="font-heading text-3xl font-bold text-ivory-50 mb-4">
          Ready to Walk With Us?
        </h3>
        <p className="text-stone-subtle text-base font-light mb-8">
          Explore our seasonal departures or speak with our team to design a bespoke mountain journey.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/treks"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-accent hover:bg-gold-light text-forest-950 font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
          >
            <span>Explore Treks</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ivory-100/20 hover:border-gold-accent text-ivory-100 text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            <span>Get in Touch</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
