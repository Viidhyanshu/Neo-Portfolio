import React from "react";

export interface Doodle {
  type: string;
  style: React.CSSProperties;
  rotate: string;
}

export interface SocialCard {
  name: string;
  value: string;
  href: string;
  bg: string;
  icon: React.ReactNode;
}
