import React, { useRef, useEffect, useState } from "react";

const certifications = [
  { name: "Certified React Developer", org: "React Institute" },
  { name: "JavaScript Specialist", org: "JS Foundation" },
  { name: "Frontend Mastery", org: "Frontend Academy" },
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

const Certifications = () => {
  const ref = useRef();
  const visible = useScrollFade(ref);
  return (
    <section ref={ref} className={`certifications-section fade-in-section${visible ? " visible" : ""}`} id="certifications">
      <h2>Proof of Progress</h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.name}>
            <span className="cert-name">{cert.name}</span>
            <span className="cert-org">{cert.org}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
