"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import BookingInquiryForm from "./BookingInquiryForm";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrekName?: string;
}

export default function InquiryModal({
  isOpen,
  onClose,
  initialTrekName,
}: InquiryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-forest-950/85 backdrop-blur-md transition-opacity animate-fadeIn"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl bg-forest-900 border border-ivory-100/20 rounded-3xl shadow-2xl overflow-hidden my-8 animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-forest-950/80 border border-ivory-100/15 flex items-center justify-center text-stone-subtle hover:text-white hover:border-gold-accent transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Inner Form Container */}
        <div className="p-1 sm:p-2">
          <BookingInquiryForm
            initialTrekName={initialTrekName}
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
}
