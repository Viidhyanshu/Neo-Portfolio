import React from "react";

export default function WhoamiCard() {
  return (
    <div className="relative pt-[20px] pb-[10px] w-[calc(100vw-3rem)] sm:w-[280px] h-[260px] select-none">
      {/* 1. Terminal Console Window "$ whoami" */}
      <div className="absolute top-0 left-0 w-48 border-3 border-black bg-[#8b5cf6] text-black shadow-[4px_4px_0px_#000000] font-mono p-3 z-10 flex flex-col justify-center">
        <div className="font-bold text-sm leading-none">$ whoami</div>
        <div className="font-bold text-sm leading-none mt-2">&gt; Developer</div>
      </div>

      {/* 2. Yellow build function window */}
      <div className="absolute bottom-0 left-[20px] w-[170px] sm:w-[180px] border-3 border-black bg-white shadow-[4px_4px_0px_#000000] z-10">
        {/* Yellow Header */}
        <div className="bg-yellow-400 border-b-3 border-black h-8 px-3 flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-full border-2 border-black bg-transparent" />
          <div className="w-2.5 h-2.5 rounded-full border-2 border-black bg-transparent" />
          <div className="w-2.5 h-2.5 rounded-full border-2 border-black bg-transparent" />
        </div>
        {/* Function Body */}
        <div className="p-3 font-mono text-[11px] sm:text-[12px] leading-relaxed text-black text-left">
          <div>
            function <span className="text-[#6366f1] font-bold">build()</span> &#123;
          </div>
          <div className="pl-4">ideas();</div>
          <div className="pl-4 text-pink-500 font-bold">code();</div>
          <div className="pl-4">repeat();</div>
          <div>&#125;</div>
        </div>
      </div>
    </div>
  );
}
