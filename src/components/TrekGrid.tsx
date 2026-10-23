"use client";

import React, { useState } from "react";
import { Trek } from "@/types/trek";
import TrekCard from "./TrekCard";
import InquiryModal from "./InquiryModal";

interface TrekGridProps {
  treks: Trek[];
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function TrekGrid({
  treks,
  title = "Curated Himalayan Treks",
  subtitle = "Choose from beginner-friendly alpine meadows to breathtaking high-altitude summit trails across Uttarakhand.",
  eyebrow = "Expeditions",
}: TrekGridProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedTrek, setSelectedTrek] = useState<Trek | null>(null);

  const filterOptions = ["All", "Easy to Moderate", "Moderate", "Moderate to Strenuous", "Strenuous"];

  const filteredTreks =
    selectedDifficulty === "All"
      ? treks
      : treks.filter((t) => t.difficulty === selectedDifficulty);

  const handleQuickInquire = (trek: Trek) => {
    setSelectedTrek(trek);
    setInquiryModalOpen(true);
  };

  return (
    <section id="treks" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div data-reveal="up" className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-2 block font-heading">
            {eyebrow}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-gray-300 text-base font-normal leading-relaxed font-sans">
            {subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div data-reveal="fade" data-reveal-delay="150" className="flex flex-wrap items-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedDifficulty(opt)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all font-heading ${
                selectedDifficulty === opt
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white/10 text-gray-300 hover:text-white hover:bg-white/20"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Trek Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTreks.map((trek, idx) => (
          <div
            key={trek.id}
            data-reveal="up"
            data-reveal-delay={((idx % 3) * 100 + 100).toString()}
          >
            <TrekCard
              trek={trek}
              onQuickInquire={handleQuickInquire}
            />
          </div>
        ))}
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialTrekName={selectedTrek?.name}
      />
    </section>
  );
}
