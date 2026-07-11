"use client";

import React, { useState } from "react";
import type { Skill } from "./types";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white border-3 border-black shadow-[4px_4px_0px_#000000]
        w-[72px] h-[72px] sm:w-[80px] sm:h-[80px]
        flex flex-col items-center justify-center gap-1
        cursor-pointer select-none
        transition-all duration-150 ease-out
        ${isHovered
          ? "shadow-[6px_6px_0px_#000000] -translate-x-0.5 -translate-y-0.5 scale-110 z-20"
          : "hover:shadow-[5px_5px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px]"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Colored accent bar on top */}
      <div
        className={`absolute top-0 left-0 right-0 h-[4px] ${skill.accent} transition-all duration-150
          ${isHovered ? "h-[6px]" : ""}`}
      />

      {/* Icon */}
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
        loading="lazy"
      />

      {/* Name tooltip on hover */}
      {isHovered && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
          <div className="bg-black text-white font-mono text-[10px] font-bold px-2 py-1 border border-black shadow-[2px_2px_0px_#333]">
            {skill.name}
          </div>
        </div>
      )}
    </div>
  );
}
