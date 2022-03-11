import React, { useState, useMemo, useEffect } from "react";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFucntion(number);
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle]);

  const inputHandler = (e) => {
    setNumber(e.target.value);
  };

  const themeChangeHandler = (e) => {
    setDark((pre) => {
      return !pre;
    });
  };

  return (
    <div>
      <input type="number" value={number} onChange={inputHandler} />
      <button onClick={themeChangeHandler}>Change theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

const slowFucntion = (number) => {
  for (let i = 0; i <= 999999999; i++) {}
  return number * 2;
};
export default App;
