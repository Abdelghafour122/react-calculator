import React from "react";
import Head from "./Head";
import KeysContainer from "./KeysContainer";
import ResultScreen from "./ResultScreen";

const Core = ({ onPut }) => {
  return (
    <div className="core">
      <Head />
      <ResultScreen onPut={onPut} />
      <KeysContainer />
    </div>
  );
};

export default Core;
