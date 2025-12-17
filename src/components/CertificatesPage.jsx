import React from "react";
import "../styles/main.css";

// Certifications data with Google Drive links
const certificates = [
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA",
    date: "2025",
    link: "https://drive.google.com/file/d/1iinzDEN7O-Bbf3_BWYegs8Z11p-fezT3/view?usp=sharing"
  },
  {
    title: "WiFi Hacker Course Certificate",
    issuer: "Udemy",
    date: "2025",
    link: "https://drive.google.com/file/d/1X7DRFjxE3_N-DCex8jXJTQ9WmmeKWn36/view?usp=sharing"
  },
  {
    title: "Thoothukudi Hackathon Certificate",
    issuer: "Thoothukudi Hackathon",
    date: "2025",
    link: "https://drive.google.com/file/d/15tE5waalvmXjwmNrOZlQtpJK4K4OrtO8/view?usp=sharing"
  },
  {
    title: "Eduskills Certificate",
    issuer: "Eduskills",
    date: "2025",
    link: "https://drive.google.com/file/d/10lKm6iFf_To4HjDMIRnvjSBPIQF8CINT/view?usp=sharing"
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "AWS Forage",
    date: "2025",
    link: "https://drive.google.com/file/d/1uSouXHPFuPTE4y0JIBhIxgXBteiujTu-/view?usp=sharing"
  },
  {
    title: "Machine Learning – Coursera",
    issuer: "Coursera",
    date: "2025",
    link: "https://drive.google.com/file/d/1z2IRDzwwLpDIA4Y1Oaq0C2hk7ikphwa9/view?usp=sharing"
  },
  {
    title: "Kali Linux – Coursera",
    issuer: "Coursera",
    date: "2025",
    link: "https://drive.google.com/file/d/1JUUpSPB0SiDgYW_dURBJUw1kei42SOZ8/view?usp=sharing"
  },
  {
    title: "Industry 4.0 - NPTEL",
    issuer: "NPTEL",
    date: "2025",
    link: "https://drive.google.com/file/d/18goXKU6Yba0o5pCV_rVig-4sRMmHfpMV/view?usp=sharing"
  },
];

const CertificatesPage = () => (
  <div className="certificates-page" id="certificates">
    <h1 className="certificates-title">Certifications</h1>
    <div className="certificates-grid">
      {certificates.map((cert, idx) => (
        <div className="certificate-card" key={cert.title}>
          <div className="certificate-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="14" rx="3" fill="#e0e7ef"/>
              <path d="M7 9h10M7 13h6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="certificate-name">{cert.title}</h2>
          <div className="certificate-meta">
            <span className="certificate-issuer">{cert.issuer}</span>
            <span className="certificate-date">{cert.date}</span>
          </div>
          <a className="certificate-link-btn" href={cert.link} target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default CertificatesPage;
