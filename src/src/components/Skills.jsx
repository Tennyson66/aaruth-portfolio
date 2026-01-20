import React, { useRef, useEffect, useState } from "react";


const securitySkills = [
  { name: "Linux", icon: "[1F5A5]" }, // 🖥️ Terminal/monitor
  { name: "Networking", icon: "[1F5A7]" }, // 🖧 Network
  { name: "Ethical Hacking", icon: "[1F512]" }, // 🔒 Lock
  { name: "CTF Player", icon: "[1F6A9]" }, // 🚩 Flag
  { name: "Bug Hunting", icon: "[1F41B]" }, // 🐛 Bug
  { name: "Digital Forensics", icon: "[1F50D]" }, // 🔍 Magnifier
  { name: "Web Security (OWASP Top 10)", icon: "[1F6E1]" }, // 🛡️ Shield
  { name: "TryHackMe", icon: "[1F916]" }, // 🤖 Robot (for platform)
];

const programmingSkills = [
  { name: "Java", icon: "[1F4BB]" }, // 💻 Laptop/code
  { name: "Python", icon: "[1F40D]" }, // 🐍 Snake
  { name: "C", icon: "[1F4C4]" }, // 📄 Document (generic code)
];

const nonTechSkills = [
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Leadership",
  "Creativity",
  "Critical Thinking",
];

function useScrollFade(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

const Skills = () => {
  const ref = useRef();
  const visible = useScrollFade(ref);
  return (
    <section ref={ref} className={`skills-section fade-in-section${visible ? " visible" : ""}`} id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {/* Cybersecurity & Core Skills */}
        {securitySkills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="skills-grid programming-skills-row">
        {/* Programming Languages */}
        {programmingSkills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <h2>Non-Technical Skills</h2>
      <div className="nontech-grid">
        {nonTechSkills.map((skill) => (
          <div className="nontech-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
