"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const specs = [
  {
    title: "Aesthetics",
    description: "Elegant, pebble-like form factor with a velvet-touch finish for a premium sensory experience.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/evernote1_img-8.webp"
  },
  {
    title: "Awareness",
    description: "High-fidelity spatial audio array and bio-rhythmic sensors for unparalleled emotional context.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/evernote2_img-9.webp"
  },
  {
    title: "Endurance",
    description: "Optimized power management providing over 48 hours of continuous presence on a single charge.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/evernote3_img-10.webp"
  },
  {
    title: "Sanctity",
    description: "End-to-end local encryption and a dedicated hardware privacy kill-switch for absolute peace of mind.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/evernote4_img-11.webp"
  }
];

export function Specifications() {
  return (
    <section 
      id="specs" 
      className="bg-background py-[80px] lg:py-[240px] overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          
          {/* Left Column: Heading & Graphic */}
          <div className="lg:w-1/2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary text-[64px] lg:text-[120px] font-display font-bold mb-6 tracking-tighter">
                Details
              </h2>
              <p className="text-foreground/80 text-[18px] lg:text-[20px] max-w-md leading-relaxed">
                Every component is meticulously crafted to harmonize the relationship between human intuition and synthetic intelligence.
              </p>
            </motion.div>

            {/* Product GIF */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative w-full aspect-square max-w-md rounded-[40px] overflow-hidden bg-secondary shadow-lg"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/gif_product-12.gif"
                alt="Companion Hardware Showcase"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </div>

          {/* Right Column: Spec Cards Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {specs.map((spec, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[40px] border border-border flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="space-y-4">
                  <h4 className="text-[32px] font-display font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {spec.title}
                  </h4>
                  <p className="text-foreground/70 text-[16px] leading-relaxed">
                    {spec.description}
                  </p>
                </div>
                
                <div className="mt-8 relative w-full h-40 overflow-hidden rounded-2xl">
                  <Image 
                    src={spec.image}
                    alt={spec.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
