import React from "react";
import ProjectsCarousel from "../components/ProjectsCarousel";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-underlay">
        <div className="container" id="projects-container">
          <ProjectsCarousel />
        </div>
      </div>
    </div>
  );
}

export default Projects;
