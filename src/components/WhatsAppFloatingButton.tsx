"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { BRAND_INFO } from "@/data/treks";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = encodeURIComponent(
    "Hi Hinter Roots! I would like to inquire about booking an upcoming Himalayan trek."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Optional Help bubble */}
      {showTooltip && (
        <div className="mb-3 p-3.5 rounded-2xl bg-forest-900 border border-emerald-500/30 text-ivory-100 shadow-2xl max-w-xs text-xs animate-fadeIn relative">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close message"
            className="absolute top-2 right-2 text-stone-subtle hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-emerald-400 mb-1">Hinter Roots Expedition Desk</p>
          <p className="text-stone-subtle text-[11px] leading-relaxed">
            Have questions about trail difficulty, weather, or custom dates? Chat with our mountain advisory team.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/40"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200" />
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase">
          Trek Desk
        </span>
      </a>
    </div>
  );
}
