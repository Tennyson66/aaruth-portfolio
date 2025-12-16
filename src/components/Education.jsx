import React from "react";

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

const Education = () => (
  <section className="education-section" id="education">
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

export default Education;
