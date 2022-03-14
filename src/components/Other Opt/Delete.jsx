import React from "react";
import { ACTIONS } from "../Core";

const Delete = ({ dis }) => {
  return (
    <div
      className="arithmetic spec"
      onClick={() => dis({ type: ACTIONS.DELETE_DIGIT })}
    >
      DEL
    </div>
  );
};

export default Delete;
