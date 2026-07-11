"use client";

import React, { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import GitHubCard    from "./GitHubCard";
import LeetCodeCard  from "./LeetCodeCard";

export default function ContributionsSection() {
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
      id="contributions"
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 py-20 md:px-8 border-t-4 border-black relative overflow-visible z-0"
    >
      <SectionHeader isVisible={isVisible} />
      <GitHubCard    isVisible={isVisible} />
      <LeetCodeCard  isVisible={isVisible} />
    </section>
  );
}
