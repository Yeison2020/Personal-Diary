import React from "react";
import "./allEntries.css";
import EntryCard from "./EntryCard";

const AllEntries = ({ user, entries, handleClick }) => {
  const now = new Date().toLocaleString();
  console.log(now);

  console.log(entries);

  return (
    <>
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
      <div>
        <div className="entry-titles">
          <p className="a-entry">Entry</p>
          <p className="b-created">Date Created</p>
        </div>
      </div>
      {entries.notes.map((data) => (
        <EntryCard key={data.id} data={data} />
      ))}
    </>
  );
};

export default AllEntries;
