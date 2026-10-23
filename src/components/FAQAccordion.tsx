"use client";

import React, { useState } from "react";
import { FAQItem, HOMEPAGE_FAQS } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({
  faqs = HOMEPAGE_FAQS,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about preparing, booking, and trekking in the Himalayas.",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-forest-900/40 border-y border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-2 block font-heading">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-gray-300 text-base font-normal leading-relaxed font-sans">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id || idx}
                data-reveal="up"
                data-reveal-delay={Math.min(idx * 75 + 100, 500).toString()}
                className="rounded-xl bg-forest-900/60 border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-blue-600" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-gray-300 font-normal leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
