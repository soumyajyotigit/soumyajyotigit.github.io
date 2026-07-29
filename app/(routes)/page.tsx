import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Credentials from "@/components/sections/Credentials";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import FocusAreas from "@/components/sections/FocusAreas";
import EngineeringDashboard from "@/components/sections/EngineeringDashboard";
import TerminalPanel from "@/components/sections/TerminalPanel";

export default function Home() {
  return (
    <main>
      <Hero />
      <FocusAreas />
      <EngineeringDashboard />
      <TerminalPanel />
      <Experience />
      <Credentials />
      <Projects />
      <Contact />
    </main>
  );
}
