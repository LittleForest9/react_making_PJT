import React, { useState } from "react";

const Counter = () => {
  const [num, setNUmber] = useState(0);

  const increase = () => {
    setNUmber(num + 1);
  };

  const decreasae = () => {
    setNUmber(num - 1);
  };

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decreasae}>-1</button>
      <p>{num}</p>
    </div>
  );
};

export default Counter;
