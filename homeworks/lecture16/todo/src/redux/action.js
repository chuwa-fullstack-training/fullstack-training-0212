export const addTodo = (id, todo) => ({
    type: "ADD_TODO",
    payload: { id, todo, done: false },
  });
  
  export const markTodo = (id) => ({
    type: "MARK_TODO",
    payload: { id },
  });
  
  export const markAllTodos = () => ({
    type: "MARK_ALL_TODOS",
  });
  
  export const clearTodos = () => ({
    type: "CLEAR_TODOS",
  });
  