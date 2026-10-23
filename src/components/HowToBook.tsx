import React from "react";
import Link from "next/link";
import { Compass, FileText, CheckCircle2, Backpack, ArrowRight } from "lucide-react";

export default function HowToBook() {
  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Explore Your Trek",
      description:
        "Select your preferred Himalayan route based on altitude, difficulty, duration, and the best trekking season.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Review Trip Details",
      description:
        "Review daily trekking hours, campsites, acclimatization stops, inclusion checklists, and basecamp logistics.",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Confirm Availability",
      description:
        "Inquire with your group size and intended dates via our simple form or directly on WhatsApp.",
    },
    {
      number: "04",
      icon: Backpack,
      title: "Prepare & Depart",
      description:
        "Receive your booking confirmation, gear checklist, and medical guidelines, and prepare for your trek.",
    },
  ];

  return (
    <section className="py-20 bg-forest-900/40 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-2 block font-heading">
            Booking Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How to Book Your Adventure
          </h2>
          <p className="mt-3 text-gray-300 text-base font-normal leading-relaxed font-sans">
            A straightforward process to plan your Himalayan expedition with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                data-reveal="up"
                data-reveal-delay={((idx + 1) * 100).toString()}
                className="p-7 rounded-2xl bg-forest-900/60 border border-white/10 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-extrabold text-blue-400">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div data-reveal="fade" data-reveal-delay="200" className="mt-12 text-center">
          <Link
            href="/treks"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide transition-all shadow-lg font-heading hover:scale-105"
          >
            <span>Explore Treks Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
