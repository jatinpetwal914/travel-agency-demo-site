"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface SliderControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  progressPercent: number;
}

export default function SliderControls({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  isPlaying,
  onTogglePlay,
  progressPercent,
}: SliderControlsProps) {
  const currentNum = String(currentIndex + 1).padStart(2, "0");
  const totalNum = String(totalSlides).padStart(2, "0");

  return (
    <div className="flex items-center gap-4 sm:gap-6">
      {/* Numbers & Progress Bar */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm sm:text-base font-semibold text-gold-accent tracking-widest">
          {currentNum}
        </span>
        <div className="w-16 sm:w-28 h-[2px] bg-ivory-100/20 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 bottom-0 bg-gold-accent transition-all duration-200"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="font-mono text-xs sm:text-sm text-stone-subtle tracking-widest">
          {totalNum}
        </span>
      </div>

      {/* Circular Arrows */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          aria-label="Previous Slide"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-ivory-100/20 bg-forest-950/60 backdrop-blur-md flex items-center justify-center text-ivory-100 hover:text-forest-950 hover:bg-gold-accent hover:border-gold-accent transition-all duration-300 shadow-lg active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={onNext}
          aria-label="Next Slide"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-ivory-100/20 bg-forest-950/60 backdrop-blur-md flex items-center justify-center text-ivory-100 hover:text-forest-950 hover:bg-gold-accent hover:border-gold-accent transition-all duration-300 shadow-lg active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={onTogglePlay}
          aria-label={isPlaying ? "Pause Autoplay" : "Resume Autoplay"}
          className="hidden md:flex w-9 h-9 rounded-full border border-ivory-100/10 bg-forest-950/40 backdrop-blur-md items-center justify-center text-stone-subtle hover:text-white transition-colors ml-1"
          title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
        </button>
      </div>
    </div>
  );
}
