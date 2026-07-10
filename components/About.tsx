"use client";

import React from "react";

export default function About() {
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
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
      bg: "bg-yellow-400",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-4 py-20 md:px-8 border-t-4 border-black">
      {/* 1. Header component based on design image */}
      <div className="w-full flex items-center justify-between gap-4 mb-16 select-none relative">
        {/* Left Decor: Dot matrix + Purple box */}
        <div className="hidden md:flex items-center gap-4">
          <div className="grid grid-cols-9 gap-2">
            {Array.from({ length: 45 }).map((_, i) => (
              <div key={i} className="w-[6px] h-[6px] bg-black rounded-full" />
            ))}
          </div>
          <div className="w-[61px] h-[61px] bg-[#8b5cf6] border-3 border-black shadow-[4px_4px_0px_#000000]" />
        </div>

        {/* Center: Title box */}
        <div className="flex flex-col items-center mx-auto">
          <div className="relative bg-white border-4 border-black text-black px-8 py-3.5 shadow-[5px_5px_0px_#000000] font-sans font-black text-2xl sm:text-3xl tracking-widest uppercase">
            ABOUT ME
          </div>
          <div className="w-24 h-2 bg-[#8b5cf6] border-2 border-black mt-2 shadow-[2px_2px_0px_#000000]" />
        </div>

        {/* Right Decor: Plus + Yellow Circle */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-black text-3xl font-black">+</div>
          <div className="w-12 h-12 rounded-full bg-yellow-400 border-3 border-black shadow-[3px_3px_0px_#000000]" />
        </div>
      </div>

      {/* 2. Main About Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Card: Biography Description */}
        <div className="relative lg:col-span-7 bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000] text-black text-left font-mono leading-relaxed flex flex-col justify-center z-10 overflow-visible">
          {/* L-shaped Pink Accent under the bottom-left corner */}
          <svg
            width="240"
            height="200"
            viewBox="0 0 240 200"
            className="absolute bottom-[-32px] left-[-32px] z-[-1] pointer-events-none select-none"
          >
            {/* Shadow */}
            <path d="M 6 6 L 46 6 L 46 166 L 246 166 L 246 206 L 6 206 Z" fill="black" />
            {/* Pink Shape */}
            <path d="M 0 0 L 40 0 L 40 160 L 240 160 L 240 200 L 0 200 Z" fill="#fa5b8d" stroke="black" strokeWidth="4" strokeLinejoin="miter" />
          </svg>

          <p className="mb-6 text-sm sm:text-base md:text-lg">
            Hello! I'm <span className="bg-yellow-400 px-1.5 py-0.5 text-black font-extrabold rounded-sm select-all">Vidhyanshu Kumar</span>, a second-year student at Manipal University Jaipur with a passion for software development and problem-solving.
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
            <div className="absolute top-[-56px] right-[20px] grid grid-cols-8 gap-1.5">
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
