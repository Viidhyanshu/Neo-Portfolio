"use client";

import React, { useState, useEffect, useRef } from "react";

// ─── SKILL DATA ──────────────────────────────────────────────────────────────
// Devicon CDN base: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

interface Skill {
  name: string;
  icon: string; // full URL
  accent: string; // tailwind bg color for the card hover glow
}

const SKILLS_ROW_1: Skill[] = [
  { name: "HTML5",       icon: `${DEVICON}/html5/html5-original.svg`,               accent: "bg-orange-400"  },
  { name: "CSS3",        icon: `${DEVICON}/css3/css3-original.svg`,                 accent: "bg-blue-500"    },
  { name: "Tailwind",    icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,   accent: "bg-cyan-400"    },
  { name: "JavaScript",  icon: `${DEVICON}/javascript/javascript-original.svg`,     accent: "bg-yellow-400"  },
  { name: "TypeScript",  icon: `${DEVICON}/typescript/typescript-original.svg`,     accent: "bg-blue-600"    },
  { name: "React",       icon: `${DEVICON}/react/react-original.svg`,               accent: "bg-cyan-400"    },
  { name: "Sass",        icon: `${DEVICON}/sass/sass-original.svg`,                 accent: "bg-pink-400"    },
  { name: "Next.js",     icon: `${DEVICON}/nextjs/nextjs-original.svg`,             accent: "bg-black"       },
  { name: "Node.js",     icon: `${DEVICON}/nodejs/nodejs-original.svg`,             accent: "bg-green-600"   },
  { name: "Express",     icon: `${DEVICON}/express/express-original.svg`,           accent: "bg-gray-600"    },
  { name: "Bun",         icon: `${DEVICON}/bun/bun-original.svg`,                   accent: "bg-amber-200"   },
  { name: "npm",         icon: `${DEVICON}/npm/npm-original-wordmark.svg`,           accent: "bg-red-500"     },
  { name: "Spring",      icon: `${DEVICON}/spring/spring-original.svg`,             accent: "bg-green-500"   },
  { name: "GraphQL",     icon: `${DEVICON}/graphql/graphql-plain.svg`,               accent: "bg-pink-500"    },
  { name: "Kubernetes",  icon: `${DEVICON}/kubernetes/kubernetes-original.svg`,     accent: "bg-blue-500"    },
];

const SKILLS_ROW_2: Skill[] = [
  { name: "Firebase",    icon: `${DEVICON}/firebase/firebase-original.svg`,         accent: "bg-yellow-500"  },
  { name: "PostgreSQL",  icon: `${DEVICON}/postgresql/postgresql-original.svg`,     accent: "bg-blue-700"    },
  { name: "MongoDB",     icon: `${DEVICON}/mongodb/mongodb-original.svg`,           accent: "bg-green-500"   },
  { name: "Redis",       icon: `${DEVICON}/redis/redis-original.svg`,               accent: "bg-red-600"     },
  { name: "C",           icon: `${DEVICON}/c/c-original.svg`,                       accent: "bg-blue-500"    },
  { name: "C++",         icon: `${DEVICON}/cplusplus/cplusplus-original.svg`,       accent: "bg-blue-600"    },
  { name: "Java",        icon: `${DEVICON}/java/java-original.svg`,                 accent: "bg-red-500"     },
  { name: "Rust",        icon: `${DEVICON}/rust/rust-original.svg`,                 accent: "bg-orange-600"  },
  { name: "Python",      icon: `${DEVICON}/python/python-original.svg`,             accent: "bg-yellow-400"  },
  { name: "Go",          icon: `${DEVICON}/go/go-original.svg`,                     accent: "bg-cyan-500"    },
  { name: "Gatsby",      icon: `${DEVICON}/gatsby/gatsby-original.svg`,             accent: "bg-purple-600"  },
  { name: "Docker",      icon: `${DEVICON}/docker/docker-original.svg`,             accent: "bg-blue-500"    },
  { name: "AWS",         icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, accent: "bg-orange-400" },
  { name: "Linux",       icon: `${DEVICON}/linux/linux-original.svg`,               accent: "bg-yellow-400"  },
  { name: "Git",         icon: `${DEVICON}/git/git-original.svg`,                   accent: "bg-orange-500"  },
];

