import React, { useRef, useEffect, useState } from "react";
import "../styles/main.css";

const leftSkills = [
  { name: "Creative Thinking", level: "strong" },
  { name: "Self-Learning", level: "strong" },
  { name: "Multilingual Communication", level: "moderate" },
  { name: "Teamwork", level: "strong" },
];

const rightSkills = [
  { name: "Video Editing & Content Creation", level: "moderate" },
  { name: "Social Media Management", level: "moderate" },
  { name: "Adaptability", level: "strong" },
  { name: "Time Management", level: "strong" },
];

const levelToWidth = {
  strong: "82%",
  moderate: "68%",
};


function useFadeInOnScroll() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.18 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return [ref, visible];
}

const NonTechSkillBars = () => {
  const [ref, visible] = useFadeInOnScroll();
  return (
    <section ref={ref} className={`nonskillbars-section fade-in-up-section${visible ? " visible" : ""}`}>
      <h2 className="nonskillbars-title">
        {/* Simple outline icon (optional) */}
        <span className="nonskillbars-icon" aria-hidden="true">&#9723;</span> Top Non-Technical Skills
      </h2>
      <div className="nonskillbars-columns">
        <div className="nonskillbars-col">
          {leftSkills.map((skill) => (
            <div className="nonskillbar-item" key={skill.name}>
              <span className="nonskillbar-name">{skill.name}</span>
              <div className="nonskillbar-bar-bg">
                <div
                  className="nonskillbar-bar-fill"
                  style={{ '--target-width': levelToWidth[skill.level] }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="nonskillbars-col">
          {rightSkills.map((skill) => (
            <div className="nonskillbar-item" key={skill.name}>
              <span className="nonskillbar-name">{skill.name}</span>
              <div className="nonskillbar-bar-bg">
                <div
                  className="nonskillbar-bar-fill"
                  style={{ '--target-width': levelToWidth[skill.level] }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NonTechSkillBars;
