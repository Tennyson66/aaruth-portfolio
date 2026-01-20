

import React, { useRef, useEffect, useState } from "react";
import "../styles/main.css";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aaruthvp/",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="none"/>
        <path d="M15.5 17.5h-3V28h3V17.5Zm-1.5-2.1a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Zm4.5 4.6V28h3v-4.6c0-1.15 1-1.7 1.7-1.7.85 0 1.5.55 1.5 1.7V28h3v-5.1c0-2.4-1.3-3.4-3-3.4-1.3 0-2 .7-2.3 1.2v-1H18.5c.04.7 0 4.2 0 4.2Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/itz_.aaruth_?igsh=OWdnZG95amtycGR6",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="none"/>
        <rect x="10" y="10" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2.2"/>
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2.2"/>
        <circle cx="27" cy="13" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/Tennyson66",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z" fill="currentColor"/></svg>
    ),
  },
];


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

const Contact = () => {
  const [ref, visible] = useFadeInOnScroll();
  return (
    <section id="contact" ref={ref} className={`cyber-contact-section fade-in-up-section${visible ? " visible" : ""}`}>
      <div className="cyber-contact-container">
        <div className="cyber-contact-left">
          <div className="cyber-contact-card">
            <div className="cyber-contact-visual-bg">
              {/* SVG illustration: envelope with shield, circuit lines */}
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#0f172a" stopOpacity="0.1"/>
                  </radialGradient>
                  <pattern id="circuit" width="12" height="12" patternUnits="userSpaceOnUse">
                    <rect width="12" height="12" fill="none"/>
                    <path d="M0 6h12M6 0v12" stroke="#334155" strokeWidth="0.7"/>
                  </pattern>
                </defs>
                <rect x="0" y="0" width="90" height="90" rx="20" fill="url(#circuit)"/>
                <ellipse cx="45" cy="45" rx="38" ry="38" fill="url(#glow)"/>
                <g filter="url(#shadow)">
                  <rect x="20" y="30" width="50" height="30" rx="8" fill="#1e293b" stroke="#2dd4bf" strokeWidth="2"/>
                  <path d="M20 30l25 20 25-20" stroke="#2dd4bf" strokeWidth="2" fill="none"/>
                  <rect x="38" y="38" width="14" height="14" rx="3" fill="#0f172a" stroke="#2dd4bf" strokeWidth="1.5"/>
                  <path d="M45 44v-3" stroke="#2dd4bf" strokeWidth="1.5"/>
                  <path d="M45 52v-3" stroke="#2dd4bf" strokeWidth="1.5"/>
                  <ellipse cx="45" cy="45" rx="4" ry="4" fill="#2dd4bf" fillOpacity="0.18"/>
                </g>
              </svg>
            </div>
            <h2 className="cyber-contact-heading">Reaching Out To Me</h2>
          </div>
        </div>
        <div className="cyber-contact-right">
          <div className="cyber-contact-info">
            <div className="cyber-contact-name">Aaruth V P</div>
            <a className="cyber-contact-email" href="mailto:aaruthvp@gmail.com">aaruthvp@gmail.com</a>
            <div className="cyber-contact-connect">CONNECT WITH ME</div>
            <div className="cyber-contact-socials">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  className="cyber-contact-social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="cyber-contact-footer">© 2025 Aaruth V P. All rights reserved.</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
