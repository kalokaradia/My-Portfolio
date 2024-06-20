import Home from "@/components/Home";
import About from "@/components/About";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <div id="main" className="font-poppins">
      <Home />
      <About />
      <Project />
      <Skill />
      <Experience />
      <Gallery />
      <Contact />
    </div>
  );
}
