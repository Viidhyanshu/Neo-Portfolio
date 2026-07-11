"use client";

import React, { useState } from "react";
import type { Week } from "./types";
import { getMonthLabels } from "./utils";

const CELL = 13;
const GAP  = 3;
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

interface HeatmapProps {
  weeks: Week[];
  colorMap: string[];   
  accentColor: string;   
}

export default function Heatmap({ weeks, colorMap, accentColor }: HeatmapProps) {
  const [hovered, setHovered] = useState<{
    day: { date: string; count: number };
    x: number;
    y: number;
  } | null>(null);

  const labels = getMonthLabels(weeks);

  return (
    <div className="overflow-x-auto">
      <div className="relative inline-block min-w-max">

        {/*Month labels row */}
        <div className="flex mb-1 pl-8">
          {weeks.map((_, wi) => {
            const lbl = labels.find((m) => m.weekIdx === wi);
            return (
              <div
                key={wi}
                style={{ width: CELL + GAP }}
                className="font-mono text-[10px] font-bold text-black text-left"
              >
                {lbl ? lbl.label : ""}
              </div>
            );
          })}
        </div>

        <div className="flex gap-0">
          {/* Day-of-week labels*/}
          <div className="flex flex-col mr-1" style={{ gap: GAP }}>
            {DAY_LABELS.map((d, i) => (
              <div
                key={i}
                style={{ height: CELL }}
                className="font-mono text-[10px] font-bold text-black flex items-center pr-1 w-7 justify-end"
              >
                {d}
              </div>
            ))}
          </div>

          {/*Cell grid*/}
          <div className="flex" style={{ gap: GAP }}>
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                {week.days.map((day, di) => {
                  const empty  = day.count < 0;
                  const color  = empty ? "transparent" : colorMap[day.level ?? 0];
                  const isHov  = hovered?.day.date === day.date && !!day.date;

                  return (
                    <div
                      key={di}
                      style={{
                        width: CELL,
                        height: CELL,
                        backgroundColor: color,
                        border: empty
                          ? "none"
                          : isHov
                          ? "2px solid #000"
                          : "1.5px solid rgba(0,0,0,0.18)",
                        borderRadius: 2,
                        cursor: empty ? "default" : "pointer",
                        transform: isHov ? "scale(1.35)" : "scale(1)",
                        transition: "transform 0.1s ease",
                        position: "relative",
                        zIndex: isHov ? 10 : 1,
                      }}
                      onMouseEnter={(e) => {
                        if (!empty) {
                          const r = (e.target as HTMLElement).getBoundingClientRect();
                          setHovered({ day, x: r.left, y: r.top });
                        }
                      }}
                      onMouseLeave={() => setHovered(null)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/*Legend */}
        <div className="flex items-center justify-end gap-2 mt-3">
          <span className="font-mono text-[10px] font-bold text-black">Less</span>
          {[0, 1, 2, 3, 4].map((lvl) => (
            <div
              key={lvl}
              style={{
                width: 11,
                height: 11,
                backgroundColor: colorMap[lvl],
                border: "1.5px solid rgba(0,0,0,0.25)",
                borderRadius: 2,
              }}
            />
          ))}
          <span className="font-mono text-[10px] font-bold text-black">More</span>
        </div>
      </div>

      {hovered && hovered.day.date && (
        <div
          className="fixed z-[9999] pointer-events-none"
          style={{ left: hovered.x - 60, top: hovered.y - 52 }}
        >
          <div className="bg-black text-white font-mono text-[11px] font-bold px-3 py-2 shadow-[3px_3px_0px_#333] border border-black whitespace-nowrap">
            <span style={{ color: accentColor }}>{hovered.day.count}</span>
            {" submission"}
            {hovered.day.count !== 1 ? "s" : ""} on {hovered.day.date}
          </div>
        </div>
      )}
    </div>
  );
}
