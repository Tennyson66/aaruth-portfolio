import React, { useRef, useEffect, useState } from "react";
import "../styles/main.css";

const skillGroups = [
  {
    group: "Cybersecurity & Core Skills",
    skills: [
      { name: "Cybersecurity", level: "strong" },
      { name: "Network Scanning & Ethical Hacking", level: "strong" },
      { name: "Digital Forensics", level: "intermediate" },
      { name: "Web Security (OWASP Top 10)", level: "intermediate" },
      { name: "CTF Challenges & Practical Labs (TryHackMe)", level: "intermediate" },
      { name: "Linux & Operating Systems", level: "strong" },
    ],
  },
  {
    group: "Programming Languages",
    skills: [
      { name: "Python", level: "strong" },
      { name: "Java", level: "intermediate" },
      { name: "C", level: "basic" },
    ],
  },
];

const levelToWidth = {
  strong: "80%",
  intermediate: "68%",
  basic: "58%",
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

const SkillBars = () => {
  const [ref, visible] = useFadeInOnScroll();
  return (
    <section ref={ref} className={`skillbars-section fade-in-up-section${visible ? " visible" : ""}`}> 
      <h2 className="skillbars-title">Top Technical Skills</h2>
      <div className="skillbars-groups">
        {skillGroups.map((group) => (
          <div className="skillbars-group" key={group.group}>
            <h3 className="skillbars-group-title">{group.group}</h3>
            <div className="skillbars-list">
              {group.skills.map((skill) => (
                <div className="skillbar-item" key={skill.name}>
                  <span className="skillbar-name">{skill.name}</span>
                  <div className="skillbar-bar-bg">
                    <div
                      className="skillbar-bar-fill"
                      style={{ width: levelToWidth[skill.level] }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillBars;
