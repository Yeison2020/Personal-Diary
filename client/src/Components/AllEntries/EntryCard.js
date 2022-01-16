import React from "react";
import "./allEntries.css";

const EntryCard = ({ data }) => {
  console.log(data.id);
  const handleClick = () => {};
  return (
    <div className="entrie-card" onClick={handleClick}>
      <p>{data.title}</p>
      <p>{data.date}</p>
    </div>
  );
};

export default EntryCard;
