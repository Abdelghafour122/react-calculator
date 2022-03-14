import React from "react";

const ResultScreen = ({ curOp, preOp, op }) => {
  return (
    <div className="result-screen">
      <div className="prev-operand">
        {preOp} {op}{" "}
      </div>
      <div className="curr-operand">{curOp} </div>
    </div>
  );
};

export default ResultScreen;
