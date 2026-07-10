"use client";

import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  indexStr: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  accentBg: string;
  icon: React.ReactNode;
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Category Filtering State
  const categories = ["ALL", "WEB APPS", "TOOLS", "SYSTEMS", "CREATIVE"];
  const [activeCategory, setActiveCategory] = useState("ALL");

  // Header Interactive Colors cycling
  const yellowSquareColors = ["bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400", "bg-orange-400"];
  const [yellowSquareColorIdx, setYellowSquareColorIdx] = useState(0);

  const titleBgColors = ["bg-white", "bg-yellow-400", "bg-[#8b5cf6]", "bg-emerald-400", "bg-[#fa5b8d]", "bg-orange-400"];
  const [titleBgColorIdx, setTitleBgColorIdx] = useState(0);

  const subtitleBgColors = ["bg-[#8b5cf6]", "bg-yellow-400", "bg-[#fa5b8d]", "bg-emerald-400", "bg-orange-400"];
  const [subtitleBgColorIdx, setSubtitleBgColorIdx] = useState(0);

  const pinkSquareColors = ["bg-[#fa5b8d]", "bg-yellow-400", "bg-[#8b5cf6]", "bg-emerald-400", "bg-orange-400"];
  const [pinkSquareColorIdx, setPinkSquareColorIdx] = useState(0);

  // SVG Icons
  const quantumIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-12 h-12 text-black">
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3" stroke="currentColor" className="rotate-45 transform origin-center" />
      <ellipse cx="12" cy="12" rx="9" ry="3" stroke="currentColor" className="-rotate-45 transform origin-center" />
    </svg>
  );

  const trustchainIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-12 h-12 text-black rotate-45">
      <path d="M9 17H7A5 5 0 0 1 7 7h2m6 0h2a5 5 0 0 1 0 10h-2M8 12h8" strokeLinecap="round" />
    </svg>
  );

  const shankhcallIcon = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11 text-black">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.2a.96.96 0 0 0 .25-1.02c-.37-1.11-.57-2.3-.57-3.53C6.36 3.35 5.65 2.64 4.63 2.64H1.89c-1.02 0-1.89.87-1.89 1.89C0 14.8 9.2 24 19.47 24c1.02 0 1.89-.87 1.89-1.89v-2.73c0-1.02-.71-1.73-1.73-1.73z" />
    </svg>
  );

  // Keyboard button keycap icon for On Air Keyboard
  const keyboardKeyIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-11 h-11 text-black">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" fill="white" />
      <rect x="5" y="5" width="14" height="12" rx="1.5" stroke="currentColor" />
      <text x="12" y="14" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="monospace" fill="black" stroke="none">
        K
      </text>
    </svg>
  );

  const coffeeIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-12 h-12 text-black">
      <path d="M18 8h1a3 3 0 0 1 0 6h-1M4 8h14v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 2v2M10 2v2M14 2v2" strokeLinecap="round" />
    </svg>
  );

  const f1Icon = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-black">
      <rect x="3" y="12" width="4" height="9" rx="0.5" />
      <rect x="10" y="7" width="4" height="14" rx="0.5" />
      <rect x="17" y="3" width="4" height="18" rx="0.5" />
    </svg>
  );

  // Key icon for Cryptic Hunt
  const keyIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-11 h-11 text-black">
      <circle cx="7.5" cy="15.5" r="4.5" stroke="currentColor" fill="white" />
      <path d="M11 12l9-9M16.5 6.5L19 9M13.5 9.5L16 12" strokeLinecap="round" />
    </svg>
  );

  // Web Browser window icon for CS Website
  const browserIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-11 h-11 text-black">
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" fill="white" />
      <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" />
      <circle cx="5" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="8" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="11" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );

  // Projects definitions with 2 new entries
  const projectsData: Project[] = [
    {
      id: "shankhcall",
      indexStr: "01",
      title: "shankhcall",
      category: "WEB APPS",
      description: "A communication application project focusing on seamless connectivity and user experience.",
      tags: ["TypeScript", "Next.js", "Leaflet"],
      github: "https://github.com/Viidhyanshu/shankhcall",
      demo: "https://github.com/Viidhyanshu/shankhcall#readme",
      accentBg: "bg-[#fa5b8d]",
      icon: shankhcallIcon
    },
    {
      id: "quantum",
      indexStr: "02",
      title: "Quantum Circuit Visualizer",
      category: "TOOLS",
      description: "A premium, high-impact tool for building and visualizing quantum circuits with interactive gate placement and measurement results.",
      tags: ["TypeScript", "React", "QuantumJS"],
      github: "https://github.com/Viidhyanshu/Quantum-Circuit-Visualizer",
      demo: "https://github.com/Viidhyanshu/Quantum-Circuit-Visualizer#readme",
      accentBg: "bg-yellow-400",
      icon: quantumIcon
    },{
      id: "cs-website",
      indexStr: "03",
      title: "IEEE CS Official Website",
      category: "WEB APPS",
      description: "The official web space for the IEEE CS, showcasing events, team rosters, blogs, and gallery.",
      tags: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"],
      github: "https://github.com/Viidhyanshu/CS-Website",
      demo: "https://github.com/Viidhyanshu/CS-Website#readme",
      accentBg: "bg-yellow-400",
      icon: browserIcon // Web Browser window icon
    },
    {
      id: "f1-data",
      indexStr: "04",
      title: "F1 Telemetry Analytics Dashboard",
      category: "SYSTEMS",
      description: "F1 telemetry data visualization and analytics platform for racing insights and performance tracking.",
      tags: ["Python", "FastF1", "Streamlit"],
      github: "https://github.com/Viidhyanshu/F1-Telemetry-Analytics-Dashboard",
      demo: "https://github.com/Viidhyanshu/F1-Telemetry-Analytics-Dashboard#readme",
      accentBg: "bg-[#8b5cf6]",
      icon: f1Icon
    },
    {
      id: "cascade-hunt",
      indexStr: "05",
      title: "Cascade Cryptic Hunt",
      category: "CREATIVE",
      description: "A full-stack, real-time cryptic hunt gaming platform built using Next.js, featuring progressive clue decoding, user authentication, and interactive database persistence.",
      tags: ["Next.js", "TypeScript", "Drizzle ORM", "Tailwind CSS"],
      github: "https://github.com/Viidhyanshu/Cascade-cryptic-hunt",
      demo: "https://github.com/Viidhyanshu/Cascade-cryptic-hunt#readme",
      accentBg: "bg-[#fa5b8d]",
      icon: keyIcon // Key vector icon
    },
    {
      id: "on-air-kbd",
      indexStr: "06",
      title: "On Air Keyboard",
      category: "TOOLS",
      description: "An innovative virtual keyboard using OpenCV and MediaPipe for gesture-based input.",
      tags: ["OpenCV", "MediaPipe", "Python"],
      github: "https://github.com/Viidhyanshu/On_Air_Keyboard_Using_Opencv_Mediapipe",
      demo: "https://github.com/Viidhyanshu/On_Air_Keyboard_Using_Opencv_Mediapipe#readme",
      accentBg: "bg-[#8b5cf6]",
      icon: keyboardKeyIcon // Updated to Keycap icon
    },
    {
      id: "trustchain",
      indexStr: "07",
      title: "TrustChain Microfinance Grid",
      category: "SYSTEMS",
      description: "A microfinance grid prototype built with blockchain technology for secure and transparent financial transactions.",
      tags: ["Solidity", "Web3.js", "Ethereum"],
      github: "https://github.com/Viidhyanshu/TrustChain-Microfinance-Grid-Prototype",
      demo: "https://github.com/Viidhyanshu/TrustChain-Microfinance-Grid-Prototype#readme",
      accentBg: "bg-[#8b5cf6]",
      icon: trustchainIcon
    },
    {
      id: "coffee-shop",
      indexStr: "08",
      title: "The Coffee Shop",
      category: "CREATIVE",
      description: "A cozy café-inspired website focused on clean design, warmth, and smooth user experience.",
      tags: ["HTML", "Vanilla CSS", "JavaScript"],
      github: "https://github.com/Viidhyanshu/The-coffee-shop",
      demo: "https://github.com/Viidhyanshu/The-coffee-shop#readme",
      accentBg: "bg-yellow-400",
      icon: coffeeIcon
    },
  ];

  const filteredProjects = activeCategory === "ALL"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 py-20 md:px-8 border-t-4 border-black relative overflow-visible z-0"
    >
      {/* HEADER COMPONENT */}
      <div
        className={`w-full flex items-center justify-between gap-4 mb-16 select-none relative z-10 transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        {/* Left Decor: Yellow Box + Dot Matrix */}
        <div className="hidden md:flex items-center gap-6">
          <div
            onClick={() => setYellowSquareColorIdx((prev) => (prev + 1) % yellowSquareColors.length)}
            className={`w-[60px] h-[60px] ${yellowSquareColors[yellowSquareColorIdx]} border-4 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
            title="Click to change color!"
          />
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-[5.5px] h-[5.5px] bg-black rounded-full" />
            ))}
          </div>
        </div>

        {/* Center: Title Stack */}
        <div className="flex flex-col items-center mx-auto relative overflow-visible">
          <div
            onClick={() => setTitleBgColorIdx((prev) => (prev + 1) % titleBgColors.length)}
            className={`relative ${titleBgColors[titleBgColorIdx]} border-4 border-black text-black px-10 py-5 shadow-[6px_6px_0px_#000000] font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-widest uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-100 z-10`}
            title="Click to change color!"
          >
            MY PROJECTS
          </div>
          
          <div
            onClick={() => setSubtitleBgColorIdx((prev) => (prev + 1) % subtitleBgColors.length)}
            className={`mt-[-8px] relative ${subtitleBgColors[subtitleBgColorIdx]} border-3 border-black text-black px-4 py-2.5 shadow-[4px_4px_0px_#000000] font-mono font-bold text-[10px] sm:text-xs tracking-wider uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-100 z-20 text-center`}
            title="Click to change color!"
          >
            THINGS I'VE BUILT WITH CODE & CURIOSITY
          </div>
        </div>

        {/* Right Decor: Plus Sign + Zigzag + Pink Box */}
        <div className="hidden md:flex items-center gap-6">
          <div className="text-black text-3xl font-black">+</div>
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" className="text-black">
            <path d="M 4 15 L 14 5 L 24 15 L 34 5 L 44 15 L 54 5" />
          </svg>
          <div
            onClick={() => setPinkSquareColorIdx((prev) => (prev + 1) % pinkSquareColors.length)}
            className={`w-[60px] h-[60px] ${pinkSquareColors[pinkSquareColorIdx]} border-4 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
            title="Click to change color!"
          />
        </div>
      </div>

      {/* FILTER PILLS SYSTEM */}
      <div
        className={`w-full flex flex-wrap justify-center gap-3 mb-12 select-none relative z-10 transition-all duration-700 delay-100 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`border-3 border-black px-5 py-2 font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-100 cursor-pointer shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] ${
                isActive ? "bg-yellow-400 text-black" : "bg-white text-zinc-700 hover:text-black"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 2x3 DETAILS PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 items-stretch">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            isVisible={isVisible}
            idx={idx}
          />
        ))}
      </div>

      {/* BOTTOM BANNER */}
      <div className="w-full flex flex-col items-center gap-8 mt-16 select-none relative overflow-visible z-10">
        <div className="bg-[#facc15] border-4 border-black text-black px-12 py-3.5 shadow-[5px_5px_0px_#000000] font-sans font-black text-sm tracking-widest uppercase hover:scale-[1.03] transition-all cursor-pointer">
          MORE PROJECTS COMING SOON...
        </div>
      </div>
    </section>
  );
}
