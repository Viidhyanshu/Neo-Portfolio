import React from "react";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center select-none w-[calc(100vw-3rem)] sm:w-[580px] md:w-[660px] py-12 md:py-0">
      
      {/* 1. Welcome to Box */}
      <div className="bg-white border-4 border-black px-[70px] sm:px-[101px] py-[21px] sm:py-[25px] shadow-[6px_6px_0px_#000000] z-10 w-fit">
        <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-black uppercase leading-none">
          Welcome To
        </h2>
      </div>

      {/* 2. My Portfolio Box */}
      <div className="bg-yellow-400 border-4 border-black px-8 py-5 shadow-[6px_6px_0px_#000000] mt-[-10px] z-20 w-full">
        <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl tracking-tight text-black uppercase leading-none">
          My Portfolio
        </h1>
      </div>

      {/* 3. Subheadings Details Tags */}
      <div className="flex flex-col items-center gap-3 mt-6 z-10">
        {/* Row 1 Tag */}
        <div className="bg-white border-3 border-black px-6 sm:px-8 py-2.5 shadow-[4px_4px_0px_#000000] text-black font-bold font-mono text-xs sm:text-sm tracking-wide uppercase w-fit">
          Second Year Student <span className="text-[#8b5cf6] mx-1">|</span> Developer <span className="text-[#8b5cf6] mx-1">|</span> Problem Solver
        </div>

        {/* Row 2 Tag */}
        <div className="bg-white border-3 border-black px-6 sm:px-8 py-2.5 shadow-[4px_4px_0px_#000000] text-black font-bold font-mono text-xs sm:text-sm tracking-wider uppercase w-fit">
          Manipal University Jaipur
        </div>
      </div>

      {/* 4. Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8 z-10">
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
      
      {/* Pink Code Bracket tag on top-right */}
      <div className="absolute top-[-25px] right-[-45px] hidden lg:flex w-14 h-11 bg-pink-400 border-3 border-black shadow-[3px_3px_0px_#000000] items-center justify-center text-black font-black text-sm rotate-[10deg] rounded-lg z-0">
        &lt;/&gt;
      </div>
    </div>
  );
}
