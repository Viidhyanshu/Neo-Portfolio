"use client";

import React, { useState } from "react";

export default function HomeMobile() {
  // 1. Whoami State
  const roles = ["Developer", "Student", "Problem Solver", "Tech Enthusiast"];
  const [roleIdx, setRoleIdx] = useState(0);

  // 2. Banner State
  const portfolioBgs = ["bg-yellow-400", "bg-[#fa5b8d]", "bg-[#8b5cf6]", "bg-orange-400", "bg-emerald-400"];
  const [bgIdx, setBgIdx] = useState(0);

  // 3. Build code color state
  const codeColors = ["text-pink-500", "text-[#8b5cf6]", "text-green-600", "text-orange-500"];
  const [codeColIdx, setCodeColIdx] = useState(0);

  // 4. Comment Quotes State
  const quotes = [
    `/*\nPassionate about\nbuilding cool stuff\nand solving real\nworld problems.\n*/`,
    `/*\nAlways learning\nnew technologies,\nexploring systems,\nand clean code.\n*/`,
    `/*\nCreating bold UI,\nrich aesthetics,\nand premium user\nexperiences.\n*/`
  ];
  const [commentIdx, setCommentIdx] = useState(0);

  // 5. npm run dev Terminal State
  const compilerLogs = [
    "Building dreams...",
    "Compiling assets...",
    "Ready in 42ms!",
    "✓ Built successfully!"
  ];
  const [logIdx, setLogIdx] = useState(0);

  // Helper for dot matrix
  const renderMiniGrid = () => {
    const dots = [];
    const spacing = 12;
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 6; c++) {
        dots.push(
          <div
            key={`${r}-${c}`}
            className="w-[4px] h-[4px] bg-black rounded-full absolute opacity-90"
            style={{
              top: `${r * spacing}px`,
              left: `${c * spacing}px`,
            }}
          />
        );
      }
    }
    return dots;
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 pb-12">
      {/* ROW 1: Whoami Terminal + JS Badge + Dot Grid */}
      <div className="w-full flex items-center justify-between gap-4 mt-4">
        {/* Left: Whoami Card */}
        <div 
          onClick={() => setRoleIdx((prev) => (prev + 1) % roles.length)}
          className="w-48 border-3 border-black bg-[#8b5cf6] text-black shadow-[4px_4px_0px_#000000] font-mono p-3 flex flex-col justify-center cursor-pointer select-none"
        >
          <div className="font-bold text-sm leading-none">$ whoami</div>
          <div className="font-bold text-sm leading-none mt-2">&gt; {roles[roleIdx]}</div>
        </div>

        {/* Right Wrapper: JS Badge + Dot Grid */}
        <div className="flex items-center gap-4">
          {/* JS Badge */}
          <div className="w-12 h-12 bg-yellow-400 border-3 border-black shadow-[3px_3px_0px_#000000] flex items-center justify-center font-sans font-black text-lg text-black select-none">
            JS
          </div>
          {/* Dot Grid */}
          <div className="w-[72px] h-[55px] relative overflow-visible select-none">
            {renderMiniGrid()}
          </div>
        </div>
      </div>

      {/* ROW 2: "WELCOME TO" */}
      <div className="bg-white border-3 border-black px-12 py-3 shadow-[4px_4px_0px_#000000] w-fit font-sans font-black text-xl tracking-wider text-black uppercase leading-none select-none">
        Welcome To
      </div>

      {/* ROW 3: "MY PORTFOLIO" Banner with TS and </> badges */}
      <div className="relative w-full px-2 py-3">
        {/* TS Badge floating bottom-left */}
        <div className="absolute bottom-[-10px] left-[-3px] z-30 w-11 h-11 bg-[#3178c6] border-3 border-black shadow-[3px_3px_0px_#000000] flex items-center justify-center font-sans font-black text-sm text-white select-none">
          TS
        </div>
        
        {/* Code Badge </> floating top-right */}
        <div className="absolute top-[-10px] right-[-3px] z-30 w-12 h-10 bg-pink-400 border-3 border-black shadow-[3px_3px_0px_#000000] flex items-center justify-center text-black font-black text-xs rotate-[10deg] rounded-lg select-none">
          &lt;/&gt;
        </div>

        {/* Main Yellow Banner */}
        <div 
          onClick={() => setBgIdx((prev) => (prev + 1) % portfolioBgs.length)}
          className={`border-4 border-black py-6 px-4 shadow-[6px_6px_0px_#000000] w-full text-center z-20 select-none cursor-pointer ${portfolioBgs[bgIdx]}`}
        >
          <h1 className="font-sans font-black text-4xl sm:text-5xl tracking-tight text-black uppercase leading-none">
            My Portfolio
          </h1>
        </div>
      </div>

      {/* ROW 4: Tag 1 ("SECOND YEAR STUDENT | DEVELOPER | PROBLEM SOLVER") */}
      <div className="bg-white border-3 border-black w-full px-4 py-3 shadow-[4px_4px_0px_#000000] text-black font-bold font-mono text-[10px] sm:text-xs tracking-wider uppercase text-center select-none">
        Second Year Student <span className="text-[#8b5cf6] mx-1">|</span> Developer <span className="text-[#8b5cf6] mx-1">|</span> Problem Solver
      </div>

      {/* ROW 5: Tag 2 ("MANIPAL UNIVERSITY JAIPUR") */}
      <div className="bg-white border-3 border-black w-full px-4 py-3 shadow-[4px_4px_0px_#000000] text-black font-bold font-mono text-[10px] sm:text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 select-none">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 text-black flex-shrink-0">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>Manipal University Jaipur</span>
      </div>

      {/* ROW 6: View Projects Button */}
      <a
        href="#projects"
        className="bg-[#8b5cf6] border-3 border-black py-3 shadow-[4px_4px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] transition-all text-black font-mono font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer w-full select-none animate-none"
      >
        &gt;_ View Projects
      </a>

      {/* ROW 7: Get In Touch Button */}
      <a
        href="#contact"
        className="bg-white border-3 border-black py-3 shadow-[4px_4px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] transition-all text-black font-mono font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer w-full select-none"
      >
        Get In Touch <span>&#x2197;</span>
      </a>

      {/* ROW 8: CodeWindow */}
      <div className="w-full border-3 border-black bg-black shadow-[5px_5px_0px_#000000] font-mono select-none">
        <div className="bg-[#fa5b8d] border-b-3 border-black h-9 px-3 flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 bg-[#0000FF] rounded-full border border-black" />
          <div className="w-2.5 h-2.5 bg-black rounded-full border border-black" />
          <div className="w-2.5 h-2.5 bg-[#FFEA00] rounded-full border border-black" />
        </div>

        <div className="p-4 text-[10px] sm:text-xs leading-relaxed text-white text-left">
          <div className="flex gap-2">
            <span className="text-zinc-600 select-none w-4 text-right">01</span>
            <div>
              <span className="text-[#c084fc] font-bold">const</span>{" "}
              <span className="text-white">developer</span> = &#123;
            </div>
          </div>

          <div className="flex gap-2">
            <span className="text-zinc-600 select-none w-4 text-right">02</span>
            <div className="pl-4">
              <span className="text-white">name:</span>{" "}
              <span className="text-yellow-300">"Vidhyanshu Kumar"</span>,
            </div>
          </div>

          <div className="flex gap-2">
            <span className="text-zinc-600 select-none w-4 text-right">03</span>
            <div className="pl-4">
              <span className="text-white">stack:</span> [
              <span className="text-yellow-300">"Full Stack"</span>,{" "}
              <span className="text-yellow-300">"DevOps"</span>,{" "}
              <span className="text-yellow-300">"Systems Programmer"</span>],
            </div>
          </div>

          <div className="flex gap-2">
            <span className="text-zinc-600 select-none w-4 text-right">04</span>
            <div className="pl-4">
              <span className="text-white">passion:</span>{" "}
              <span className="text-yellow-300">"Creating & Learning"</span>
            </div>
          </div>

          <div className="flex gap-2">
            <span className="text-zinc-600 select-none w-4 text-right"></span>
            <div className="pl-3">
              &#125;;
            </div>
          </div>
        </div>
      </div>

      {/* ROW 8.5: npm run dev Terminal */}
      <div 
        onClick={() => setLogIdx((prev) => (prev + 1) % compilerLogs.length)}
        className="w-full border-3 border-black bg-black shadow-[4px_4px_0px_#000000] font-mono select-none cursor-pointer"
      >
        <div className="bg-[#8b5cf6] border-b-3 border-black h-9 px-3 flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 bg-[#F00000] rounded-full" />
          <div className="w-2.5 h-2.5 bg-[#FFEA00] rounded-full" />
          <div className="w-2.5 h-2.5 bg-[#008000] rounded-full border border-black" />
        </div>
        <div className="p-3 text-[11px] leading-relaxed text-white text-left">
          <div className="flex gap-2">
            <span className="text-zinc-500 font-bold">&gt;</span>
            <span>npm run dev</span>
          </div>
          <div className="flex gap-2 mt-1">
            <span className="text-zinc-500 font-bold">&gt;</span>
            <span className="text-yellow-300 font-bold min-h-[16px] block">{compilerLogs[logIdx]}</span>
          </div>
        </div>
      </div>

      {/* ROW 9: Small Code Window + CommentCard (Side-by-side) */}
      <div className="w-full flex items-stretch justify-between gap-4">
        {/* Left: Small Code Window */}
        <div 
          onClick={() => setCodeColIdx((prev) => (prev + 1) % codeColors.length)}
          className="flex-1 border-3 border-black bg-white shadow-[4px_4px_0px_#000000] font-mono select-none flex flex-col cursor-pointer"
        >
          <div className="bg-yellow-400 border-b-3 border-black h-8 px-2 flex items-center gap-1">
            <div className="w-2 h-2 rounded-full border border-black bg-transparent" />
            <div className="w-2 h-2 rounded-full border border-black bg-transparent" />
            <div className="w-2 h-2 rounded-full border border-black bg-transparent" />
          </div>
          <div className="p-2.5 text-[9px] sm:text-[10px] leading-relaxed text-black text-left flex-grow flex flex-col justify-center">
            <div>
              function <span className="text-[#6366f1] font-bold">build()</span> &#123;
            </div>
            <div className="pl-3">ideas();</div>
            <div className={`pl-3 font-bold transition-colors duration-200 ${codeColors[codeColIdx]}`}>code();</div>
            <div className="pl-3">repeat();</div>
            <div>&#125;</div>
          </div>
        </div>

        {/* Right: Comment Card */}
        <div 
          onClick={() => setCommentIdx((prev) => (prev + 1) % quotes.length)}
          className="flex-1 bg-white border-3 border-dashed border-black shadow-[4px_4px_0px_#000000] font-mono select-none flex flex-col cursor-pointer"
        >
          <pre className="p-3 font-mono text-[9px] sm:text-[10px] leading-relaxed text-black whitespace-pre-wrap text-left flex-grow flex flex-col justify-center">
            {quotes[commentIdx]}
          </pre>
        </div>
      </div>

      {/* ROW 10: Dot Matrix + Code Icon + Purple Stairs */}
      <div className="w-full flex items-center justify-between gap-4 mt-2">
        {/* Left: Dot Grid */}
        <div className="w-[72px] h-[55px] relative overflow-visible select-none">
          {renderMiniGrid()}
        </div>
        
        {/* Center: Code Icon */}
        <div className="font-sans font-black text-2xl text-black select-none">
          &lt;/&gt;
        </div>

        {/* Right: Stairs Accent */}
        <div className="w-[60px] h-[50px] relative overflow-visible select-none">
          <svg width="60" height="50" viewBox="0 0 60 50" fill="none" stroke="black" strokeWidth="3" className="absolute bottom-0 right-0">
            <path d="M 10 40 L 10 25 L 25 25 L 25 10 L 40 10 L 40 40 Z" fill="black" transform="translate(3, 3)" />
            <path d="M 10 40 L 10 25 L 25 25 L 25 10 L 40 10 L 40 40 Z" fill="#8b5cf6" stroke="black" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
