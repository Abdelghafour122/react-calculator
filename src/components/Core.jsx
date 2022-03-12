import React from "react";
import Head from "./Head";
import KeysContainer from "./KeysContainer";
import ResultScreen from "./ResultScreen";

const Core = () => {
  return (
    <div className="core">
      <Head />
      <ResultScreen />
      <KeysContainer />
    </div>
  );
};

export default Core;
