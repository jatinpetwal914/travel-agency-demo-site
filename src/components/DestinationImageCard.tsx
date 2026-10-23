"use client";

import React from "react";
import Image from "next/image";
import { Trek } from "@/types/trek";
import { Bookmark, Mountain } from "lucide-react";

interface DestinationImageCardProps {
  trek: Trek;
  index: number;
  totalSlides: number;
  isActive: boolean;
  onClick: () => void;
}

export default function DestinationImageCard({
  trek,
  index,
  totalSlides,
  isActive,
  onClick,
}: DestinationImageCardProps) {
  return (
    <div className="flex flex-col flex-shrink-0 select-none">
      {/* Title & Dots above the card (matching the reference image) */}
      <div className="mb-2.5 px-1 flex flex-col">
        <span className="font-heading font-semibold text-white text-sm sm:text-base tracking-wide drop-shadow-md">
          {trek.heroHeadline}
        </span>
        {/* Row of indicator dots */}
        <div className="flex items-center gap-1.5 mt-1">
          {Array.from({ length: Math.min(totalSlides, 5) }).map((_, dotIdx) => (
            <span
              key={dotIdx}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                dotIdx === index % 5
                  ? "bg-white scale-110"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Portrait Image Card */}
      <div
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onClick();
          }
        }}
        aria-label={`Select ${trek.name}`}
        className={`group relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ease-out flex-shrink-0 ${
          isActive
            ? "ring-2 ring-white scale-105 shadow-2xl"
            : "hover:scale-[1.03] opacity-85 hover:opacity-100 shadow-xl"
        } w-48 xl:w-56 h-72 xl:h-84 bg-forest-900`}
      >
        {/* Background Image */}
        <Image
          src={trek.cardImage || trek.heroImage}
          alt={trek.name}
          fill
          sizes="(max-width: 768px) 180px, 240px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle dark gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* White circular bookmark button in top right (exact match to reference screenshot) */}
        <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 group-hover:scale-110 transition-transform">
          <Bookmark className="w-4 h-4 fill-gray-800" />
        </div>

        {/* Bottom info on card */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-center gap-1 text-[11px] font-medium text-gray-200">
            <Mountain className="w-3 h-3 text-blue-400" />
            <span>{trek.maxAltitudeString}</span>
          </div>
          <p className="text-xs text-gray-300 font-light mt-0.5 line-clamp-1">
            {trek.durationString} • {trek.difficulty}
          </p>
        </div>
      </div>
    </div>
  );
}
