import React, { useEffect, useRef, useState } from "react";

const GuessNumber = () => {
  const numberRef = useRef(null);
  const inputRef = useRef(null);

  const [value, setValue] = useState("");

  useEffect(() => {
    return () => {
      const random = Math.floor(Math.random() * 10);
      numberRef.current = random;
      console.log(numberRef.current);
    };
  }, []);

  function handleGuess() {
    if (Number(inputRef.current.value) < numberRef.current) {
      setValue("Higher");
    } else if (Number(inputRef.current.value) > numberRef.current) {
      console.log("Lower");
      setValue("Lower");
    } else {
      setValue("Match !");
      inputRef.current.value = null;
    }
  }

  return (
    <div>
      <h6>GuessNumber</h6>
      <input type="text" ref={inputRef} />
      <button onClick={handleGuess}>Guess</button>
      <p>{value}</p>
    </div>
  );
};

export default GuessNumber;
