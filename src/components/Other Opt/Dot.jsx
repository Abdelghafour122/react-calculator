import React from "react";
import { ACTIONS } from "../Core";

const Dot = ({ dis }) => {
  return (
    <div
      id="dot"
      className="normal"
      onClick={() =>
        dis({ type: ACTIONS.CHOOSE_OPERATION, payload: { val: "." } })
      }
    >
      .
    </div>
  );
};

export default Dot;
