import "../styles/Home.css";
import background1 from "../images/background1.mp4";
import background2 from "../images/background2.mp4";
import desertvideo from "../images/desertvideo.mp4";
import React from "react";

function Home() {
  return (
    <>
      <div className="hero-background">
        <video autoPlay loop muted playsInline id="hero-video">
          <source src={desertvideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1> Hi, I'm Brittni Toporek</h1>
          <p className="intro-p">
            Frontend Developer from the heart of Arizona
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
