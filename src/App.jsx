import { Navbar } from "./components/Navbar";
import { Header } from "./components/Home";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { Skill } from "./components/Skill";
import { Experience } from "./components/Experience";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App = () => {
    return (
        <div id="main">
            <Navbar />
            <Header />
            <About />
            <Project />
            <Skill />
            <Experience />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    );
};
