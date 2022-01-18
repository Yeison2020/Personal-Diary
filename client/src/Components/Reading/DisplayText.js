import React, { useRef, useEffect, useState } from "react";
import "./reading.css";

const DisplayText = ({ data }) => {
  const [entries, setEntries] = useState([]);
  const handleSave = () => {
    const refs = {
      date: dateRef.current.value,
      title: titleRef.current.value,
      textArea: textAreaRef.current.value,
    };
  };
  useEffect(() => {
    fetch("entries")
      .then((res) => res.json())
      .then(setEntries);
  }, []);

  // const filterentries = entries.notes.filter((entry) => entry.id === data);
  // console.log(filterentries);

  console.log(entries);
  const dateRef = useRef("");
  const titleRef = useRef("");
  const textAreaRef = useRef("");
  return (
    <>
      <div id="wrapper">
        <form id="paper" method="get" action="">
          <div id="margin">
            <div className="text-style">
              {" "}
              Title:{" "}
              <input id="title" type="text" name="title" ref={titleRef} />
            </div>

            <div className="text-style">
              {" "}
              Date: <input id="title" type="date" name="date" ref={dateRef} />
            </div>
          </div>
          <textarea
            ref={textAreaRef}
            placeholder="Enter something funny."
            id="text"
            name="text"
            rows="4"
            style={{
              overflow: "hidden",
              "word-wrap": "break-word",
              height: "600px",
            }}
          ></textarea>
          <br />
          <input
            id="button"
            type="submit"
            value="Save now"
            onClick={handleSave}
          />
        </form>
      </div>
    </>
  );
};

export default DisplayText;
