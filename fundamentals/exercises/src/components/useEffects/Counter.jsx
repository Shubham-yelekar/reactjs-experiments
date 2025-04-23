import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  let [count, SetCount] = useState(0);

  useEffect(() => {
    console.log("component mounted");
  });

  // useEffect(() => {
  //   console.log("component mounted []");
  // }, []);

  useEffect(() => {
    console.log("count changed");
  }, [count]);

  function add() {
    SetCount((prev) => prev + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>+</button>
    </div>
  );
};

export default Counter;
