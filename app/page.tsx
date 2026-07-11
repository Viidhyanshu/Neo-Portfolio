import Navbar from "@/components/Navbar";
import CodeWindow from "@/components/CodeWindow";
import TerminalSteps from "@/components/TerminalSteps";
import CommentCard from "@/components/CommentCard";
import WhoamiCard from "@/components/WhoamiCard";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GitHubContributions from "@/components/contributions";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar />
      
      {/* Canvas Area: Stacked on mobile, Absolute float on desktop */}
      <div className="flex-1 w-full px-4 md:px-8 pb-12 lg:pb-0 relative flex flex-col lg:block justify-center items-center gap-12 lg:min-h-[720px]">
        {/* Top/Center on Desktop, First in Stack on Mobile: Hero Section */}
        <div className="lg:absolute lg:top-[45px] lg:left-1/2 lg:-translate-x-1/2 z-30">
          <Hero />
        </div>

        {/* Dynamic L-Shaped dashed connector line on Desktop */}
        {/* Standard screens (lg to xl) */}
        <div className="hidden lg:block xl:hidden absolute left-[208px] top-[52px] h-[85px] w-[calc(50vw-208px-295px)] border-t-3 border-r-3 border-dashed border-black rounded-tr-lg z-0 pointer-events-none" />
        {/* Widescreen monitors (xl+) */}
        <div className="hidden xl:block absolute left-[240px] top-[52px] h-[85px] w-[calc(50vw-240px-295px)] border-t-3 border-r-3 border-dashed border-black rounded-tr-lg z-0 pointer-events-none" />

        {/* Top Left on Desktop, Second in Stack on Mobile: WhoamiCard */}
        <div className="lg:absolute lg:top-4 lg:left-4 xl:left-12 z-20">
          <WhoamiCard />
        </div>

        {/* Top Right on Desktop, Third in Stack on Mobile: CommentCard */}
        <div className="lg:absolute lg:top-4 lg:right-4 xl:right-12 z-20">
          <CommentCard />
        </div>

        {/* Bottom Left: CodeWindow */}
        <div className="lg:absolute lg:bottom-12 lg:left-4 xl:left-12 z-20">
          <CodeWindow />
        </div>
        
        {/* Bottom Right: TerminalSteps */}
        <div className="lg:absolute lg:bottom-12 lg:right-4 xl:right-12 z-20">
          <TerminalSteps />
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* GitHub Contributions Section */}
      <GitHubContributions />
    </div>
  );
}
