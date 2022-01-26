import React, { useEffect, useState, useMemo } from "react";
import "./reading.css";
import { useNavigate } from "react-router-dom";

const DisplayText = ({ data, entries }) => {
  const dataStore = useMemo(() => data);
  const [id, setId] = useState(dataStore);

  const navigate = useNavigate();

  console.log(entries, data);
  const filterentries = entries.notes.filter((entry) => entry.id === dataStore);
  const [dataLocal, setData] = useState(() => {
    const saved = localStorage.getItem("data");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  localStorage.setItem("IdValue", JSON.stringify(dataStore));
  const [IdValue, setIdValue] = useState(() => {
    const saved = localStorage.getItem("IdValue");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    setId(IdValue);
  }, []);

  const [formData, setFormatData] = useState({
    date: filterentries[0]?.date,
    title: filterentries[0]?.title,
    diary: filterentries[0]?.diary,
  });

  console.log(formData);
  localStorage.setItem("data", JSON.stringify(formData));

  useEffect(() => {
    setFormatData(dataLocal);
  }, []);

  console.log(dataLocal);
  const handleChange = (e) => {
    setFormatData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSave = (e) => {
    e.preventDefault();
    handleChange(e);
    console.log(formData);

    fetch(`replace/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));

    const elemento = document.getElementById("paper");
    navigate("/", { replace: true });
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
              height: "600px",
            }}
            onChange={handleChange}
            value={formData.diary}
          ></textarea>
          <br />
          <button id="button" onClick={(e) => handleSave(e)}>
            Update Page
          </button>
        </form>
      </div>
    </>
  );
};

export default DisplayText;
