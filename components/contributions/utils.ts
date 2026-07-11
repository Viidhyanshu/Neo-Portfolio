import type { Day, Week, LCStats, LCFetchResult } from "./types";

export const GITHUB_USERNAME   = "Viidhyanshu";
export const LEETCODE_USERNAME = "Viidhyanshu";

export const MONTH_NAMES = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

export const GH_COLORS = ["#e8e5e0","#9be9a8","#40c463","#30a14e","#216e39"];
export const LC_COLORS = ["#e8e5e0","#fde68a","#fbbf24","#f59e0b","#d97706"];

export function groupIntoWeeks(days: Day[]): Week[] {
  const weeks: Week[] = [];
  let current: Day[] = [];

  for (let i = 0; i < days.length; i++) {
    if (i === 0) {
      const dow = new Date(days[0].date).getDay();
      for (let p = 0; p < dow; p++)
        current.push({ date: "", count: -1, level: -1 });
    }
    current.push(days[i]);
    if (current.length === 7) {
      weeks.push({ days: current });
      current = [];
    }
  }
  if (current.length) {
    while (current.length < 7) current.push({ date: "", count: -1, level: -1 });
    weeks.push({ days: current });
  }
  return weeks;
}

export function getMonthLabels(weeks: Week[]): { label: string; weekIdx: number }[] {
  const out: { label: string; weekIdx: number }[] = [];
  let last = -1;
  weeks.forEach((w, wi) => {
    const v = w.days.find((d) => d.date && d.count >= 0);
    if (v) {
      const m = new Date(v.date).getMonth();
      if (m !== last) {
        out.push({ label: MONTH_NAMES[m], weekIdx: wi });
        last = m;
      }
    }
  });
  return out;
}

export function totalFromWeeks(weeks: Week[]): number {
  return weeks.reduce(
    (s, w) => s + w.days.reduce((ss, d) => (d.count > 0 ? ss + d.count : ss), 0),
    0
  );
}

export function calcStreak(weeks: Week[]): number {
  const days = weeks.flatMap((w) => w.days.filter((d) => !!d.date));
  const today = new Date().toISOString().split("T")[0];
  let streak = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].date > today) continue;
    if (days[i].count > 0) streak++;
    else if (days[i].date < today) break;
  }
  return streak;
}

export function activeDaysFromWeeks(weeks: Week[]): number {
  return weeks.flatMap((w) => w.days).filter((d) => d.count > 0).length;
}

// API: GITHUB
export async function fetchGitHub(username: string): Promise<Week[]> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    const days: Day[] = data.contributions;
    return groupIntoWeeks(days);
  } catch {
    return [];
  }
}

//  API: LEETCODE 
export async function fetchLeetCode(username: string): Promise<LCFetchResult> {
  try {
    const year = new Date().getFullYear();
    const [calRes, profileRes] = await Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar?year=${year}`, { cache: "no-store" }),
      fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`, { cache: "no-store" }),
    ]);

    if (!calRes.ok) throw new Error();
    const calData = await calRes.json();

    const rawCal: Record<string, number> =
      typeof calData.submissionCalendar === "string"
        ? JSON.parse(calData.submissionCalendar)
        : calData.submissionCalendar ?? {};

    const today = new Date();
    const dateCountMap: Record<string, number> = {};

    for (const [ts, cnt] of Object.entries(rawCal)) {
      const iso = new Date(Number(ts) * 1000).toISOString().split("T")[0];
      dateCountMap[iso] = (dateCountMap[iso] ?? 0) + cnt;
    }

    // Fill gaps near year boundary with previous year data
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
          const iso = new Date(Number(ts) * 1000).toISOString().split("T")[0];
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
      const level =
        count === 0 ? 0 : count <= 1 ? 1 : count <= 3 ? 2 : count <= 6 ? 3 : 4;
      days.push({ date: iso, count, level });
    }

    const weeks = groupIntoWeeks(days);

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
