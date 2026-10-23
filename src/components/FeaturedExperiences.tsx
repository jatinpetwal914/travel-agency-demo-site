import React from "react";
import Image from "next/image";
import { FEATURED_EXPERIENCES } from "@/data/experiences";

export default function FeaturedExperiences() {
  const [feature1, feature2, ...otherFeatures] = FEATURED_EXPERIENCES;

  return (
    <section id="experiences" className="py-24 px-4 sm:px-8 lg:px-12 max-w-[1760px] mx-auto w-full">
      {/* Section Header */}
      <div data-reveal="up" className="max-w-3xl mb-14">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-2.5 block font-heading">
          Himalayan Highlights
        </span>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Iconic Landscapes of Garhwal
        </h2>
        <p className="mt-3.5 text-gray-300 text-base sm:text-lg font-normal leading-relaxed font-sans">
          From panoramic 7,000-meter peaks and rolling alpine meadows to starlit campsites in the high valleys.
        </p>
      </div>

      <div className="space-y-8 w-full">
        {/* Top Tier: Two Massive Expansive Hero Frames */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {[feature1, feature2].map((item, idx) => (
            <div
              key={item.id}
              data-reveal="scale"
              data-reveal-delay={idx === 0 ? "100" : "250"}
              className="group relative rounded-3xl overflow-hidden h-[440px] sm:h-[520px] lg:h-[580px] w-full shadow-2xl bg-forest-900 border border-white/10"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              {/* Dark atmospheric gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-50% to-transparent" />

              <div className="absolute inset-0 p-8 sm:p-10 lg:p-12 flex flex-col justify-end text-white">
                <span className="text-xs sm:text-sm uppercase tracking-wider text-blue-400 font-bold mb-2">
                  {item.category}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base font-normal max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tier: Three Expansive Supporting Frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {otherFeatures.map((item, idx) => (
            <div
              key={item.id}
              data-reveal="up"
              data-reveal-delay={((idx + 1) * 150).toString()}
              className="group relative rounded-3xl overflow-hidden h-[380px] sm:h-[440px] lg:h-[480px] w-full shadow-2xl bg-forest-900 border border-white/10"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-50% to-transparent" />

              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end text-white">
                <span className="text-xs uppercase tracking-wider text-blue-400 font-bold mb-2">
                  {item.category}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
