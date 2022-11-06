import React from "react";
import { useState, useReducer } from "react";
const Actions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
function reducer(state, action) {
  switch (action.type) {
    case Actions.INCREMENT:
      return { count: state.count + 1 };
    case Actions.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}
function Pages(brands) {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function dicrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  // for useReducer
  function reducerdIcrement() {
    dispatch({ type: Actions.INCREMENT });
  }
  function reducerIncrement() {
    dispatch({ type: Actions.DECREMENT });
  }
  return (
    <div className="text-4xl text-red-900 flex flex-row justify-center items-center w-screen h-screen font-bold">
      <div>
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
      {/* useReducer Example */}
      <div>
        <button
          onClick={reducerdIcrement}
          className="px-4 w-max-16 shadow-md bg-green-500 mx-4 flex flex-row justify-center items-center"
        >
          -
        </button>
        <div className="px-4">{state.count}</div>
        <button
          onClick={reducerIncrement}
          className="px-4 w-max-16 shadow-md bg-green-500 mx-4 flex flex-row justify-center items-center"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Pages;
