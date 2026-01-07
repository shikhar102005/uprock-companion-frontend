"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const steps = [
    {
      text: "Feeling disconnected?",
      image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=2071&auto=format&fit=crop",
    },
    {
      text: "Looking for clarity?",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    },
    {
      text: "Seeking deep resonance?",
      image: "https://images.unsplash.com/photo-1499209974431-9dac3adaf477?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  // Map scroll progress to each step
  const stepOpacity0 = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const stepOpacity1 = useTransform(scrollYProgress, [0.33, 0.4, 0.58, 0.66], [0, 1, 1, 0]);
  const stepOpacity2 = useTransform(scrollYProgress, [0.66, 0.75, 1], [0, 1, 1]);

  const stepScale0 = useTransform(scrollYProgress, [0, 0.33], [1, 1.1]);
  const stepScale1 = useTransform(scrollYProgress, [0.33, 0.66], [1.1, 1]);
  const stepScale2 = useTransform(scrollYProgress, [0.66, 1], [1.1, 1]);

  const opacities = [stepOpacity0, stepOpacity1, stepOpacity2];
  const scales = [stepScale0, stepScale1, stepScale2];

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Video Layer (Subtle) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            src="https://video.srv18.com/v/mp4/39725c490839145c5f5d57486a709377/1920"
          />
        </div>

        {/* Masked Image Layer */}
        <div className="absolute inset-0 z-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="absolute inset-0"
              style={{
                opacity: opacities[index],
                scale: scales[index],
                zIndex: index + 1
              }}
            >
              <div className="w-full h-full">
                <img 
                  src={step.image} 
                  alt="" 
                  className="w-full h-full object-cover filter brightness-[0.6] grayscale-[0.2]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Masked Typography Layer */}
        <div className="relative z-20 h-full w-full flex items-center justify-center pointer-events-none select-none">
          <div className="relative w-full text-center">
            {steps.map((step, index) => {
              const textY = useTransform(
                scrollYProgress,
                [index * 0.33, (index + 0.1) * 0.33, (index + 0.23) * 0.33, (index + 0.33) * 0.33],
                [100, 0, 0, -100]
              );
              const textOpacity = useTransform(
                scrollYProgress,
                [index * 0.33, (index + 0.1) * 0.33, (index + 0.23) * 0.33, (index + 0.33) * 0.33],
                [0, 1, 1, 0]
              );

              return (
                <motion.h1 
                  key={index}
                  className="absolute left-0 right-0 px-4 text-white mix-blend-difference font-display font-bold leading-none"
                  style={{
                    y: textY,
                    opacity: textOpacity,
                    fontSize: 'clamp(40px, 10vw, 120px)',
                  }}
                >
                  {step.text}
                </motion.h1>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
