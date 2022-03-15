import React from "react";

const ResultScreen = ({ curOp, preOp, op, onFormat }) => {
  return (
    <div className="result-screen">
      <div className="prev-operand">
        {onFormat(preOp)}
        {op}{" "}
      </div>
      <div className="curr-operand">{onFormat(curOp)} </div>
    </div>
  );
};

export default ResultScreen;
