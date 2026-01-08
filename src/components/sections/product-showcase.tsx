"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function ProductShowcase() {
  const assets = {
    companionFront: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/companion_front-15.png",
    evernoteIcon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/evernote1_img-8.webp",
    interfaceGif: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/gif_product-12.gif",
  };

  return (
    <section className="relative w-full bg-background overflow-hidden py-[120px] lg:py-[240px]">
      <div className="container">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Product Branding & GIF Demo */}
          <div className="lg:col-span-5 flex flex-col space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h2 className="text-primary text-[64px] lg:text-[120px] font-display font-bold leading-[1.1] tracking-tighter mb-4">
                Design
              </h2>
              <h3 className="text-[32px] lg:text-[48px] font-display font-medium leading-[1.2] text-foreground">
                Companion
              </h3>
            </motion.div>

            {/* Hardware Interface GIF Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative rounded-[40px] overflow-hidden border border-border bg-secondary aspect-square lg:aspect-[4/3] flex items-center justify-center shadow-xl"
            >
              <div className="w-full h-full relative">
                <Image
                  src={assets.interfaceGif}
                  alt="Companion Hardware Interface"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Product Image & App Integrations */}
          <div className="lg:col-span-7 relative flex flex-col items-center">
            
            {/* Context Icon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 z-10"
            >
              <div className="relative w-full h-full rounded-[30%] overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src={assets.evernoteIcon}
                  alt="Integration Context"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </motion.div>

            {/* Main Product Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative w-full h-[50vh] lg:h-[80vh] flex items-center justify-center"
            >
              <Image
                src={assets.companionFront}
                alt="Companion Device"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]"
                priority
              />
            </motion.div>

            {/* Product description */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mt-8 max-w-[400px] text-center lg:text-left self-start"
            >
              <p className="text-[18px] font-normal leading-relaxed text-foreground/60">
                Designed to be held, loved, and trusted. An organic form that bridges the gap between machine intelligence and human connection.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] opacity-[0.03] pointer-events-none -z-10" />
    </section>
  );
}
