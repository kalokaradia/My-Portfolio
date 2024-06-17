import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Project from "@/components/Project";
import Blog from "@/components/Blog";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div id="main" className="font-poppins">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Blog />
      <Skill />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
