"use client";

import React, { useState } from "react";

const BG_STRIP_COLORS = ["bg-[#8b5cf6]", "bg-emerald-400", "bg-[#fa5b8d]", "bg-yellow-400", "bg-orange-400"];

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();
  const [bgIdx, setBgIdx] = useState(0);

  return (
    <div className="relative w-full overflow-visible z-10">
      {/* ── Background strip at the bottom ── */}
      <div
        onClick={() => setBgIdx((prev) => (prev + 1) % BG_STRIP_COLORS.length)}
        className={`w-full py-6 flex items-center justify-center border-t-3 border-black ${BG_STRIP_COLORS[bgIdx]} relative overflow-visible cursor-pointer`}
        title="Click to cycle strip color!"
      >
        {/* Left Plus Decor */}
        <div className="absolute left-6 bottom-4 font-mono text-xl font-black text-black rotate-45 select-none pointer-events-none">
          +
        </div>

        {/* ── Copyright box in the middle ── */}
        <div className="bg-white border-3 border-black text-black font-mono font-bold text-[10px] sm:text-xs tracking-wider px-6 py-3.5 shadow-[4px_4px_0px_#000] relative hover:scale-105 transition-transform duration-100 select-none">
          © {currentYear} Vidhyanshu Kumar. All rights reserved.
        </div>

        {/* Right Step Accent shape */}
        <div className="absolute right-8 bottom-3 select-none pointer-events-none w-[90px] h-[80px] overflow-visible hidden sm:block">
          <svg width="90" height="80" viewBox="0 0 90 80">
            {/* Steps Shadow */}
            <path d="M 10 70 L 10 50 L 40 50 L 40 30 L 70 30 L 70 70 Z" fill="black" transform="translate(4, 4)" />
            {/* Steps Shape (Pink) */}
            <path d="M 10 70 L 10 50 L 40 50 L 40 30 L 70 30 L 70 70 Z" fill="#fa5b8d" stroke="black" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
