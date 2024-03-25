import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, markAllCompleted, clearAllCompletedTodos, setNewTodo } from './features/todo/todoSlice';
import TodoList from './TodoList';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const newTodo = useSelector(state => state.todos.newTodo);

  const Title = () => {
    return <h1>Todos - ReactJs</h1>
  };

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault();
      dispatch(addTodo({ id: Date.now(), content: newTodo, completed: false }));
      dispatch(setNewTodo(''));
    }
  };

  const countActiveTodos = todos.filter((todo) => !todo.completed).length;
  
  return (
    <div className='container mt-4 mr-5 mb-5 ml-5'>
      <Title className="mt-4 mb-3"/>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          value={newTodo}
          onChange={(e) => dispatch(setNewTodo(e.target.value))}
          onKeyDown={handleKeyDown}
          placeholder='Type a todo and hit Enter'
        />
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <p>{countActiveTodos} remaining</p>
          <button className="btn btn-light" onClick={() => dispatch(clearAllCompletedTodos())}>Clear Completed Todos</button>
        </div>
        <div className='form-check mb-2'>
            <input
                type='checkbox'
                className="form-check-input"
                checked={false}
                onChange={() => dispatch(markAllCompleted())}
            />
            <label
                className="form-check-label"
            >
                Mark All Done
            </label>
        </div>
        <TodoList
          className="card"
        />
      </div>
    </div>
  );
}

export default App;
