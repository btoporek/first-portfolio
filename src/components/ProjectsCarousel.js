import React from "react";
import Carousel from "react-bootstrap/Carousel";
import MockLMS from "../assets/MockLMS.mp4";
import MovieCenter from "../assets/MovieCenter.mp4";
import DnDGenerator from "../assets/DnDGenerator.mp4";
import BookTracker from "../assets/BookTracker.mp4";
import { AiFillGithub } from "react-icons/ai";
import "../styles/Projects.css";

function ProjectsCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-item-name">
            Mock Learning Management System
          </h3>
          <p>
            Mock Online Learning System/Course management system that displays
            courses with rosters (with add and edit features using a RESTful
            api), calendar/schedule, and home page content using ReactJS with
            React Router and React-Bootstrap components.
            <br />
            <a
              href="https://github.com/btoporek/Mock-Online-Course-Management-Website"
              target="_blank"
              rel="noreferrer"
              className="project-github"
            >
              <AiFillGithub />
            </a>
          </p>
        </Carousel.Caption>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={MockLMS}
            title="Mock LMS"
            allowFullScreen
          ></iframe>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-item-name">
            Movie Center Reviews and Ratings
          </h3>
          <p>
            A ReactJS single page application that displays movie title and
            information that users can interact with by rating and leaving
            reviews, read other reviews, and access movie trivia through IMDB.
            <br />
            <a
              href="https://github.com/btoporek/Movie-Review-App"
              target="_blank"
              rel="noreferrer"
              className="project-github"
            >
              <AiFillGithub />
            </a>
          </p>
        </Carousel.Caption>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={MovieCenter}
            title="Movie Center Reviews and Ratings"
            allowFullScreen
          ></iframe>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-item-name">Book Tracking App</h3>
          <p>
            ReactJS CRUD app for keeping track of reading list using a RESTful
            api with add, edit and delete features.
            <br />
            <a
              href="https://github.com/btoporek/Book-Tracker-React-CRUD-App"
              target="_blank"
              rel="noreferrer"
              className="project-github"
            >
              <AiFillGithub />
            </a>
          </p>
        </Carousel.Caption>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={BookTracker}
            title="Book Tracking App"
            allowFullScreen
          ></iframe>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-item-name">DnD Party Generator</h3>
          <p>
            A single page application using JQuery and a RESTUful api for
            creating, editing, and deleting members of a DnD party. Options
            include adding teams, team members, and functionalities to add,
            edit, or delete.
            <br />
            <a
              href="https://github.com/btoporek/JQuery-DnD-Party-Maker"
              target="_blank"
              rel="noreferrer"
              className="project-github"
            >
              <AiFillGithub />
            </a>
          </p>
        </Carousel.Caption>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={DnDGenerator}
            title="DnD Party Generator"
            allowFullScreen
          ></iframe>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectsCarousel;
