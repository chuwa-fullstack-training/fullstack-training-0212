import React, {useState} from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  
  const Title = () => {
    return <h1>Todos - ReactJs</h1>
  }
  const addTodo = (content) => {
    if(content.trim() !== '') {
      const newTodoItem = {
        id: Date.now(),
        content: content,
        completed: false
      };
      setTodos([...todos, newTodoItem]);
    }
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault();
      addTodo(newTodo);
      setNewTodo('');
    }
  }
  
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      ),
    );
  };

  const markAllCompleted = (event) => {
    event.preventDefault();
    setTodos(
      todos.map((todo) => 
        ({...todo, completed: true})
      )
    );
  }

  const clearAllCompletedTodos = (event) => {
    event.preventDefault();
    setTodos(
      todos.filter((todo) => !todo.completed)
    );
  }

  const countActiveTodos = todos.filter((todo) => !todo.completed).length;
  
  return (
    <div className='container mt-4 mr-5 mb-5 ml-5'>
      <Title className="mt-4 mb-3"/>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Type a todo and hit Enter'
        />
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <p>{countActiveTodos} remaining</p>
          <button className="btn btn-light" onClick={clearAllCompletedTodos}>Clear Completed Todos</button>
        </div>
        <div className='form-check mb-2'>
            <input
                type='checkbox'
                className="form-check-input"
                checked={false}
                onChange={markAllCompleted}
            />
            <label
                className="form-check-label"
            >
                Mark All Done
            </label>
        </div>
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          className="card"
        />
      </div>
    </div>
  );
}

export default App;
