import React, { useState } from "react";
import { Button, Input } from "antd";
import "../../App.css";

const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");
  function addTodo() {
    if (todo.length < 10) {
      setTodo([
        ...todo,
        {
          id: todo.length + 1,
          title: value,
        },
      ]);
      setValue("");
    } else {
      alert("Превышен лимит");
    }
  }
  return (
    <div className="add">
      <Input
        className="inp"
        placeholder="Enter your text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="primary" onClick={addTodo}>
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
