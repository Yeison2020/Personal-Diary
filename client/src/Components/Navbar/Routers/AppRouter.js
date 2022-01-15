import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import "./Router.css";
import HomePage from "./HomePage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
const Router = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    console.log(user);
  }, []);

  console.log(user);

  if (!user) {
    return (
      <div>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/signup" element={<Signup onLogin={setUser} />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <Navbar user={user} setUser={setUser} />
      </div>
    );
  }
};

export default Router;
