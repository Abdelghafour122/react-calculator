import React from "react";
import Digit from "./Digit";
import Delete from "./Other Opt/Delete";
import Plus from "./Arithmetic Opt/Plus";
import Minus from "./Arithmetic Opt/Minus";
import Multiply from "./Arithmetic Opt/Multiply";
import Equal from "./Arithmetic Opt/Equal";
import Dot from "./Other Opt/Dot";
import Reset from "./Other Opt/Reset";
import Divide from "./Arithmetic Opt/Divide";

const KeysContainer = ({ dispatch }) => {
  return (
    <div className="keys-cont">
      <Digit val={7} dis={dispatch} />
      <Digit val={8} dis={dispatch} />
      <Digit val={9} dis={dispatch} />
      <Delete dis={dispatch} />
      <Digit val={4} dis={dispatch} />
      <Digit val={5} dis={dispatch} />
      <Digit val={6} dis={dispatch} />
      <Plus dis={dispatch} />
      <Digit val={1} dis={dispatch} />
      <Digit val={2} dis={dispatch} />
      <Digit val={3} dis={dispatch} />
      <Minus dis={dispatch} />
      <Dot dis={dispatch} />
      <Digit val={0} dis={dispatch} />
      <Divide dis={dispatch} />
      <Multiply dis={dispatch} />
      <Reset dis={dispatch} />
      <Equal dis={dispatch} />
    </div>
  );
};

export default KeysContainer;
