import React, { useRef, useState } from "react";
import "./Signup.css";

const Signup = ({ onLogin }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);
  const handleSignup = (e) => {
    e.preventDefault();
    const refs = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
    };

    setValues(refs);
    if (refs.password === refs.passwordConfirmation) {
      setIsLoading(true);
      fetch("signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
          password_confirmation: values.passwordConfirmation,
        }),
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
    }
  };

  return (
    <header className="signScreen animate__animated animate__fadeInLeftBig">
      <form>
        <h1>Sign up</h1>
        <input ref={usernameRef} placeholder="Email" type="username" />
        <input ref={passwordRef} placeholder="Password" type="Password" />
        <input
          ref={passwordConfirmationRef}
          placeholder="Password Confirmation"
          type="Password_Confirmation"
        />
        <button type="submit" onClick={handleSignup}>
          Sign up
        </button>
      </form>
    </header>
  );
};

export default Signup;
