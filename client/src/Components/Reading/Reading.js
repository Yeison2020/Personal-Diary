import React from "react";
import DisplayText from "./DisplayText";
import "./reading.css";

const Reading = ({ data, entries, setEntries }) => {
  return (
    <div className="display-container">
      <DisplayText data={data} entries={entries} setEntries={setEntries} />
    </div>
  );
};

export default Reading;
