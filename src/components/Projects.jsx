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

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, experience, and projects with a clean and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "🌐",
    label: "Personal Project",
    accent: "#38bdf8"
  },
  {
    title: "Movie Recommendation Website",
    description:
      "A movie recommendation website that suggests movies based on user interests and categories, focused on usability and clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "🎬",
    label: "Personal Project",
    accent: "#0ea5e9"
  },
  {
    title: "Hostel Outpass System",
    description:
      "A comprehensive hostel management system that streamlines the outpass request and approval process. Students can apply for outpasses digitally, and wardens can approve or reject them efficiently with real-time notifications.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: "🏠",
    label: "Software Project",
    accent: "#06b6d4",
    link: "https://hostel-outpass.netlify.app/login"
  },
];




const Projects = () => {
  const ref = useRef();
  const visible = useScrollFade(ref);
  return (
    <section ref={ref} id="projects" className={`projects-section portfolio-projects-section portfolio-projects-bg fade-in-up-section${visible ? " visible" : ""}`}>
      <h2 className="portfolio-projects-heading">Projects</h2>
      <div className="projects-grid portfolio-projects-grid">
        {projects.map((project) => (
          <div className="project-card portfolio-project-card" key={project.title}>
            <div className="portfolio-project-accent" style={{background: `linear-gradient(90deg, ${project.accent} 0%, #f8fafc 100%)`}} />
            <div className="portfolio-project-card-inner">
              <div className="portfolio-project-header">
                <span className="portfolio-project-icon" aria-label="icon">{project.icon}</span>
                <span className="portfolio-project-label">{project.label}</span>
              </div>
              <div className="project-title portfolio-project-title">{project.title}</div>
              <div className="project-desc portfolio-project-desc">{project.description}</div>
              <div className="project-tech portfolio-project-tech">
                {project.tech.map((t) => (
                  <span className="project-tech-badge portfolio-tech-badge" key={t}>{t}</span>
                ))}
              </div>
              {project.link && (
                <a className="portfolio-project-link" href={project.link} target="_blank" rel="noopener noreferrer">Visit Live Site →</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
