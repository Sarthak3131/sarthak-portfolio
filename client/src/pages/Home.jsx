import GlobalBackground from "../components/GlobalBackground";
import Navbar       from "../components/Navbar";
import Hero         from "../components/Hero";
import About        from "./About";
import Skills       from "./Skills";
import Education    from "./Education";
import Experience   from "./Experience";
import Certificates from "./Certificates";
import Achievements from "./Achievements";
import Projects     from "./Projects";
import GithubStats  from "./GithubStats";
import LeetcodeStats from "./LeetcodeStats";
import Contact      from "./Contact";
import Footer       from "../components/Footer";

/*
  GlobalBackground renders the particle canvas + cursor glow ONCE,
  position:fixed behind everything. Every section uses
  background:transparent so the dots float through the whole page.
*/
export default function Home() {
  return (
    <div style={{ background: "#000000", minHeight: "100vh", color: "#F1F5F9" }}>
      <GlobalBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubStats />
      <LeetcodeStats />
      <Experience />
      <Education />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}