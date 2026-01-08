"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

  // Opacity for each image based on scroll
  const image1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const image2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const image3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);

  // Scale for each image
  const image1Scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const image2Scale = useTransform(scrollYProgress, [0.3, 0.7], [1.1, 1]);
  const image3Scale = useTransform(scrollYProgress, [0.7, 1], [1.1, 1]);

  // Text animations
  const text1Y = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, -100]);
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

  const text2Y = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [100, 0, 0, -100]);
  const text2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);

  const text3Y = useTransform(scrollYProgress, [0.7, 0.8, 0.95], [100, 0, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.95], [0, 1, 1]);

  const opacities = [image1Opacity, image2Opacity, image3Opacity];
  const scales = [image1Scale, image2Scale, image3Scale];
  const textYs = [text1Y, text2Y, text3Y];
  const textOpacities = [text1Opacity, text2Opacity, text3Opacity];

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Background Video Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
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
        <div className="absolute inset-0">
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
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={step.image} 
                  alt="" 
                  className="w-full h-full object-cover filter brightness-90 grayscale-[0.2]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Masked Typography Layer */}
        <div className="relative z-20 w-full h-full flex items-center justify-center text-center pointer-events-none select-none">
          {steps.map((step, index) => (
            <motion.h1 
              key={index}
              className="absolute w-full px-4 text-white mix-blend-difference font-display font-bold leading-none"
              style={{
                fontSize: 'clamp(40px, 10vw, 120px)',
                y: textYs[index],
                opacity: textOpacities[index],
              }}
            >
              {step.text}
            </motion.h1>
          ))}
        </div>
      </div>
    </div>
  );
}

