"use client";

import React, { useState } from "react";

export default function CommentCard() {
  const quotes = [
    `/*
Passionate about
building cool stuff
and solving real
world problems.
*/`,
    `/*
Always learning
new technologies,
exploring systems,
and clean code.
*/`,
    `/*
Creating bold UI,
rich aesthetics,
and premium user
experiences.
*/`
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  const cycleQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  // Generate rectangular dot grid dynamically
  const renderRectGrid = () => {
    const dots = [];
    const spacing = 14;
    // 5 rows, 12 columns
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 12; c++) {
        dots.push(
          <div
            key={`${r}-${c}`}
            className="w-[4.5px] h-[4.5px] bg-black rounded-full absolute opacity-90"
            style={{
              top: `${r * spacing}px`,
              left: `${c * spacing}px`,
            }}
          />
        );
      }
    }
    return dots;
  };

  return (
    <div className="relative pt-[95px] pb-[10px] w-[calc(100vw-3rem)] sm:w-[230px] select-none">
      
      {/* 1. Desktop Decorations (Around the Comment Card) */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Rectangular Dot Grid (Top-Right) */}
        <div className="absolute top-[10px] right-[10px] w-[160px] h-[65px]">
          {renderRectGrid()}
        </div>
      </div>

      {/* 2. Main Dashed Card (Snug Horizontal Rectangle) */}
      <div 
        onClick={cycleQuote}
        className="relative w-full bg-white border-3 border-dashed border-black shadow-[5px_5px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px] transition-all duration-100 z-10 cursor-pointer"
      >
        <pre className="pl-3 pr-1 py-4 font-mono text-[12px] sm:text-[13px] md:text-[13.5px] leading-relaxed text-black whitespace-pre text-left w-full">
          {quotes[quoteIndex]}
        </pre>
      </div>
    </div>
  );
}
