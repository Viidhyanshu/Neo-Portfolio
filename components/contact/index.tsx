"use client";

import React, { useState, useEffect, useRef } from "react";
import ContactHeader from "./ContactHeader";
import ContactCards  from "./ContactCards";
import ContactFooter from "./ContactFooter";

export default function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      className="w-full relative overflow-visible z-0 mt-20 scroll-mt-[100px] md:scroll-mt-[140px]"
    >
      {/* ── Main content grid container ── */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 border-t-4 border-black pt-20 relative overflow-visible z-10 mb-16">
        {/* Header grid */}
        <ContactHeader isVisible={isVisible} />

        {/* Contact cards row */}
        <ContactCards isVisible={isVisible} />
      </div>

      {/* ── Footer section ── */}
      <ContactFooter />
    </section>
  );
}
