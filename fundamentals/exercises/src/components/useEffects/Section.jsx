import React, { useState, useEffect } from "react";

const Section = () => {
  let [time, setTime] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div>
      <h1>Visit time : {time} </h1>
    </div>
  );
};

export default Section;
