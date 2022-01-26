import React, { useState } from "react";
import "./sideBar.css";
import { useNavigate } from "react-router-dom";
import MiniCards from "../miniCardsEntries/MiniCards";

const SideBar = ({ entries }) => {
  const navigate = useNavigate();

  console.log(entries);

  const handleNewEntry = () => {
    const elemento = document.getElementById("paper");
    elemento.reset();
  };
  const handleAllEntries = () => {
    navigate("entries", { replace: false });
  };

  const notesArray = entries?.notes;

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
          {notesArray?.map((data) => (
            <MiniCards key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
