import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./textEntry.css";
import SideBar from "../SideBar/SideBar";

const TextEntry = ({ data }) => {
  const [entries, setEntries] = useState([]);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    diary: "",
  });

  useEffect(() => {
    fetch("entries")
      .then((res) => res.json())
      .then(setEntries);
  }, []);
  console.log(entries);
  console.log(data);
  // const filterData = entries.notes.filter((entry) => entry.id === data);

  // console.log(filterData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    fetch("notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        navigate("/", { replace: true });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    const elemento = document.getElementById("paper");
    elemento.reset();
    window.location.reload();
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
              <input
                id="title"
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="text-style">
              {" "}
              Date:{" "}
              <input
                id="title"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <textarea
            onChange={handleChange}
            value={formData.diary}
            placeholder="Enter something funny."
            id="text"
            name="diary"
            rows="4"
            required
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
