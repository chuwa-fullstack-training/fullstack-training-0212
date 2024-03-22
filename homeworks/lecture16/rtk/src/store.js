import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let newTodo = { text: action.payload, done: false };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      state.todos[action.payload].done = !state.todos[action.payload].done;
    },
    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.done);
    },
    markAllDone: (state, action) => {
      state.todos.forEach((todo) => {
        todo.done = !action.payload;
      });
    },
  },
});

export const { addTodo, toggleTodo, clearCompletedTodos, markAllDone } =
  todoSlice.actions;

const store = configureStore({
  reducer: todoSlice.reducer,
});

export default store;
