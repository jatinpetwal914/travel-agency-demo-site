"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, Search, MessageCircle, ArrowRight } from "lucide-react";
import { BRAND_INFO } from "@/data/treks";
import InquiryModal from "./InquiryModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Treks", href: "/treks" },
    { name: "Destinations", href: "/#experiences" },
    { name: "Why Hinter Roots", href: "/#why-us" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello Hinter Roots! I would like to inquire about booking a Himalayan trek."
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3.5 shadow-lg"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - clean & modern like Foxico in reference */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none">
                Hinter Roots
              </span>
              <span className="text-[10px] text-gray-300 tracking-wider font-medium mt-0.5">
                Himalayan Travel & Treks
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && !link.href.includes("#");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    isActive ? "text-white font-semibold" : "text-gray-200/90"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions (Search circle + WhatsApp + Plan Your Trek CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Button (Circle icon matching reference) */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-black/60 border border-white/20 rounded-full px-3 py-1.5 animate-fadeIn">
                  <input
                    type="text"
                    placeholder="Search treks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && searchQuery.trim()) {
                        window.location.href = `/treks?q=${encodeURIComponent(searchQuery)}`;
                      }
                    }}
                    autoFocus
                    className="bg-transparent text-xs text-white placeholder-gray-400 outline-none w-32 sm:w-40"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-gray-400 hover:text-white ml-1 text-xs"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search Treks"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
                  title="Search treks"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* WhatsApp Quick Link */}
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 border border-white/20 flex items-center justify-center text-emerald-400 hover:text-white transition-all"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Plan Your Trek CTA Button */}
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide transition-all shadow-md hover:shadow-blue-600/30 active:scale-95 flex items-center gap-1.5"
            >
              <span>Plan Your Trek</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-xl bg-white/10 border border-white/15"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-forest-950/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest pb-2 border-b border-white/10">
              Menu
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-xl font-bold text-white hover:text-blue-400 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setInquiryModalOpen(true);
              }}
              className="w-full py-3 rounded-full bg-blue-600 text-white font-bold text-sm tracking-wide text-center shadow-lg"
            >
              Plan Your Trek
            </button>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-white/10 text-emerald-400 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </>
  );
}
