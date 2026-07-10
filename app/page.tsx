import Navbar from "@/components/Navbar";
import CodeWindow from "@/components/CodeWindow";
import TerminalSteps from "@/components/TerminalSteps";
import CommentCard from "@/components/CommentCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar />
      
      {/* Canvas Area: Stacked on mobile, Absolute float on desktop */}
      <div className="flex-1 w-full px-4 md:px-8 pb-12 lg:pb-0 relative flex flex-col lg:block justify-center items-center gap-12">
        {/* Top Right on Desktop, Top in Stack on Mobile: CommentCard */}
        <div className="lg:absolute lg:top-4 lg:right-10 xl:right-16">
          <CommentCard />
        </div>

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
