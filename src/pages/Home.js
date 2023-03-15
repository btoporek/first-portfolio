import "../styles/Home.css";
import background1 from "../assets/background1.mp4";
import background2 from "../assets/background2.mp4";
import desertvideo from "../assets/desertvideo.mp4";
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
            Front-end Developer from the heart of Arizona
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
