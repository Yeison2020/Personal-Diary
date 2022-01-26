import React from "react";
import "./miniCards.css";
// git push heroku main
const miniCards = ({ data }) => {
  const handleDelete = (id) => {};
  console.log(data);
  return (
    <div>
      <div className="container-mini-cards animate__animated animate__swing">
        <p className="name-cards">{data.title}</p>
        <p className="date-cards">{data.date}</p>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default miniCards;
