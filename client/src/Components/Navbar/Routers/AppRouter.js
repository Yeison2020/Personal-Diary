import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import "./Router.css";
import HomePage from "./HomePage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Router;
