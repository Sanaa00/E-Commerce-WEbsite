import React from "react";
import { useState } from "react";
function Pages() {
  const [count, setCount] = useState(0);
  function dicrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="text-4xl text-red-900 flex flex-row justify-center items-center w-screen h-screen font-bold">
      <button
        onClick={dicrement}
        className="px-4 w-max-16 shadow-md bg-green-500 mx-4 flex flex-row justify-center items-center"
      >
        -
      </button>
      <div className="px-4">{count}</div>
      <button
        onClick={increment}
        className="px-4 w-max-16 shadow-md bg-green-500 mx-4 flex flex-row justify-center items-center"
      >
        +
      </button>
    </div>
  );
}

export default Pages;
