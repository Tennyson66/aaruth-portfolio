import React from "react";

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
    title: "ModusMapping Website",
    description:
      "A cybersecurity-focused project designed to analyze and map criminal activities based on modus operandi patterns for better investigation insights.",
    tech: ["Python", "Data Analysis", "Cybersecurity Concepts"],
    icon: "🛡️",
    label: "Cybersecurity Project",
    accent: "#06b6d4"
  },
];




const Projects = () => {
  return (
    <section id="projects" className="projects-section portfolio-projects-section portfolio-projects-bg">
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
              {/* <a className="portfolio-project-link" href="#" tabIndex={-1}>View Details</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
