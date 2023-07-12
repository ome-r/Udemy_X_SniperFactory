import React, { useState } from "react";
//useCounter라는 훅 만들거야. 그 안에 initialcount가 초깃값이야
export default function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + 1);
  };
  return { count, increment };
}
//소괄호는 html, 값과 함수를 넘기기 위해 중괄호 {} 사용
