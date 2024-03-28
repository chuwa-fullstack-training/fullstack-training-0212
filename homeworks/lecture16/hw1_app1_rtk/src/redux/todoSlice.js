import { createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [], newTodo: '' },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodoCompletion: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    markAllCompleted: (state) => {
      state.todos.forEach(todo => (todo.completed = true));
    },
    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
    setNewTodo: (state, action) => {
      state.newTodo = action.payload;
    }
  }
});
const store = createStore(todoSlice.reducer);

export const { addTodo, toggleTodoCompletion, markAllCompleted, clearCompletedTodos, setNewTodo } = todoSlice.actions;
export {store};
