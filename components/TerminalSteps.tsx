import React from "react";

export default function TerminalSteps() {
  // Generate a triangular dot grid matrix dynamically
  const renderDotGrid = () => {
    const rows = 12;
    const dots = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < rows - r; c++) {
        dots.push(
          <div
            key={`${r}-${c}`}
            className="w-[2.5px] h-[2.5px] bg-black rounded-full absolute opacity-60"
            style={{
              top: `${r * 12}px`,
              left: `${c * 12}px`,
            }}
          />
        );
      }
    }
    return dots;
  };

  return (
    <div className="relative w-[320px] h-[320px] md:w-[360px] md:h-[360px] select-none">
      
      {/* 1. Terminal Window (Top-Left) */}
      <div className="absolute top-8 left-10 w-56 border-4 border-black bg-black shadow-[4px_4px_0px_#000000] font-mono z-20">
        {/* Purple Bar */}
        <div className="bg-[#8b5cf6] border-b-4 border-black h-8 px-3 flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 bg-[#F00000] rounded-full" />
          <div className="w-2.5 h-2.5 bg-[#FFEA00] rounded-full" />
          <div className="w-2.5 h-2.5 bg-[#008000] rounded-full border border-black fill-none" />
        </div>
        {/* Code Output */}
        <div className="p-3 text-[11px] leading-relaxed text-white">
          <div className="flex gap-2">
            <span className="text-zinc-500 font-bold">&gt;</span>
            <span>npm run dev</span>
          </div>
          <div className="flex gap-2 mt-1">
            <span className="text-zinc-500 font-bold">&gt;</span>
            <span className="text-yellow-300 font-bold">Building dreams...</span>
          </div>
        </div>
      </div>

      {/* 2. Triangular Dot Grid (Middle-Left) */}
      <div className="absolute top-[167px] left-[167px] w-[150px] h-[150px] z-0">
        {renderDotGrid()}
      </div>

      {/* 3. Steps staircase (Bottom-Right) */}
      <div className="absolute bottom-0 right-0 z-10">
        <svg viewBox="0 0 180 180" className="w-[180px] h-[180px] md:w-[200px] md:h-[200px]">
          {/* Shadow layer */}
          <path
            d="M 20 160 L 20 140 L 50 140 L 50 110 L 80 110 L 80 80 L 110 80 L 110 50 L 140 50 L 140 20 L 160 20 L 160 160 Z"
            fill="black"
            transform="translate(6, 6)"
          />
          {/* Main Purple Steps Layer */}
          <path
            d="M 20 160 L 20 140 L 50 140 L 50 110 L 80 110 L 80 80 L 110 80 L 110 50 L 140 50 L 140 20 L 160 20 L 160 160 Z"
            fill="#8b5cf6"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="miter"
          />
        </svg>
      </div>

      {/* 4. Floating Chevron ">" (Bottom-Center) */}
      <div className="absolute bottom-[40px] left-[100px] z-20 text-black text-3xl font-black rotate-12 scale-y-125">
        &gt;
      </div>

      {/* 5. Floating Plus "+" (Above Staircase) */}
      <div className="absolute top-[90px] right-[20px] md:right-[10px] z-20 text-black text-3xl font-black">
        +
      </div>
    </div>
  );
}
