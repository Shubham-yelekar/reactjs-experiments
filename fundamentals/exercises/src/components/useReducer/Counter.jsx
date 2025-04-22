import React, { useReducer } from "react";
import Button from "./Button";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Error");
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Count : {state.count} </h1>
      <Button text="increment" dispatch={dispatch} />
      <Button text="decrement" dispatch={dispatch} />
      <Button text="reset" dispatch={dispatch} />
    </div>
  );
};

export default Counter;
