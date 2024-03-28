import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import "./App.css";

// Action Types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO_COMPLETION = 'TOGGLE_TODO_COMPLETION';
const MARK_ALL_COMPLETED = 'MARK_ALL_COMPLETED';
const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS';

// Action Creators
const addTodo = (text) => ({ type: ADD_TODO, text });
const toggleTodoCompletion = (index) => ({ type: TOGGLE_TODO_COMPLETION, index });
const markAllCompleted = () => ({ type: MARK_ALL_COMPLETED });
const clearCompletedTodos = () => ({ type: CLEAR_COMPLETED_TODOS });

// Reducer
const initialState = { todos: [], newTodo: '' };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }]
      };
    case TOGGLE_TODO_COMPLETION:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.index ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case MARK_ALL_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => ({ ...todo, completed: true }))
      };
    case CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

// Connected Component
const TodoApp = ({ todos, newTodo, setNewTodo, addTodo, toggleTodoCompletion, markAllCompleted, clearCompletedTodos }) => {
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
    }
  };

  const handleToggleTodoCompletion = (index) => {
    toggleTodoCompletion(index);
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
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodoCompletion(index)}
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

// Map state and dispatch to props
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
export { store }; 
