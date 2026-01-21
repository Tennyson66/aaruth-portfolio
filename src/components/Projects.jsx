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
    tech: ["HTML", "CSS", "JavaScript", "React"],
    icon: "🌐",
    label: "Personal Project",
    accent: "#38bdf8",
    github: "https://github.com/Aaruth24/aaruth-portfolio"
  },
  {
    title: "Mood-Based Movie Recommendation",
    description:
      "An intelligent movie recommendation system that suggests movies based on your current mood and preferences, featuring an intuitive interface and extensive movie database.",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    icon: "🎬",
    label: "Personal Project",
    accent: "#0ea5e9",
    link: "https://mood-based-movies.netlify.app",
    github: "https://github.com/Aaruth24/mood-based-movies"
  },
  {
    title: "Hostel Outpass System",
    description:
      "A comprehensive hostel management system that streamlines the outpass request and approval process. Students can apply for outpasses digitally, and wardens can approve or reject them efficiently with real-time notifications.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: "🏠",
    label: "Software Project",
    accent: "#06b6d4",
    link: "https://hostel-outpass.netlify.app/",
    github: "https://github.com/Aaruth24/Host3l-0utpass"
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
              <div className="portfolio-project-links">
                {project.link && (
                  <a className="portfolio-project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                    <span className="link-icon">🔗</span> Live Site
                  </a>
                )}
                {project.github && (
                  <a className="portfolio-project-link portfolio-github-link" href={project.github} target="_blank" rel="noopener noreferrer">
                    <span className="link-icon">💻</span> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
