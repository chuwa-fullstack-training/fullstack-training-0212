import React from 'react';
import"./App.css";

class TodoApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }
  
  addTodo = () => {
    const { newTodo, todos } = this.state;
    if (newTodo.trim() !== '') {
      this.setState({
        todos: [...todos, { text: newTodo, completed: false }],
        newTodo: ''
      });
    }
  };

  
  toggleTodoCompletion = index => {
    const { newTodo, todos } = this.state;
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({
      todos: updatedTodos,
      newTodo: newTodo
    });
  };

  markAllCompleted = () => {
    const { newTodo, todos } = this.state;
    const updatedTodos = todos.map(todo => ({ ...todo, completed: true }));
    this.setState({
      todos: updatedTodos,
      newTodo: newTodo
    });
  };

  
  clearCompletedTodos = () => {
    const { newTodo, todos } = this.state;
    const updatedTodos = todos.filter(todo => !todo.completed);
    this.setState({
      todos: updatedTodos,
      newTodo: newTodo
    });
  };

  countActiveTodos = () => {
    const { todos } = this.state;
    return todos.filter(todo => !todo.completed).length;
  };

  render(){
    return (
      <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={this.state.newTodo}
        onChange={e => this.setState({...this.state.todos,newTodo:e.target.value})}
      />
      <button onClick={this.addTodo}>Add Todo</button>
      <ul>
        {this.state.todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => this.toggleTodoCompletion(index)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={this.markAllCompleted}>Mark All Completed</button>
      <button onClick={this.clearCompletedTodos}>Clear Completed Todos</button>
      <p>Number of active todos: {this.countActiveTodos()}</p>
    </div>
    );
  }
}

export default TodoApp;
