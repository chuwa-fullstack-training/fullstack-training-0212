import React, { useState } from 'react';
import './hw3.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault(); // Prevent form submission
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const markAllDone = () => {
    const newTodos = todos.map((todo) => ({ ...todo, completed: true }));
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <h1>Todos - ReactJs</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Type a todo and hit Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <div>{activeTodosCount} remaining</div>
      <button onClick={clearCompleted}>Clear Completed Todos</button>
      <div>
        <input type="checkbox" onChange={markAllDone} /> Mark All Done
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
