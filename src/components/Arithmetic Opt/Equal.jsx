import React from "react";
import { ACTIONS } from "../Core";

const Equal = ({ dis }) => {
  return (
    <div
      className="equal"
      onClick={() => {
        dis({ type: ACTIONS.EVALUATE });
      }}
    >
      =
    </div>
  );
};

export default Equal;
