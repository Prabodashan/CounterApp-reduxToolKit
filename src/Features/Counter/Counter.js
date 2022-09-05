import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addAny, reset } from "./CounterSlice";

const Counter = () => {
  const [value, setValue] = useState(5);
  const COUNT = useSelector((state) => state.counter.count);
  const DISPATCH = useDispatch();
  return (
    <>
      <h2>{COUNT}</h2>
      <button onClick={() => DISPATCH(increment())}>+</button>
      <button onClick={() => DISPATCH(decrement())}>-</button>
      <button
        onClick={() => {
          DISPATCH(reset());
          setValue("");
        }}
      >
        Reset
      </button>
      <br />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => DISPATCH(addAny(value))}>Add Any</button>
    </>
  );
};

export default Counter;
