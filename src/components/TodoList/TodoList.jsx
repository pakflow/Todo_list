import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "../../App.css";

const TodoList = ({ todo, setTodo }) => {
  function deleteTodo(id) {
    let newTodos = [...todo].filter((item) => item.id !== id);
    setTodo(newTodos);
  }
  return (
    <>
      {todo.map((item) => (
        <div className="block" key={item.id}>
          <span className="text">{item.title}</span>
          <Button type="primary" onClick={() => deleteTodo(item.id)}>
            <DeleteOutlined />
          </Button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
