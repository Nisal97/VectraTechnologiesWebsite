"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 transition-colors ${
        isMenuOpen ? "bg-[#090d16]" : "bg-[#090d16]/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <span className="text-base sm:text-xl font-bold tracking-tight">
            ⚡{" "}
            <span className="inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent">
              VECTRA SOLUTIONS
            </span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex items-center gap-8">
          <Link
            href="/services"
            className="group relative text-sm font-medium text-slate-200 hover:text-white transition-colors"
          >
            Services
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          <Link
            href="/why-us"
            className="group relative text-sm font-medium text-slate-200 hover:text-white transition-colors"
          >
            Why Us
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          <Link
            href="/contact"
            className="group relative text-sm font-medium text-slate-200 hover:text-white transition-colors"
          >
            Contact
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#090d16] border-t border-white/10 px-4 py-4 flex flex-col gap-1 shadow-2xl">
          <Link
            href="/services"
            onClick={closeMenu}
            className="px-3 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/why-us"
            onClick={closeMenu}
            className="px-3 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 transition-colors"
          >
            Why Us
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="px-3 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5 transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}