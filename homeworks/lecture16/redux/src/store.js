import { createStore } from "redux";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload.index ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case "CLEAR_COMPLETED_TODOS":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.done),
      };
    case "MARK_ALL_DONE":
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          done: !action.payload.allDone,
        })),
      };
    default:
      return state;
  }
};

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: {
      todo: { text, done: false },
    },
  };
};

export const toggleTodo = (index) => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      index,
    },
  };
};

export const clearCompletedTodos = () => {
  return {
    type: "CLEAR_COMPLETED_TODOS",
  };
};

export const markAllDone = (allDone) => {
  return {
    type: "MARK_ALL_DONE",
    payload: {
      allDone,
    },
  };
};

export const store = createStore(reducer);
