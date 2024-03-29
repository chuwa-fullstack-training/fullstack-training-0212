// todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
  },
});

export const { addTodo, toggleTodo, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
