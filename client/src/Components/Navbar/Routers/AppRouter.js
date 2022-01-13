import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import "./Router.css";
const Router = () => {
  return (
    <div>
      <Navbar />
      <div className="title-App">
        <h1>My book of life</h1>
      </div>
      <div className="container-image">
        <img
          className="image-logo"
          src="https://img.icons8.com/color/48/000000/open-book--v2.png"
          alt="book diary"
        />
        ;
      </div>
      <Routes></Routes>
    </div>
  );
};

export default Router;
