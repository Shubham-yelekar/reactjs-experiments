import React, { useContext } from "react";
import { ContextText } from "./Parent";

const Child = () => {
  const dispatchCounter = useContext(ContextText);

  function handleUp() {
    dispatchCounter({ type: "UP", value: 1 });
  }
  return (
    <div>
      <h3>Child</h3>
      <button onClick={handleUp}>+</button>
    </div>
  );
};

export default Child;
