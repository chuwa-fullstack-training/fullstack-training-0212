import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        newTodo: ''
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleComplete: (state, action) => {
            const id = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if(todo) {
                todo.completed = !todo.completed;
            }
        },
        markAllCompleted: (state) => {
            state.todos = state.todos.map(todo =>
                ({...todo, completed: true})
            );
        },
        clearAllCompletedTodos: (state) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        setNewTodo: (state, action) => {
            state.newTodo = action.payload;
        }
    }
});

export const { addTodo, toggleComplete, markAllCompleted, clearAllCompletedTodos, setNewTodo } = todoSlice.actions;
export default todoSlice.reducer;