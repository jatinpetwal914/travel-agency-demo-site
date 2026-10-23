"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Heart,
  Mountain,
  Play,
  X,
  ArrowRight,
} from "lucide-react";

interface StoryItem {
  id: string;
  location: string;
  duration: string;
  title: string;
  subtitle: string;
  trekTag: string;
  rating: string;
  image: string;
  videoUrl?: string;
}

const STORIES: StoryItem[] = [
  {
    id: "people",
    location: "Kedarkantha",
    duration: "01:32",
    title: "The People",
    subtitle: "Friendships, laughter and unforgettable moments on the trail.",
    trekTag: "Kedarkantha",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "into-himalayas",
    location: "Dayara Bugyal",
    duration: "01:16",
    title: "Into the Himalayas",
    subtitle: "Breathtaking views, peaceful trails and nature at its purest.",
    trekTag: "Dayara Bugyal",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "summit",
    location: "Kuari Pass",
    duration: "02:18",
    title: "The Summit Moment",
    subtitle: "The climb, the challenge and the joy of reaching the top together.",
    trekTag: "Kuari Pass",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "culture",
    location: "Chopta Tungnath",
    duration: "01:48",
    title: "Culture & Connection",
    subtitle: "Temples, local life and traditions in the mountains.",
    trekTag: "Chopta",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "unexplored",
    location: "Roopkund",
    duration: "01:27",
    title: "Unexplored Trails",
    subtitle: "Mystery, alpine lakes and raw Himalayan beauty.",
    trekTag: "Roopkund",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop",
  },
];

