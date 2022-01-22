import React, { useRef, useEffect, useState } from "react";
import "./reading.css";

const DisplayText = ({ data, entries }) => {
  const handleSave = (e) => {
    e.preventDefault();

    const refs = {
      date: dateRef.current.value,
      title: titleRef.current.value,
      diary: textAreaRef.current.value,
    };
    fetch(`replace/${data}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(refs),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));

    const elemento = document.getElementById("paper");

    elemento.reset();
  };

  const filterentries = entries.notes.filter((entry) => entry.id === data);
  console.log(filterentries[0].title);

  console.log(entries);
  const dateRef = useRef("");
  const titleRef = useRef("");
  const textAreaRef = useRef("");

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
                ref={titleRef}
                placeholder={filterentries[0].title}
              />
            </div>

            <div className="text-style">
              {" "}
              Date:{" "}
              <input
                id="title"
                type="date"
                name="date"
                ref={dateRef}
                placeholder={filterentries[0].date}
              />
            </div>
          </div>
          <textarea
            ref={textAreaRef}
            id="text"
            name="text"
            rows="4"
            style={{
              overflow: "hidden",
              "word-wrap": "break-word",
              height: "600px",
            }}
            placeholder={filterentries[0].diary}
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
