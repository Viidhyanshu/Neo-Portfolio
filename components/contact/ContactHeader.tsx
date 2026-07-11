"use client";

import React, { useState } from "react";

interface ContactHeaderProps {
  isVisible: boolean;
}

const SQUARE_COLORS = ["bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-yellow-400", "bg-emerald-400", "bg-orange-400"];
const CIRCLE_COLORS = ["bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400", "bg-orange-400"];
const TITLE_COLORS  = ["bg-white", "bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400"];

export default function ContactHeader({ isVisible }: ContactHeaderProps) {
  const [lSqIdx, setLSqIdx] = useState(0);
  const [rCircIdx, setRCircIdx] = useState(0);
  const [titleIdx, setTitleIdx] = useState(0);

  return (
    <div className="w-full relative select-none z-10 mb-10 overflow-visible">
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