export default function WhyHinterRoots() {
  const [activeIndex, setActiveIndex] = useState(2); // Center card "The Summit Moment"
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  // Touch / Finger Slide state for mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % STORIES.length);
  };

  // Finger slide touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchCurrentX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping || touchStartX === null) return;
    setTouchCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isSwiping || touchStartX === null || touchCurrentX === null) {
      setIsSwiping(false);
      setTouchStartX(null);
      setTouchCurrentX(null);
      return;
    }

    const diff = touchStartX - touchCurrentX;
    // Responsive 35px threshold for quick and smooth finger slide
    if (diff > 35) {
      handleNext();
    } else if (diff < -35) {
      handlePrev();
    }

    setIsSwiping(false);
    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  // Subtle live tactile drag delta
  const dragDelta =
    isSwiping && touchStartX !== null && touchCurrentX !== null
      ? Math.max(-60, Math.min(60, touchCurrentX - touchStartX))
      : 0;

  return (
    <section id="why-us" className="relative py-20 sm:py-28 overflow-hidden bg-forest-950 text-white select-none">
      {/* Background Mountain Panorama */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop"
          alt="Himalayan Mountain Range at Sunset"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center opacity-40 brightness-75 saturate-125"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-forest-950/40 to-forest-950" />
      </div>

      <div className="relative z-10 max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* ================= SECTION HEADER ================= */}
        <div data-reveal="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3 font-heading">
            <span className="w-8 h-[1px] bg-[#d4af37]/60" />
            <span>Hinter Roots Stories</span>
            <span className="w-8 h-[1px] bg-[#d4af37]/60" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            More Than a Trek, <br />
            <span className="text-white/90">A Deeper Experience.</span>
          </h2>

          <p className="mt-3.5 sm:mt-4 text-gray-300 text-xs sm:text-base font-normal max-w-2xl mx-auto leading-relaxed font-sans px-2">
            Real trails. Real people. Breathtaking mountains. Explore the moments, stories and memories that
            make every journey special.
          </p>
        </div>

        {/* ================= CAROUSEL AREA WITH SMOOTH FINGER SLIDE ================= */}
        <div
          data-reveal="scale"
          data-reveal-delay="150"
          className="relative flex items-center justify-center my-4 sm:my-6 touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop Left Arrow (<) */}
          <button
            onClick={handlePrev}
            aria-label="Previous story"
            className="hidden sm:flex absolute left-0 sm:left-4 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-white/25 bg-black/60 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] backdrop-blur-md items-center justify-center text-white transition-all duration-300 shadow-2xl active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Wrapper */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-hidden py-4 sm:py-8 px-2 sm:px-4 w-full">
            {STORIES.map((story, idx) => {
              const isActive = idx === activeIndex;
              const isPrev = idx === (activeIndex - 1 + STORIES.length) % STORIES.length;
              const isNext = idx === (activeIndex + 1) % STORIES.length;
              const isFarLeft = idx === (activeIndex - 2 + STORIES.length) % STORIES.length;
              const isFarRight = idx === (activeIndex + 2) % STORIES.length;

              // On mobile (< sm): Only render the active card so it takes full width with zero squishing!
              // On tablet (sm): Render 3 cards (prev, active, next) with flex-shrink-0.
              // On desktop (xl): Render 5 cards.
              return (
                <div
                  key={story.id}
                  onClick={() => setActiveIndex(idx)}
                  style={
                    isActive && dragDelta
                      ? {
                          transform: `translateX(${dragDelta}px)`,
                          transition: isSwiping ? "none" : "transform 0.4s ease-out",
                        }
                      : undefined
                  }
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer select-none transition-all duration-500 ease-out flex flex-col justify-between flex-shrink-0 ${
                    isActive
                      ? "w-[88vw] max-w-[340px] sm:w-76 md:w-80 lg:w-[350px] h-[480px] sm:h-[490px] md:h-[530px] lg:h-[560px] z-20 scale-100 ring-2 ring-[#d4af37]/80 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex"
                      : isPrev || isNext
                      ? "hidden sm:flex w-52 sm:w-60 md:w-64 lg:w-[280px] h-[380px] sm:h-[420px] md:h-[460px] lg:h-[480px] z-10 opacity-75 hover:opacity-95 scale-95"
                      : "hidden xl:flex w-44 lg:w-[240px] h-[340px] lg:h-[420px] z-0 opacity-45 hover:opacity-75 scale-90"
                  }`}
                >
                  {/* Background Image */}
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 320px, 400px"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Dark Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/35" />

                  {/* Top Bar inside Card */}
                  <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between font-sans">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
                      <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{story.location}</span>
                    </span>

                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono font-semibold text-gray-200 border border-white/10">
                      {story.duration}
                    </span>
                  </div>

                  {/* Center Play Button */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedStory(story);
                      }}
                      aria-label={`Play ${story.title}`}
                      className={`rounded-full bg-white/20 border border-white/60 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 shadow-2xl group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black group-hover:border-[#d4af37] active:scale-95 ${
                        isActive
                          ? "w-16 h-16 sm:w-20 sm:h-20"
                          : "w-12 h-12 sm:w-14 sm:h-14"
                      }`}
                    >
                      <Play className={`fill-current ml-1 ${isActive ? "w-7 h-7 sm:w-8 sm:h-8" : "w-5 h-5"}`} />
                    </button>
                  </div>

                  {/* Bottom Content inside Card */}
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end">
                    <h3
                      className={`font-heading font-extrabold text-white mb-1.5 leading-tight ${
                        isActive ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                      }`}
                    >
                      {story.title}
                    </h3>

                    <p
                      className={`font-sans text-gray-200 font-normal leading-relaxed mb-4 ${
                        isActive ? "text-xs sm:text-sm line-clamp-2" : "text-xs line-clamp-2 text-gray-300"
                      }`}
                    >
                      {story.subtitle}
                    </p>

                    {/* Meta Footer */}
                    <div className="flex items-center justify-between text-xs text-gray-300 pt-3 border-t border-white/15 font-sans">
                      <span className="flex items-center gap-1 font-medium">
                        <Mountain className="w-3.5 h-3.5 text-[#d4af37]" />
                        {story.trekTag}
                      </span>

                      <span className="flex items-center gap-1 text-gray-300">
                        <Clock className="w-3.5 h-3.5" />
                        {story.duration}
                      </span>

                      <span className="flex items-center gap-1 text-amber-300 font-semibold">
                        <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                        {story.rating}
                      </span>
                    </div>
                  </div>

                  {/* Active Card Bottom Gold Progress Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <div className="h-full bg-[#d4af37] w-2/5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Right Arrow (>) */}
          <button
            onClick={handleNext}
            aria-label="Next story"
            className="hidden sm:flex absolute right-0 sm:right-4 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-white/25 bg-black/60 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] backdrop-blur-md items-center justify-center text-white transition-all duration-300 shadow-2xl active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Interactive Touch Bar (Buttons + Dots) */}
        <div className="flex sm:hidden items-center justify-between px-3 mt-4">
          <button
            onClick={handlePrev}
            aria-label="Previous story"
            className="w-10 h-10 rounded-full border border-white/20 bg-black/60 flex items-center justify-center text-white active:bg-[#d4af37] active:text-black"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Finger Swipe Instruction Hint */}
          <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-sans tracking-wide">
            <span className="text-[#d4af37]">⟵</span>
            <span>Slide with finger</span>
            <span className="text-[#d4af37]">⟶</span>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next story"
            className="w-10 h-10 rounded-full border border-white/20 bg-black/60 flex items-center justify-center text-white active:bg-[#d4af37] active:text-black"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div
          data-reveal="fade"
          data-reveal-delay="200"
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6"
        >
          {/* Left: Minimal Mountain Logo + Brand Wordmark */}
          <div className="flex items-center gap-3">
            <svg
              className="w-8 sm:w-9 h-8 sm:h-9 text-[#d4af37]"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="20 4 36 34 4 34" strokeLinejoin="round" />
              <polygon points="20 14 30 34 10 34" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-[0.2em] text-white uppercase">
                Hinter Roots
              </span>
              <span className="text-[10px] text-gray-400 tracking-wider">
                Find Your Way Beyond the Ordinary
              </span>
            </div>
          </div>

          {/* Center: Pagination Dots */}
          <div className="flex items-center gap-2">
            {STORIES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                aria-label={`Jump to story ${dotIdx + 1}`}
                className={`transition-all duration-300 ${
                  dotIdx === activeIndex
                    ? "w-8 h-2 rounded-full bg-[#d4af37]"
                    : "w-2 h-2 rounded-full bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Right: Modern Quote + Explore CTAs */}
          <div className="flex items-center gap-5 w-full sm:w-auto justify-center">
            <span className="font-sans text-sm sm:text-base text-gray-300 font-medium tracking-wide hidden lg:inline">
              &ldquo;Your story is waiting in the mountains.&rdquo;
            </span>

            <Link
              href="/treks"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#d4af37] hover:bg-[#e2c158] text-forest-950 font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
            >
              <span>Explore Our Treks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Video Modal Player Dialog */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-forest-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6">
            <button
              onClick={() => setSelectedStory(null)}
              aria-label="Close video"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 sm:mb-5">
              <Image
                src={selectedStory.image}
                alt={selectedStory.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d4af37] text-black flex items-center justify-center mb-3 shadow-xl">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                </div>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">
                  {selectedStory.title} — {selectedStory.location}
                </h4>
                <p className="text-xs sm:text-sm text-gray-200 max-w-md">
                  {selectedStory.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-300 font-sans">
              <span>Himalayan Trail Reel • {selectedStory.duration}</span>
              <Link
                href={`/treks`}
                className="text-[#d4af37] hover:underline font-semibold"
              >
                View Trek Itinerary →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
