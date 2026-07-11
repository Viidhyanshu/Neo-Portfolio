"use client";

import React, { useState } from "react";
import { DOODLE_COLORS, DOODLE_DATA } from "./constants";
import { renderDoodleIcon } from "./renderDoodleIcon";

interface AboutDoodlesProps {
  isVisible: boolean;
}

export default function AboutDoodles({ isVisible }: AboutDoodlesProps) {
  const [doodleColorIndices, setDoodleColorIndices] = useState<number[]>(() =>
    Array(DOODLE_DATA.length).fill(0)
  );

  return (
    <>
      {DOODLE_DATA.map((doodle, idx) => (
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
          } cursor-pointer opacity-70 hover:opacity-100 hover:scale-125 hover:rotate-[15deg] active:scale-95 transition-all duration-100 z-0 select-none hidden md:block ${
            isVisible ? "opacity-70 scale-100" : "opacity-0 scale-50"
          } transition-all duration-700 ease-out`}
          title="Click to change color!"
        >
          {renderDoodleIcon(doodle.type)}
        </div>
      ))}
    </>
  );
}
