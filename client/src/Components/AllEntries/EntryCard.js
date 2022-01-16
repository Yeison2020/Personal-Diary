import React from "react";
import "./allEntries.css";
import { useNavigate } from "react-router-dom";

const EntryCard = ({ data, handleValueEdit }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: false });
    handleValueEdit(data.id);
  };
  return (
    <div className="entrie-card" onClick={handleClick}>
      <p onClick={handleClick} className="title-btn">
        {data.title}
      </p>
      <p>{data.date}</p>
    </div>
  );
};

export default EntryCard;
