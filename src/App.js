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

  const addTodo = ({ text, priority }) => {
    const newTask = {
      id: uuidv4(),
      text,
      priority,
      completed: false,
    };
    setTodos((prev) => [...prev, newTask]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const sortedTodos = [...todos].sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Мой To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={sortedTodos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
