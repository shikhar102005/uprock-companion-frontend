"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section 
      className="bg-background pt-[120px] pb-[80px] lg:pt-[240px] lg:pb-[160px] overflow-hidden" 
      id="about"
    >
      <div className="container">
        <div className="flex flex-col items-start">
          {/* Solution Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-primary mb-8"
          >
            Evolution
          </motion.h2>

          <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col gap-8 lg:max-w-[500px]"
            >
              {/* Brand Heading */}
              <h3 className="text-foreground font-display font-medium tracking-tight">
                Companion
              </h3>

              {/* Product Description */}
              <p className="text-foreground/80 text-[18px] leading-relaxed">
                Companion is more than just intelligence. It&apos;s an empathetic partner that learns from your unique nuances, providing deep psychological support and personal resonance in a fast-paced world.
              </p>

              {/* Action Button */}
              <div className="mt-4">
                <a 
                  href="#order" 
                  className="btn-pill"
                >
                  Experience Companion
                </a>
              </div>
            </motion.div>

            {/* Video Showcase */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 overflow-hidden rounded-[30px] aspect-video relative flex items-center justify-center bg-secondary shadow-2xl"
            >
              <video 
                src="https://video.srv18.com/v/mp4/932811464d4e8b1ac71c45fd96184b35/1920" 
                className="w-full h-full object-cover" 
                autoPlay 
                muted 
                loop 
                playsInline
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
