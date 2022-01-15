import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup", { replace: true });
  };
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const refs = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(refs.email);
  };

  return (
    <header className="signScreen animate__animated animate__fadeInLeftBig">
      <form>
        <h1>Login</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="Password" />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>

        <h4>
          <span className="signUp_color_gray">Welcome? </span>{" "}
          <span className="signupScreen_link" onClick={handleSignup}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </header>
  );
};
export default Login;
