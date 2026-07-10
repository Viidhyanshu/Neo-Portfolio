"use client";

import React, { useState } from "react";

export default function WhoamiCard() {
  const roles = ["Developer", "Student", "Problem Solver", "Tech Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);

  const codeColors = ["text-pink-500", "text-[#8b5cf6]", "text-green-600", "text-orange-500"];
  const [colorIndex, setColorIndex] = useState(0);
  const [spinCircles, setSpinCircles] = useState(false);

  const cycleRole = () => {
    setRoleIndex((prev) => (prev + 1) % roles.length);
  };

  const handleCodeClick = () => {
    setColorIndex((prev) => (prev + 1) % codeColors.length);
    setSpinCircles(true);
    setTimeout(() => setSpinCircles(false), 600);
  };

  return (
    <div className="relative pt-[20px] pb-[10px] w-[calc(100vw-3rem)] sm:w-[280px] h-[260px] select-none">
      {/* 1. Terminal Console Window "$ whoami" */}
      <div 
        onClick={cycleRole}
        className="absolute top-0 left-0 w-48 border-3 border-black bg-[#8b5cf6] text-black shadow-[4px_4px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px] transition-all duration-100 font-mono p-3 z-10 flex flex-col justify-center cursor-pointer"
      >
        <div className="font-bold text-sm leading-none">$ whoami</div>
        <div className="font-bold text-sm leading-none mt-2">&gt; {roles[roleIndex]}</div>
      </div>

      {/* 2. Yellow build function window */}
      <div 
        onClick={handleCodeClick}
        className="absolute bottom-0 left-[20px] w-[170px] sm:w-[180px] border-3 border-black bg-white shadow-[4px_4px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px] transition-all duration-100 z-10 cursor-pointer"
      >
        {/* Yellow Header */}
        <div className="bg-yellow-400 border-b-3 border-black h-8 px-3 flex items-center gap-1">
          <div className={`w-2.5 h-2.5 rounded-full border-2 border-black bg-transparent transition-transform duration-500 ${spinCircles ? "rotate-[360deg] scale-110 bg-red-500" : ""}`} />
          <div className={`w-2.5 h-2.5 rounded-full border-2 border-black bg-transparent transition-transform duration-500 delay-75 ${spinCircles ? "rotate-[360deg] scale-110 bg-yellow-500" : ""}`} />
          <div className={`w-2.5 h-2.5 rounded-full border-2 border-black bg-transparent transition-transform duration-500 delay-150 ${spinCircles ? "rotate-[360deg] scale-110 bg-green-500" : ""}`} />
        </div>
        {/* Function Body */}
        <div className="p-3 font-mono text-[11px] sm:text-[12px] leading-relaxed text-black text-left">
          <div>
            function <span className="text-[#6366f1] font-bold">build()</span> &#123;
          </div>
          <div className="pl-4">ideas();</div>
          <div className="pl-4 font-bold transition-colors duration-200 className text-pink-500">
            <span className={codeColors[colorIndex]}>code();</span>
          </div>
          <div className="pl-4">repeat();</div>
          <div>&#125;</div>
        </div>
      </div>
    </div>
  );
}
