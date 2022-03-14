import React from "react";
import { ACTIONS } from "../Core";
const Reset = ({ dis }) => {
  return (
    <div
      id="reset"
      className="spec"
      onClick={() => dis({ type: ACTIONS.CLEAR })}
    >
      RESET
    </div>
  );
};

export default Reset;
