import React from "react";

export interface ContactCardInfo {
  name: string;
  value: string;
  href: string;
  bg: string; // color for icon badge
  shadowColor: string; // shadow background block color
  icon: React.ReactNode;
}
