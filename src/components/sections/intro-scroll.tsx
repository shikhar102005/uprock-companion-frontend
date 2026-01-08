"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Feeling disconnected?",
    image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Looking for clarity?",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
  },
  {
    title: "Seeking deep resonance?",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/companion_front-15.png",
  },
];

export function IntroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {slides.map((slide, index) => {
          const start = index / slides.length;
          const end = (index + 1) / slides.length;
          
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, 
            [start, start + 0.1, end - 0.1, end], 
            [0, 1, 1, 0]
          );
          
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(scrollYProgress,
            [start, end],
            [1.1, 1]
          );

          return (
            <motion.div
              key={index}
              style={{ opacity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div 
                style={{ scale }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover brightness-[0.4]"
                />
              </motion.div>
              
              <div className="relative z-10 w-full text-center px-4">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-white font-display font-bold leading-none tracking-tighter"
                  style={{
                    fontSize: 'clamp(40px, 10vw, 120px)',
                  }}
                >
                  {slide.title}
                </motion.h1>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
