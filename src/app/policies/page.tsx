import React from "react";
import { Metadata } from "next";
import { ShieldCheck, FileText, AlertTriangle, Undo2 } from "lucide-react";
import Link from "next/link";
import { BRAND_INFO } from "@/data/treks";

export const metadata: Metadata = {
  title: "Policies, Terms & Cancellation — Hinter Roots",
  description:
    "Review Hinter Roots policies, terms and conditions, and cancellation & refund guidelines for Himalayan trekking expeditions.",
};

export default function PoliciesPage() {
  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-ivory-100">
      {/* Header */}
      <div className="mb-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-stone-subtle hover:text-gold-accent transition-colors mb-4"
        >
          <Undo2 className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-ivory-50 tracking-tight">
          Policies & Terms of Expedition
        </h1>
        <p className="mt-3 text-stone-subtle text-base font-light">
          Last updated: October 2026. Please read these terms carefully before confirming your trek reservation.
        </p>
      </div>

      <div className="space-y-16">
        {/* 1. Cancellation & Refund Policy */}
        <section id="cancellation" className="p-8 sm:p-10 rounded-3xl glass-card space-y-6">
          <div className="flex items-center gap-3 text-gold-accent">
            <AlertTriangle className="w-6 h-6" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ivory-50">
              Cancellation & Refund Policy
            </h2>
          </div>

          <div className="text-stone-subtle text-sm sm:text-base font-light leading-relaxed space-y-4">
            <p>
              Mountain expeditions require advance logistics including state forest permits, camping
              allotments, high-altitude gear reservations, and local guide hiring. If you must cancel your
              trek, the following schedule applies:
            </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-ivory-100/15 text-gold-accent font-semibold">
                    <th className="py-3 px-4">Cancellation Notice</th>
                    <th className="py-3 px-4">Refund / Credit Terms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ivory-100/10">
                  <tr>
                    <td className="py-3 px-4 font-medium text-ivory-100">30+ Days Prior to Departure</td>
                    <td className="py-3 px-4">
                      85% cash refund OR 100% credit voucher valid for 12 months
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-ivory-100">15 – 29 Days Prior to Departure</td>
                    <td className="py-3 px-4">
                      50% credit voucher valid for 12 months (no cash refund)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-ivory-100">0 – 14 Days Prior to Departure</td>
                    <td className="py-3 px-4 text-rose-300">
                      Non-refundable due to finalized mountain logistics and permits
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-stone-subtle">
              * Note: In case of extreme weather closures or landslides declared by government authorities
              before departure, we issue trek vouchers or reschedule to the next feasible departure.
            </p>
          </div>
        </section>

        {/* 2. Terms and Conditions */}
        <section id="terms" className="p-8 sm:p-10 rounded-3xl glass-card space-y-6">
          <div className="flex items-center gap-3 text-gold-accent">
            <FileText className="w-6 h-6" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ivory-50">
              Terms & Conditions
            </h2>
          </div>

          <div className="text-stone-subtle text-sm sm:text-base font-light leading-relaxed space-y-4">
            <h3 className="font-heading text-lg font-bold text-ivory-100">1. Mountain Authority & Safety</h3>
            <p>
              The Wilderness Trek Leader represents ultimate operational authority on the trail. If weather,
              health issues, or sudden altitude sickness (AMS) necessitates turning back, their decision is
              final and binding to ensure team survival and safety.
            </p>

            <h3 className="font-heading text-lg font-bold text-ivory-100">2. Medical Fitness Declaration</h3>
            <p>
              Trekkers must honestly declare all existing medical conditions, respiratory history, and
              allergies prior to departure. High altitude places significant physiological strain on the human
              cardiovascular system.
            </p>

            <h3 className="font-heading text-lg font-bold text-ivory-100">3. Environmental Ethics</h3>
            <p>
              All participants must abide by Leave No Trace principles. Littering single-use plastics or
              defacing mountain stone will result in immediate termination from the expedition without refund.
            </p>
          </div>
        </section>

        {/* 3. Privacy Policy */}
        <section id="privacy" className="p-8 sm:p-10 rounded-3xl glass-card space-y-6">
          <div className="flex items-center gap-3 text-gold-accent">
            <ShieldCheck className="w-6 h-6" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ivory-50">
              Privacy Policy
            </h2>
          </div>

          <div className="text-stone-subtle text-sm sm:text-base font-light leading-relaxed space-y-4">
            <p>
              {BRAND_INFO.name} respects your personal information. We collect contact information (name,
              phone number, email address, dates, and group size) solely to coordinate your inquiry, verify
              trail logistics, and secure mandatory forest department entry permits.
            </p>
            <p>
              We do not sell, rent, or trade your personal data to third-party marketing companies. You may
              request removal of your details from our inquiry log at any time by emailing{" "}
              <a href={`mailto:${BRAND_INFO.email}`} className="text-gold-accent underline">
                {BRAND_INFO.email}
              </a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
