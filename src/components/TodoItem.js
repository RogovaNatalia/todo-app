import React from "react";

function TodoItem({ text, onDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{text}</span>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Удалить
      </button>
    </li>
  );
}

export default TodoItem;
