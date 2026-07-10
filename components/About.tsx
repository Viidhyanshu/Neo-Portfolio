"use client";

import React, { useState } from "react";

export default function About() {
  // State variables for interactive color cycling of main elements
  const [purpleSquareColorIdx, setPurpleSquareColorIdx] = useState(0);
  const purpleSquareColors = ["bg-[#8b5cf6]", "bg-yellow-400", "bg-[#fa5b8d]", "bg-emerald-400", "bg-orange-400"];

  const [aboutBoxColorIdx, setAboutBoxColorIdx] = useState(0);
  const aboutBoxColors = ["bg-white", "bg-yellow-400", "bg-[#8b5cf6]", "bg-emerald-400", "bg-[#fa5b8d]", "bg-orange-400"];

  const [yellowCircleColorIdx, setYellowCircleColorIdx] = useState(0);
  const yellowCircleColors = ["bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400", "bg-orange-400"];

  const [nameHighlightColorIdx, setNameHighlightColorIdx] = useState(0);
  const nameHighlightColors = ["bg-yellow-400", "bg-emerald-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-orange-400"];

  const [lShapeColorIdx, setLShapeColorIdx] = useState(0);
  const lShapeColors = ["#fa5b8d", "#8b5cf6", "#facc15", "#10b981", "#f97316"];

  // State array for 24 scattered background doodles
  const [doodleColorIndices, setDoodleColorIndices] = useState<number[]>(Array(24).fill(0));
  const doodleColors = [
    "text-[#fa5b8d]",
    "text-[#8b5cf6]",
    "text-yellow-500",
    "text-emerald-500",
    "text-orange-500",
    "text-blue-500",
  ];

  const doodleData = [
    { type: "star", style: { top: "5%", left: "3%" }, rotate: "rotate-[12deg]" },
    { type: "plus", style: { top: "8%", left: "20%" }, rotate: "rotate-[-5deg]" },
    { type: "zigzag", style: { top: "25%", left: "2%" }, rotate: "rotate-[45deg]" },
    { type: "chevron", style: { bottom: "8%", left: "5%" }, rotate: "rotate-[90deg]" },
    { type: "x", style: { bottom: "3%", left: "18%" }, rotate: "rotate-[-20deg]" },
    { type: "spiral", style: { top: "6%", right: "22%" }, rotate: "rotate-[15deg]" },
    { type: "triangle", style: { top: "30%", right: "3%" }, rotate: "rotate-[35deg]" },
    { type: "star", style: { bottom: "6%", right: "15%" }, rotate: "rotate-[-10deg]" },
    { type: "plus", style: { bottom: "2%", right: "5%" }, rotate: "rotate-[25deg]" },
    { type: "circle", style: { top: "12%", left: "45%" }, rotate: "rotate-[0deg]" },
    { type: "star", style: { bottom: "12%", left: "30%" }, rotate: "rotate-[40deg]" },
    { type: "x", style: { bottom: "14%", right: "35%" }, rotate: "rotate-[-15deg]" },
    { type: "chevron", style: { top: "45%", left: "52%" }, rotate: "rotate-[-90deg]" },
    { type: "plus", style: { top: "16%", left: "10%" }, rotate: "rotate-[0deg]" },
    { type: "zigzag", style: { top: "65%", left: "45%" }, rotate: "rotate-[0deg]" },
    { type: "spiral", style: { top: "20%", right: "38%" }, rotate: "rotate-[0deg]" },
    { type: "circle", style: { bottom: "20%", right: "36%" }, rotate: "rotate-[0deg]" },
    { type: "chevron", style: { top: "4%", left: "35%" }, rotate: "rotate-[180deg]" },
    { type: "x", style: { top: "4%", right: "32%" }, rotate: "rotate-[45deg]" },
    { type: "star", style: { top: "50%", left: "1%" }, rotate: "rotate-[-30deg]" },
    { type: "plus", style: { top: "55%", right: "1%" }, rotate: "rotate-[10deg]" },
    { type: "zigzag", style: { bottom: "4%", left: "50%" }, rotate: "rotate-[-10deg]" },
    { type: "triangle", style: { bottom: "3%", left: "38%" }, rotate: "rotate-[75deg]" },
    { type: "chevron", style: { bottom: "3%", right: "28%" }, rotate: "rotate-[45deg]" },
  ];

  const renderDoodleIcon = (type: string) => {
    switch (type) {
      case "star":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M 12 0 C 12 8, 8 12, 0 12 C 8 12, 12 16, 12 24 C 12 16, 16 12, 24 12 C 16 12, 12 8, 12 0 Z" stroke="black" strokeWidth="2" />
          </svg>
        );
      case "plus":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <line x1="12" y1="4" x2="12" y2="20" />
            <line x1="4" y1="12" x2="20" y2="12" />
          </svg>
        );
      case "x":
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        );
      case "chevron":
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 17 13 10 6 3" />
          </svg>
        );
      case "zigzag":
        return (
          <svg width="35" height="15" viewBox="0 0 35 15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M 3 12 L 10 3 L 18 12 L 25 3 L 32 12" />
          </svg>
        );
      case "spiral":
        return (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M 6 18 C 2 14, 5 6, 12 6 C 19 6, 22 14, 17 20 C 12 25, 5 20, 10 14 C 15 8, 22 15, 19 20" />
          </svg>
        );
      case "triangle":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 3 21 20 3 20" stroke="black" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        );
      case "circle":
        return (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
            <circle cx="11" cy="11" r="8" stroke="black" strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  const socialCards = [
    {
      name: "GitHub",
      value: "viidhyanshu",
      href: "https://github.com/Viidhyanshu",
      bg: "bg-yellow-400",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      name: "LeetCode",
      value: "viidhyanshu",
      href: "https://leetcode.com/u/viidhyanshu/",
      bg: "bg-[#8b5cf6]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      value: "Vidhyanshu Kumar",
      href: "https://www.linkedin.com/in/viidhyanshu/",
      bg: "bg-[#fa5b8d]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Email",
      value: "viidhyanshu@gmail.com",
      href: "mailto:viidhyanshu@gmail.com",
      bg: "bg-emerald-400",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-4 py-20 md:px-8 border-t-4 border-black relative overflow-visible z-0">
      
      {/* Mapped Scattered Background Interactive Doodles */}
      {doodleData.map((doodle, idx) => (
        <div
          key={idx}
          style={doodle.style}
          onClick={() => {
            setDoodleColorIndices((prev) => {
              const updated = [...prev];
              updated[idx] = (updated[idx] + 1) % doodleColors.length;
              return updated;
            });
          }}
          className={`absolute ${doodleColors[doodleColorIndices[idx]]} ${doodle.rotate} cursor-pointer opacity-70 hover:opacity-100 hover:scale-125 hover:rotate-[15deg] active:scale-95 transition-all duration-100 z-0 select-none hidden md:block`}
          title="Click to change color!"
        >
          {renderDoodleIcon(doodle.type)}
        </div>
      ))}

      {/* 1. Header component based on design image */}
      <div className="w-full flex items-center justify-between gap-4 mb-16 select-none relative z-10">
        {/* Left Decor: Dot matrix + Purple box */}
        <div className="hidden md:flex items-center gap-4">
          <div className="grid grid-cols-9 gap-2">
            {Array.from({ length: 45 }).map((_, i) => (
              <div key={i} className="w-[6px] h-[6px] bg-black rounded-full" />
            ))}
          </div>
          <div
            onClick={() => setPurpleSquareColorIdx((prev) => (prev + 1) % purpleSquareColors.length)}
            className={`w-[61px] h-[61px] ${purpleSquareColors[purpleSquareColorIdx]} border-3 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
            title="Click to change color!"
          />
        </div>

        {/* Center: Title box */}
        <div className="flex flex-col items-center mx-auto relative overflow-visible">
          {/* Sparkle Star Doodle (Yellow) */}
          <svg width="30" height="30" viewBox="0 0 30 30" className="absolute top-[-28px] left-[-30px] select-none pointer-events-none text-yellow-400 z-10">
            <path d="M 15 0 C 15 10, 10 15, 0 15 C 10 15, 15 20, 15 30 C 15 20, 20 15, 30 15 C 20 15, 15 10, 15 0 Z" fill="currentColor" stroke="black" strokeWidth="2.5" />
          </svg>

          {/* Curly Arrow Doodle (Pink) */}
          <svg width="45" height="40" viewBox="0 0 45 40" fill="none" stroke="black" strokeWidth="2.5" className="absolute bottom-[-15px] left-[-55px] select-none pointer-events-none text-[#fa5b8d] rotate-[-10deg] z-10">
            <path d="M 5 35 C 15 35, 15 15, 25 15 C 35 15, 38 25, 42 22" strokeLinecap="round" />
            <path d="M 37 15 L 43 22 L 35 27" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Scribble Spiral Doodle (Teal/Emerald) */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="black" strokeWidth="2.5" className="absolute top-[-32px] right-[-45px] select-none pointer-events-none text-emerald-400 z-10">
            <path d="M 10 25 C 5 20, 8 10, 18 10 C 28 10, 32 20, 25 28 C 18 36, 8 28, 15 20 C 22 12, 32 22, 28 30" strokeLinecap="round" />
          </svg>

          {/* Star Sparkle 2 Doodle (Orange) */}
          <svg width="24" height="24" viewBox="0 0 24 24" className="absolute bottom-[-12px] right-[-36px] select-none pointer-events-none text-orange-400 z-10">
            <path d="M 12 0 C 12 8, 8 12, 0 12 C 8 12, 12 16, 12 24 C 12 16, 16 12, 24 12 C 16 12, 12 8, 12 0 Z" fill="currentColor" stroke="black" strokeWidth="2.5" />
          </svg>

          <div
            onClick={() => setAboutBoxColorIdx((prev) => (prev + 1) % aboutBoxColors.length)}
            className={`relative ${aboutBoxColors[aboutBoxColorIdx]} border-4 border-black text-black px-12 py-[29px] shadow-[6px_6px_0px_#000000] font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-widest uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-100 select-none z-0`}
            title="Click to change color!"
          >
            ABOUT ME
          </div>
          <div className="w-32 h-2.5 bg-[#8b5cf6] border-2 border-black mt-3 shadow-[2px_2px_0px_#000000]" />
        </div>

        {/* Right Decor: Plus + Yellow Circle */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-black text-3xl font-black">+</div>
          <div
            onClick={() => setYellowCircleColorIdx((prev) => (prev + 1) % yellowCircleColors.length)}
            className={`w-[73px] h-[73px] rounded-full ${yellowCircleColors[yellowCircleColorIdx]} border-3 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
            title="Click to change color!"
          />
        </div>
      </div>

      {/* 2. Main About Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Card: Biography Description */}
        <div className="relative lg:col-span-7 bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000] text-black text-left font-mono leading-relaxed flex flex-col justify-center z-10 overflow-visible">
          {/* L-shaped Pink Accent under the bottom-left corner */}
          <svg
            width="240"
            height="200"
            viewBox="0 0 240 200"
            onClick={() => setLShapeColorIdx((prev) => (prev + 1) % lShapeColors.length)}
            className="absolute bottom-[-32px] left-[-32px] z-[-1] pointer-events-auto cursor-pointer select-none group"
          >
            <title>Click to change color!</title>
            {/* Shadow */}
            <path d="M 6 6 L 46 6 L 46 166 L 246 166 L 246 206 L 6 206 Z" fill="black" />
            {/* Pink Shape */}
            <path
              d="M 0 0 L 40 0 L 40 160 L 240 160 L 240 200 L 0 200 Z"
              fill={lShapeColors[lShapeColorIdx]}
              stroke="black"
              strokeWidth="4"
              strokeLinejoin="miter"
              className="group-hover:opacity-90 active:opacity-100 transition-opacity"
            />
          </svg>

          <p className="mb-6 text-sm sm:text-base md:text-lg">
            Hello! I'm{" "}
            <span
              onClick={() => setNameHighlightColorIdx((prev) => (prev + 1) % nameHighlightColors.length)}
              className={`cursor-pointer ${nameHighlightColors[nameHighlightColorIdx]} px-1.5 py-0.5 text-black font-extrabold rounded-sm select-all hover:opacity-90 active:scale-95 transition-all duration-100`}
              title="Click to change color!"
            >
              Vidhyanshu Kumar
            </span>
            , a second-year student at Manipal University Jaipur with a passion for software development and problem-solving.
          </p>
          <p className="mb-6 text-sm sm:text-base md:text-lg">
            I enjoy building innovative projects and solving complex challenges. My journey in tech has led me to explore various technologies and work on exciting projects that combine creativity with technical skills.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            When I'm not coding, I'm constantly learning new technologies and contributing to open-source projects. I believe in continuous learning and pushing the boundaries of what's possible.
          </p>
        </div>

        {/* Right Card Stack: Social Link Items */}
        <div className="relative lg:col-span-5 flex flex-col gap-4 justify-between z-10 overflow-visible">
          {socialCards.map((card) => (
            <a
              key={card.name}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-stretch bg-white border-3 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] transition-all cursor-pointer overflow-hidden h-[72px] z-10"
            >
              {/* Left Side: Badge containing logo */}
              <div className={`w-16 flex items-center justify-center border-r-3 border-black flex-shrink-0 ${card.bg}`}>
                {card.icon}
              </div>
              {/* Right Side: Text area */}
              <div className="flex-1 py-3 px-5 font-mono font-bold text-sm sm:text-base text-black flex items-center justify-start bg-white select-none">
                <span>
                  {card.name}: <strong className="font-extrabold text-zinc-950 ml-1 select-all">{card.value}</strong>
                </span>
              </div>
            </a>
          ))}

          {/* Stairs Purple Accent under the bottom-right corner */}
          <div className="absolute bottom-[-20px] right-[-120px] z-20 pointer-events-none select-none w-[210px] h-[190px] overflow-visible">
            {/* Dot Matrix just above the tallest step */}
            <div className="absolute top-[-36px] right-[20px] grid grid-cols-8 gap-1.5">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="w-[3.5px] h-[3.5px] bg-black rounded-full" />
              ))}
            </div>
            
            <svg
              width="210"
              height="190"
              viewBox="0 0 210 190"
              className="overflow-visible"
            >
              {/* Shadow */}
              <path
                d="M 10 180 L 10 145 L 55 145 L 55 110 L 100 110 L 100 75 L 145 75 L 145 40 L 190 40 L 190 180 Z"
                fill="black"
                transform="translate(6, 6)"
              />
              {/* Purple Steps Shape */}
              <path
                d="M 10 180 L 10 145 L 55 145 L 55 110 L 100 110 L 100 75 L 145 75 L 145 40 L 190 40 L 190 180 Z"
                fill="#8b5cf6"
                stroke="black"
                strokeWidth="4"
                strokeLinejoin="miter"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
