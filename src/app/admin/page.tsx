"use client";

import React, { useState, useEffect } from "react";
import { TREKS } from "@/data/treks";
import { HOMEPAGE_FAQS } from "@/data/faqs";
import { TESTIMONIALS } from "@/data/testimonials";
import { InquirySubmission } from "@/types/trek";
import {
  Compass,
  Inbox,
  Mountain,
  HelpCircle,
  Quote,
  CheckCircle,
  RefreshCw,
  Mail,
  Phone,
  Calendar,
  Users,
} from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"inquiries" | "treks" | "faqs" | "testimonials">("inquiries");
  const [inquiries, setInquiries] = useState<InquirySubmission[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries");
      const data = await res.json();
      if (data.inquiries) {
        setInquiries(data.inquiries);
      }
    } catch (err) {
      console.error("Failed to fetch inquiries", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-ivory-100">
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-ivory-100/10">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-gold-accent">
            Expedition Operations
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-ivory-50 mt-1">
            Hinter Roots Admin Console
          </h1>
        </div>

        <button
          onClick={fetchInquiries}
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-forest-900 border border-ivory-100/15 hover:border-gold-accent text-xs font-semibold uppercase tracking-wider text-stone-subtle hover:text-white transition-colors self-start"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-gold-accent" : ""}`} />
          <span>Refresh Data</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-ivory-100/10">
        <button
          onClick={() => setActiveTab("inquiries")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === "inquiries"
              ? "bg-gold-accent text-forest-950 shadow-md"
              : "bg-forest-900/40 text-stone-subtle hover:text-white"
          }`}
        >
          <Inbox className="w-4 h-4" />
          <span>Inquiries ({inquiries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("treks")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === "treks"
              ? "bg-gold-accent text-forest-950 shadow-md"
              : "bg-forest-900/40 text-stone-subtle hover:text-white"
          }`}
        >
          <Mountain className="w-4 h-4" />
          <span>Trek Catalog ({TREKS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("faqs")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === "faqs"
              ? "bg-gold-accent text-forest-950 shadow-md"
              : "bg-forest-900/40 text-stone-subtle hover:text-white"
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>FAQs ({HOMEPAGE_FAQS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("testimonials")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === "testimonials"
              ? "bg-gold-accent text-forest-950 shadow-md"
              : "bg-forest-900/40 text-stone-subtle hover:text-white"
          }`}
        >
          <Quote className="w-4 h-4" />
          <span>Testimonials ({TESTIMONIALS.length})</span>
        </button>
      </div>

      {/* Tab 1: Inquiries */}
      {activeTab === "inquiries" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-ivory-50">
              Submitted Trek Inquiries
            </h2>
            <span className="text-xs text-stone-subtle">
              {inquiries.length} {inquiries.length === 1 ? "inquiry" : "inquiries"} recorded
            </span>
          </div>

          {inquiries.length === 0 ? (
            <div className="p-12 text-center rounded-3xl glass-card">
              <Inbox className="w-12 h-12 text-stone-subtle/40 mx-auto mb-3" />
              <h3 className="font-heading text-lg font-bold text-ivory-100 mb-1">
                No Inquiries Yet
              </h3>
              <p className="text-xs text-stone-subtle max-w-sm mx-auto">
                Test the inquiry system from any trek page or the homepage modal. Submissions will appear here
                instantly.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inquiries.map((inq) => (
                <div key={inq.id} className="p-6 rounded-2xl glass-card space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-gold-accent">
                      {inq.id}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                      {inq.status || "new"}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-ivory-50">
                      {inq.fullName}
                    </h3>
                    <p className="text-xs text-gold-light font-medium mt-0.5">
                      Interested in: {inq.preferredTrek}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-stone-subtle pt-2 border-t border-ivory-100/10">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-gold-accent" />
                      <a href={`mailto:${inq.email}`} className="hover:text-white underline">
                        {inq.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gold-accent" />
                      <a href={`tel:${inq.phone}`} className="hover:text-white">
                        {inq.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gold-accent" />
                      <span>Intended Date: {inq.departureDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-gold-accent" />
                      <span>{inq.travelerCount} Travelers</span>
                    </div>
                  </div>

                  {inq.message && (
                    <div className="p-3 rounded-xl bg-forest-950/70 border border-ivory-100/10 text-xs text-stone-subtle italic">
                      &ldquo;{inq.message}&rdquo;
                    </div>
                  )}

                  <div className="text-[10px] text-stone-subtle/60 pt-1">
                    Submitted: {new Date(inq.createdAt).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Trek Catalog */}
      {activeTab === "treks" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-ivory-50">
              Active Trek Catalog (Central Repository)
            </h2>
            <span className="text-xs text-stone-subtle">9 Expeditions Configured</span>
          </div>

          <div className="space-y-4">
            {TREKS.map((trek, idx) => (
              <div
                key={trek.id}
                className="p-5 sm:p-6 rounded-2xl glass-card flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-950/80 border border-gold-accent/30 flex items-center justify-center font-mono text-sm font-bold text-gold-accent">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-lg font-bold text-ivory-50">
                        {trek.name}
                      </h3>
                      {trek.featured && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-gold-accent/20 text-gold-accent">
                          Hero Slider
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-subtle">
                      {trek.region} • {trek.durationString} • {trek.maxAltitudeString} • {trek.difficulty}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="font-mono text-emerald-400 font-bold">
                    {trek.startingPrice || "₹ Inquire"}
                  </span>
                  <a
                    href={`/treks/${trek.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-ivory-100/15 hover:border-gold-accent text-ivory-100 hover:text-gold-light"
                  >
                    View Page
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: FAQs */}
      {activeTab === "faqs" && (
        <div className="space-y-4">
          <h2 className="font-heading text-xl font-bold text-ivory-50 mb-4">
            Configured Homepage FAQs
          </h2>
          {HOMEPAGE_FAQS.map((faq) => (
            <div key={faq.id} className="p-5 rounded-2xl glass-card">
              <span className="text-[10px] uppercase tracking-wider text-gold-accent font-semibold">
                {faq.category}
              </span>
              <h3 className="font-heading text-base font-bold text-ivory-100 mt-1 mb-2">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-stone-subtle font-light leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Testimonials */}
      {activeTab === "testimonials" && (
        <div className="space-y-4">
          <h2 className="font-heading text-xl font-bold text-ivory-50 mb-4">
            Verified Trekker Testimonials
          </h2>
          {TESTIMONIALS.map((test) => (
            <div key={test.id} className="p-5 rounded-2xl glass-card">
              <div className="flex items-center justify-between mb-2">
                <span className="font-heading font-bold text-sm text-ivory-100">
                  {test.name} ({test.location})
                </span>
                <span className="text-xs text-gold-accent">{test.trekName}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-subtle italic">
                &ldquo;{test.quote}&rdquo;
              </p>
              <div className="flex items-center gap-1 text-[10px] text-emerald-400 mt-3">
                <CheckCircle className="w-3 h-3" />
                <span>Verified Trekker Record</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
