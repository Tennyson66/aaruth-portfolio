
import React, { useRef, useEffect, useState } from "react";

function useScrollFade(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

const experienceData = [
  {
    date: "July 2024 – August 2024",
    role: "Computer Network Intern",
    org: "United Soft Solutions",
    type: "Internship"
  },
  {
    date: "June 2025 – August 2025",
    role: "LLM Security Intern",
    org: "Cube AI Solutions",
    type: "Internship"
  },
  {
    date: "Present",
    role: "CTF Player",
    org: "Actively participating in Capture The Flag (CTF) cybersecurity challenges",
    platforms: ["THM", "PicoCTF", "Infinity War Labs"],
    type: null
  },
  {
    date: "Present",
    role: "Video Editor",
    org: "Instagram Reels & Shorts",
    type: "Freelance / Content Creation"
  }
];

const Experience = () => {
  const ref = useRef();
  const visible = useScrollFade(ref);
  return (
  <section ref={ref} className={`experience-section fade-in-up-section${visible ? " visible" : ""}`} id="experience">
    <div className="experience-container">
      <h2 className="experience-heading">
        <span role="img" aria-label="experience icon" className="experience-icon">👨‍💻</span>
        Experience
      </h2>
      <div className="experience-list">
        {experienceData.map((item, idx) => (
          <div className="experience-row" key={idx}>
            <div className="experience-date">{item.date}</div>
            <div className="experience-details">
              <div className="experience-role">{item.role}</div>
              <div className="experience-org">
                {item.org}
                {item.platforms && (
                  <ul className="experience-platforms" style={{ margin: 0, paddingLeft: 18 }}>
                    {item.platforms.map((platform, i) => (
                      <li key={i}>{platform}</li>
                    ))}
                  </ul>
                )}
                {item.type && (
                  <span className="experience-type"> · {item.type}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Experience;
