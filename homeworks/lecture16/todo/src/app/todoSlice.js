import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    count: 0,
    remain: 0,
    markAll: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: state.count, todo: action.payload, done: false });
      state.count += 1;
      state.markAll = false;
      state.remain += 1;
    },
    markTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
      state.markAll = state.todos.every((todo) => todo.done);
      state.remain = state.todos.filter((todo) => !todo.done).length;
    },
    markAllTodos: (state) => {
      state.todos.forEach((todo) => (todo.done = true));
      state.markAll = true;
      state.remain = 0;
    },
    clearTodos: (state) => {
      state.todos.forEach((todo) => (todo.done = false));
      state.markAll = false;
      state.remain = state.todos.length;
    },
  },
});

export const { addTodo, markTodo, markAllTodos, clearTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
