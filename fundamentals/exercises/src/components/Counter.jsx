import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, SetCount] = useState(0);

  function add() {
    SetCount(count + 1);
    SetCount((prev) => prev + 1);
  }

  function sub() {
    SetCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={sub}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
};

export default Counter;
