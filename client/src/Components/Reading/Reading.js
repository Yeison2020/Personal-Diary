import React from "react";
import DisplayText from "./DisplayText";
import "./reading.css";

const Reading = ({ data, entries }) => {
  return (
    <div className="display-container">
      <DisplayText data={data} entries={entries} />
    </div>
  );
};

export default Reading;
