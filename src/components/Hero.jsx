import React from "react";

function Hero({ backgroundImage, overlayText }) {
  return (
    <div className="hero-container">
      <div
        className="jumbotron jumbotron-hero jumbotron-fluid bg-secondary text-white hero-image"
        style={{
          backgroundColor: "black", // Set background color to black
          position: "relative",
          height: "100vh", // Ensure the jumbotron covers the full viewport height
        }}
      >
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.6, // Set image opacity
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="overlay-text"
          style={{
            position: "relative",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "6rem", // Larger text size
            zIndex: 1, // Ensure text is above the image
          }}
        >
          {overlayText}
        </div>
      </div>
    </div>
  );
}

export default Hero;
