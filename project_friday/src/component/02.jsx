import React, { useState } from "react";
function Practice02() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      카운트: {counter}
      <br />
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>+1</button>
    </>
  );
}
export default Practice02;
