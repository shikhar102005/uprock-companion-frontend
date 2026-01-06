"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const functions = [
  {
    title: "Listen",
    description: "Companion actively listens and analyzes your words, tone of voice, and even pauses to truly understand your emotional state.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/help_1_img-5.webp",
    alt: "Listen capability 3D render",
  },
  {
    title: "Understand",
    description: "By combining what you hear and what you see, Companion seeks to deeply understand the roots of your experiences and current state.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/help_2_img-6.webp",
    alt: "Understand capability 3D render",
  },
  {
    title: "Support",
    description: "Based on complete understanding, Companion provides personalized and always available emotional support.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/help_3_img-7.webp",
    alt: "Support capability 3D render",
  }
];

export function FunctionsGrid() {
  return (
    <section 
      id="experience" 
      className="py-[80px] lg:py-[240px] bg-background"
    >
      <div className="container">
        {/* Section Heading */}
        <motion.h3 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="font-display text-[32px] md:text-[48px] font-medium tracking-tight text-foreground mb-12 md:mb-20"
        >
          Core Capabilities
        </motion.h3>

        {/* Functions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {functions.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group flex flex-col bg-white rounded-[40px] border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{ minHeight: '520px' }}
              >
                {/* Card Header Content */}
                <div className={`p-10 ${item.title === "Understand" ? "text-center flex flex-col items-center" : ""}`}>
                  <h4 className="font-display text-[32px] md:text-[48px] font-semibold tracking-tight text-foreground mb-6 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className={`text-[17px] font-normal leading-relaxed text-foreground/70 ${item.title === "Understand" ? "max-w-[280px]" : ""}`}>
                    {item.description}
                  </p>
                </div>


              {/* Card Image Area */}
              <div className="mt-auto relative w-full aspect-square p-6">
                <div className="relative w-full h-full overflow-hidden rounded-[30px]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-contain object-bottom transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
