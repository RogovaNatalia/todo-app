import React from "react";

function TodoItem({ text, completed, onDelete, onToggle }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={completed}
          onChange={onToggle}
        />
        <span
          className={completed ? "text-decoration-line-through text-muted" : ""}
        >
          {text}
        </span>
      </div>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Удалить
      </button>
    </li>
  );
}

export default TodoItem;
