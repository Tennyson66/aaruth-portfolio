import React from "react";
import "../styles/main.css";

// Certifications data (exactly as provided)
const certificates = [
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA",
    date: "2025",
    link: "/certificates/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_68cfbc1994597f858759a63f_1758461723071_completion_certificate.pdf"
  },
  {
    title: "WiFi Hacker Course Certificate",
    issuer: "Udemy",
    date: "2025",
    link: "/certificates/Wifi-Hacker-course-Certificate.pdf"
  },
  {
    title: "AEC Certificate of Participation",
    issuer: "AEC",
    date: "2025",
    link: "/certificates/AEC Certificate of Participation.pdf"
  },
  {
    title: "Thoothukudi Hackathon Certificate",
    issuer: "Thoothukudi Hackathon",
    date: "2025",
    link: "/certificates/KSRIET_AARUTH V P_Certificate.pdf"
  },
  {
    title: "Eduskills Certificate",
    issuer: "Eduskills",
    date: "2025",
    link: "/certificates/Aaruth V P_Certificate.pdf"
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "AWS",
    date: "2025",
    link: "/certificates/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_68cfbc1994597f858759a63f_1758453404189_completion_certificate.pdf"
  },
  {
    title: "Machine Learning – Coursera",
    issuer: "Coursera",
    date: "2025",
    link: "/certificates/Coursera 3GD8IGC7JDTK.pdf"
  },
  {
    title: "Kali Linux – Coursera",
    issuer: "Coursera",
    date: "2025",
    link: "/certificates/Coursera NN32Y91C1PMU.pdf"
  },
  {
    title: "Industry 4.0 - NPTEL",
    issuer: "NPTEL",
    date: "2025",
    link: "/certificates/Introduction to Industry 4.0 and Industrial Internet of Things (2).pdf"
  },
];

const CertificatesPage = () => (
  <div className="certificates-page">
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
