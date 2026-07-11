"use client";

import React, { useState } from "react";
import { CONTACT_CARDS } from "./constants";
import type { ContactCardInfo } from "./types";

interface ContactCardsProps {
  isVisible: boolean;
}

export default function ContactCards({ isVisible }: ContactCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10 my-16">
      {CONTACT_CARDS.map((card, idx) => (
        <ContactCard key={card.name} card={card} index={idx} isVisible={isVisible} />
      ))}
    </div>
  );
}

function ContactCard({ card, index, isVisible }: { card: ContactCardInfo; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-white border-3 border-black p-6 flex flex-col items-center justify-center text-center transition-all duration-700 ease-out transform cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Brutalist Shadow Box Accent behind card */}
      <div
        className={`absolute inset-0 -z-10 ${card.shadowColor} border-3 border-black transition-transform duration-150 ease-out ${
          isHovered ? "translate-x-[9px] translate-y-[9px]" : "translate-x-[6px] translate-y-[6px]"
        }`}
      />

      {/* Centered Yellow/Purple Icon Badge */}
      <div className={`w-14 h-14 ${card.bg} border-3 border-black flex items-center justify-center shadow-[3.5px_3.5px_0px_#000] mb-4`}>
        {card.icon}
      </div>

      {/* Title */}
      <div className="font-mono font-black text-lg text-black tracking-wider mb-1 uppercase">
        {card.name}
      </div>

      {/* Subtext Username/Address */}
      <div className="font-mono text-xs font-bold text-zinc-800 break-all px-2">
        {card.value}
      </div>
    </a>
  );
}
