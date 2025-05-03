import React from "react";

function TodoItem({ text, completed, priority, onDelete, onToggle }) {
  const getBadgeColor = (priority) => {
    switch (priority) {
      case "high":
        return "danger";
      case "medium":
        return "warning";
      case "low":
        return "success";
      default:
        return "secondary";
    }
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
          className={completed ? "text-decoration-line-through text-muted" : ""}
        >
          {text}
        </span>
        <span className={`badge bg-${getBadgeColor(priority)} ms-3`}>
          {priority === "high"
            ? "Высокий"
            : priority === "medium"
            ? "Средний"
            : "Низкий"}
        </span>
      </div>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Удалить
      </button>
    </li>
  );
}

export default TodoItem;
