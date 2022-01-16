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
  return (
    <div>
      <div className="entries-all">
        <h1>{user.user.nombre}</h1>
        <h2>Total of entries | Created date next to it</h2>
        <button>New entry</button>
      </div>
    </div>
  );
};

export default AllEntries;
