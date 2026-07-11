"use client";

import React, { useState, useEffect, useRef } from "react";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const GITHUB_USERNAME  = "Viidhyanshu";
const LEETCODE_USERNAME = "Viidhyanshu";

// ─── COLORS ──────────────────────────────────────────────────────────────────
const GH_COLORS: Record<number, string> = {
  0: "#e8e5e0",
  1: "#9be9a8",
  2: "#40c463",
  3: "#30a14e",
  4: "#216e39",
};

// Orange/amber palette for LeetCode to visually differentiate
const LC_COLORS = ["#e8e5e0", "#fde68a", "#fbbf24", "#f59e0b", "#d97706"];

const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface Day {
  date: string;
  count: number;
  level: number; // 0-4
}
interface Week { days: Day[]; }

// ─── GITHUB FETCH ────────────────────────────────────────────────────────────
async function fetchGitHub(username: string): Promise<Week[]> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    const days: Day[] = data.contributions;
    return groupIntoWeeks(days);
  } catch { return []; }
}

// ─── LEETCODE FETCH ───────────────────────────────────────────────────────────
interface LCStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSubmissions: { difficulty: string; count: number }[];
  ranking: number;
  activeDays: number;
  streak: number;
}

async function fetchLeetCode(username: string): Promise<{
  weeks: Week[];
  stats: LCStats | null;
  totalSubmissions: number;
}> {
  try {
    // Fetch calendar (current year + previous year for full 52 weeks)
    const year = new Date().getFullYear();
    const [calRes, profileRes] = await Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar?year=${year}`, { cache: "no-store" }),
      fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`, { cache: "no-store" }),
    ]);

    if (!calRes.ok) throw new Error();
    const calData = await calRes.json();

    // submissionCalendar is a JSON-stringified object: { "<unix_ts_seconds>": count }
    const rawCal: Record<string, number> =
      typeof calData.submissionCalendar === "string"
        ? JSON.parse(calData.submissionCalendar)
        : calData.submissionCalendar ?? {};

    // Build a map of date string → count for the last 365 days
    const today = new Date();
    const dateCountMap: Record<string, number> = {};
    for (const [ts, cnt] of Object.entries(rawCal)) {
      const d = new Date(Number(ts) * 1000);
      const iso = d.toISOString().split("T")[0];
      dateCountMap[iso] = (dateCountMap[iso] ?? 0) + cnt;
    }

    // Also try previous year calendar to fill any gaps near year boundary
    try {
      const prevRes = await fetch(
        `https://alfa-leetcode-api.onrender.com/${username}/calendar?year=${year - 1}`,
        { cache: "no-store" }
      );
      if (prevRes.ok) {
        const prevData = await prevRes.json();
        const prevRaw: Record<string, number> =
          typeof prevData.submissionCalendar === "string"
            ? JSON.parse(prevData.submissionCalendar)
            : prevData.submissionCalendar ?? {};
        for (const [ts, cnt] of Object.entries(prevRaw)) {
          const d = new Date(Number(ts) * 1000);
          const iso = d.toISOString().split("T")[0];
          dateCountMap[iso] = (dateCountMap[iso] ?? 0) + cnt;
        }
      }
    } catch { /* ignore */ }

    // Build last-365-days array
    const days: Day[] = [];
    for (let i = 364; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const iso = d.toISOString().split("T")[0];
      const count = dateCountMap[iso] ?? 0;
      const level = count === 0 ? 0 : count <= 1 ? 1 : count <= 3 ? 2 : count <= 6 ? 3 : 4;
      days.push({ date: iso, count, level });
    }

    const weeks = groupIntoWeeks(days);

    // Parse profile stats
    let stats: LCStats | null = null;
    if (profileRes.ok) {
      const p = await profileRes.json();
      stats = {
        totalSolved: p.totalSolved ?? 0,
        easySolved: p.easySolved ?? 0,
        mediumSolved: p.mediumSolved ?? 0,
        hardSolved: p.hardSolved ?? 0,
        totalSubmissions: p.totalSubmissions ?? [],
        ranking: p.ranking ?? 0,
        activeDays: p.totalActiveDays ?? 0,
        streak: p.streak ?? 0,
      };
    }

    const totalSubmissions = Object.values(dateCountMap).reduce((s, n) => s + n, 0);
    return { weeks, stats, totalSubmissions };
  } catch {
    return { weeks: [], stats: null, totalSubmissions: 0 };
  }
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function groupIntoWeeks(days: Day[]): Week[] {
  const weeks: Week[] = [];
  let current: Day[] = [];
  for (let i = 0; i < days.length; i++) {
    if (i === 0) {
      const dow = new Date(days[0].date).getDay();
      for (let p = 0; p < dow; p++) current.push({ date: "", count: -1, level: -1 });
    }
    current.push(days[i]);
    if (current.length === 7) { weeks.push({ days: current }); current = []; }
  }
  if (current.length) {
    while (current.length < 7) current.push({ date: "", count: -1, level: -1 });
    weeks.push({ days: current });
  }
  return weeks;
}