const SKILLS_ROW_3: Skill[] = [
  { name: "GitHub",      icon: `${DEVICON}/github/github-original.svg`,             accent: "bg-gray-800"    },
  { name: "VS Code",     icon: `${DEVICON}/vscode/vscode-original.svg`,             accent: "bg-blue-500"    },
  { name: "Neovim",      icon: `${DEVICON}/neovim/neovim-original.svg`,             accent: "bg-green-500"   },
  { name: "Figma",       icon: `${DEVICON}/figma/figma-original.svg`,               accent: "bg-purple-500"  },
];

const ALL_ROWS = [SKILLS_ROW_1, SKILLS_ROW_2, SKILLS_ROW_3];

// ─── CYCLING HEADER COLORS ───────────────────────────────────────────────────
const ACCENT_COLORS   = ["bg-cyan-400", "bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400"];
const SUBTITLE_COLORS = ["bg-yellow-400", "bg-cyan-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-orange-400"];
const SQUARE_COLORS   = ["bg-cyan-400", "bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400"];

// ─── BACKGROUND DOODLES ──────────────────────────────────────────────────────
const LEFT_DOODLES = [
  { text: "import * from '...'",   top: "8%",  rotate: "rotate-6"   },
  { text: "<Component />",         top: "22%", rotate: "-rotate-12" },
  { text: "npm install",           top: "38%", rotate: "rotate-3"   },
  { text: "sudo apt-get",          top: "55%", rotate: "-rotate-6"  },
  { text: "docker build .",        top: "72%", rotate: "rotate-12"  },
  { text: "make && run",           top: "88%", rotate: "-rotate-3"  },
];

