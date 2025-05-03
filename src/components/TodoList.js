import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          priority={todo.priority}
          onDelete={() => deleteTodo(todo.id)}
          onToggle={() => toggleComplete(todo.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
