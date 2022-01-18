import React, { useRef, useEffect, useState } from "react";
import "./reading.css";

const DisplayText = ({ data, entries }) => {
  const handleSave = () => {
    const refs = {
      date: dateRef.current.value,
      title: titleRef.current.value,
      textArea: textAreaRef.current.value,
    };
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
            onClick={handleSave}
          />
        </form>
      </div>
    </>
  );
};

export default DisplayText;
