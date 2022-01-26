import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [todo, setTodo] = useState([]);
  return (
    <>
    <AddTodo todo={todo} setTodo={setTodo}/>
    <TodoList todo={todo} setTodo={setTodo}/>
  </>
  );
};

export default App;