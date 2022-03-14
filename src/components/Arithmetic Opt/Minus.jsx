import React from "react";
import { ACTIONS } from "../Core";
const Minus = ({ dis }) => {
  return (
    <div
      className="normal"
      onClick={() =>
        dis({ type: ACTIONS.CHOOSE_OPERATION, payload: { val: "-" } })
      }
    >
      -
    </div>
  );
};

export default Minus;
