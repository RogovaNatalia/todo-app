import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //нет перезагрузки страницы
    if (value.trim()) {
      //удаляет пробелы в начале и в конце строки. Если пользователь ничего не ввёл (или только пробелы), задача не будет добавлена
      addTodo(value); // вызываем функцию, переданную как пропс
      setValue(""); // очищаем поле ввода
    }
  };

  return (
    <form onSubmit={handleSubmit} id="todo-form" className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="todo-input"
          placeholder="Введите новую задачу..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
