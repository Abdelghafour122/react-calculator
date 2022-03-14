import React from "react";
import { ACTIONS } from "../Core";
const Multiply = ({ dis }) => {
  return (
    <div
      className="normal"
      onClick={() =>
        dis({ type: ACTIONS.CHOOSE_OPERATION, payload: { val: "*" } })
      }
    >
      x
    </div>
  );
};

export default Multiply;
