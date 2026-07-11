"use client";

import React, { useState, useEffect, useRef } from "react";
import AboutHeader  from "./AboutHeader";
import AboutDoodles from "./AboutDoodles";
import AboutBio     from "./AboutBio";
import AboutSocials from "./AboutSocials";

export default function About() {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 py-20 md:px-8 border-t-4 border-black relative overflow-visible z-0 scroll-mt-[100px] md:scroll-mt-[140px]"
    >
      {/* Scattered Interactive Background Doodles */}
      <AboutDoodles isVisible={isVisible} />

      {/* Header Title Grid */}
      <AboutHeader isVisible={isVisible} />

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        <AboutBio     isVisible={isVisible} />
        <AboutSocials isVisible={isVisible} />
      </div>
    </section>
  );
}
