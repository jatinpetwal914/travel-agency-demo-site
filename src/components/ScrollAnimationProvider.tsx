"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      // Clean up previous observer if any
      if (observer) {
        observer.disconnect();
      }

      // Auto-tag section headings and cards that don't have explicit reveal attributes
      const autoHeadings = document.querySelectorAll<HTMLElement>(
        "section:not(#hero):not([data-no-auto-reveal]) > div > div.text-center:not([data-reveal])"
      );
      autoHeadings.forEach((el) => {
        el.setAttribute("data-reveal", "up");
      });

      const autoCards = document.querySelectorAll<HTMLElement>(
        ".glass-card:not([data-reveal])"
      );
      autoCards.forEach((el) => {
        el.setAttribute("data-reveal", "up");
      });

      // Collect all elements with [data-reveal], .reveal-on-scroll
      const allElements = document.querySelectorAll<HTMLElement>(
        "[data-reveal], .reveal-on-scroll"
      );

      if (!allElements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              target.classList.add("revealed");
            } else {
              // Reset when scrolled past or away, allowing it to re-trigger
              // smoothly every single time when scrolling UP or DOWN!
              target.classList.remove("revealed");
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -40px 0px", // Triggers cleanly as it enters from top or bottom
          threshold: 0.08, // At least 8% visible
        }
      );

      allElements.forEach((el) => observer?.observe(el));
    };

    // Initialize with a short delay for layout calculation
    const timer = setTimeout(setupObserver, 120);

    // Watch for dynamic DOM changes (e.g. filter tabs, accordions, modals)
    const mutationObserver = new MutationObserver(() => {
      setupObserver();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      mutationObserver.disconnect();
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}
