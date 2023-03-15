import React from "react";
import ProjectsCarousel from "../components/ProjectsCarousel";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="container" id="projects-container">
        <ProjectsCarousel />
      </div>
    </div>
  );
}

export default Projects;
