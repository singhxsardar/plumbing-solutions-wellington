"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, Menu, X, Droplet } from "lucide-react";

const PHONE_TEL = "tel:+6421738121";
const WHATSAPP_LINK = "https://wa.me/6421738121";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-header" : ""
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-lg font-semibold text-deep sm:text-xl"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-deep text-white">
            <Droplet size={18} strokeWidth={2.25} />
          </span>

          <span className="leading-tight">
            Plumbing Solutions
            <span className="block text-xs font-mono font-normal tracking-wide text-brand-500">
              WELLINGTON
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-underline-center text-sm font-medium text-ink-700 transition-colors hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-tint-200 text-brand-500 transition-all hover:border-brand-500 hover:bg-tint-100"
          >
            <MessageCircle size={19} />
          </a>

          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 rounded-full bg-deep px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:scale-105 hover:bg-deep-700"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full text-deep lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-tint-200 bg-white px-4 pb-5 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-tint-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-3 flex gap-3">
            <a
              href={PHONE_TEL}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-deep px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone size={16} />
              Call Now
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-500 px-4 py-3 text-sm font-semibold text-brand-500"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
