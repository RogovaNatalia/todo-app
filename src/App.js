import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

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

  const updateTodo = (id, updated) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updated } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Мой To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={updateTodo}
      />
    </div>
  );
}

export default App;
