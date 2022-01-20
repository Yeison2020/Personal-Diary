import React from "react";
import "./miniCards.css";

const miniCards = ({ data }) => {
  return (
    <div>
      <div className="container-mini-cards">
        <p className="name-cards">{data.title}</p>
        <p className="date-cards">{data.date}</p>
      </div>
    </div>
  );
};

export default miniCards;
