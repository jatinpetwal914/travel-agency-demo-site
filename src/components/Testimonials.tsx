import React from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { CheckCircle2, MessageSquare } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-2 block font-heading">
          Trekker Reviews
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          What Our Trekkers Say
        </h2>
        <p className="mt-3 text-gray-300 text-base font-normal leading-relaxed font-sans">
          Authentic feedback from travelers who have explored the trails with Hinter Roots.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((item, idx) => (
          <div
            key={item.id}
            data-reveal="up"
            data-reveal-delay={idx === 0 ? "100" : "250"}
            className="p-7 rounded-2xl bg-forest-900/60 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  {item.trekName}
                </span>
                <MessageSquare className="w-5 h-5 text-gray-500" />
              </div>
              <p className="text-gray-200 text-sm sm:text-base font-normal leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
              <div>
                <p className="font-semibold text-white text-sm">{item.name}</p>
                <p className="text-gray-400 text-xs">{item.location}</p>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Trekker</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
