import React from "react";

export const renderDoodleIcon = (type: string) => {
  switch (type) {
    case "star":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M 12 0 C 12 8, 8 12, 0 12 C 8 12, 12 16, 12 24 C 12 16, 16 12, 24 12 C 16 12, 12 8, 12 0 Z" stroke="black" strokeWidth="2" />
        </svg>
      );
    case "plus":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="4" y1="12" x2="20" y2="12" />
        </svg>
      );
    case "x":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="4" y1="4" x2="16" y2="16" />
          <line x1="16" y1="4" x2="4" y2="16" />
        </svg>
      );
    case "chevron":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 17 13 10 6 3" />
        </svg>
      );
    case "zigzag":
      return (
        <svg width="35" height="15" viewBox="0 0 35 15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M 3 12 L 10 3 L 18 12 L 25 3 L 32 12" />
        </svg>
      );
    case "spiral":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M 6 18 C 2 14, 5 6, 12 6 C 19 6, 22 14, 17 20 C 12 25, 5 20, 10 14 C 15 8, 22 15, 19 20" />
        </svg>
      );
    case "triangle":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 3 21 20 3 20" stroke="black" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case "circle":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
          <circle cx="11" cy="11" r="8" stroke="black" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
};
