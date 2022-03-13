import React from "react";
import { useState } from "react";

const Head = () => {
  const [keyPosition, setKeyPosition] = useState("start");
  const [theme, setTheme] = useState("blue");

  document.body.classList.forEach((classs) => {
    document.body.classList.remove(classs);
  });
  document.body.classList.add(`${theme}-theme`);

  return (
    <div className="head">
      <span>calc</span>
      <span id="toggler">
        <span>Theme</span>
        <span
          id="mark-holder"
          style={
            keyPosition === "center"
              ? { justifyContent: "center" }
              : { justifyContent: `flex-${keyPosition}` }
          }
        >
          <div id="mark"></div>
          <div id="num">
            <span
              id="blue"
              onClick={() => {
                setKeyPosition("start");
                setTheme("blue");
              }}
            >
              1
            </span>
            <span
              id="white"
              onClick={() => {
                setKeyPosition("center");
                setTheme("white");
              }}
            >
              2
            </span>
            <span
              id="violet"
              onClick={() => {
                setKeyPosition("end");
                setTheme("violet");
              }}
            >
              3
            </span>
          </div>
        </span>
      </span>
    </div>
  );
};

export default Head;
