"use client";

import React from "react";
import type { SocialCard as SocialCardType } from "./types";
import StairsDecoration from "./StairsDecoration";

interface AboutSocialsProps {
  isVisible: boolean;
}

const SOCIAL_CARDS: SocialCardType[] = [
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

export default function AboutSocials({ isVisible }: AboutSocialsProps) {
  return (
    <div
      className={`relative lg:col-span-5 flex flex-col gap-4 justify-between z-10 overflow-visible transition-all duration-700 delay-200 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      {SOCIAL_CARDS.map((card) => (
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
      <StairsDecoration />
    </div>
  );
}
