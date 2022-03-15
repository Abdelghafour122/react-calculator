import React from "react";
import { ACTIONS } from "../Core";

const Dot = ({ dis }) => {
  return (
    <div
      id="dot"
      className="normal"
      onClick={() => dis({ type: ACTIONS.ADD_DIGIT, payload: { val: "." } })}
    >
      .
    </div>
  );
};

export default Dot;