function monthLabels(weeks: Week[]): { label: string; weekIdx: number }[] {
  const out: { label: string; weekIdx: number }[] = [];
  let last = -1;
  weeks.forEach((w, wi) => {
    const v = w.days.find(d => d.date && d.count >= 0);
    if (v) {
      const m = new Date(v.date).getMonth();
      if (m !== last) { out.push({ label: MONTH_NAMES[m], weekIdx: wi }); last = m; }
    }
  });
  return out;
}

function totalFromWeeks(weeks: Week[]) {
  return weeks.reduce((s, w) => s + w.days.reduce((ss, d) => d.count > 0 ? ss + d.count : ss, 0), 0);
}

function calcStreak(weeks: Week[]) {
  const days = weeks.flatMap(w => w.days.filter(d => !!d.date));
  const today = new Date().toISOString().split("T")[0];
  let streak = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].date > today) continue;
    if (days[i].count > 0) streak++;
    else if (days[i].date < today) break;
  }
  return streak;
}

function activeDaysFromWeeks(weeks: Week[]) {
  return weeks.flatMap(w => w.days).filter(d => d.count > 0).length;
}

// ─── REUSABLE HEATMAP ─────────────────────────────────────────────────────────
const CELL = 13;
const GAP  = 3;
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

interface HeatmapProps {
  weeks: Week[];
  colorMap: string[];
  accentColor: string; // for tooltip highlight
}

