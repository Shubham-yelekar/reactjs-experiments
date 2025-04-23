import React, { createContext, useReducer } from "react";
import Child from "./Child";

const ContextText = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "UP":
      return state + action.value;
    default:
      throw new Error("Invalid Action Type");
  }
}

const Parent = () => {
  const [counter, dispatchCounter] = useReducer(reducer, 0);
  return (
    <ContextText.Provider value={dispatchCounter}>
      <div>
        <h1>Parent : {counter}</h1>
        <Child />
      </div>
    </ContextText.Provider>
  );
};
export { ContextText };

export default Parent;
