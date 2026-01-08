"use client";

import React, { useEffect, useState, useRef } from 'react';

export function Preloader() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 1500);
          return prev;
        }
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(timer);
  }, [steps.length]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-1000 ease-in-out ${!isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          src="https://video.srv18.com/v/mp4/39725c490839145c5f5d57486a709377/1920"
        />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        
        {/* Masked Image Layer */}
        <div className="absolute inset-0 flex items-center justify-center">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`absolute transition-all duration-1000 ease-in-out ${activeStep === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              style={{
                width: '100%',
                maxWidth: '800px',
                height: '70vh',
                zIndex: index + 1
              }}
            >
              <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={step.image} 
                  alt="" 
                  className="w-full h-full object-cover filter brightness-75 grayscale-[0.3]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Masked Typography Layer */}
        <div className="relative z-10 w-full text-center pointer-events-none select-none">
          <div className="relative h-[200px] flex items-center justify-center overflow-hidden">
            {steps.map((step, index) => (
              <h1 
                key={index}
                className={`absolute w-full px-4 text-white mix-blend-difference font-display font-bold leading-none transition-all duration-1000 ease-in-out
                  ${activeStep === index ? 'translate-y-0 opacity-100' : 
                    activeStep > index ? '-translate-y-full opacity-0' : 'translate-y-full opacity-0'}
                `}
                style={{
                  fontSize: 'clamp(40px, 10vw, 120px)',
                }}
              >
                {step.text}
              </h1>
            ))}
          </div>
        </div>

        {/* Framing Masks */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[10vh] bg-background z-[5]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-background z-[5]"></div>
            <div className="absolute top-0 left-0 w-[5vw] h-full bg-background z-[5]"></div>
            <div className="absolute top-0 right-0 w-[5vw] h-full bg-background z-[5]"></div>
        </div>
      </div>
    </div>
  );
}
