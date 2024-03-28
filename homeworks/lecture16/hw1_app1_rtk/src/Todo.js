import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodoCompletion, markAllCompleted, clearCompletedTodos } from './redux/todoSlice';
import "./App.css";


const TodoApp = ({ todos, newTodo, addTodo, toggleTodoCompletion, markAllCompleted, clearCompletedTodos, setNewTodo }) => {
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  const handleToggleTodoCompletion = (id) => {
    toggleTodoCompletion(id);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodoCompletion(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={markAllCompleted}>Mark All Completed</button>
      <button onClick={clearCompletedTodos}>Clear Completed Todos</button>
      <p>Number of active todos: {todos.filter(todo => !todo.completed).length}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  newTodo: state.newTodo
});

const mapDispatchToProps = {
  addTodo,
  toggleTodoCompletion,
  markAllCompleted,
  clearCompletedTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
