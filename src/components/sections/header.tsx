"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
      { label: "About", href: "#about" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Experience", href: "#experience" },
      { label: "Specs", href: "#specs" },
    ];

    // Hide header during intro (first 300vh)
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const checkVisibility = () => {
        setIsVisible(window.scrollY > window.innerHeight * 2.5);
      };
      window.addEventListener("scroll", checkVisibility);
      checkVisibility();
      return () => window.removeEventListener("scroll", checkVisibility);
    }, []);

    if (!isVisible) return null;

    return (
      <>
        {/* Sticky Header */}
        <header
          className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
            isScrolled 
              ? "py-4 bg-white/80 backdrop-blur-md shadow-sm" 
              : "py-8 bg-transparent"
          }`}
        >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
              <div className="flex items-center gap-4">
                <span className="text-2xl font-display font-bold text-foreground tracking-tighter">Companion</span>
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="lg:hidden p-2 text-foreground hover:opacity-70 transition-opacity"
                  aria-label="Open menu"
                >
                  <Menu size={32} />
                </button>
              </div>

            {/* Main Nav (Hidden on Mobile) */}
            <nav className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-semibold text-foreground uppercase tracking-[0.05em] hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#order"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-[14px] font-semibold uppercase tracking-[0.05em] transition-transform hover:scale-105"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile/Burger CTA */}
            <div className="lg:hidden">
               <a
                href="#order"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-[12px] font-semibold uppercase tracking-[0.05em]"
              >
                Start
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[110] bg-white transition-transform duration-700 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="https://video.srv18.com/v/mp4/39725c490839145c5f5d57486a709377/1920"
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <div className="container py-8 flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-foreground hover:opacity-70 transition-opacity"
            >
              <X size={40} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[40px] md:text-[80px] font-display font-semibold text-foreground hover:text-primary transition-colors tracking-tight leading-none"
              >
                {link.label}
              </a>
            ))}
          </div>

            <div className="p-12 flex flex-col items-center">
               <p className="text-[18px] font-display uppercase tracking-widest text-foreground font-medium">Companion</p>
            </div>
        </div>
      </div>
    </>
  );
}
