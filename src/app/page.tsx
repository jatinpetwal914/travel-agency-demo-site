import React from "react";
import HeroDestinationSlider from "@/components/HeroDestinationSlider";
import TrekGrid from "@/components/TrekGrid";
import WhyHinterRoots from "@/components/WhyHinterRoots";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import HowToBook from "@/components/HowToBook";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import { TREKS } from "@/data/treks";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Section 2: Cinematic Destination Slider Hero */}
      <HeroDestinationSlider treks={TREKS} />

      {/* Section 3: Explore All Treks */}
      <TrekGrid treks={TREKS} />

      {/* Section 4: Why Hinter Roots? */}
      <WhyHinterRoots />

      {/* Section 5: Featured Himalayan Experiences */}
      <FeaturedExperiences />

      {/* Section 6: How to Book */}
      <HowToBook />

      {/* Section 7: Authentic Testimonials & Trail Journals */}
      <Testimonials />

      {/* Section 8: Frequently Asked Questions */}
      <FAQAccordion />
    </div>
  );
}
