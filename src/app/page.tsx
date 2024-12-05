import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experiences from "./components/Experiences";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experiences/>
      <Project/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}
