import React from "react";

const ResultScreen = ({ onPut }) => {
  return (
    <div className="result-screen">
      <div className="prev-operand">1234</div>
      <div className="curr-operand">{onPut}</div>
    </div>
  );
};

export default ResultScreen;
