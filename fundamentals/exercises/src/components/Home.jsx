import React, { useEffect, useState } from "react";
import Section from "./useEffects/Section";
const Home = () => {
  let [visit, setVisit] = useState(0);
  function visitUp() {
    setVisit((prev) => prev + 1);
  }

  useEffect(() => {
    console.log("Home re-rendered");
  });

  return (
    <div>
      <h1>Visits: {visit}</h1>
      <button onClick={visitUp}>+</button>
      <Section />
    </div>
  );
};

export default Home;
