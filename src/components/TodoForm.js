import React, { useState, useEffect } from "react";

function TodoForm({ addTodo, editingTodo, updateTodo, cancelEdit }) {
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState("low");

  useEffect(() => {
    if (editingTodo) {
      setValue(editingTodo.text);
      setPriority(editingTodo.priority);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    if (editingTodo) {
      updateTodo(editingTodo.id, { text: value, priority });
      cancelEdit();
    } else {
      addTodo({ text: value, priority });
    }

    setValue("");
    setPriority("low");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите задачу..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          className="form-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Низкий</option>
          <option value="medium">Средний</option>
          <option value="high">Высокий</option>
        </select>
        <button className="btn btn-primary" type="submit">
          {editingTodo ? "Сохранить" : "Добавить"}
        </button>
        {editingTodo && (
          <button
            className="btn btn-secondary"
            onClick={cancelEdit}
            type="button"
          >
            Отмена
          </button>
        )}
      </div>
    </form>
  );
}

export default TodoForm;
