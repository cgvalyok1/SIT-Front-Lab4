import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
    </div>
  );
};

export default TodoItem;