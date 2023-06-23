const { useState } = require("react");

// const Toggle = () => {
//   const [isOn, setIsOn] = useState(false);

//   const handleClick = () => {
//     setIsOn(!isOn);
//   };
//   return <button onClick={handleClick}>{isOn ? "켜짐" : "꺼짐"}</button>;
// };

function TodoList(props) {
  console.log(props);
  return;
}
export default function Practice04() {
  const todos = [
    { id: 1, text: "할 일 목록 1" },
    { id: 2, text: "할 일 목록 2" },
    { id: 3, text: "할 일 목록 3" },
    { id: 4, text: "할 일 목록 4" },
    { id: 5, text: "할 일 목록 5" },
  ];
  const anothertodos = [
    { id: 1, text: "할 일 목록 1" },
    { id: 2, text: "할 일 목록 2" },
    { id: 3, text: "할 일 목록 3" },
    { id: 4, text: "할 일 목록 4" },
    { id: 5, text: "할 일 목록 5" },
  ];

  return <TodoList todos={todos} />;
}