const RIGHT_DOODLES = [
  { text: "class Solution {",      top: "8%",  rotate: "-rotate-6"  },
  { text: "fn main()",             top: "22%", rotate: "rotate-12"  },
  { text: "#include <stdio.h>",    top: "38%", rotate: "-rotate-3"  },
  { text: "pip install torch",     top: "55%", rotate: "rotate-6"   },
  { text: "go build ./...",        top: "72%", rotate: "-rotate-12" },
  { text: "cargo run",             top: "88%", rotate: "rotate-3"   },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [accentIdx,   setAccentIdx]   = useState(0);
  const [subtitleIdx, setSubtitleIdx] = useState(0);
  const [lSqIdx,      setLSqIdx]      = useState(0);
  const [rSqIdx,      setRSqIdx]      = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 py-20 md:px-8 border-t-4 border-black relative overflow-visible z-0"
    >
      {/* ── Background doodles ─────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-visible z-0 opacity-[0.28] hidden lg:block">
        {LEFT_DOODLES.map((d, i) => (
          <div
            key={`l-${i}`}
            className={`absolute font-mono font-extrabold text-black text-sm ${d.rotate}`}
            style={{ top: d.top, left: "-160px" }}
          >
            {d.text}
          </div>
        ))}
        {RIGHT_DOODLES.map((d, i) => (
          <div
            key={`r-${i}`}
            className={`absolute font-mono font-extrabold text-black text-sm ${d.rotate}`}
            style={{ top: d.top, right: "-160px" }}
          >
            {d.text}
          </div>
        ))}
        {/* Floating symbols */}
        <div className="absolute top-[15%]  left-[-24px]  font-mono text-3xl font-black text-black opacity-75 rotate-12">{"{"}</div>
        <div className="absolute top-[45%]  right-[-14px] font-mono text-3xl font-black text-black opacity-75 -rotate-12">{"}"}</div>
        <div className="absolute top-[65%]  left-[-20px]  font-mono text-3xl font-black text-black opacity-75 -rotate-45">{";"}</div>
        <div className="absolute top-[85%]  right-[-18px] font-mono text-3xl font-black text-black opacity-75 rotate-45">{"=>"}</div>
      </div>

      {/* ═══════════════════════════ HEADER ═══════════════════════════ */}
      <div
        className={`w-full flex items-center justify-between gap-4 mb-14 select-none relative z-10
          transition-all duration-700 ease-out transform
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
      >
        {/* Left decor */}
        <div className="hidden md:flex items-center gap-6">
          <div
            onClick={() => setLSqIdx((p) => (p + 1) % SQUARE_COLORS.length)}
            className={`w-[60px] h-[60px] ${SQUARE_COLORS[lSqIdx]} border-4 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
            title="Click to change color!"
          />
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-[5.5px] h-[5.5px] bg-black rounded-full" />
            ))}
          </div>
        </div>

        {/* Center title */}
        <div className="flex flex-col items-center mx-auto relative overflow-visible">
          <div
            onClick={() => setAccentIdx((p) => (p + 1) % ACCENT_COLORS.length)}
            className={`relative ${ACCENT_COLORS[accentIdx]} border-4 border-black text-black px-10 py-5
              shadow-[6px_6px_0px_#000000] font-sans font-black text-3xl sm:text-4xl md:text-5xl
              tracking-widest uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-100 z-10`}
            title="Click to change color!"
          >
            MY SKILLS
          </div>
          <div
            onClick={() => setSubtitleIdx((p) => (p + 1) % SUBTITLE_COLORS.length)}
            className={`mt-[-8px] relative ${SUBTITLE_COLORS[subtitleIdx]} border-3 border-black text-black
              px-4 py-2.5 shadow-[4px_4px_0px_#000000] font-mono font-bold text-[10px] sm:text-xs
              tracking-wider uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-100 z-20 text-center`}
            title="Click to change color!"
          >
            TECHNOLOGIES & TOOLS I WORK WITH
          </div>
        </div>

        {/* Right decor */}
        <div className="hidden md:flex items-center gap-6">
          <div className="text-black text-3xl font-black">+</div>
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round">
            <path d="M 4 15 L 14 5 L 24 15 L 34 5 L 44 15 L 54 5" />
          </svg>
          <div
            onClick={() => setRSqIdx((p) => (p + 1) % SQUARE_COLORS.length)}
            className={`w-[60px] h-[60px] ${SQUARE_COLORS[rSqIdx]} border-4 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
            title="Click to change color!"
          />
        </div>
      </div>

      {/* ═══════════════════════════ SKILL ROWS ═══════════════════════ */}
      <div className="relative z-10 space-y-6">
        {ALL_ROWS.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${200 + rowIdx * 150}ms` }}
          >
            {row.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} rowIdx={rowIdx} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SKILL CARD ──────────────────────────────────────────────────────────────
function SkillCard({ skill, index, rowIdx }: { skill: Skill; index: number; rowIdx: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white border-3 border-black shadow-[4px_4px_0px_#000000]
        w-[72px] h-[72px] sm:w-[80px] sm:h-[80px]
        flex flex-col items-center justify-center gap-1
        cursor-pointer select-none
        transition-all duration-150 ease-out
        ${isHovered
          ? "shadow-[6px_6px_0px_#000000] -translate-x-0.5 -translate-y-0.5 scale-110 z-20"
          : "hover:shadow-[5px_5px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px]"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${(rowIdx * 15 + index) * 40}ms` }}
    >
      {/* Colored accent bar on top */}
      <div
        className={`absolute top-0 left-0 right-0 h-[4px] ${skill.accent} transition-all duration-150
          ${isHovered ? "h-[6px]" : ""}`}
      />

      {/* Icon */}
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
        loading="lazy"
      />

      {/* Name tooltip on hover */}
      {isHovered && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
          <div className="bg-black text-white font-mono text-[10px] font-bold px-2 py-1 border border-black shadow-[2px_2px_0px_#333]">
            {skill.name}
          </div>
        </div>
      )}
    </div>
  );
}
