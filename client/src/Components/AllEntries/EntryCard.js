import React from "react";
import "./allEntries.css";
import { useNavigate } from "react-router-dom";

const EntryCard = ({ data, handleValueEdit }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/reading", { replace: false });
    handleValueEdit(data.id);
    localStorage.clear();
  };
  return (
    <div className="entrie-card" onClick={handleClick}>
      <p onClick={handleClick} className="title-btn">
        {data.title}
      </p>
      <p className="title-btn">{data.date}</p>
    </div>
  );
};

export default EntryCard;
