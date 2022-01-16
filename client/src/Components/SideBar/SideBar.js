import React, { useState } from "react";
import "./sideBar.css";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();
  const handleNewEntry = () => {
    navigate("/", { replace: true });
  };
  const handleAllEntries = () => {
    navigate("entries", { replace: false });
  };

  return (
    <div className="sideBarfixed">
      <div className="change-style">
        <div className="sideBar">
          <button className="btn" onClick={handleNewEntry}>
            New Entry
          </button>
          <button className="btn" onClick={handleAllEntries}>
            View all Entries
          </button>
          <button className="btn">View Starred Entries</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
