import React from "react";

export default function CodeWindow() {
  // Generate L-shaped dot matrix dynamically
  const renderLGrid = () => {
    const dots = [];
    const spacing = 15;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        // Left block (5 columns) OR bottom block (rows 5-7, columns 5-7)
        if (c < 5 || (r >= 5 && c >= 5)) {
          dots.push(
            <div
              key={`${r}-${c}`}
              className="w-[5px] h-[5px] bg-black rounded-full absolute opacity-70"
              style={{
                top: `${r * spacing}px`,
                left: `${c * spacing}px`,
              }}
            />
          );
        }
      }
    }
    return dots;
  };

  return (
    <div className="relative pt-[175px] w-[calc(100vw-3rem)] sm:w-[500px]">
      
      {/* 1. Desktop Decorations (Above the Code Editor) */}
      <div className="absolute top-0 left-0 w-full h-[150px] pointer-events-none select-none">
        
        {/* Plus Symbol "+" (Top-Left) */}
        <div className="absolute top-[5px] left-[150px] text-black text-3xl font-black">
          +
        </div>

        {/* Chevron Underscore ">_" (Top-Right) */}
        <div className="absolute top-[10px] left-[350px] text-black text-3xl font-black tracking-tighter">
          &gt;_
        </div>

        {/* Code Symbol "</>" (Middle-Left) */}
        <div className="absolute top-[45px] left-[110px] text-black text-5xl font-black">
          &lt;/&gt;
        </div>

        {/* L-Shaped Dot Grid (Middle-Left) */}
        <div className="absolute top-[50px] left-[10px] w-[120px] h-[120px]">
          {renderLGrid()}
        </div>

        {/* Blue TypeScript Badge "TS" (Bottom-Right) */}
        <div className="absolute top-[70px] left-[290px] w-14 h-14 bg-[#3178c6] border-[3.5px] border-black shadow-[4px_4px_0px_#000000] flex items-center justify-center font-sans font-black text-xl text-white">
          TS
        </div>
      </div>

      {/* 2. Main Code Editor Window */}
      <div className="w-full border-4 border-black bg-black shadow-[6px_6px_0px_#000000] font-mono select-none">
        {/* Pink Header Bar */}
        <div className="bg-[#fa5b8d] border-b-4 border-black h-10 px-4 flex items-center gap-2">
          <div className="w-3 h-3 bg-[#0000FF] rounded-full border border-black" />
          <div className="w-3 h-3 bg-black rounded-full border border-black" />
          <div className="w-3 h-3 bg-[#FFEA00] rounded-full border border-black" />
        </div>

        {/* Code Editor Body */}
        <div className="px-6 pt-4 pb-3 text-sm md:text-base leading-relaxed text-white">
          {/* Line 1 */}
          <div className="flex gap-4">
            <span className="text-zinc-600 select-none w-5 text-right">01</span>
            <div>
              <span className="text-[#c084fc] font-bold">const</span>{" "}
              <span className="text-white">developer</span> = &#123;
            </div>
          </div>

          {/* Line 2 */}
          <div className="flex gap-4">
            <span className="text-zinc-600 select-none w-5 text-right">02</span>
            <div className="pl-6">
              <span className="text-white">name:</span>{" "}
              <span className="text-yellow-300">"Vidhyanshu Kumar"</span>,
            </div>
          </div>

          {/* Line 3 */}
          <div className="flex gap-4">
            <span className="text-zinc-600 select-none w-5 text-right">03</span>
            <div className="pl-6">
              <span className="text-white">stack:</span> [
              <span className="text-yellow-300">"Full Stack"</span>,{" "}
              <span className="text-yellow-300">"DevOps"</span>,{" "}
              <span className="text-yellow-300">"Systems Programmer"</span>],
            </div>
          </div>

          {/* Line 4 */}
          <div className="flex gap-4">
            <span className="text-zinc-600 select-none w-5 text-right">04</span>
            <div className="pl-6">
              <span className="text-white">passion:</span>{" "}
              <span className="text-yellow-300">"Creating & Learning"</span>
            </div>
          </div>

          {/* Line 5 */}
          <div className="flex gap-4">
            <span className="text-zinc-600 select-none w-5 text-right"></span>
            <div className="pl-4">
              &#125;;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
