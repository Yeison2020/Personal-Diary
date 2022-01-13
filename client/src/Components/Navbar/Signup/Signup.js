import React, { useRef } from "react";
import "./Signup.css";

const Signup = () => {
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
