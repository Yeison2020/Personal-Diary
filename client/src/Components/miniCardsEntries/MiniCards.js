import React from "react";
import "./miniCards.css";
// git push heroku main
const miniCards = ({ data }) => {
  const handleDelete = () => {
    fetch(`delete/${data.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };
  console.log(data);
  return (
    <div>
      <div className="container-mini-cards animate__animated animate__swing">
        <p className="name-cards">{data.title}</p>
        <p className="date-cards">{data.date}</p>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default miniCards;
