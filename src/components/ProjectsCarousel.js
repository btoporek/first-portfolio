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
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-item-name">{video.name}</h3>
            <p>
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
          </Carousel.Caption>
          <div className="embed-responsive embed-responsive-16by9">
            <div className="video-wrapper">
              <iframe
                width="560"
                height="349"
                className="embed-responsive-item"
                src={video.source}
                title={video.name}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectsCarousel;
