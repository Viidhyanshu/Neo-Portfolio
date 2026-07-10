"use client";

import React, { useState } from "react";

export default function Hero() {
  const pipeColors = ["text-[#8b5cf6]", "text-pink-500", "text-green-600", "text-orange-500"];
  const [pipeIndex, setPipeIndex] = useState(0);

  const textColors = ["text-black", "text-[#8b5cf6]", "text-pink-500", "text-green-600", "text-orange-500"];
  const [colorIndex, setColorIndex] = useState(0);

  const portfolioBgs = ["bg-yellow-400", "bg-[#fa5b8d]", "bg-[#8b5cf6]", "bg-orange-400", "bg-emerald-400"];
  const [portfolioBgIndex, setPortfolioBgIndex] = useState(0);

  const handlePipeClick = () => {
    setPipeIndex((prev) => (prev + 1) % pipeColors.length);
  };

  const handleLocClick = () => {
    setColorIndex((prev) => (prev + 1) % textColors.length);
  };

  const handlePortfolioClick = () => {
    setPortfolioBgIndex((prev) => (prev + 1) % portfolioBgs.length);
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center select-none w-[calc(100vw-3rem)] sm:w-[660px] md:w-[760px] py-12 md:py-0">
      
      {/* 1. Welcome to Box */}
      <div className="relative bg-white border-4 border-black px-[70px] sm:px-[101px] py-[21px] sm:py-[25px] shadow-[6px_6px_0px_#000000] z-10 w-fit">
        <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-black uppercase leading-none">
          Welcome To
        </h2>

        {/* Pink Code Bracket tag on top-right of Welcome box */}
        <div className="absolute top-[-25px] right-[-35px] hidden lg:flex w-14 h-11 bg-pink-400 border-3 border-black shadow-[3px_3px_0px_#000000] items-center justify-center text-black font-black text-sm rotate-[10deg] rounded-lg z-20">
          &lt;/&gt;
        </div>
      </div>

      {/* 2. My Portfolio Box */}
      <div 
        onClick={handlePortfolioClick}
        className={`border-4 border-black px-8 py-5 shadow-[6px_6px_0px_#000000] hover:shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] active:translate-x-[5px] active:translate-y-[5px] transition-all duration-100 mt-[-10px] z-20 w-full cursor-pointer ${portfolioBgs[portfolioBgIndex]}`}
      >
        <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl tracking-tight text-black uppercase leading-none">
          My Portfolio
        </h1>
      </div>

      {/* 3. Subheadings Details Tags */}
      <div className="flex flex-col items-center gap-4 mt-10 z-10">
        {/* Row 1 Tag */}
        <div 
          onClick={handlePipeClick}
          className="bg-white border-3 border-black px-8 sm:px-12 py-3 sm:py-3.5 shadow-[4px_4px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px] transition-all duration-100 text-black font-bold font-mono text-sm sm:text-base md:text-lg tracking-wide uppercase w-fit cursor-pointer"
        >
          Second Year Student <span className={`${pipeColors[pipeIndex]} mx-1 transition-colors duration-200`}>|</span> Developer <span className={`${pipeColors[pipeIndex]} mx-1 transition-colors duration-200`}>|</span> Problem Solver
        </div>

        {/* Row 2 Tag with outer layout shift wrapper to decouple hover translation */}
        <div className="w-fit lg:translate-x-[85px]">
          <div 
            onClick={handleLocClick}
            className={`bg-white border-3 border-black px-8 sm:px-8 py-3 sm:py-3.5 shadow-[4px_4px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px] transition-all duration-100 ${textColors[colorIndex]} font-bold font-mono text-sm sm:text-base md:text-lg tracking-wider uppercase w-fit cursor-pointer`}
          >
            Manipal University Jaipur
          </div>
        </div>
      </div>

      {/* 4. Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8 lg:translate-x-[85px] z-10">
        {/* View Projects */}
        <button className="bg-[#8b5cf6] border-3 border-black px-6 py-3 shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all text-black font-mono font-black text-sm sm:text-base tracking-wider uppercase flex items-center gap-1 cursor-pointer">
          &gt;_ View Projects
        </button>

        {/* Get in Touch */}
        <button className="bg-white border-3 border-black px-6 py-3 shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all text-black font-mono font-black text-sm sm:text-base tracking-wider uppercase flex items-center gap-1 cursor-pointer">
          Get In Touch <span>&#x2197;</span>
        </button>
      </div>

      {/* 5. Desktop Accent Overlay Decorations (Visible on Widescreen) */}
    </div>
  );
}
