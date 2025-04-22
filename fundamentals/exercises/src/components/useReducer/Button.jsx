import React from "react";

const Button = ({ text, dispatch }) => {
  function action(text) {
    dispatch({ type: text });
  }
  return <button onClick={() => action(text)}>{text}</button>;
};

export default Button;
