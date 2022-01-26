import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "./Router.css";
import HomePage from "./HomePage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import SideBar from "../../SideBar/SideBar";
import TextEntry from "../../TextEntry/TextEntry";
import "./appRouter.css";
import AllEntries from "../../AllEntries/AllEntries";
import Reading from "../../Reading/Reading";
const Router = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const handleValueEdit = (current) => {
    navigate("reading", { replace: true });
    console.log(current);
    setValue(current);
    return current;
  };

  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    fetch("entries")
      .then((res) => res.json())
      .then(setEntries);
  }, []);
  console.log(entries);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    console.log(user);
  }, []);

  console.log(user);

  /// Animations

  // The End

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
        <Routes>
          <Route path="/" element={<TextEntry />} />
          <Route
            path="/entries"
            element={
              <AllEntries
                user={user}
                entries={entries}
                handleValueEdit={handleValueEdit}
              />
            }
          />
          <Route
            path="reading"
            element={<Reading data={value} entries={entries} />}
          ></Route>
        </Routes>
      </div>
    );
  }
};

export default Router;
