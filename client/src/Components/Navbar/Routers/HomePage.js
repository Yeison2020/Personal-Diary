import React from "react";
import "./Router.css";

const HomePage = () => {
  return (
    <div>
      <div className="title-App">
        <h1>My book of life</h1>
        <p>Your privacy is Here</p>
      </div>
      <div className="btn-container">
        <button className="btn-start">Start writing your history now</button>
      </div>

      <div className="container-image">
        <img
          className="image-logo"
          src="https://img.icons8.com/color/48/000000/open-book--v2.png"
          alt="book diary"
        />
        ;
      </div>
    </div>
  );
};

export default HomePage;
