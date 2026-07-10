"use client";

import React, { useState, useEffect } from "react";

const NAV_LINKS = ["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT"];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("HOME");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Prevent server-side rendering mismatch for interactive pieces
  const currentThemeClass = mounted && darkMode ? "dark" : "";

  return (
    <nav className="w-full max-w-7xl mx-auto px-4 py-6 md:px-8">
      {/* Outer Wrapper with Neo-Brutalist border and flat shadow */}
      <div className="relative bg-white dark:bg-zinc-950 border-4 border-black text-black dark:text-white px-4 py-3 md:px-6 md:py-4 shadow-[6px_6px_0px_#000000] dark:shadow-[6px_6px_0px_#facc15] transition-colors duration-200">
        <div className="flex items-center justify-between">
          
          {/* LOGO & BRAND SECTION */}
          <div className="flex items-center gap-4">
            {/* Logo Box */}
            <div className="relative cursor-pointer select-none group">
              <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-zinc-800 border-[3px] border-black shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_#facc15] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] group-hover:shadow-[4px_4px_0px_#000000] dark:group-hover:shadow-[4px_4px_0px_#facc15] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] dark:active:shadow-[1px_1px_0px_#facc15] transition-all">
                {/* Trident SVG Icon */}
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-8 h-8 text-black dark:text-white">
                  {/* Vertical stem */}
                  <rect x="47" y="30" width="6" height="50" rx="3" />
                  <circle cx="50" cy="24" r="7" />
                  {/* Left fork */}
                  <path d="M 47 65 C 32 65 32 50 32 42 L 32 35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <circle cx="32" cy="28" r="6" />
                  {/* Right fork */}
                  <path d="M 53 65 C 68 65 68 50 68 42 L 68 35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <circle cx="68" cy="28" r="6" />
                  {/* Symmetrical dots */}
                  <circle cx="41" cy="50" r="4.5" />
                  <circle cx="59" cy="50" r="4.5" />
                </svg>
              </div>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col select-none">
              <span className="font-extrabold text-xl md:text-2xl leading-none tracking-wider font-sans text-black dark:text-white uppercase">
                VIDHYANSHU
              </span>
              <span className="text-[10px] md:text-xs font-bold leading-none tracking-[0.25em] text-zinc-600 dark:text-zinc-400 mt-1 uppercase">
                KUMAR
              </span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-8 font-sans font-bold text-sm tracking-widest text-black dark:text-white">
            {NAV_LINKS.map((link) => {
              const isActive = activeLink === link;
              return (
                <button
                  key={link}
                  onClick={() => setActiveLink(link)}
                  className="relative cursor-pointer select-none hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors py-1 group"
                >
                  {link}
                  {/* Active Indicator Underline */}
                  {isActive && (
                    <span className="absolute bottom-[-6px] left-0 right-0 h-[4px] bg-yellow-400 dark:bg-yellow-400 border border-black dark:border-zinc-800 rounded-sm" />
                  )}
                  {/* Hover indicator nudge */}
                  {!isActive && (
                    <span className="absolute bottom-[-6px] left-0 right-0 h-[4px] bg-yellow-400 border border-black rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              );
            })}
          </div>

          {/* DESKTOP SOCIALS & TOGGLE */}
          <div className="hidden md:flex items-center gap-4">
            {/* GitHub Button */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 border-2 border-black text-black dark:text-white shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_#facc15] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] dark:hover:shadow-[4px_4px_0px_#facc15] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] dark:active:shadow-[1px_1px_0px_#facc15] transition-all"
              aria-label="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 border-2 border-black text-black dark:text-white shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_#facc15] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] dark:hover:shadow-[4px_4px_0px_#facc15] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] dark:active:shadow-[1px_1px_0px_#facc15] transition-all"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Code / Portfolio Link */}
            <a
              href="#projects"
              onClick={() => setActiveLink("PROJECTS")}
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 border-2 border-black text-black dark:text-white shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_#facc15] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] dark:hover:shadow-[4px_4px_0px_#facc15] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] dark:active:shadow-[1px_1px_0px_#facc15] transition-all"
              aria-label="View Code Projects"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </a>

            {/* Mail Button */}
            <a
              href="mailto:contact@example.com"
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 border-2 border-black text-black dark:text-white shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_#facc15] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] dark:hover:shadow-[4px_4px_0px_#facc15] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] dark:active:shadow-[1px_1px_0px_#facc15] transition-all"
              aria-label="Contact Email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>

            {/* Dark Mode Toggle Switch Capsule */}
            <button
              onClick={toggleDarkMode}
              className={`w-14 h-7 border-2 border-black rounded-full relative shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#facc15] transition-colors duration-200 cursor-pointer ${
                darkMode ? "bg-zinc-700" : "bg-yellow-400"
              }`}
              aria-label="Toggle Theme"
            >
              <div
                className={`w-5 h-5 bg-white border-2 border-black rounded-full absolute top-[2px] transition-all duration-200 ${
                  darkMode ? "left-[30px]" : "left-[4px]"
                }`}
              />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE AND THEME TOGGLE ONLY */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Theme Toggle switch */}
            <button
              onClick={toggleDarkMode}
              className={`w-12 h-6 border-2 border-black rounded-full relative shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#facc15] transition-colors duration-200 cursor-pointer ${
                darkMode ? "bg-zinc-700" : "bg-yellow-400"
              }`}
              aria-label="Toggle Theme"
            >
              <div
                className={`w-4 h-4 bg-white border-2 border-black rounded-full absolute top-[2px] transition-all duration-200 ${
                  darkMode ? "left-[24px]" : "left-[3px]"
                }`}
              />
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center bg-white dark:bg-zinc-800 border-2 border-black text-black dark:text-white shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#facc15] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] dark:active:shadow-[1px_1px_0px_#facc15] transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? (
                // Close SVG Icon
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // Menu SVG Icon
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU CONTAINER DRAWER */}
        {menuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t-2 border-dashed border-black dark:border-zinc-700 flex flex-col gap-4 font-sans font-bold text-sm tracking-wider">
            {/* Nav links list */}
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeLink === link;
                return (
                  <button
                    key={link}
                    onClick={() => {
                      setActiveLink(link);
                      setMenuOpen(false);
                    }}
                    className={`text-left py-2 px-3 border-2 border-black transition-colors ${
                      isActive
                        ? "bg-yellow-400 text-black shadow-[2px_2px_0px_#000000]"
                        : "bg-white dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {link}
                  </button>
                );
              })}
            </div>

            {/* Social Links Icons line */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 border-2 border-black text-black dark:text-white shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#facc15] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] dark:active:shadow-[1px_1px_0px_#facc15] transition-all"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 border-2 border-black text-black dark:text-white shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#facc15] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] dark:active:shadow-[1px_1px_0px_#facc15] transition-all"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="#projects"
                onClick={() => {
                  setActiveLink("PROJECTS");
                  setMenuOpen(false);
                }}
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 border-2 border-black text-black dark:text-white shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#facc15] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] dark:active:shadow-[1px_1px_0px_#facc15] transition-all"
                aria-label="Projects"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </a>

              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 border-2 border-black text-black dark:text-white shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#facc15] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] dark:active:shadow-[1px_1px_0px_#facc15] transition-all"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
