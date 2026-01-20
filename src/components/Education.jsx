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

const educationData = [
  {
    year: "2023",
    degree: "HIGHER SECONDARY",
    institution: "Sri Sathya Sai Matric Higher Secondary School",
    location: "Chithode, Erode, Tamil Nadu"
  },
  {
    year: "Present",
    degree: "B.E CSE (Cyber Security)",
    institution: "K S R Institute for Engineering and Technology",
    location: "K S R Kalvi Nagar, Tiruchengode, Tamil Nadu"
  }
];

const Education = () => {
  const ref = useRef();
  const visible = useScrollFade(ref);
  return (
  <section ref={ref} className={`education-section fade-in-up-section${visible ? " visible" : ""}`} id="education">
    <div className="education-container">
      <h2 className="education-heading">
        <span role="img" aria-label="graduation cap" className="education-icon">🎓</span>
        Education
      </h2>
      <div className="education-list">
        {educationData.map((item, idx) => (
          <div className="education-row" key={idx}>
            <div className="education-year">{item.year}</div>
            <div className="education-details">
              <div className="education-degree">{item.degree}</div>
              <div className="education-institution">{item.institution}</div>
              <div className="education-location">{item.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Education;
