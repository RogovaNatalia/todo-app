import React, { useState, useEffect } from "react";

function TodoItem({
  id,
  text,
  completed,
  priority,
  onDelete,
  onToggle,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const [editPriority, setEditPriority] = useState(priority);

  useEffect(() => {
    setEditText(text);
    setEditPriority(priority);
  }, [text, priority]);

  const priorityBadge = {
    high: "danger",
    medium: "warning",
    low: "secondary",
  };

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(id, { text: editText, priority: editPriority });
    }
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center w-100">
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={completed}
          onChange={onToggle}
        />

        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control me-2"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSave();
                if (e.key === "Escape") setIsEditing(false);
              }}
            />
            <select
              className="form-select me-2"
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
            >
              <option value="low">Низкий</option>
              <option value="medium">Средний</option>
              <option value="high">Высокий</option>
            </select>
          </>
        ) : (
          <>
            <span
              className={
                "me-3 flex-grow-1 " +
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
          </>
        )}
      </div>

      <div className="d-flex align-items-center ms-3 gap-2">
        {isEditing ? (
          <button className="btn btn-sm btn-success" onClick={handleSave}>
            ✅
          </button>
        ) : (
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setIsEditing(true)}
          >
            ✏️
          </button>
        )}

        <button className="btn btn-sm btn-danger" onClick={onDelete}>
          🗑️
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
