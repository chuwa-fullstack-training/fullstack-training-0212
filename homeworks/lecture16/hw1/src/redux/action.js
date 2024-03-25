export const addTodo = (content) => ({
    type: "ADD_TODO",
    payload: {
        id: Date.now(),
        content,
        completed: false        
    }
});

export const toggleComplete = (id) => ({
    type: "TOGGLE_COMPLETE",
    payload: id
});

export const markAllCompleted = () => ({
    type: "MARK_ALL_COMPLETED"
});

export const clearAllCompletedTodos = () => ({
    type: "CLEAR_ALL_COMPLETED_TODOS"
});

export const setNewTodo = (content) => ({
    type: "SET_NEW_TODO",
    payload: content
});