import React, { useState, useEffect } from "react";
import "./allEntries.css";

const AllEntries = ({ user }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("entries")
      .then((res) => res.json())
      .then(setEntries);
    console.log(entries);
  }, []);

  const now = new Date().toLocaleString();
  console.log(now);
  return (
    <div>
      <div className="entries-all">
        <h1>{user.user.nombre}</h1>
        <p>Current Time {now}</p>
        <div>
          <input
            type="text"
            placeholder="search.."
            className="search-input"
          ></input>
          <button className="btn-new">New entry</button>
        </div>
      </div>
    </div>
  );
};

export default AllEntries;
