"use client";

import React, { useState } from "react";
import { NAME_HIGHLIGHT_COLORS, L_SHAPE_COLORS } from "./constants";

interface AboutBioProps {
  isVisible: boolean;
}

export default function AboutBio({ isVisible }: AboutBioProps) {
  const [nameHighlightColorIdx, setNameHighlightColorIdx] = useState(0);
  const [lShapeColorIdx, setLShapeColorIdx] = useState(0);

  return (
    <div
      className={`relative lg:col-span-7 bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000] text-black text-left font-mono leading-relaxed flex flex-col justify-center z-10 overflow-visible transition-all duration-700 delay-100 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      {/* L-shaped Pink Accent under the bottom-left corner */}
      <svg
        width="240"
        height="200"
        viewBox="0 0 240 200"
        onClick={() => setLShapeColorIdx((prev) => (prev + 1) % L_SHAPE_COLORS.length)}
        className="absolute bottom-[-32px] left-[-32px] z-[-1] pointer-events-auto cursor-pointer select-none group"
      >
        <title>Click to change color!</title>
        {/* Shadow */}
        <path d="M 6 6 L 46 6 L 46 166 L 246 166 L 246 206 L 6 206 Z" fill="black" />
        {/* Pink Shape */}
        <path
          d="M 0 0 L 40 0 L 40 160 L 240 160 L 240 200 L 0 200 Z"
          fill={L_SHAPE_COLORS[lShapeColorIdx]}
          stroke="black"
          strokeWidth="4"
          strokeLinejoin="miter"
          className="group-hover:opacity-90 active:opacity-100 transition-opacity"
        />
      </svg>

      <p className="mb-6 text-sm sm:text-base md:text-lg">
        Hello! I'm{" "}
        <span
          onClick={() => setNameHighlightColorIdx((prev) => (prev + 1) % NAME_HIGHLIGHT_COLORS.length)}
          className={`cursor-pointer ${NAME_HIGHLIGHT_COLORS[nameHighlightColorIdx]} px-1.5 py-0.5 text-black font-extrabold rounded-sm select-all hover:opacity-90 active:scale-95 transition-all duration-100`}
          title="Click to change color!"
        >
          Vidhyanshu Kumar
        </span>
        , a second-year student at Manipal University Jaipur with a passion for software development and problem-solving.
      </p>
      <p className="mb-6 text-sm sm:text-base md:text-lg">
        I enjoy building innovative projects and solving complex challenges. My journey in tech has led me to explore various technologies and work on exciting projects that combine creativity with technical skills.
      </p>
      <p className="text-sm sm:text-base md:text-lg">
        When I'm not coding, I'm constantly learning new technologies and contributing to open-source projects. I believe in continuous learning and pushing the boundaries of what's possible.
      </p>
    </div>
  );
}
