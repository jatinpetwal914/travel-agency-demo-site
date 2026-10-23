"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trek } from "@/types/trek";
import { Mountain, Calendar, ArrowRight, Bookmark } from "lucide-react";

interface TrekCardProps {
  trek: Trek;
  onQuickInquire?: (trek: Trek) => void;
}

export default function TrekCard({ trek, onQuickInquire }: TrekCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-forest-900/60 border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl">
      {/* Cover Image */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
        <Image
          src={trek.cardImage || trek.heroImage}
          alt={trek.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/15">
            {trek.difficulty}
          </span>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 shadow-md">
            <Bookmark className="w-4 h-4 fill-gray-800" />
          </div>
        </div>

        {/* Starting Price */}
        {trek.startingPrice && (
          <div className="absolute bottom-3 right-3 z-10">
            <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-semibold backdrop-blur-md">
              From {trek.startingPrice}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-4">
        <div>
          <span className="text-xs text-blue-400 font-medium">
            {trek.region}, {trek.state}
          </span>

          <h3 className="font-heading text-xl font-bold text-white group-hover:text-blue-400 transition-colors mt-1 mb-2 leading-snug">
            {trek.name}
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 font-normal line-clamp-2 leading-relaxed">
            {trek.description}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
          <div className="flex items-center gap-1.5">
            <Mountain className="w-3.5 h-3.5 text-blue-400" />
            <span>{trek.maxAltitudeString}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>{trek.durationString}</span>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="flex items-center gap-2 pt-1">
          <Link
            href={`/treks/${trek.slug}`}
            className="flex-grow inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-blue-600 text-white text-xs font-semibold transition-all group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>

          {onQuickInquire && (
            <button
              onClick={() => onQuickInquire(trek)}
              className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/15 text-xs text-gray-300 hover:text-white transition-colors"
              title="Fast inquiry"
            >
              Inquire
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
