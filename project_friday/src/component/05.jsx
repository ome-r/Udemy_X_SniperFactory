const { useState } = require("react");
//맵은 새로운 배열을 만든다.

function TodoList(props) {
  console.log(props);
  const todos = props.todos;
  return (
    <ul>
      {" "}
      {todos.map((item) => (
        <li> {item.text}</li>
      ))}
    </ul>
  );
}
export default function Practice04() {
  const todos = [
    { id: 1, text: "할 일 목록 1" },
    { id: 2, text: "할 일 목록 2" },
    { id: 3, text: "할 일 목록 3" },
    { id: 4, text: "할 일 목록 4" },
    { id: 5, text: "할 일 목록 5" },
  ];
  // const anothertodos = [
  //   { id: 1, text: "할 일 목록 1" },
  //   { id: 2, text: "할 일 목록 2" },
  //   { id: 3, text: "할 일 목록 3" },
  //   { id: 4, text: "할 일 목록 4" },
  //   { id: 5, text: "할 일 목록 5" },
  // ];

  return <TodoList todos={todos} />;
}
