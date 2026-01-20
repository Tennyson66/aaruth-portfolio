
import React, { useRef, useEffect, useState } from "react";

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

const About = () => {
  const ref = useRef();
  const visible = useScrollFade(ref);
  
  const highlights = [
    { icon: "🎯", text: "Top 1% TryHackMe" },
    { icon: "🔐", text: "Ethical Hacking" },
    { icon: "🐧", text: "Linux & Networking" },
    { icon: "🎬", text: "Video Editor" },
    { icon: "👥", text: "GDG Member" }
  ];
  
  return (
    <section ref={ref} className={`about-section fade-in-section${visible ? " visible" : ""}`} id="profile">
      <div className="about-container-redesign">
        <div className="about-card-modern">
          <div className="about-header-modern">
            <h2 className="about-title-modern">About Me</h2>
            <div className="about-underline-modern"></div>
          </div>
          
          <div className="about-highlights-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="about-highlight-badge">
                <span className="highlight-icon">{item.icon}</span>
                <span className="highlight-text">{item.text}</span>
              </div>
            ))}
          </div>
          
          <div className="about-text-modern">
            <p>I'm Aaruth V P, a pre-final year cybersecurity student with hands-on experience in ethical hacking, bug hunting, and CTF competitions. I have a strong interest in understanding security threats and applying practical techniques to identify and mitigate vulnerabilities in real-world systems. I'm ranked in the Top 1% of global learners on TryHackMe, reflecting my commitment to continuous, hands-on learning through labs and security challenges. I actively work with Linux, networking fundamentals, and blue-team security concepts while strengthening my analytical and problem-solving skills. Alongside cybersecurity, I'm a video editor with a creative mindset and an active member of Google Developer Group (GDG), where I engage with the tech community and collaborative learning initiatives. I'm motivated, adaptable, and focused on growing into a well-rounded cybersecurity professional.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
