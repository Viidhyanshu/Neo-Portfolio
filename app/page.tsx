import Navbar from "@/components/Navbar";
import CodeWindow from "@/components/CodeWindow";
import TerminalSteps from "@/components/TerminalSteps";
import CommentCard from "@/components/CommentCard";
import WhoamiCard from "@/components/WhoamiCard";
import Hero from "@/components/Hero";
import HomeMobile from "@/components/HomeMobile";
import About from "@/components/about";
import Projects from "@/components/Projects";
import GitHubContributions from "@/components/contributions";
import Skills from "@/components/skills";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      
      {/* ── Main Canvas Wrapper ── */}
      <div id="home" className="flex-1 w-full px-4 md:px-8 pb-12 lg:pb-0 relative scroll-mt-[100px] md:scroll-mt-[140px]">
        {/* DESKTOP HERO CANVAS AREA */}
        <div className="hidden lg:block relative w-full min-h-[720px] overflow-visible">
          {/* Top/Center on Desktop: Hero Section */}
          <div className="absolute top-[45px] left-1/2 -translate-x-1/2 z-30">
            <Hero />
          </div>

          {/* Dynamic L-Shaped dashed connector line on Desktop */}
          {/* Standard screens (lg to xl) */}
          <div className="hidden lg:block xl:hidden absolute left-[208px] top-[52px] h-[85px] w-[calc(50vw-208px-295px)] border-t-3 border-r-3 border-dashed border-black rounded-tr-lg z-0 pointer-events-none" />
          {/* Widescreen monitors (xl+) */}
          <div className="hidden xl:block absolute left-[240px] top-[52px] h-[85px] w-[calc(50vw-240px-295px)] border-t-3 border-r-3 border-dashed border-black rounded-tr-lg z-0 pointer-events-none" />

          {/* Top Left on Desktop: WhoamiCard */}
          <div className="absolute top-4 left-4 xl:left-12 z-20">
            <WhoamiCard />
          </div>

          {/* Top Right on Desktop: CommentCard */}
          <div className="absolute top-4 right-4 xl:right-12 z-20">
            <CommentCard />
          </div>

          {/* Bottom Left: CodeWindow */}
          <div className="absolute bottom-12 left-4 xl:left-12 z-20">
            <CodeWindow />
          </div>
          
          {/* Bottom Right: TerminalSteps */}
          <div className="absolute bottom-12 right-4 xl:right-12 z-20">
            <TerminalSteps />
          </div>
        </div>

        {/* MOBILE HERO CANVAS AREA */}
        <div className="block lg:hidden w-full">
          <HomeMobile />
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* GitHub Contributions Section */}
      <GitHubContributions />

      {/* Skills Section */}
      <Skills />

      {/* Get In Touch Section */}
      <ContactSection />
    </div>
  );
}
