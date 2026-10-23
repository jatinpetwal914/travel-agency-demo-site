"use client";

import React, { useState } from "react";
import { TREKS, BRAND_INFO } from "@/data/treks";
import { InquiryFormData } from "@/types/trek";
import { Send, CheckCircle2, AlertCircle, MessageCircle, Loader2 } from "lucide-react";

interface BookingInquiryFormProps {
  initialTrekName?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function BookingInquiryForm({
  initialTrekName,
  onSuccess,
  compact = false,
}: BookingInquiryFormProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: "",
    email: "",
    phone: "",
    preferredTrek: initialTrekName || TREKS[0].name,
    departureDate: "",
    travelerCount: 2,
    message: "",
    consent: true,
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<{ id: string; text: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    // Client-side validation
    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      setErrorMsg("Please provide your full name.");
      setLoading(false);
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg("Please provide a valid phone number with country code.");
      setLoading(false);
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
      setLoading(false);
      return;
    }

    if (!formData.departureDate) {
      setErrorMsg("Please select an intended departure date or month.");
      setLoading(false);
      return;
    }

    if (!formData.consent) {
      setErrorMsg("Please accept the privacy policy to proceed.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setSuccessMsg({
        id: data.inquiryId || "HR-" + Date.now().toString().slice(-6),
        text: "Thank you! Your Himalayan trek inquiry has been received. Our expedition desk will contact you shortly.",
      });

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2500);
      }
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMsg(error.message || "An unexpected error occurred. Please try again or reach out on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Hinter Roots! I would like to inquire about the ${formData.preferredTrek} for ${formData.travelerCount} travelers around ${formData.departureDate || "upcoming dates"}. My name is ${formData.fullName || "Trekker"}.`
  );

  return (
    <div className={`w-full ${compact ? "p-5" : "p-7 sm:p-9"} rounded-2xl bg-forest-900/80 border border-white/10 shadow-xl`}>
      {successMsg ? (
        <div className="py-8 text-center animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="font-heading text-xl font-bold text-white mb-1">
            Inquiry Received
          </h3>
          <p className="text-xs text-blue-400 font-mono mb-2">
            Reference ID: {successMsg.id}
          </p>
          <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed mb-6">
            {successMsg.text}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => setSuccessMsg(null)}
              className="text-xs text-gray-400 hover:text-white underline py-2 px-3"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-2">
            <h3 className="font-heading text-xl font-bold text-white">
              Plan Your Mountain Expedition
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm font-normal mt-1">
              Tell us your trek preferences. Our team will verify trail conditions and prepare a tailored plan.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Preferred Trek */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
              Preferred Trek Destination *
            </label>
            <select
              name="preferredTrek"
              value={formData.preferredTrek}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:border-blue-500 focus:outline-none"
            >
              {TREKS.map((trek) => (
                <option key={trek.id} value={trek.name} className="bg-forest-950 text-white">
                  {trek.name} ({trek.difficulty} • {trek.maxAltitudeString})
                </option>
              ))}
            </select>
          </div>

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="e.g. Aarav Sharma"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                Phone (with Country Code) *
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email & Departure Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@domain.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                Intended Departure Date *
              </label>
              <input
                type="date"
                name="departureDate"
                required
                value={formData.departureDate}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Traveler Count */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
              Number of Travelers
            </label>
            <select
              name="travelerCount"
              value={formData.travelerCount}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:border-blue-500 focus:outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "11+ (Private Custom Group)"].map((num) => (
                <option key={num} value={num} className="bg-forest-950 text-white">
                  {num} {num === 1 ? "Traveler (Solo)" : "Travelers"}
                </option>
              ))}
            </select>
          </div>

          {/* Optional Message */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
              Preferences or Questions (Optional)
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Any fitness background, dietary needs, or private camp requests..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Privacy Consent */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 rounded bg-black/40 border-white/20 text-blue-600 focus:ring-0"
            />
            <label htmlFor="consent" className="text-[11px] text-gray-400 leading-tight">
              I agree to Hinter Roots contacting me regarding this trek. We respect your privacy.
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-grow inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-xs tracking-wide transition-all shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Trek Inquiry</span>
                </>
              )}
            </button>

            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 text-emerald-400 font-semibold text-xs tracking-wide transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
