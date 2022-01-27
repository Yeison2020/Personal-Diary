import React from "react";
import { useNavigate } from "react-router-dom";
import "./Router.css";

const HomePage = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/signup", { replace: true });
  };
  return (
    <div className="adding-back">
      <div className="title-App">
        <h1 className="animate__animated  animate__bounceInDown">
          My book of life
        </h1>
        <p>Your privacy is Here</p>
      </div>
      <div className="btn-container">
        <button className="btn-start" onClick={handleStart}>
          Start writing your history now
        </button>
      </div>

      <div className="container-image">
        <img
          className="image-logo animate__animated animate__rubberBand"
          src="https://img.icons8.com/color/48/000000/open-book--v2.png"
          alt="book diary"
        />
      </div>
    </div>
  );
};

export default HomePage;
