import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);

  function focus() {
    inputRef.current.focus();
  }

  // useEffect(() => {
  //   focus();
  // }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default Input;
