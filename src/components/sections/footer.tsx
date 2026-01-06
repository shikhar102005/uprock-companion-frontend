"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

export function Footer() {
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);

  const creators = [
    { name: 'Companion Design Lab', url: '#' },
    { name: 'Future Systems', url: '#' },
    { name: 'Cognitive Arts', url: '#' },
  ];

  const handleOpenCredits = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCreditsOpen(true);
  };

  return (
    <footer className="relative w-full bg-background pt-[160px] pb-20">
      <div className="container flex flex-col items-center">
        {/* Branding Logo */}
        <div className="mb-20">
          <h2 className="text-[clamp(80px,15vw,200px)] font-display font-bold leading-none tracking-tighter text-foreground select-none">
            companion
          </h2>
        </div>

        {/* Footer Bottom Links */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <button
            onClick={handleOpenCredits}
            className="text-[14px] font-semibold tracking-widest uppercase text-foreground/50 hover:text-primary transition-colors cursor-pointer"
          >
            Philosophy
          </button>
          
          <div className="flex gap-8">
            <a
              href="#"
              className="text-[14px] font-semibold tracking-widest uppercase text-foreground/50 hover:text-primary transition-colors"
            >
              Connect
            </a>
            <a
              href="#"
              className="text-[14px] font-semibold tracking-widest uppercase text-foreground/50 hover:text-primary transition-colors"
            >
              Insights
            </a>
          </div>
        </div>

        <div className="mt-12 text-[12px] font-medium text-foreground/30 uppercase tracking-[0.2em]">
          © 2024 Companion Systems. All resonance reserved.
        </div>
      </div>

      {/* Philosophy Pop-up */}
      {isCreditsOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setIsCreditsOpen(false)}
          />
          
          <div className="relative bg-white p-12 md:p-20 rounded-[40px] shadow-2xl max-w-2xl flex flex-col items-start border border-border">
            <button 
              onClick={() => setIsCreditsOpen(false)}
              className="absolute top-8 right-8 text-foreground hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>

            <div className="mb-10">
              <h3 className="text-[32px] font-display font-bold text-foreground mb-6">
                Our Philosophy
              </h3>
                <p className="text-foreground/70 text-[18px] leading-relaxed mb-8">
                  We believe in technology that serves the soul. Companion is designed to be a quiet observer, an empathetic listener, and a steady mirror for your inner growth.
                </p>
              <div className="flex flex-col gap-4">
                {creators.map((creator) => (
                  <span
                    key={creator.name}
                    className="text-[24px] md:text-[32px] font-display font-semibold text-foreground"
                  >
                    {creator.name}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsCreditsOpen(false)}
              className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-display font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
