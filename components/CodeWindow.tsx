import React from "react";

export default function CodeWindow() {
  return (
    <div className="w-[calc(100vw-3rem)] sm:w-[450px] border-4 border-black bg-black shadow-[6px_6px_0px_#000000] font-mono select-none">
      {/* Pink Header Bar */}
      <div className="bg-[#fa5b8d] border-b-4 border-black h-10 px-4 flex items-center gap-2">
        <div className="w-3 h-3 bg-[#0000FF] rounded-full border border-black" />
        <div className="w-3 h-3 bg-black rounded-full border border-black" />
        <div className="w-3 h-3 bg-[#FFEA00] rounded-full border border-black" />
      </div>

      {/* Code Editor Body */}
      <div className="p-6 text-sm md:text-base leading-relaxed text-white">
        {/* Line 1 */}
        <div className="flex gap-4">
          <span className="text-zinc-600 select-none w-5 text-right">01</span>
          <div>
            <span className="text-[#c084fc] font-bold">const</span>{" "}
            <span className="text-white">developer</span> = &#123;
          </div>
        </div>

        {/* Line 2 */}
        <div className="flex gap-4">
          <span className="text-zinc-600 select-none w-5 text-right">02</span>
          <div className="pl-6">
            <span className="text-white">name:</span>{" "}
            <span className="text-yellow-300">"Vidhyanshu Kumar"</span>,
          </div>
        </div>

        {/* Line 3 */}
        <div className="flex gap-4">
          <span className="text-zinc-600 select-none w-5 text-right">03</span>
          <div className="pl-6">
            <span className="text-white">stack:</span> [
            <span className="text-yellow-300">"Full Stack"</span>,{" "}
            <span className="text-yellow-300">"DevOps"</span>,{" "}
            <span className="text-yellow-300">"Systems Programmer"</span>],
          </div>
        </div>

        {/* Line 4 */}
        <div className="flex gap-4">
          <span className="text-zinc-600 select-none w-5 text-right">04</span>
          <div className="pl-6">
            <span className="text-white">passion:</span>{" "}
            <span className="text-yellow-300">"Creating & Learning"</span>
          </div>
        </div>

        {/* Line 5 */}
        <div className="flex gap-4">
          <span className="text-zinc-600 select-none w-5 text-right"></span>
          <div className="pl-4">
            &#125;;
          </div>
        </div>
      </div>
    </div>
  );
}
