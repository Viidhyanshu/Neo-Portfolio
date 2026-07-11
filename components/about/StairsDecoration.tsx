"use client";

import React from "react";

export default function StairsDecoration() {
  return (
    <div className="absolute bottom-[-20px] right-[-120px] z-20 pointer-events-none select-none w-[210px] h-[190px] overflow-visible">
      {/* Dot Matrix just above the tallest step */}
      <div className="absolute top-[-36px] right-[20px] grid grid-cols-8 gap-1.5">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="w-[3.5px] h-[3.5px] bg-black rounded-full" />
        ))}
      </div>
      
      <svg
        width="210"
        height="190"
        viewBox="0 0 210 190"
        className="overflow-visible"
      >
        {/* Shadow */}
        <path
          d="M 10 180 L 10 145 L 55 145 L 55 110 L 100 110 L 100 75 L 145 75 L 145 40 L 190 40 L 190 180 Z"
          fill="black"
          transform="translate(6, 6)"
        />
        {/* Purple Steps Shape */}
        <path
          d="M 10 180 L 10 145 L 55 145 L 55 110 L 100 110 L 100 75 L 145 75 L 145 40 L 190 40 L 190 180 Z"
          fill="#8b5cf6"
          stroke="black"
          strokeWidth="4"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
}
