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
  buttonText?: string;
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black">
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3" stroke="currentColor" className="rotate-45 transform origin-center" />
      <ellipse cx="12" cy="12" rx="9" ry="3" stroke="currentColor" className="-rotate-45 transform origin-center" />
    </svg>
  );

  const trustchainIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black rotate-45">
      <path d="M9 17H7A5 5 0 0 1 7 7h2m6 0h2a5 5 0 0 1 0 10h-2M8 12h8" strokeLinecap="round" />
    </svg>
  );

  const stormIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black">
      <path d="M18 10h-.7A5.5 5.5 0 0 0 6.5 10H6a4 4 0 0 0 0 8h12a4.5 4.5 0 0 0 0-9z" strokeLinecap="round" strokeLinejoin="round" fill="white" />
      <path d="M11.5 12l-2.5 4.5h3l-1.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const keyboardKeyIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 text-black">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" fill="white" />
      <rect x="5" y="5" width="14" height="12" rx="1.5" stroke="currentColor" />
      <text x="12" y="14" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="monospace" fill="black" stroke="none">
        K
      </text>
    </svg>
  );

  const coffeeIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black">
      <path d="M18 8h1a3 3 0 0 1 0 6h-1M4 8h14v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 2v2M10 2v2M14 2v2" strokeLinecap="round" />
    </svg>
  );

  const f1Icon = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black">
      <rect x="3" y="12" width="4" height="9" rx="0.5" />
      <rect x="10" y="7" width="4" height="14" rx="0.5" />
      <rect x="17" y="3" width="4" height="18" rx="0.5" />
    </svg>
  );

  const keyIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 text-black">
      <circle cx="7.5" cy="15.5" r="4.5" stroke="currentColor" fill="white" />
      <path d="M11 12l9-9M16.5 6.5L19 9M13.5 9.5L16 12" strokeLinecap="round" />
    </svg>
  );

  const browserIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 text-black">
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" fill="white" />
      <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" />
      <circle cx="5" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="8" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="11" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );

  const githubIcon = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 text-black">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );

  // Projects definitions
  const projectsData: Project[] = [
    {
      id: "shankhcall",
      indexStr: "01",
      title: "shankhcall",
      category: "WEB APPS",
      description: "A comprehensive, multilingual disaster monitoring and reporting platform that provides unified citizen + social hazard intelligence for both Ocean and Forest disasters. Built with real-time mapping, sentiment and analysis.",
      tags: ["TypeScript", "Next.js", "Leaflet"],
      github: "https://github.com/Viidhyanshu/shankhcall",
      demo: "https://github.com/Viidhyanshu/shankhcall#readme",
      accentBg: "bg-[#fa5b8d]",
      icon: stormIcon
    },
    {
      id: "f1-data",
      indexStr: "02",
      title: "F1 Telemetry Analytics Dashboard",
      category: "SYSTEMS",
      description: "F1 Telemetry Analytics Dashboard is a personal project that visualizes Formula 1 telemetry using Python, Streamlit, and FastF1. It turns raw race data into interactive insights like racing lines, speed heatmaps, braking zones, and driver comparisons making complex motorsport data intuitive, visual, and engaging to explore.",
      tags: ["Python", "FastF1", "Streamlit"],
      github: "https://github.com/Viidhyanshu/F1-Telemetry-Dashboard",
      demo: "https://github.com/Viidhyanshu/F1-Telemetry-Analytics-Dashboard#readme",
      accentBg: "bg-emerald-400",
      icon: f1Icon
    },
    {
      id: "cs-website",
      indexStr: "03",
      title: "IEEE CS Official Website",
      category: "WEB APPS",
      description: "IEEE CS Official Website is a full-stack web platform developed for the IEEE Computer Society Student Chapter. It features dynamic event management, registration forms, blogs, team profiles, and responsive interfaces to enhance the chapter's digital presence and student engagement.",
      tags: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"],
      github: "https://github.com/Viidhyanshu/CS-Website",
      demo: "https://github.com/Viidhyanshu/CS-Website#readme",
      accentBg: "bg-lime-400",
      icon: browserIcon
    },
    {
      id: "quantum",
      indexStr: "04",
      title: "Quantum Circuit Visualizer",
      category: "TOOLS",
      description: "Quantum Circuit Visualizer is an interactive web application that lets users build quantum circuits visually, simulate them, and observe the probability distributions of measurement outcomes in real time.",
      tags: ["TypeScript", "React", "QuantumJS"],
      github: "https://github.com/Viidhyanshu/Quantum-Circuit-Visualizer",
      demo: "https://github.com/Viidhyanshu/Quantum-Circuit-Visualizer#readme",
      accentBg: "bg-yellow-400",
      icon: quantumIcon
    },
    {
      id: "cascade-hunt",
      indexStr: "05",
      title: "Cascade Cryptic Hunt",
      category: "CREATIVE",
      description: "Cascade Cryptic Hunt is a full-stack gaming platform built using Next.js that transforms traditional puzzle hunts into an engaging digital experience. It combines progressive clue decoding, secure authentication, and persistent game state to deliver seamless, interactive gameplay.",
      tags: ["Next.js", "TypeScript", "Drizzle ORM", "Tailwind CSS"],
      github: "https://github.com/Viidhyanshu/Cascade-cryptic-hunt",
      demo: "https://github.com/Viidhyanshu/Cascade-cryptic-hunt#readme",
      accentBg: "bg-fuchsia-400",
      icon: keyIcon
    },
    {
      id: "trustchain",
      indexStr: "06",
      title: "TrustChain Microfinance Grid",
      category: "SYSTEMS",
      description: "TrustChain Microfinance Grid is an upgraded blockchain-powered ecosystem with the aim of re-establishing trust and transparency in India's rural microfinance ecosystem. It connects the gaps between traditional lending institutions and underserved rural entrepreneurs by enabling a secure, auditable and privacy-preserving infrastructure.",
      tags: ["Solidity", "Web3.js", "Ethereum"],
      github: "https://github.com/Viidhyanshu/TrustChain-Microfinance-Grid-Prototype",
      demo: "https://github.com/Viidhyanshu/TrustChain-Microfinance-Grid-Prototype#readme",
      accentBg: "bg-[#8b5cf6]",
      icon: trustchainIcon
    },
    {
      id: "on-air-kbd",
      indexStr: "07",
      title: "On Air Keyboard",
      category: "TOOLS",
      description: "An innovative virtual keyboard using OpenCV and MediaPipe for gesture-based input.A virtual keyboard controlled by hand gestures in the air using computer vision. Type without touching anything - just move your hands in front of your webcam!",
      tags: ["OpenCV", "MediaPipe", "Python"],
      github: "https://github.com/Viidhyanshu/On_Air_Keyboard_Using_Opencv_Mediapipe",
      demo: "https://github.com/Viidhyanshu/On_Air_Keyboard_Using_Opencv_Mediapipe#readme",
      accentBg: "bg-cyan-400",
      icon: keyboardKeyIcon
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
      accentBg: "bg-orange-400",
      icon: coffeeIcon
    },
    {
      id: "coming-soon",
      indexStr: "",
      title: "More Projects Coming Soon",
      category: "CREATIVE",
      description: "Stay tuned! I am constantly designing and coding new experiments, tools, and websites. Check my GitHub profile for live updates.",
      tags: ["Next.js", "React", "Python", "Solidity"],
      github: "https://github.com/Viidhyanshu",
      demo: "",
      accentBg: "bg-sky-400",
      icon: githubIcon,
      buttonText: "MORE ON GITHUB"
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 py-20 md:px-8 border-t-4 border-black relative overflow-visible z-0 scroll-mt-[100px] md:scroll-mt-[140px]"
    >
      {/* Background Coding Doodles (Outer Margins) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-visible z-0 opacity-[0.28] hidden lg:block">
        {/* === LEFT MARGIN DOODLES === */}
        <div className="absolute top-[10%] left-[-100px] xl:left-[-180px] font-mono text-base xl:text-lg text-black font-extrabold rotate-6">
          {"const [state, setState] = useState(null);"}
        </div>
        <div className="absolute top-[22%] left-[-80px] xl:left-[-140px] font-mono text-3xl xl:text-4xl text-black font-black rotate-45">
          {"</>"}
        </div>
        <div className="absolute top-[35%] left-[-110px] xl:left-[-200px] font-mono text-base xl:text-lg text-black font-extrabold -rotate-12">
          {"git commit -m 'feat: initial'"}
        </div>
        <div className="absolute top-[48%] left-[-90px] xl:left-[-160px] font-mono text-lg xl:text-xl text-black font-extrabold -rotate-45">
          {"console.log('Brutalist!');"}
        </div>
        <div className="absolute top-[62%] left-[-100px] xl:left-[-180px] font-mono text-base xl:text-lg text-black font-bold rotate-12">
          {"await fetch('/api/projects');"}
        </div>
        <div className="absolute top-[75%] left-[-120px] xl:left-[-220px] font-mono text-lg xl:text-xl text-black font-extrabold rotate-12">
          {"  return <ProjectsGrid />;"}
        </div>
        <div className="absolute top-[88%] left-[-80px] xl:left-[-140px] font-mono text-lg xl:text-xl text-black font-black -rotate-12">
          {"export default Projects;"}
        </div>

        {/* === RIGHT MARGIN DOODLES === */}
        <div className="absolute top-[12%] right-[-100px] xl:right-[-180px] font-mono text-base xl:text-lg text-black font-extrabold -rotate-6">
          {"import { useEffect } from 'react';"}
        </div>
        <div className="absolute top-[25%] right-[-80px] xl:right-[-140px] font-mono text-3xl xl:text-4xl text-black font-black opacity-70 -rotate-12">
          {"&&"}
        </div>
        <div className="absolute top-[38%] right-[-90px] xl:right-[-160px] font-mono text-lg xl:text-xl text-black font-black">
          {"npm run dev"}
        </div>
        <div className="absolute top-[52%] right-[-80px] xl:right-[-140px] font-mono text-3xl xl:text-4xl text-black font-black opacity-70 rotate-45">
          {"=>"}
        </div>
        <div className="absolute top-[65%] right-[-100px] xl:right-[-180px] font-mono text-2xl xl:text-3xl text-black font-black opacity-60">
          {"fn()"}
        </div>
        <div className="absolute top-[78%] right-[-80px] xl:right-[-140px] font-mono text-3xl xl:text-4xl text-black font-black opacity-60 rotate-90">
          {"||"}
        </div>
        <div className="absolute top-[90%] right-[-110px] xl:right-[-200px] font-mono text-base xl:text-lg text-black font-extrabold -rotate-12">
          {"npm run build --turbo"}
        </div>

        {/* Floating background markers closer to grid edge */}
        <div className="absolute top-[18%] left-[-20px] font-mono text-4xl text-black font-black opacity-75 rotate-12">
          {";"}
        </div>
        <div className="absolute top-[42%] right-[-10px] font-mono text-3xl text-black font-black opacity-75">
          {"{"}
        </div>
        <div className="absolute bottom-[20%] left-[-30px] font-mono text-4xl text-black font-black opacity-75 -rotate-45">
          {"{"}
        </div>
        <div className="absolute bottom-[35%] right-[-20px] font-mono text-4xl text-black font-black opacity-75 rotate-12">
          {"}"}
        </div>
      </div>

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

      {/* 3x3 DETAILS PROJECTS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 relative z-10 items-stretch">
        {projectsData.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            isVisible={isVisible}
            idx={idx}
          />
        ))}
      </div>
    </section>
  );
}
