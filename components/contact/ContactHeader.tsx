"use client";

import React, { useState, useEffect } from "react";

interface ContactHeaderProps {
  isVisible: boolean;
}

const SQUARE_COLORS = ["bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-yellow-400", "bg-emerald-400", "bg-orange-400"];
const CIRCLE_COLORS = ["bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400", "bg-orange-400"];
const TITLE_COLORS  = ["bg-white", "bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400"];

const DOODLE_COLORS = [
  "text-[#8b5cf6]",
  "text-[#fa5b8d]",
  "text-yellow-400",
  "text-emerald-400",
  "text-orange-400"
];

interface HeaderDoodle {
  type: "cross" | "plus" | "triangle" | "circle" | "zigzag";
  style: React.CSSProperties;
  rotate?: string;
}

const HEADER_DOODLES: HeaderDoodle[] = [
  {
    type: "cross",
    style: { top: "-10px", left: "15%" },
    rotate: "rotate-12",
  },
  {
    type: "plus",
    style: { top: "-40px", left: "35%" },
    rotate: "rotate-45",
  },
  {
    type: "zigzag",
    style: { top: "-20px", left: "65%" },
  },
  {
    type: "circle",
    style: { top: "-5px", left: "80%" },
  },
  {
    type: "triangle",
    style: { top: "-40px", left: "92%" },
    rotate: "-rotate-12",
  },
];

const renderDoodleIcon = (type: string) => {
  switch (type) {
    case "cross":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case "plus":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-7 h-7">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case "zigzag":
      return (
        <svg width="40" height="15" viewBox="0 0 40 15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M 3 12 L 11 3 L 19 12 L 27 3 L 35 12" />
        </svg>
      );
    case "circle":
      return <div className="w-5 h-5 rounded-full border-3 border-black bg-white" />;
    case "triangle":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-7 h-7">
          <polygon points="12,3 2,21 22,21" strokeLinejoin="round" />
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
    Array.from({ length: HEADER_DOODLES.length }, () => 0)
  );

  useEffect(() => {
    setDoodleColorIndices(
      Array.from({ length: HEADER_DOODLES.length }, () => Math.floor(Math.random() * DOODLE_COLORS.length))
    );
  }, []);

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
