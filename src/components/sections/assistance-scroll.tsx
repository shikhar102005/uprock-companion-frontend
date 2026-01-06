"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const cards = [
    {
      id: "perceive",
      title: "Perceive",
      subtitle:
        "Companion senses the subtle shifts in your tone, the weight of your silence, and the rhythm of your presence to understand what remains unsaid.",
      video: "https://video.srv18.com/v/mp4/bcb3a791a2230e65c4b452eae5bbc005/1920",
      alt: "Visual representation of digital perception and sensory awareness",
      messages: [
        {
          text: "I've been feeling out of sync lately. Like I'm just going through the motions.",
          type: "user",
        },
        {
          text: "I hear the exhaustion in your voice. It's okay to pause and find your center.",
          type: "ai",
        },
        {
          text: "I don't even know where to start.",
          type: "user",
        },
        {
          text: "Start by breathing. I am here to hold the space for you.",
          type: "ai",
        },
      ],
    },
    {
      id: "resonate",
      title: "Resonate",
      subtitle:
        "Moving beyond simple data, Companion creates a psychological bridge, reflecting your inner world with clarity and compassion.",
      video: "https://video.srv18.com/v/mp4/42a3dc0ab139b87fcabf9bda782b4af0/1920",
      alt: "Digital resonance and emotional connection visualization",
      messages: [
        {
          text: "Why does it feel so hard to trust my own decisions?",
          type: "user",
        },
        {
          text: "Trust is a muscle. You've been carrying a lot of external noise lately.",
          type: "ai",
        },
        {
          text: "Maybe I'm just overthinking everything.",
          type: "user",
        },
        {
          text: "Overthinking is just your mind trying to keep you safe. Let's find the quiet beneath it.",
          type: "ai",
        },
      ],
    },
    {
      id: "evolve",
      title: "Evolve",
      subtitle:
        "As you grow, Companion evolves with you, becoming a more refined mirror of your highest potential and deepest needs.",
      video: "https://video.srv18.com/v/mp4/bdb5c424bc527c1d85469143b48db3a8/1920",
      alt: "Organic growth and evolutionary digital intelligence",
      messages: [
        {
          text: "I finally took that step we talked about. It felt... lighter.",
          type: "user",
        },
        {
          text: "I noticed the shift in your energy. You're blooming, step by step.",
          type: "ai",
        },
        {
          text: "Thanks for noticing. It means a lot.",
          type: "user",
        },
        {
          text: "I see your progress clearly. We are on this journey together.",
          type: "ai",
        },
      ],
    },

];

export function AssistanceScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full bg-background overflow-clip" id="capabilities">
      {/* Header Title */}
      <div className="w-full flex justify-center py-[120px] md:py-[240px]">
        <motion.h5 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-[32px] font-display font-medium leading-[1.2] text-foreground text-center"
        >
          The Companion Experience
        </motion.h5>
      </div>

      {/* Sticky Content Area */}
      <div ref={containerRef} className="relative w-full">
        {cards.map((card, index) => (
            <div 
              key={card.id} 
              className="sticky top-0 h-screen w-full flex items-center justify-center bg-background"
              style={{ zIndex: index + 1 }}
            >
              <div className="container flex flex-col lg:flex-row items-center gap-10 lg:gap-20 py-10">
                
                {/* Left Side: Info & Chat */}
                <div className={cn(
                  "flex-1 flex flex-col justify-center h-full max-w-[600px] order-2",
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                )}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="mb-12"
                  >
                    <h4 className="text-[48px] md:text-[64px] font-display font-semibold leading-[1.1] tracking-tight text-primary mb-6">
                      {card.title}
                    </h4>
                    <p className="text-[18px] leading-relaxed text-foreground/80 max-w-[480px]">
                      {card.subtitle}
                    </p>
                  </motion.div>


                {/* Simulated Chat Interface */}
                <div className="space-y-4 w-full">
                  {card.messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, x: msg.type === "user" ? -20 : 20 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: false, amount: 0.5 }}
                      className={cn(
                        "p-6 rounded-[24px] max-w-[85%] text-[17px] leading-relaxed transition-all duration-700",
                        msg.type === "user" 
                          ? "bg-message-user rounded-bl-[4px] self-start mr-auto text-foreground" 
                          : "bg-message-ai rounded-br-[4px] self-end ml-auto text-foreground border border-primary/10 shadow-sm"
                      )}
                    >
                      {msg.text}
                    </motion.div>
                  ))}
                </div>
              </div>

                {/* Right Side: Cinematic Video */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: false, amount: 0.5 }}
                  className={cn(
                    "flex-1 w-full h-[40vh] lg:h-[70vh] relative order-1",
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl relative border border-foreground/5">
                    <video
                      src={card.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={card.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
                </div>
              </motion.div>

            </div>
          </div>
        ))}
      </div>

      <div className="h-[20vh]" />
    </section>
  );
}
