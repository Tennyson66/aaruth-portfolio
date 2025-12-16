
import React, { useRef, useEffect, useState } from "react";
import aboutImg from "../assets/profile.jpg";



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
  return (
    <section ref={ref} className={`about-section fade-in-section${visible ? " visible" : ""}`} id="profile">
      <div className="about-container" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'center', gap: '2.5rem', maxWidth: '1100px', margin: '0 auto', padding: '3rem 0' }}>
        <div className="about-img-wrap">
          {/* Fallback image if about-profile.jpg is missing */}
          <img
            src={aboutProfile}
            alt="About Me"
            className="about-img"
            onError={e => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/200x200?text=No+Image"; }}
          />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>I’m Aaruth V P, a pre-final year cybersecurity student with hands-on experience in ethical hacking, bug hunting, and CTF competitions. I have a strong interest in understanding security threats and applying practical techniques to identify and mitigate vulnerabilities in real-world systems. I’m ranked in the Top 3% of global learners on TryHackMe, reflecting my commitment to continuous, hands-on learning through labs and security challenges. I actively work with Linux, networking fundamentals, and blue-team security concepts while strengthening my analytical and problem-solving skills. Alongside cybersecurity, I’m a video editor with a creative mindset and an active member of Google Developer Group (GDG), where I engage with the tech community and collaborative learning initiatives. I’m motivated, adaptable, and focused on growing into a well-rounded cybersecurity professional.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
