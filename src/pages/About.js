import React from "react";
import "../styles/About.css";
import pictureofme from "../assets/pictureofme.png";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

function About() {
  return (
    <div className="about">
      <div className="card container" id="about-underlay">
        <div className="card-body">
          <h5 className="card-title">Brittni Toporek</h5>

          <img src={pictureofme} alt="profile" className="my-photo" />

          <h6 className="card-subtitle">
            {" "}
            Educator turned front-end developer in Surprise, Arizona.
          </h6>
          <a
            href="https://github.com/btoporek"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/brittni-toporek/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <AiOutlineLinkedin />
          </a>
          <p className="card-text">
            After spending the past 10 years as a professional in the education
            setting, I set out to expand my skill set around technology and
            explore new roads. My passion for problem-solving, keen eye for
            detail, and love of working with technology has led me to this new
            path of front-end development. On this journey I have learned a
            variety of new things including how to work with JavaScript, JQuery,
            AJAX, React, RESTful APIs, HTML5, CSS3, Bootstrap, and more. While
            these are the things I have learned thus far, I have ambitious goals
            to continue learning more about front-end libraries and frameworks
            and am always open to learning new things. I am currently seeking a
            career change in this field and am anxious to show the hard work I
            know I am capable of doing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
