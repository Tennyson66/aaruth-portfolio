import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
// import Skills from "./components/Skills";
import SkillBars from "./components/SkillBars";
import NonTechSkillBars from "./components/NonTechSkillBars";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./styles/main.css";


function App() {
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <nav className="top-right-nav">
        <a href="#profile" className="hero-label-nav">About Me</a>
        <a
          href="/certificates"
          className="hero-label-nav"
          onClick={(e) => {
            e.preventDefault();
            navigate('/certificates');
          }}
        >
          Proof of Progress
        </a>
      </nav>
      <Hero />
      <About />
      <Education />
      <Experience />
      <div className="main-content-layout">
        <div className="main-sections">
          <SkillBars />
          <NonTechSkillBars />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
