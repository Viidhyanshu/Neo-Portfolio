"use client";

import React, { useState } from "react";

interface ContactHeaderProps {
  isVisible: boolean;
}

const SQUARE_COLORS = ["bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-yellow-400", "bg-emerald-400", "bg-orange-400"];
const CIRCLE_COLORS = ["bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400", "bg-orange-400"];
const TITLE_COLORS  = ["bg-white", "bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400"];

const DOODLE_COLORS = [
  "text-[#fa5b8d]",
  "text-[#8b5cf6]",
  "text-yellow-500",
  "text-emerald-500",
  "text-orange-500",
  "text-blue-500",
];

const HEADER_DOODLES = [
  { type: "star", style: { top: "-10px", left: "10px" }, rotate: "rotate-[12deg]" },
  { type: "plus", style: { top: "68px", left: "95px" }, rotate: "rotate-[25deg]" },
  { type: "chevron", style: { top: "-25px", left: "34%" }, rotate: "rotate-[-90deg]" },
  { type: "plus", style: { top: "-20px", right: "34%" }, rotate: "rotate-[45deg]" },
  { type: "circle", style: { top: "25px", right: "120px" }, rotate: "rotate-[0deg]" },
  { type: "spiral", style: { bottom: "-45px", left: "48%" }, rotate: "rotate-[15deg]" },
];

const renderDoodleIcon = (type: string) => {
  switch (type) {
    case "star":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M 12 0 C 12 8, 8 12, 0 12 C 8 12, 12 16, 12 24 C 12 16, 16 12, 24 12 C 16 12, 12 8, 12 0 Z" stroke="black" strokeWidth="2" />
        </svg>
      );
    case "plus":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="4" y1="12" x2="20" y2="12" />
        </svg>
      );
    case "chevron":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 17 13 10 6 3" />
        </svg>
      );
    case "circle":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
          <circle cx="11" cy="11" r="8" stroke="black" strokeWidth="2" />
        </svg>
      );
    case "spiral":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M 6 18 C 2 14, 5 6, 12 6 C 19 6, 22 14, 17 20 C 12 25, 5 20, 10 14 C 15 8, 22 15, 19 20" />
        </svg>
      );
    default:
      return null;
  }
};

export default function ContactHeader({ isVisible }: ContactHeaderProps) {
  const [lSqIdx, setLSqIdx] = useState(0);
  const [rCircIdx, setRCircIdx] = useState(0);
  const [titleIdx, setTitleIdx] = useState(0);

  const [doodleColorIndices, setDoodleColorIndices] = useState<number[]>(() =>
    Array.from({ length: HEADER_DOODLES.length }, () => Math.floor(Math.random() * DOODLE_COLORS.length))
  );

  return (
    <div className="w-full relative select-none z-10 mb-10 overflow-visible">
      {/* ── Heading shape doodles ── */}
      {HEADER_DOODLES.map((doodle, idx) => (
        <div
          key={idx}
          style={doodle.style}
          onClick={() => {
            setDoodleColorIndices((prev) => {
              const updated = [...prev];
              updated[idx] = (updated[idx] + 1) % DOODLE_COLORS.length;
              return updated;
            });
          }}
          className={`absolute ${DOODLE_COLORS[doodleColorIndices[idx]]} ${
            doodle.rotate
          } cursor-pointer opacity-70 hover:opacity-100 hover:scale-125 hover:rotate-[15deg] active:scale-95 transition-all duration-100 z-10 select-none pointer-events-auto hidden lg:block`}
          title="Click to cycle color!"
        >
          {renderDoodleIcon(doodle.type)}
        </div>
      ))}

      {/* ── Background Decors scattered near heading ── */}
      {/* Left Decor: Dot matrix + Clickable Purple box */}
      <div className="absolute top-0 left-0 hidden lg:flex items-center gap-4 z-10">
        <div className="grid grid-cols-6 gap-1.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-[4.5px] h-[4.5px] bg-black rounded-full" />
          ))}
        </div>
        <div
          onClick={() => setLSqIdx((prev) => (prev + 1) % SQUARE_COLORS.length)}
          className={`w-12 h-12 ${SQUARE_COLORS[lSqIdx]} border-3 border-black shadow-[3.5px_3.5px_0px_#000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
          title="Click to cycle color!"
        />
      </div>

      {/* Right Decor: Big Yellow Circle + plus symbol */}
      <div className="absolute top-0 right-0 hidden lg:flex items-center gap-6 z-10">
        <div className="font-mono text-2xl font-black text-black rotate-12">+</div>
        <div
          onClick={() => setRCircIdx((prev) => (prev + 1) % CIRCLE_COLORS.length)}
          className={`w-16 h-16 rounded-full ${CIRCLE_COLORS[rCircIdx]} border-3 border-black shadow-[4px_4px_0px_#000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
          title="Click to cycle color!"
        />
      </div>

      {/* scattered plus decors */}
      <div className="absolute top-16 left-12 font-mono text-xl font-bold opacity-60">+</div>
      <div className="absolute top-8 right-24 font-mono text-xl font-bold opacity-60">+</div>

      {/* ── Main title box ── */}
      <div className="flex flex-col items-center mx-auto relative max-w-lg">
        <div
          onClick={() => setTitleIdx((prev) => (prev + 1) % TITLE_COLORS.length)}
          className={`relative ${TITLE_COLORS[titleIdx]} border-4 border-black text-black px-12 py-5
            shadow-[7px_7px_0px_#000000] font-sans font-black text-3xl sm:text-4xl md:text-5xl
            tracking-widest uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98]
            transition-all duration-100 z-10 text-center`}
          title="Click to cycle color!"
        >
          GET IN TOUCH
        </div>

        {/* Small horizontal shadow line below title */}
        <div className="w-40 h-2 bg-[#8b5cf6] border-2 border-black mt-4 shadow-[2px_2px_0px_#000]" />
      </div>

      {/* ── Subtitle card ── */}
      <div
        className={`w-full max-w-3xl mx-auto mt-12 bg-white border-3 border-black shadow-[6px_6px_0px_#000] p-6 text-center z-10 transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        <p className="font-mono text-sm sm:text-base font-extrabold text-black leading-relaxed">
          I'm always open to discussing new projects, creative ideas,
          <br className="hidden sm:inline" />
          or opportunities to be part of your visions.
        </p>
      </div>
    </div>
  );
}
