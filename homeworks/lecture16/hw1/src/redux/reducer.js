const initialState = {
    todos: [],
    newTodo: ''
};

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos:[...state.todos, action.payload]
            };
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? 
                    {...todo, completed: !todo.completed} 
                    : todo
                )
            };
        case "MARK_ALL_COMPLETED":
            return {
                ...state,
                todos: state.todos.map(todo =>
                    ({...todo, completed: true})
                )
            };
        case "CLEAR_ALL_COMPLETED_TODOS":
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            };
        case "SET_NEW_TODO":
            return {
                ...state,
                newTodo: action.payload
            };
        default:
            return state;
    }
};