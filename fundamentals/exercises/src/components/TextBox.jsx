import React, { useState } from "react";

const TextBox = () => {
  let [value, setValue] = useState("");

  function handleInput(e) {
    console.log(e.target.value);
    setValue((prev) => (prev = e.target.value));
  }

  return (
    <div>
      <h1>Value : {value}</h1>
      <input type="text" name="name" onInput={handleInput} />
    </div>
  );
};

export default TextBox;
