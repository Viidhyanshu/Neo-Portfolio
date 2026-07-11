import React from "react";
import type { Doodle, SocialCard } from "./types";

export const PURPLE_SQUARE_COLORS = ["bg-[#8b5cf6]", "bg-yellow-400", "bg-[#fa5b8d]", "bg-emerald-400", "bg-orange-400"];
export const ABOUT_BOX_COLORS = ["bg-white", "bg-yellow-400", "bg-[#8b5cf6]", "bg-emerald-400", "bg-[#fa5b8d]", "bg-orange-400"];
export const YELLOW_CIRCLE_COLORS = ["bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400", "bg-orange-400"];
export const NAME_HIGHLIGHT_COLORS = ["bg-yellow-400", "bg-emerald-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-orange-400"];
export const L_SHAPE_COLORS = ["#fa5b8d", "#8b5cf6", "#facc15", "#10b981", "#f97316"];

export const DOODLE_COLORS = [
  "text-[#fa5b8d]",
  "text-[#8b5cf6]",
  "text-yellow-500",
  "text-emerald-500",
  "text-orange-500",
  "text-blue-500",
];

export const DOODLE_DATA: Doodle[] = [
  { type: "star", style: { top: "5%", left: "3%" }, rotate: "rotate-[12deg]" },
  { type: "plus", style: { top: "8%", left: "20%" }, rotate: "rotate-[-5deg]" },
  { type: "zigzag", style: { top: "25%", left: "2%" }, rotate: "rotate-[45deg]" },
  { type: "chevron", style: { bottom: "8%", left: "5%" }, rotate: "rotate-[90deg]" },
  { type: "x", style: { bottom: "3%", left: "18%" }, rotate: "rotate-[-20deg]" },
  { type: "spiral", style: { top: "6%", right: "22%" }, rotate: "rotate-[15deg]" },
  { type: "triangle", style: { top: "30%", right: "3%" }, rotate: "rotate-[35deg]" },
  { type: "star", style: { bottom: "6%", right: "15%" }, rotate: "rotate-[-10deg]" },
  { type: "plus", style: { bottom: "2%", right: "5%" }, rotate: "rotate-[25deg]" },
  { type: "circle", style: { top: "12%", left: "45%" }, rotate: "rotate-[0deg]" },
  { type: "star", style: { bottom: "12%", left: "30%" }, rotate: "rotate-[40deg]" },
  { type: "x", style: { bottom: "14%", right: "35%" }, rotate: "rotate-[-15deg]" },
  { type: "chevron", style: { top: "45%", left: "52%" }, rotate: "rotate-[-90deg]" },
  { type: "plus", style: { top: "16%", left: "10%" }, rotate: "rotate-[0deg]" },
  { type: "zigzag", style: { top: "65%", left: "45%" }, rotate: "rotate-[0deg]" },
  { type: "spiral", style: { top: "20%", right: "38%" }, rotate: "rotate-[0deg]" },
  { type: "circle", style: { bottom: "20%", right: "36%" }, rotate: "rotate-[0deg]" },
  { type: "chevron", style: { top: "4%", left: "35%" }, rotate: "rotate-[180deg]" },
  { type: "x", style: { top: "4%", right: "32%" }, rotate: "rotate-[45deg]" },
  { type: "star", style: { top: "50%", left: "1%" }, rotate: "rotate-[-30deg]" },
  { type: "plus", style: { top: "55%", right: "1%" }, rotate: "rotate-[10deg]" },
  { type: "zigzag", style: { bottom: "4%", left: "50%" }, rotate: "rotate-[-10deg]" },
  { type: "triangle", style: { bottom: "3%", left: "38%" }, rotate: "rotate-[75deg]" },
  { type: "chevron", style: { bottom: "3%", right: "28%" }, rotate: "rotate-[45deg]" },
];
