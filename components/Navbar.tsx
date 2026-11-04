"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with neon gradient text */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">
            {/* Neon gradient using bg-clip-text and text-transparent */}
            <span className="relative">
              ⚡{" "}
              <span
                className="inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent"
              >
                VECTRA SOLUTIONS
              </span>
            </span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex items-center gap-8">
          <a
            href="#services"
            className="relative text-zinc-400 hover:text-white transition-colors"
          >
            Services
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-emerald-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          </a>

          <a
            href="#why-us"
            className="relative text-zinc-400 hover:text-white transition-colors"
          >
            Why Us
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-emerald-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          </a>

          <a
            href="#team"
            className="relative text-zinc-400 hover:text-white transition-colors"
          >
            Team
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-emerald-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          </a>
        </div>

        {/* Action Button: Contact Us with pulsing green dot */}
        <a
          href="#contact"
          className="relative flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 px-4 py-2 rounded-lg transition-all duration-300 backdrop-filter blur-sm"
        >
          Contact Us
          <span className="relative inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleMenu}
          className="sm:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (visible when open) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center gap-8 pointer-events-auto">
          <a
            href="#services"
            className="text-2xl font-bold text-white hover:text-cyan-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#why-us"
            className="text-2xl font-bold text-white hover:text-cyan-500 transition-colors"
          >
            Why Us
          </a>
          <a
            href="#team"
            className="text-2xl font-bold text-white hover:text-cyan-500 transition-colors"
          >
            Team
          </a>
          <a
            href="#contact"
            className="text-2xl font-bold text-white hover:text-emerald-500 transition-colors"
          >
            Contact Us
          </a>
          <button
            onClick={handleMenu}
            className="absolute top-6 right-6 text-white/60"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </nav>
  );
}