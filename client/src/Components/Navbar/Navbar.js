import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("login", {
      replace: true,
    });
  };
  const handleSignup = () => {
    navigate("signup", {
      replace: true,
    });
  };
  return (
    <div className="nav-principal">
      <p className="login" onClick={handleLogin}>
        Log in
      </p>
      <p className="signup" onClick={handleSignup}>
        Sign up{" "}
      </p>
    </div>
  );
};

export default Navbar;
