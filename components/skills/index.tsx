"use client";

import React, { useState, useEffect, useRef } from "react";
import SkillsHeader from "./SkillsHeader";
import SkillDoodles from "./SkillDoodles";
import SkillCard    from "./SkillCard";
import { CATEGORIES } from "./constants";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      {/* Scattered background shape doodles */}
      <SkillDoodles isVisible={isVisible} />

      {/* Title Header */}
      <SkillsHeader isVisible={isVisible} />

      {/* Labeled Skill Categories */}
      <div className="relative z-10 space-y-10">
        {CATEGORIES.map((cat, catIdx) => (
          <div
            key={cat.label}
            className={`transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${200 + catIdx * 150}ms` }}
          >
            {/* Category label */}
            <div className="flex items-center gap-4 mb-5">
              <div
                className={`${cat.accent} border-3 border-black shadow-[3px_3px_0px_#000000]
                  px-4 py-1.5 font-mono font-black text-xs sm:text-sm tracking-widest text-black uppercase`}
              >
                {cat.label}
              </div>
              <div className="flex-1 h-[3px] bg-black" />
            </div>

            {/* Grid of skill cards */}
            <div className="flex flex-wrap justify-start gap-4">
              {cat.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
