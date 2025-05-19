import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  const sortedTodos = [...todos].sort((a, b) => {
    // Сначала по выполненности (false < true)
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }

    // Потом по приоритету
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
          onEdit={(id, updated) => editTodo(id, updated)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
