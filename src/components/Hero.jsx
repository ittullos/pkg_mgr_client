import React from "react";

function Hero() {
  return (
    <div className="hero-container">
      <div className="jumbotron jumbotron-fluid bg-secondary text-white hero-image">
        <div className="overlay-background"></div>
        <div className="image-overlay">
          <img src="/images/PKG-MGR-white.png" alt="Overlay" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
