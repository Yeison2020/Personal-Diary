import React from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  console.log(user);
  const location = useLocation();
  console.log(location);
  const handleHome = () => {
    navigate("/", { replace: true });
  };

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

  const handleLogout = () => {
    navigate("/", {
      replace: true,
    });
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  };

  if (!user) {
    return (
      <>
        <div>
          <div className="nav-principal Home-page-color">
            <p className="login" onClick={handleLogin}>
              Log in
            </p>
            <p className="signup" onClick={handleSignup}>
              Sign up{" "}
            </p>
            {location.pathname !== "/" && (
              <p className="signup" onClick={handleHome}>
                {" "}
                Home
              </p>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="nav-principal" id="color-user">
        <h2 className="name-site" onClick={handleHome}>
          Personal Diary
        </h2>
        <img
          className="logo-user"
          src="https://img.icons8.com/fluency-systems-filled/48/000000/user.png"
          alt='"logo-user"'
        />
        <p className="login">{user.user.nombre}</p>
        <p className="signup" onClick={handleLogout}>
          Log out{" "}
        </p>
      </div>
    );
  }
};

export default Navbar;
