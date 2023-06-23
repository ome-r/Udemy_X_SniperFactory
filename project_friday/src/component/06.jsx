import React, { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0); //초깃값 0

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1); // 1씩 더해주기
    }, 1000); //1초마다
    return () => {
      clearInterval(timer);
      console.log("Clear!");
    };
  }, []); //로딩될 때 1번만 실행하기 위해 []사용
  return <p>{count}</p>;
}
// export default function Practice06() {
//   return <Timer />;
// }
