"use client";

import React, { useState, useEffect } from "react";
import Heatmap from "./Heatmap";
import LoadingDots from "./LoadingDots";
import ErrorState from "./ErrorState";
import { fetchLeetCode, LC_COLORS, LEETCODE_USERNAME } from "./utils";
import type { Week, LCStats } from "./types";

interface LeetCodeCardProps {
  isVisible: boolean;
}

export default function LeetCodeCard({ isVisible }: LeetCodeCardProps) {
  const [weeks, setWeeks]     = useState<Week[]>([]);
  const [stats, setStats]     = useState<LCStats | null>(null);
  const [total, setTotal]     = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => {
    fetchLeetCode(LEETCODE_USERNAME).then(({ weeks, stats, totalSubmissions }) => {
      if (!weeks.length) setError(true);
      else setWeeks(weeks);
      setStats(stats);
      setTotal(totalSubmissions);
      setLoading(false);
    });
  }, []);

  return (
    <div
      className={`relative z-10 mt-8 transition-all duration-700 ease-out delay-300 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000000] p-6 md:p-8">

        {/*Card header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            {/* LeetCode icon */}
            <div className="w-10 h-10 bg-[#FFA116] flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_#000] flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
            </div>

            <div>
              <div className="font-mono font-black text-base sm:text-lg text-black tracking-wider uppercase">
                {LEETCODE_USERNAME}
              </div>
              <a
                href={`https://leetcode.com/${LEETCODE_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-black underline decoration-2 underline-offset-2 hover:text-[#FFA116] transition-colors"
              >
                leetcode.com/{LEETCODE_USERNAME} ↗
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Submission count badge */}
            {!loading && !error && total > 0 && (
              <div className="font-mono text-xs font-bold text-black border-2 border-black px-3 py-1 bg-amber-100">
                <span className="font-black">{total.toLocaleString()}</span> submissions in the past year
              </div>
            )}

            {/* Easy / Medium / Hard badges */}
            {!loading && !error && stats && (
              <div className="flex gap-2 flex-wrap">
                <div className="font-mono text-xs font-bold text-black border-2 border-black px-2 py-1 bg-green-100">
                  E: <span className="font-black">{stats.easySolved}</span>
                </div>
                <div className="font-mono text-xs font-bold text-black border-2 border-black px-2 py-1 bg-yellow-100">
                  M: <span className="font-black">{stats.mediumSolved}</span>
                </div>
                <div className="font-mono text-xs font-bold text-black border-2 border-black px-2 py-1 bg-red-100">
                  H: <span className="font-black">{stats.hardSolved}</span>
                </div>
              </div>
            )}

            {/* Live badge */}
            <div className="flex items-center gap-2 border-3 border-black px-3 py-1.5 bg-[#FFA116] shadow-[3px_3px_0px_#000]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black" />
              </span>
              <span className="font-mono font-bold text-xs text-black tracking-widest uppercase">LIVE</span>
            </div>
          </div>
        </div>

        {/*Heatmap / loading / error */}
        {loading ? (
          <LoadingDots />
        ) : error ? (
          <ErrorState href={`https://leetcode.com/${LEETCODE_USERNAME}`} label="View on LeetCode" />
        ) : (
          <Heatmap weeks={weeks} colorMap={LC_COLORS} accentColor="#FFA116" />
        )}
      </div>
    </div>
  );
}
