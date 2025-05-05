import React from "react";

function TodoItem({ text, completed, priority, onDelete, onToggle, onEdit }) {
  const priorityBadge = {
    high: "danger",
    medium: "warning",
    low: "secondary",
  };

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
          className={
            "me-3 " +
            (completed ? "text-decoration-line-through text-muted" : "")
          }
        >
          {text}
        </span>
        <span className={`badge bg-${priorityBadge[priority]}`}>
          {priority === "high"
            ? "Высокий"
            : priority === "medium"
            ? "Средний"
            : "Низкий"}
        </span>
      </div>
      <div>
        <button
          className="btn btn-sm btn-outline-secondary me-2"
          onClick={onEdit}
        >
          ✏️
        </button>
        <button className="btn btn-sm btn-danger" onClick={onDelete}>
          🗑️
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
