import React, { useEffect, useState } from "react";

const Interval = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("Interval Says Hello!");
    const countInterval = setInterval(() => {
      console.log("Interval Says Hello!");
    }, 1000);

    return () => {
      clearInterval(countInterval);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Count + 1</button>
    </div>
  );
};

export default Interval;
