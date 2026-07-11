"use client";

import React, { useState } from "react";
import { PURPLE_SQUARE_COLORS, ABOUT_BOX_COLORS, YELLOW_CIRCLE_COLORS } from "./constants";

interface AboutHeaderProps {
  isVisible: boolean;
}

export default function AboutHeader({ isVisible }: AboutHeaderProps) {
  const [purpleSquareColorIdx, setPurpleSquareColorIdx] = useState(0);
  const [aboutBoxColorIdx, setAboutBoxColorIdx] = useState(0);
  const [yellowCircleColorIdx, setYellowCircleColorIdx] = useState(0);

  return (
    <div
      className={`w-full flex items-center justify-between gap-4 mb-16 select-none relative z-10 transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      {/* Left Decor: Dot matrix + Purple box */}
      <div className="hidden md:flex items-center gap-4">
        <div className="grid grid-cols-9 gap-2">
          {Array.from({ length: 45 }).map((_, i) => (
            <div key={i} className="w-[6px] h-[6px] bg-black rounded-full" />
          ))}
        </div>
        <div
          onClick={() => setPurpleSquareColorIdx((prev) => (prev + 1) % PURPLE_SQUARE_COLORS.length)}
          className={`w-[61px] h-[61px] ${PURPLE_SQUARE_COLORS[purpleSquareColorIdx]} border-3 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
          title="Click to change color!"
        />
      </div>

      {/* Center: Title box */}
      <div className="flex flex-col items-center mx-auto relative overflow-visible">
        {/* Sparkle Star Doodle (Yellow) */}
        <svg width="30" height="30" viewBox="0 0 30 30" className="absolute top-[-28px] left-[-30px] select-none pointer-events-none text-yellow-400 z-10">
          <path d="M 15 0 C 15 10, 10 15, 0 15 C 10 15, 15 20, 15 30 C 15 20, 20 15, 30 15 C 20 15, 15 10, 15 0 Z" fill="currentColor" stroke="black" strokeWidth="2.5" />
        </svg>

        {/* Curly Arrow Doodle (Pink) */}
        <svg width="45" height="40" viewBox="0 0 45 40" fill="none" stroke="black" strokeWidth="2.5" className="absolute bottom-[-15px] left-[-55px] select-none pointer-events-none text-[#fa5b8d] rotate-[-10deg] z-10">
          <path d="M 5 35 C 15 35, 15 15, 25 15 C 35 15, 38 25, 42 22" strokeLinecap="round" />
          <path d="M 37 15 L 43 22 L 35 27" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Scribble Spiral Doodle (Teal/Emerald) */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="black" strokeWidth="2.5" className="absolute top-[-32px] right-[-45px] select-none pointer-events-none text-emerald-400 z-10">
          <path d="M 10 25 C 5 20, 8 10, 18 10 C 28 10, 32 20, 25 28 C 18 36, 8 28, 15 20 C 22 12, 32 22, 28 30" strokeLinecap="round" />
        </svg>

        {/* Star Sparkle 2 Doodle (Orange) */}
        <svg width="24" height="24" viewBox="0 0 24 24" className="absolute bottom-[-12px] right-[-36px] select-none pointer-events-none text-orange-400 z-10">
          <path d="M 12 0 C 12 8, 8 12, 0 12 C 8 12, 12 16, 12 24 C 12 16, 16 12, 24 12 C 16 12, 12 8, 12 0 Z" fill="currentColor" stroke="black" strokeWidth="2.5" />
        </svg>

        <div
          onClick={() => setAboutBoxColorIdx((prev) => (prev + 1) % ABOUT_BOX_COLORS.length)}
          className={`relative ${ABOUT_BOX_COLORS[aboutBoxColorIdx]} border-4 border-black text-black px-12 py-[29px] shadow-[6px_6px_0px_#000000] font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-widest uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-100 select-none z-0`}
          title="Click to change color!"
        >
          ABOUT ME
        </div>
        <div className="w-32 h-2.5 bg-[#8b5cf6] border-2 border-black mt-3 shadow-[2px_2px_0px_#000000]" />
      </div>

      {/* Right Decor: Plus + Yellow Circle */}
      <div className="hidden md:flex items-center gap-4">
        <div className="text-black text-3xl font-black">+</div>
        <div
          onClick={() => setYellowCircleColorIdx((prev) => (prev + 1) % YELLOW_CIRCLE_COLORS.length)}
          className={`w-[73px] h-[73px] rounded-full ${YELLOW_CIRCLE_COLORS[yellowCircleColorIdx]} border-3 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
          title="Click to change color!"
        />
      </div>
    </div>
  );
}
