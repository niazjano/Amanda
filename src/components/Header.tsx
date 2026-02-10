"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/images";

const navLinks = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#priser", label: "Priser" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Amanda Städ Kristianstad - startsida">
          <Image
            src={images.logo}
            alt="Amanda Städ Kristianstad"
            width={160}
            height={48}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Huvudnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-blue font-medium hover:text-brand-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-2xl bg-brand-green text-white font-semibold hover:bg-brand-green-hover transition-colors shadow-soft"
          >
            Boka städning
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 rounded-xl text-brand-blue hover:bg-gray-100"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4">
          <nav className="flex flex-col gap-2" aria-label="Mobilmeny">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 px-4 rounded-xl text-brand-blue font-medium hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="mt-2 py-3 px-4 rounded-xl bg-brand-green text-white font-semibold text-center hover:bg-brand-green-hover"
              onClick={() => setOpen(false)}
            >
              Boka städning
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
