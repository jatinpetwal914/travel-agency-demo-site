"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trek } from "@/types/trek";
import DestinationImageCard from "./DestinationImageCard";
import { ArrowRight, Mountain, Calendar } from "lucide-react";
import InquiryModal from "./InquiryModal";

interface HeroDestinationSliderProps {
  treks: Trek[];
}

export default function HeroDestinationSlider({ treks }: HeroDestinationSliderProps) {
  const sliderTreks = treks.slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const activeTrek = sliderTreks[currentIndex];
  const slideDuration = 5500; // 5.5 seconds per slide
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sliderTreks.length);
  }, [sliderTreks.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + sliderTreks.length) % sliderTreks.length);
  }, [sliderTreks.length]);

  const handleSelectSlide = useCallback((idx: number) => {
    setCurrentIndex(idx);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Automatic Background & Card Switching Timer
  useEffect(() => {
    if (isAutoPlayPaused || inquiryModalOpen) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, slideDuration);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlayPaused, inquiryModalOpen, handleNext, currentIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  // Up next cards: upcoming destinations in circular sequence
  const upcomingTreks = [
    sliderTreks[(currentIndex + 1) % sliderTreks.length],
    sliderTreks[(currentIndex + 2) % sliderTreks.length],
    sliderTreks[(currentIndex + 3) % sliderTreks.length],
  ];

  return (
    <section
      className="relative w-full h-screen min-h-[720px] max-h-[1100px] overflow-hidden bg-black flex flex-col justify-between select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Cinematic Destination Hero"
    >
      {/* Background Slides with Smooth Cinematic Crossfade & Ken Burns Zoom */}
      {sliderTreks.map((trek, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={trek.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
            }`}
          >
            <Image
              src={trek.heroImage}
              alt={`${trek.name} — Hinter Roots`}
              fill
              priority={idx <= 1}
              sizes="100vw"
              className={`object-cover object-center transition-transform duration-[6000ms] ease-out will-change-transform ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* Atmospheric Overlays for crisp contrast and readability */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-black/90 via-black/60 via-45% to-transparent w-full" />
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/85 via-transparent to-black/30" />

      {/* Spacer for Top Navbar */}
      <div className="h-20 sm:h-24" />

      {/* Main Viewport Container */}
      <div className="relative z-30 max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 w-full flex-grow flex items-center my-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 xl:gap-14">
          
          {/* ================= LEFT SIDE: VERTICAL STEP TRACK + TEXT & CTA ================= */}
          <div className="flex items-center gap-6 sm:gap-8 w-full lg:w-[44%] xl:w-[40%] flex-shrink-0">
            {/* Vertical Step Indicator Track (Exact match to reference screenshot) */}
            <div className="hidden sm:flex flex-col items-center justify-between py-2 self-stretch relative select-none">
              <div className="absolute top-4 bottom-4 w-[1px] bg-white/30 left-1/2 -translate-x-1/2 z-0" />

              {sliderTreks.map((_, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`relative z-10 my-3 flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "w-8 h-8 rounded-full bg-white text-forest-950 font-bold text-xs shadow-lg scale-110"
                        : "w-2.5 h-2.5 rounded-full bg-white/60 hover:bg-white hover:scale-125"
                    }`}
                  >
                    {isActive ? idx + 1 : null}
                  </button>
                );
              })}
            </div>

            {/* Destination Title & Copy with key-triggered smooth entrance animation */}
            <div
              key={activeTrek.id}
              className="flex flex-col justify-center max-w-lg animate-heroFadeUp"
            >
              {/* Region Pill */}
              <div className="inline-flex items-center gap-2 mb-2.5">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-heading">
                  {activeTrek.region} • {activeTrek.state}
                </span>
              </div>

              {/* Destination Title: Controlled size so it never collides */}
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white uppercase leading-[1.05] mb-4 hero-title-shadow">
                {activeTrek.heroHeadline}
              </h1>

              {/* Descriptive Paragraph */}
              <p className="text-sm sm:text-base text-gray-200/95 font-normal leading-relaxed mb-6 hero-title-shadow font-sans">
                {activeTrek.description}
              </p>

              {/* Quick specs bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 mb-8 font-sans">
                <span className="flex items-center gap-1.5 font-medium text-white">
                  <Mountain className="w-4 h-4 text-blue-400" />
                  {activeTrek.maxAltitudeString}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-500" />
                <span className="flex items-center gap-1.5 font-medium text-white">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  {activeTrek.durationString}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-500" />
                <span className="text-emerald-400 font-medium">
                  {activeTrek.difficulty}
                </span>
              </div>

              {/* Call To Action Buttons */}
              <div className="flex items-center gap-4">
                <Link
                  href={`/treks/${activeTrek.slug}`}
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl hover:shadow-blue-600/30 hover:scale-105 active:scale-95 font-heading"
                >
                  <span>Explore Trek</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="inline-flex items-center px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all font-heading"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: CARDS SHIFTED TO THE RIGHT ================= */}
          {/* justify-end + ml-auto anchors cards cleanly to the right side */}
          <div
            className="hidden lg:flex items-center justify-end lg:w-[54%] xl:w-[58%] ml-auto pr-0 xl:pr-4 overflow-visible"
            onMouseEnter={() => setIsAutoPlayPaused(true)}
            onMouseLeave={() => setIsAutoPlayPaused(false)}
          >
            <div className="flex items-center gap-4 xl:gap-6 py-4 justify-end">
              {upcomingTreks.map((trek, cardIdx) => {
                const originalIndex = sliderTreks.findIndex((t) => t.id === trek.id);
                return (
                  <div
                    key={trek.id}
                    className={`transition-all duration-700 ease-out transform hover:-translate-y-1 ${
                      cardIdx === 2 ? "hidden xl:block" : "block"
                    }`}
                  >
                    <DestinationImageCard
                      trek={trek}
                      index={originalIndex}
                      totalSlides={sliderTreks.length}
                      isActive={false}
                      onClick={() => handleSelectSlide(originalIndex)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Quick-Switcher Bar with Countdown Progress Indicator */}
      <div className="relative z-30 max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 w-full pb-6 pt-3 flex items-center justify-between border-t border-white/10">
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
          {sliderTreks.map((trek, idx) => (
            <button
              key={trek.id}
              onClick={() => handleSelectSlide(idx)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap font-heading ${
                idx === currentIndex
                  ? "bg-white text-black font-bold shadow-md"
                  : "bg-white/10 text-gray-300 hover:text-white hover:bg-white/20"
              }`}
            >
              {trek.heroHeadline}
            </button>
          ))}
          <Link
            href="/treks"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 hover:text-white bg-white/5 border border-blue-500/30 hover:border-blue-400 transition-colors whitespace-nowrap font-heading"
          >
            All 9 Treks →
          </Link>
        </div>

        {/* Animated Countdown Progress Indicator */}
        <div className="hidden sm:flex items-center gap-3 text-xs text-gray-400 font-mono">
          <span className="text-white font-bold">0{currentIndex + 1}</span>
          <div className="w-16 h-[2px] bg-white/20 relative overflow-hidden rounded-full">
            <div
              key={currentIndex}
              className="absolute inset-y-0 left-0 bg-blue-500 rounded-full animate-slideProgress"
              style={{ animationDuration: `${slideDuration}ms` }}
            />
          </div>
          <span>0{sliderTreks.length}</span>
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialTrekName={activeTrek.name}
      />
    </section>
  );
}