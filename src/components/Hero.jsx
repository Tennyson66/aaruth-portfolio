import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";

function useScrollFade(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

const Hero = () => {
  const navigate = useNavigate();
  const refImg = useRef();
  const refText = useRef();
  const visibleImg = useScrollFade(refImg);
  const visibleText = useScrollFade(refText);

  return (
    <section className="hero-section-dark" style={{ position: "relative" }}>
      <div className="hero-container">
        <div
          ref={refImg}
          className={`hero-img-wrap${visibleImg ? " visible" : ""}`}
        >
          <img
            src={profile}
            alt="Profile"
            className="hero-img"
          />
        </div>
        <div
          ref={refText}
          className={`hero-content${visibleText ? " visible" : ""}`}
        >
          <h1 className="hero-name">AARUTH V P</h1>
          <div className="hero-subtitle-dark">Ethical Hacker</div>
          <div style={{ color: '#fff', fontSize: '0.78rem', textAlign: 'center', marginBottom: '0.7rem', fontWeight: 400, fontFamily: 'Staatliches, Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: 1.2 }}>
            Welcome to my portfolio!<br />
            <span style={{ fontSize: '0.72em', textTransform: 'none', fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '0.01em' }}>
              driven by curiosity and continuous learning.
            </span>
          </div>
          <nav className="hero-menu-nav" aria-label="Portfolio navigation">
            <ul className="hero-menu-list">
              <li><a href="https://drive.google.com/file/d/1rzvIpiXymllvwToK1zKe_5ypHu4HwyUG/view?usp=sharing" className="hero-menu-link" target="_blank" rel="noopener noreferrer">VIEW RESUME</a></li>
              <li className="hero-menu-sep">|</li>
              <li>
                <a
                  href="/certificates"
                  className="hero-menu-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/certificates');
                  }}
                >
                  PROOF OF PROGRESS
                </a>
              </li>
              <li className="hero-menu-sep">|</li>
              <li>
                <a
                  href="#contact"
                  className="hero-menu-link"
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Hero;
