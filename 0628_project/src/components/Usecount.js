import React from "react";
import useCounter from "../hooks/countHooks";

export default function Usecount() {
  const { count, incrememt } = useCounter(100);
  return (
    <div>
      <p> 카운트 : {count} </p>
      <button onClick={incrememt}>증가</button>
    </div>
  );
}
