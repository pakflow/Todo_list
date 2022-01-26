import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);
  return (
    <div className="main">
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
