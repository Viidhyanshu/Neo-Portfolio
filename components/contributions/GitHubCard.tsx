"use client";

import React, { useState, useEffect } from "react";
import Heatmap from "./Heatmap";
import LoadingDots from "./LoadingDots";
import ErrorState from "./ErrorState";
import { fetchGitHub, totalFromWeeks, GH_COLORS, GITHUB_USERNAME } from "./utils";
import type { Week } from "./types";

interface GitHubCardProps {
  isVisible: boolean;
}

export default function GitHubCard({ isVisible }: GitHubCardProps) {
  const [weeks, setWeeks]     = useState<Week[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => {
    fetchGitHub(GITHUB_USERNAME).then((data) => {
      if (!data.length) setError(true);
      else setWeeks(data);
      setLoading(false);
    });
  }, []);

  const total = totalFromWeeks(weeks);

  return (
    <div
      className={`relative z-10 transition-all duration-700 ease-out delay-150 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000000] p-6 md:p-8">

        {/* ── Card header ── */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            {/* GitHub icon */}
            <div className="w-10 h-10 bg-black flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_#000] flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </div>

            <div>
              <div className="font-mono font-black text-base sm:text-lg text-black tracking-wider uppercase">
                {GITHUB_USERNAME}
              </div>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-black underline decoration-2 underline-offset-2 hover:text-[#216e39] transition-colors"
              >
                github.com/{GITHUB_USERNAME} ↗
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Contribution count badge */}
            {!loading && !error && (
              <div className="font-mono text-xs font-bold text-black border-2 border-black px-3 py-1 bg-emerald-100">
                <span className="font-black">{total.toLocaleString()}</span> contributions in the last year
              </div>
            )}

            {/* Live badge */}
            <div className="flex items-center gap-2 border-3 border-black px-3 py-1.5 bg-emerald-400 shadow-[3px_3px_0px_#000]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black" />
              </span>
              <span className="font-mono font-bold text-xs text-black tracking-widest uppercase">LIVE</span>
            </div>
          </div>
        </div>

        {/* ── Heatmap / loading / error ── */}
        {loading ? (
          <LoadingDots />
        ) : error ? (
          <ErrorState href={`https://github.com/${GITHUB_USERNAME}`} label="View on GitHub" />
        ) : (
          <Heatmap weeks={weeks} colorMap={GH_COLORS} accentColor="#40c463" />
        )}
      </div>
    </div>
  );
}
