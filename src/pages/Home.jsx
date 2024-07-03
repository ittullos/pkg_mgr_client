import React from "react";
import HeroImage from "../images/pic-3.jpg";

function Home() {
  return (
    <div className="home-container">
      <div
        className="jumbotron jumbotron-fluid bg-secondary text-white hero-image"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4">Welcome to Package Manager</h1>
          <p className="lead">We take shipping seriously!!</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
