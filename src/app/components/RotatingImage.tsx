"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  { src: "/gri.png", alt: "Griselda Caffarel" },
  { src: "/logo.jpeg", alt: "Griselda Sommelier Logo" },
];

const INTERVAL_MS = 4000;
const FADE_MS = 800;

export default function RotatingImage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
        setFading(false);
      }, FADE_MS);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gold/40 shadow-[0_0_40px_rgba(114,47,55,0.3)]">
        <div className="relative w-full h-full">
          {images.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={160}
              height={160}
              className="absolute inset-0 object-cover w-full h-full transition-opacity"
              style={{
                opacity: i === activeIndex && !fading ? 1 : 0,
                transitionDuration: `${FADE_MS}ms`,
              }}
              priority={i === 0}
            />
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-wine px-5 py-1.5 rounded-full border border-gold/30 shadow-lg"
        style={{ padding: '0px 10px 2px 10px' }}>
        <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans font-medium whitespace-nowrap">
          Sommelier
        </span>
      </div>
    </div>
  );
}
