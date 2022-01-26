import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./textEntry.css";
import SideBar from "../SideBar/SideBar";

const TextEntry = ({ data }) => {
  const [entries, setEntries] = useState([]);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const dateRef = useRef("");
  const titleRef = useRef("");
  const textAreaRef = useRef("");

  useEffect(() => {
    fetch("entries")
      .then((res) => res.json())
      .then(setEntries);
  }, []);
  console.log(entries);
  console.log(data);
  // const filterData = entries.notes.filter((entry) => entry.id === data);

  // console.log(filterData);

  const handleSave = (e) => {
    e.preventDefault();
    const refs = {
      date: dateRef.current.value,
      title: titleRef.current.value,
      textArea: textAreaRef.current.value,
    };

    fetch("notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: refs.title,
        date: refs.date,
        diary: refs.textArea,
      }),
    }).then((r) => {
      if (r.ok) {
        navigate("/", { replace: true });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    const elemento = document.getElementById("paper");
    elemento.reset();
  };
  return (
    <>
      <SideBar entries={entries} />
      <div id="wrapper" className="animate__animated ">
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

export default TextEntry;
