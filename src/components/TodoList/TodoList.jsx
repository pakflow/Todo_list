import React from "react";
import { Button } from "antd";

const TodoList = ([todo, setTodo]) => {
  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }
  return (
    <div>
      {todo.map((item) => {
        <div key={item.id}>
          <div>{item.title}</div>
          <Button type="primary" onClick={() => deleteTodo(item.id)}>
            Delete
          </Button>
        </div>;
      })}
    </div>
  );
};

export default TodoList;