function Heatmap({ weeks, colorMap, accentColor }: HeatmapProps) {
  const [hovered, setHovered] = useState<{ day: Day; x: number; y: number } | null>(null);
  const labels = monthLabels(weeks);

  return (
    <div className="overflow-x-auto">
      <div className="relative inline-block min-w-max">
        {/* Month row */}
        <div className="flex mb-1 pl-8">
          {weeks.map((_, wi) => {
            const lbl = labels.find(m => m.weekIdx === wi);
            return (
              <div key={wi} style={{ width: CELL + GAP }} className="font-mono text-[10px] font-bold text-black text-left">
                {lbl ? lbl.label : ""}
              </div>
            );
          })}
        </div>

        <div className="flex gap-0">
          {/* Day labels */}
          <div className="flex flex-col mr-1" style={{ gap: GAP }}>
            {DAY_LABELS.map((d, i) => (
              <div key={i} style={{ height: CELL }} className="font-mono text-[10px] font-bold text-black flex items-center pr-1 w-7 justify-end">
                {d}
              </div>
            ))}
          </div>

          {/* Cells */}
          <div className="flex" style={{ gap: GAP }}>
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                {week.days.map((day, di) => {
                  const empty = day.count < 0;
                  const color = empty ? "transparent" : colorMap[day.level ?? 0];
                  const isH = hovered?.day.date === day.date && day.date;
                  return (
                    <div
                      key={di}
                      style={{
                        width: CELL, height: CELL,
                        backgroundColor: color,
                        border: empty ? "none" : isH ? "2px solid #000" : "1.5px solid rgba(0,0,0,0.18)",
                        borderRadius: 2,
                        cursor: empty ? "default" : "pointer",
                        transform: isH ? "scale(1.35)" : "scale(1)",
                        transition: "transform 0.1s ease",
                        position: "relative",
                        zIndex: isH ? 10 : 1,
                      }}
                      onMouseEnter={e => {
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

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-3">
          <span className="font-mono text-[10px] font-bold text-black">Less</span>
          {[0,1,2,3,4].map(lvl => (
            <div key={lvl} style={{ width:11, height:11, backgroundColor: colorMap[lvl], border:"1.5px solid rgba(0,0,0,0.25)", borderRadius:2 }} />
          ))}
          <span className="font-mono text-[10px] font-bold text-black">More</span>
        </div>
      </div>

      {/* Tooltip */}
      {hovered && hovered.day.date && (
        <div className="fixed z-[9999] pointer-events-none" style={{ left: hovered.x - 60, top: hovered.y - 52 }}>
          <div className="bg-black text-white font-mono text-[11px] font-bold px-3 py-2 shadow-[3px_3px_0px_#333] border border-black whitespace-nowrap">
            <span style={{ color: accentColor }}>{hovered.day.count}</span>
            {" submission"}{hovered.day.count !== 1 ? "s" : ""} on {hovered.day.date}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── LOADING DOTS ─────────────────────────────────────────────────────────────
function LoadingDots() {
  return (
    <div className="flex items-center justify-center h-[130px]">
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-black animate-bounce" style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function GitHubContributions() {
  // ── GitHub state
  const [ghWeeks, setGhWeeks]   = useState<Week[]>([]);
  const [ghLoading, setGhLoading] = useState(true);
  const [ghError, setGhError]   = useState(false);

  // ── LeetCode state
  const [lcWeeks, setLcWeeks]   = useState<Week[]>([]);
  const [lcStats, setLcStats]   = useState<LCStats | null>(null);
  const [lcLoading, setLcLoading] = useState(true);
  const [lcError, setLcError]   = useState(false);
  const [lcTotal, setLcTotal]   = useState(0);

  // ── Visibility / intersection
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // ── Cycling header colors
  const accentColors  = ["bg-emerald-400","bg-yellow-400","bg-[#8b5cf6]","bg-[#fa5b8d]","bg-cyan-400"];
  const subtitleColors = ["bg-[#8b5cf6]","bg-emerald-400","bg-yellow-400","bg-[#fa5b8d]","bg-orange-400"];
  const squareColors  = ["bg-emerald-400","bg-yellow-400","bg-[#8b5cf6]","bg-[#fa5b8d]","bg-orange-400"];
  const [accentIdx, setAccentIdx] = useState(0);
  const [subtitleIdx, setSubtitleIdx] = useState(0);
  const [lSqIdx, setLSqIdx] = useState(0);
  const [rSqIdx, setRSqIdx] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setIsVisible(e.isIntersecting), { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    fetchGitHub(GITHUB_USERNAME).then(data => {
      if (!data.length) setGhError(true);
      else setGhWeeks(data);
      setGhLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchLeetCode(LEETCODE_USERNAME).then(({ weeks, stats, totalSubmissions }) => {
      if (!weeks.length) setLcError(true);
      else setLcWeeks(weeks);
      setLcStats(stats);
      setLcTotal(totalSubmissions);
      setLcLoading(false);
    });
  }, []);

  const ghTotal  = totalFromWeeks(ghWeeks);
  const ghStreak = calcStreak(ghWeeks);

  // LeetCode computed
  const lcActiveDays = activeDaysFromWeeks(lcWeeks);
  const lcStreak     = calcStreak(lcWeeks);

  const fadeIn = (delay = 0) =>
    `transition-all duration-700 ease-out transform ${
      isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
    }` + (delay ? ` delay-[${delay}ms]` : "");

  return (
    <section
      id="github-contributions"
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 py-20 md:px-8 border-t-4 border-black relative overflow-visible z-0"
    >
      {/* ═══════════════════════════ SECTION HEADER ═══════════════════════════ */}
      <div className={`w-full flex items-center justify-between gap-4 mb-14 select-none relative z-10 ${fadeIn()}`}>
        {/* Left decor */}
        <div className="hidden md:flex items-center gap-6">
          <div
            onClick={() => setLSqIdx(p => (p+1) % squareColors.length)}
            className={`w-[60px] h-[60px] ${squareColors[lSqIdx]} border-4 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
            title="Click to change color!"
          />
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-[5.5px] h-[5.5px] bg-black rounded-full" />
            ))}
          </div>
        </div>

        {/* Center title */}
        <div className="flex flex-col items-center mx-auto relative overflow-visible">
          <div
            onClick={() => setAccentIdx(p => (p+1) % accentColors.length)}
            className={`relative ${accentColors[accentIdx]} border-4 border-black text-black px-10 py-5 shadow-[6px_6px_0px_#000000] font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-widest uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-100 z-10`}
            title="Click to change color!"
          >
            CONTRIBUTIONS
          </div>
          <div
            onClick={() => setSubtitleIdx(p => (p+1) % subtitleColors.length)}
            className={`mt-[-8px] relative ${subtitleColors[subtitleIdx]} border-3 border-black text-black px-4 py-2.5 shadow-[4px_4px_0px_#000000] font-mono font-bold text-[10px] sm:text-xs tracking-wider uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-100 z-20 text-center`}
            title="Click to change color!"
          >
            GITHUB · LEETCODE · LIVE DATA
          </div>
        </div>

        {/* Right decor */}
        <div className="hidden md:flex items-center gap-6">
          <div className="text-black text-3xl font-black">+</div>
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round">
            <path d="M 4 15 L 14 5 L 24 15 L 34 5 L 44 15 L 54 5" />
          </svg>
          <div
            onClick={() => setRSqIdx(p => (p+1) % squareColors.length)}
            className={`w-[60px] h-[60px] ${squareColors[rSqIdx]} border-4 border-black shadow-[4px_4px_0px_#000000] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100`}
            title="Click to change color!"
          />
        </div>
      </div>

      {/* ═══════════════════════════ GITHUB CARD ══════════════════════════════ */}
      <div className={`relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 ease-out delay-150`}>
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000000] p-6 md:p-8">
          {/* Card header */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_#000] flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <div>
                <div className="font-mono font-black text-base sm:text-lg text-black tracking-wider uppercase">{GITHUB_USERNAME}</div>
                <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-black underline decoration-2 underline-offset-2 hover:text-[#216e39] transition-colors">
                  github.com/{GITHUB_USERNAME} ↗
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {!ghLoading && !ghError && (
                <div className="font-mono text-xs font-bold text-black border-2 border-black px-3 py-1 bg-emerald-100">
                  <span className="font-black text-black">{ghTotal.toLocaleString()}</span> contributions in the last year
                </div>
              )}
              <div className="flex items-center gap-2 border-3 border-black px-3 py-1.5 bg-emerald-400 shadow-[3px_3px_0px_#000]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black" />
                </span>
                <span className="font-mono font-bold text-xs text-black tracking-widest uppercase">LIVE</span>
              </div>
            </div>
          </div>

          {ghLoading ? <LoadingDots /> : ghError ? (
            <ErrorState href={`https://github.com/${GITHUB_USERNAME}`} label="View on GitHub" />
          ) : (
            <Heatmap weeks={ghWeeks} colorMap={Object.values(GH_COLORS)} accentColor="#40c463" />
          )}
        </div>
      </div>



      {/* ═══════════════════════════ LEETCODE CARD ════════════════════════════ */}
      <div className={`relative z-10 mt-8 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 ease-out delay-300`}>
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000000] p-6 md:p-8">
          {/* Card header */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              {/* LeetCode logo */}
              <div className="w-10 h-10 bg-[#FFA116] flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_#000] flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </div>
              <div>
                <div className="font-mono font-black text-base sm:text-lg text-black tracking-wider uppercase">{LEETCODE_USERNAME}</div>
                <a href={`https://leetcode.com/${LEETCODE_USERNAME}`} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-black underline decoration-2 underline-offset-2 hover:text-[#FFA116] transition-colors">
                  leetcode.com/{LEETCODE_USERNAME} ↗
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {!lcLoading && !lcError && lcTotal > 0 && (
                <div className="font-mono text-xs font-bold text-black border-2 border-black px-3 py-1 bg-amber-100">
                  <span className="font-black text-black">{lcTotal.toLocaleString()}</span> submissions in the past year
                </div>
              )}
              {!lcLoading && !lcError && lcStats && (
                <div className="flex gap-2 flex-wrap">
                  <div className="font-mono text-xs font-bold text-black border-2 border-black px-2 py-1 bg-green-100">
                    E: <span className="font-black">{lcStats.easySolved}</span>
                  </div>
                  <div className="font-mono text-xs font-bold text-black border-2 border-black px-2 py-1 bg-yellow-100">
                    M: <span className="font-black">{lcStats.mediumSolved}</span>
                  </div>
                  <div className="font-mono text-xs font-bold text-black border-2 border-black px-2 py-1 bg-red-100">
                    H: <span className="font-black">{lcStats.hardSolved}</span>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2 border-3 border-black px-3 py-1.5 bg-[#FFA116] shadow-[3px_3px_0px_#000]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black" />
                </span>
                <span className="font-mono font-bold text-xs text-black tracking-widest uppercase">LIVE</span>
              </div>
            </div>
          </div>

          {lcLoading ? <LoadingDots /> : lcError ? (
            <ErrorState href={`https://leetcode.com/${LEETCODE_USERNAME}`} label="View on LeetCode" />
          ) : (
            <Heatmap weeks={lcWeeks} colorMap={LC_COLORS} accentColor="#FFA116" />
          )}
        </div>
      </div>


    </section>
  );
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────
function StatCard({ label, value, accent, href }: { label: string; value: string; accent: string; href?: string }) {
  return (
    <div className={`${accent} border-4 border-black shadow-[5px_5px_0px_#000] p-4 flex flex-col gap-1 hover:shadow-[7px_7px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150`}>
      <div className="font-mono text-[10px] font-extrabold text-black tracking-widest uppercase opacity-70">{label}</div>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer"
          className="font-sans font-black text-xl text-black tracking-tight underline decoration-2">
          {value}
        </a>
      ) : (
        <div className="font-sans font-black text-xl text-black tracking-tight">{value}</div>
      )}
    </div>
  );
}

// ─── ERROR STATE ─────────────────────────────────────────────────────────────
function ErrorState({ href, label }: { href: string; label: string }) {
  return (
    <div className="flex items-center justify-center h-[120px] border-3 border-dashed border-black">
      <div className="text-center font-mono">
        <div className="text-2xl font-black mb-1">⚠</div>
        <div className="text-sm font-bold text-black">Could not load data.</div>
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs underline decoration-2">{label} ↗</a>
      </div>
    </div>
  );
}
