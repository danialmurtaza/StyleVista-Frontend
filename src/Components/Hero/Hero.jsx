import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = ({ scrollToNewCollections }) => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="hand-icon" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn" onClick={scrollToNewCollections}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow-icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
