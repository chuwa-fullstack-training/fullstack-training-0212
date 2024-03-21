const initialState = {
    todos: [],
    count: 0,
    remain: 0,
    markAll: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, action.payload],
          count: state.count + 1,
          markAll: false,
          remain: state.remain + 1,
        };
      case "MARK_TODO":
        const updatedTodos = state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        );
        const remain = updatedTodos.filter((todo) => !todo.done).length;
        return {
          ...state,
          todos: updatedTodos,
          markAll: remain === 0,
          remain,
        };
      case "MARK_ALL_TODOS":
        return {
          ...state,
          todos: state.todos.map((todo) => ({ ...todo, done: true })),
          markAll: true,
          remain: 0,
        };
      case "CLEAR_TODOS":
        return {
          ...state,
          todos: state.todos.map((todo) => ({ ...todo, done: false })),
          markAll: false,
          remain: state.todos.length,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  