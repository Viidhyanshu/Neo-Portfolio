"use client";

import React from "react";

export default function LoadingDots() {
  return (
    <div className="flex items-center justify-center h-[130px]">
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-black animate-bounce"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </div>
    </div>
  );
}
