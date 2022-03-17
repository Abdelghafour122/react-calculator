import React, { useEffect } from "react";
import { useState } from "react";

const Head = () => {
  const [keyPosition, setKeyPosition] = useState("start");
  const [theme, setTheme] = useState("blue");

  useEffect(() => {
    document.body.classList.forEach((classs) => {
      document.body.classList.remove(classs);
    });
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <div className="head">
      <span>calc</span>
      <span className="toggler">
        <span>Theme</span>
        <span
          className="mark-holder"
          style={
            keyPosition === "center"
              ? { justifyContent: "center" }
              : { justifyContent: `flex-${keyPosition}` }
          }
        >
          <span className="mark"></span>
          <span className="num">
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
          </span>
        </span>
      </span>
    </div>
  );
};

export default Head;
