import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete, setEditingTodo }) {
  const sortedTodos = [...todos].sort((a, b) => {
    const priorities = { high: 3, medium: 2, low: 1 };
    return priorities[b.priority] - priorities[a.priority];
  });

  return (
    <ul className="list-group">
      {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onDelete={() => deleteTodo(todo.id)}
          onToggle={() => toggleComplete(todo.id)}
          onEdit={() => setEditingTodo(todo)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
