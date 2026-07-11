"use client";

import React from "react";

interface ErrorStateProps {
  href: string;
  label: string;
}

export default function ErrorState({ href, label }: ErrorStateProps) {
  return (
    <div className="flex items-center justify-center h-[120px] border-3 border-dashed border-black">
      <div className="text-center font-mono">
        <div className="text-2xl font-black mb-1">⚠</div>
        <div className="text-sm font-bold text-black">Could not load data.</div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs underline decoration-2"
        >
          {label} ↗
        </a>
      </div>
    </div>
  );
}
