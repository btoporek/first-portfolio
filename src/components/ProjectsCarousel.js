import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { AiFillGithub } from "react-icons/ai";
import "../styles/Projects.css";
import VideoData from "./VideoData";

function ProjectsCarousel() {
  return (
    <Carousel className="carousel">
      {VideoData.map((video, index) => (
        <Carousel.Item className="carousel-item" key={index}>
          <div className="video-wrapper">
            <iframe
              className="embed-responsive-item"
              src={video.source}
              title={video.name}
              allowFullScreen
            ></iframe>
          </div>
          <div className="projects-description">
            <h3 className="carousel-item-name">{video.name}</h3>
            <p className="projects-p">
              {video.description}
              <br />
              <a
                href={video.github}
                target="_blank"
                rel="noreferrer"
                className="project-github"
              >
                <AiFillGithub />
              </a>
            </p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectsCarousel;
