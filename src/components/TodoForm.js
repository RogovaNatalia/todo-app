import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    addTodo({ text: value, priority });
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
          Добавить
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
