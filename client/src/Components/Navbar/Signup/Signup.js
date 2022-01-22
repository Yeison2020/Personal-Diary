import React, { useRef, useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = ({ onLogin }) => {
  const [values, setValues] = useState({
    username: "",
    nombre: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const nombreRef = useRef(null);
  // const usernameRef = useRef(null);
  // const passwordRef = useRef(null);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    navigate("/", { replace: true });
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);

    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
        });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  };

  return (
    <header className="signScreen animate__animated animate__fadeInLeftBig">
      <form>
        <h1>Sign up</h1>
        <input placeholder="username" type="text" name="nombre" />
        <input placeholder="Email" type="username" name="username" />
        <input placeholder="Password" type="Password" name="password" />
        <input
          placeholder="Password Confirmation"
          type="Password"
          name="password_confirmation"
        />
        <button type="submit" onClick={(e) => handleSignup(e)}>
          Sign up
        </button>
      </form>
    </header>
  );
};

export default Signup;
