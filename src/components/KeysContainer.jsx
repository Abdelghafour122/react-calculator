import React from "react";
import Digit from "./Digit";
import Delete from "./Arithmetic Opt/Delete";
import Plus from "./Arithmetic Opt/Plus";
import Minus from "./Arithmetic Opt/Minus";
import Multiply from "./Arithmetic Opt/Multiply";
import Equal from "./Arithmetic Opt/Equal";
import Dot from "./Other Opt/Dot";
import Reset from "./Other Opt/Reset";
import Divide from "./Arithmetic Opt/Divide";

const KeysContainer = () => {
  return (
    <div className="keys-cont">
      <Digit val={7} />
      <Digit val={8} />
      <Digit val={9} />
      <Delete />
      <Digit val={4} />
      <Digit val={5} />
      <Digit val={6} />
      <Plus />
      <Digit val={1} />
      <Digit val={2} />
      <Digit val={3} />
      <Minus />
      <Dot />
      <Digit val={0} />
      <Divide />
      <Multiply />
      <Reset />
      <Equal />
    </div>
  );
};

export default KeysContainer;
