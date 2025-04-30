import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    // Загружаем из localStorage при инициализации
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Обновляем localStorage при каждом изменении списка
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    const newTask = {
      id: uuidv4(),
      text: newTodo,
    };
    setTodos([...todos, newTask]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Мой To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
