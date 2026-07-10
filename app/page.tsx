import Navbar from "@/components/Navbar";
import CodeWindow from "@/components/CodeWindow";
import TerminalSteps from "@/components/TerminalSteps";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar />
      
      {/* Canvas Area: Stacked on mobile, Absolute float on desktop */}
      <div className="flex-1 w-full px-4 md:px-8 pb-12 lg:pb-0 relative flex flex-col lg:block justify-center items-center gap-12">
        {/* Bottom Left: CodeWindow */}
        <div className="lg:absolute lg:bottom-12 lg:left-4 xl:left-8">
          <CodeWindow />
        </div>
        
        {/* Bottom Right: TerminalSteps */}
        <div className="lg:absolute lg:bottom-12 lg:right-4 xl:right-8">
          <TerminalSteps />
        </div>
      </div>
    </div>
  );
}
