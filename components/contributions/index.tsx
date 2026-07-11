"use client";

import React, { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import GitHubCard    from "./GitHubCard";
import LeetCodeCard  from "./LeetCodeCard";

const LEFT_DOODLES = [
  { text: "git commit -m 'fix'",    top: "4%",  rotate: "rotate-6",   size: "text-sm"  },
  { text: "</>" ,                   top: "14%", rotate: "rotate-45",  size: "text-4xl" },
  { text: "git push origin main",   top: "23%", rotate: "-rotate-12", size: "text-sm"  },
  { text: "pull request #42",       top: "33%", rotate: "rotate-3",   size: "text-sm"  },
  { text: "★ 128",                  top: "43%", rotate: "-rotate-6",  size: "text-xl"  },
  { text: "git merge dev",          top: "53%", rotate: "rotate-12",  size: "text-sm"  },
  { text: "fork()",                 top: "63%", rotate: "-rotate-45", size: "text-xl"  },
  { text: "git stash pop",          top: "73%", rotate: "rotate-6",   size: "text-sm"  },
  { text: "branch: main",           top: "83%", rotate: "-rotate-12", size: "text-sm"  },
  { text: "diff --stat",            top: "93%", rotate: "rotate-3",   size: "text-sm"  },
];

const RIGHT_DOODLES = [
  { text: "O(n log n)",             top: "4%",  rotate: "-rotate-6",  size: "text-base" },
  { text: "dp[]",                   top: "14%", rotate: "rotate-12",  size: "text-2xl"  },
  { text: "BFS / DFS",              top: "23%", rotate: "-rotate-3",  size: "text-base" },
  { text: "HashMap<K,V>",           top: "33%", rotate: "rotate-6",   size: "text-sm"   },
  { text: "solving",                top: "43%", rotate: "-rotate-12", size: "text-base" },
  { text: "two pointers",           top: "53%", rotate: "rotate-45",  size: "text-base" },
  { text: "O(1) space",             top: "63%", rotate: "-rotate-6",  size: "text-base" },
  { text: "binary search",          top: "73%", rotate: "rotate-12",  size: "text-sm"   },
  { text: "stack.push(x)",          top: "83%", rotate: "-rotate-3",  size: "text-sm"   },
  { text: "return memo[n]",         top: "93%", rotate: "rotate-6",   size: "text-sm"   },
];

const FLOAT_SYMBOLS = [
  { text: "{",   top: "18%", left: "-20px",  rotate: "rotate-12"  },
  { text: "}",   top: "42%", right: "-12px", rotate: "-rotate-12" },
  { text: "//",  top: "61%", left: "-28px",  rotate: "-rotate-6"  },
  { text: "=>",  top: "78%", right: "-18px", rotate: "rotate-45"  },
  { text: "++",  top: "30%", left: "-22px",  rotate: "rotate-6"   },
  { text: "&&",  top: "55%", right: "-14px", rotate: "-rotate-45" },
];

export default function ContributionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contributions"
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 py-20 md:px-8 border-t-4 border-black relative overflow-visible z-0"
    >
      <div className="absolute inset-0 pointer-events-none select-none overflow-visible z-0 opacity-[0.28] hidden lg:block">

        {/* LEFT MARGIN – GitHub doodles */}
        {LEFT_DOODLES.map((d, i) => (
          <div
            key={`left-${i}`}
            className={`absolute font-mono font-extrabold text-black ${d.size} ${d.rotate}`}
            style={{ top: d.top, left: "-160px" }}
          >
            {d.text}
          </div>
        ))}

        {/* RIGHT MARGIN – LeetCode doodles */}
        {RIGHT_DOODLES.map((d, i) => (
          <div
            key={`right-${i}`}
            className={`absolute font-mono font-extrabold text-black ${d.size} ${d.rotate}`}
            style={{ top: d.top, right: "-160px" }}
          >
            {d.text}
          </div>
        ))}

        {/* FLOATING SYMBOLS near grid edges */}
        {FLOAT_SYMBOLS.map((s, i) => (
          <div
            key={`sym-${i}`}
            className={`absolute font-mono font-black text-black text-3xl ${s.rotate} opacity-75`}
            style={{
              top:   s.top,
              left:  s.left  ?? undefined,
              right: s.right ?? undefined,
            }}
          >
            {s.text}
          </div>
        ))}
      </div>

      <SectionHeader isVisible={isVisible} />
      <GitHubCard    isVisible={isVisible} />
      <LeetCodeCard  isVisible={isVisible} />
    </section>
  );
}
