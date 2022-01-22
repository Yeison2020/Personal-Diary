import React, { useRef, useEffect, useState } from "react";
import "./reading.css";

const DisplayText = ({ data, entries }) => {
  const [formData, setFormatData] = useState({
    data: "",
    title: "",
    diary: "",
  });

  const filterentries = entries.notes.filter((entry) => entry.id === data);

  console.log("Filtered Initial state:", filterentries);

  console.log(entries);

  const handleChange = (e) => {
    setFormatData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSave = (e) => {
    e.preventDefault();
    handleChange(e);
    console.log(formData);

    fetch(`replace/${data}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));

    const elemento = document.getElementById("paper");

    elemento.reset();
  };

  return (
    <>
      <div id="wrapper2">
        <form id="paper" method="get" action="">
          <div id="margin">
            <div className="text-style">
              {" "}
              Title:{" "}
              <input
                id="title"
                type="text"
                name="title"
                onChange={handleChange}
                value={formData.title}
              />
            </div>

            <div className="text-style">
              {" "}
              Date:{" "}
              <input
                id="title"
                type="date"
                name="date"
                onChange={handleChange}
                value={formData.date}
              />
            </div>
          </div>
          <textarea
            id="text"
            name="diary"
            rows="4"
            style={{
              overflow: "hidden",
              "word-wrap": "break-word",
              height: "600px",
            }}
            onChange={handleChange}
            value={formData.text}
          ></textarea>
          <br />
          <input
            id="button"
            type="submit"
            value="Replace"
            onClick={(e) => handleSave(e)}
          />
        </form>
      </div>
    </>
  );
};

export default DisplayText;
