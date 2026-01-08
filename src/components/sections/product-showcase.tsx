"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const images = [
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/companion_front-15.png",
    title: "Design",
    subtitle: "Companion",
  },
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/gif_product-12.gif",
    title: "Interface",
    subtitle: "Real-time",
  },
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68e475cf-cf1f-4a70-a881-b091f6d84670-companion-uprock-pro/assets/images/evernote1_img-8.webp",
    title: "Support",
    subtitle: "Ecosystem",
  },
];

export function ProductShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "group relative h-[80vh] w-[90vw] lg:w-[70vw] overflow-hidden rounded-[40px] bg-secondary border border-border flex-shrink-0"
              )}
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized={image.url.endsWith(".gif")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 lg:p-12">
                <h2 className="text-white text-[48px] lg:text-[80px] font-display font-bold leading-none tracking-tighter">
                  {image.title}
                </h2>
                <h3 className="text-white/70 text-[24px] lg:text-[32px] font-display font-medium">
                  {image.subtitle}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
