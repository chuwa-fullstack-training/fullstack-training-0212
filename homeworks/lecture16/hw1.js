import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, clearCompleted } from './todosSlice'; // Import from todosSlice for Redux Toolkit

const TodoApp = () => {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleToggleTodo = index => {
    dispatch(toggleTodo(index));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li 
            key={index} 
            onClick={() => handleToggleTodo(index)} 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={handleClearCompleted}>Clear Completed Todos</button>
    </div>
  );
};

export default TodoApp;
