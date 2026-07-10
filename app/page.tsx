import Navbar from "@/components/Navbar";
import CodeWindow from "@/components/CodeWindow";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <div className="flex-1 relative">
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
          <CodeWindow />
        </div>
      </div>
    </div>
  );
}
