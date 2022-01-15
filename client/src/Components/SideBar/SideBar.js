import React from "react";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div className="change-style">
      <div className="sideBar">
        <input type="text" placeholder="Search journal"></input>
        <button className="btn">New Entry</button>
        <button className="btn">View all Entries</button>
        <button className="btn">View Starred Entries</button>
      </div>
    </div>
  );
};

export default SideBar;
