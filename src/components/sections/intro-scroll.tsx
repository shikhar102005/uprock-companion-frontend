"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const slides = [
  {
    id: "lonely",
    title: "Feeling lonely in the queue?",
    description: "In a world that's always connected, why do we feel more isolated than ever?",
    image: "https://images.unsplash.com/photo-1532634896-26909d0d4b89?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "clarity",
    title: "Looking for clarity?",
    description: "Escape the noise and find the signal. A new way to interact with your digital life.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "resonance",
    title: "Seeking deep resonance?",
    description: "An experience designed to understand you, not just your commands.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070",
  }
];

interface SlideProps {
  slide: typeof slides[0];
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

function Slide({ slide, opacity, scale }: SlideProps) {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 w-full h-full"
    >
      <motion.div 
        style={{ scale }}
        className="relative w-full h-full"
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight"
        >
          {slide.title}
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl font-light"
        >
          {slide.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function IntroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate transforms for each slide at the top level
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.23, 0.33], [0, 1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.33], [1.1, 1]);

  const opacity2 = useTransform(scrollYProgress, [0.33, 0.43, 0.56, 0.66], [0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.33, 0.66], [1.1, 1]);

  const opacity3 = useTransform(scrollYProgress, [0.66, 0.76, 0.89, 1], [0, 1, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.66, 1], [1.1, 1]);

  const opacities = [opacity1, opacity2, opacity3];
  const scales = [scale1, scale2, scale3];

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <Slide 
            key={slide.id}
            slide={slide}
            opacity={opacities[index]}
            scale={scales[index]}
          />
        ))}
      </div>
    </section>
  );
}
