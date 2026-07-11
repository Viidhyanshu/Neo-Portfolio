"use client";

import React, { useState } from "react";
import { ACCENT_COLORS, SUBTITLE_COLORS, SQUARE_COLORS } from "./constants";

interface SkillsHeaderProps {
  isVisible: boolean;
}

export default function SkillsHeader({ isVisible }: SkillsHeaderProps) {
  const [accentIdx, setAccentIdx] = useState(0);
  const [subtitleIdx, setSubtitleIdx] = useState(0);
  const [lSqIdx, setLSqIdx] = useState(0);
  const [rSqIdx, setRSqIdx] = useState(0);
  const [circIdx, setCircIdx] = useState(0);
  const [triIdx, setTriIdx] = useState(0);
  const [starIdx, setStarIdx] = useState(0);

  return (
    <div
      className={`w-full flex items-center justify-between gap-4 mb-14 select-none relative z-10
        transition-all duration-700 ease-out transform
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
    >
      {/* Left decor */}
      <div className="hidden md:flex items-center gap-4">
        {/* Square Box */}
        <div
          onClick={() => setLSqIdx((p) => (p + 1) % SQUARE_COLORS.length)}
          className={`w-[60px] h-[60px] ${SQUARE_COLORS[lSqIdx]} border-4 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
          title="Click to change color!"
        />
        {/* Dot Matrix */}
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-[5.5px] h-[5.5px] bg-black rounded-full" />
          ))}
        </div>
        {/* Circle Shape */}
        <div
          onClick={() => setCircIdx((p) => (p + 1) % ACCENT_COLORS.length)}
          className={`w-[45px] h-[45px] rounded-full ${ACCENT_COLORS[circIdx]} border-3 border-black shadow-[3px_3px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100 ml-2`}
          title="Click to change color!"
        />
        {/* Triangle Shape */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          onClick={() => setTriIdx((p) => (p + 1) % SQUARE_COLORS.length)}
          className={`cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100 ${SQUARE_COLORS[triIdx]} text-black ml-2`}
        >
          <title>Click to change color!</title>
          <polygon points="12,3 21,20 3,20" fill="currentColor" stroke="black" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Center title */}
      <div className="flex flex-col items-center mx-auto relative overflow-visible">
        <div
          onClick={() => setAccentIdx((p) => (p + 1) % ACCENT_COLORS.length)}
          className={`relative ${ACCENT_COLORS[accentIdx]} border-4 border-black text-black px-10 py-5
            shadow-[6px_6px_0px_#000000] font-sans font-black text-3xl sm:text-4xl md:text-5xl
            tracking-widest uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98]
            transition-all duration-100 z-10`}
          title="Click to change color!"
        >
          MY SKILLS
        </div>
        <div
          onClick={() => setSubtitleIdx((p) => (p + 1) % SUBTITLE_COLORS.length)}
          className={`mt-[-8px] relative ${SUBTITLE_COLORS[subtitleIdx]} border-3 border-black text-black
            px-4 py-2.5 shadow-[4px_4px_0px_#000000] font-mono font-bold text-[10px] sm:text-xs
            tracking-wider uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98]
            transition-all duration-100 z-20 text-center`}
          title="Click to change color!"
        >
          TECHNOLOGIES & TOOLS I WORK WITH
        </div>
      </div>

      {/* Right decor */}
      <div className="hidden md:flex items-center gap-4">
        {/* Sparkle Star */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          onClick={() => setStarIdx((p) => (p + 1) % ACCENT_COLORS.length)}
          className={`cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100 ${ACCENT_COLORS[starIdx]} text-black mr-2`}
        >
          <title>Click to change color!</title>
          <path d="M 12 0 C 12 8, 8 12, 0 12 C 8 12, 12 16, 12 24 C 12 16, 16 12, 24 12 C 16 12, 12 8, 12 0 Z" fill="currentColor" stroke="black" strokeWidth="2" />
        </svg>
        {/* Plus */}
        <div className="text-black text-3xl font-black mr-2">+</div>
        {/* Zigzag */}
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" className="mr-2">
          <path d="M 4 15 L 14 5 L 24 15 L 34 5 L 44 15 L 54 5" />
        </svg>
        {/* Square Box */}
        <div
          onClick={() => setRSqIdx((p) => (p + 1) % SQUARE_COLORS.length)}
          className={`w-[60px] h-[60px] ${SQUARE_COLORS[rSqIdx]} border-4 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
          title="Click to change color!"
        />
      </div>
    </div>
  );
}
