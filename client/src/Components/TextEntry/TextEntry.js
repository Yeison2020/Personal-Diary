import React from "react";
import "./textEntry.css";

const TextEntry = () => {
  return (
    <div id="wrapper">
      <form id="paper" method="get" action="">
        <div id="margin">
          <div className="text-style">
            {" "}
            Title: <input id="title" type="text" name="title" />
          </div>

          <div className="text-style">
            {" "}
            Date: <input id="title" type="date" name="date" />
          </div>
        </div>
        <textarea
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
        <input id="button" type="submit" value="Save now" />
      </form>
    </div>
  );
};

export default TextEntry;
