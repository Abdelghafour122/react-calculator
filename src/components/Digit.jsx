import React from "react";
import { ACTIONS } from "./Core";

const Digit = ({ val, dis }) => {
  return (
    <div
      className="normal"
      onClick={() => dis({ type: ACTIONS.ADD_DIGIT, payload: { val } })}
    >
      {val}
    </div>
  );
};

export default Digit;
