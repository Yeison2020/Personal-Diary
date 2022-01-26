import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./allEntries.css";
import EntryCard from "./EntryCard";
import { useNavigate } from "react-router-dom";
const AllEntries = ({ user, handleValueEdit }) => {
  const navigate = useNavigate();
  const now = new Date().toLocaleString();
  console.log(now);
  useEffect(() => {
    fetch("entries")
      .then((res) => res.json())
      .then(setUpdateComponent);
  }, []);
  const [updateComponent, setUpdateComponent] = useState([]);
  const [search, setSearch] = useState(updateComponent);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    console.log(updateComponent);
    const filterdData = updateComponent?.notes.map((data) =>
      data.title.includes(e.target.search.value)
    );

    setSearch(filterdData);
  };

  const handleNewEntry = () => {
    navigate("/", { replace: true });
  };

  console.log("Replacing Entries:", updateComponent);

  return (
    <>
      <div>
        <div className="entries-all">
          <h1>{user.user.nombre}</h1>
          <p>Current Time {now}</p>
          <div className="form-btn">
            <h4>Start Your day with a new History</h4>
            <img
              className="image-arrow"
              src="https://img.icons8.com/carbon-copy/100/000000/arrow.png"
            />

            <button className="btn-new" onClick={handleNewEntry}>
              New entry
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="entry-titles">
          <p className="a-entry">Entry</p>
          <p className="b-created">Date Created</p>
        </div>
      </div>
      {updateComponent.notes?.map((data) => (
        <EntryCard
          key={data.id}
          data={data}
          handleValueEdit={handleValueEdit}
        />
      ))}
    </>
  );
};

export default AllEntries;
