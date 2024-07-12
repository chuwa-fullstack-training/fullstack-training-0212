import React from "react";

class Todo extends React.Component {
  state = {
    todos: [
      { done: false, content: "example1" },
      { done: false, content: "example2" },
    ],
    newTodo: "",
  };
  addTodo = () => {
    if (this.state.newTodo.trim()) {
      this.setState((prevState) => ({
        todos: [
          ...prevState.todos,
          { done: false, content: prevState.newTodo },
        ],
        newTodo: "",
      }));
    }
  };
  setNewToDo = (e) => {
    this.setState({ newTodo: e.target.value });
  };
  markDone = (index) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      ),
    }));
  };
  markAllDone = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => ({ ...todo, done: true })),
    }));
  };
  clearDoneToDo= () => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.done=== false),
    }));
  };
  activeToDo=() => this.state.todos.filter((todo) => todo.done=== false).length;
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <h2>Active to do : {this.activeToDo()}</h2>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.setNewToDo}
          placeholder="Add a new To Do"
        />
        <button onClick={this.addTodo}>Add A New To Do</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li
              key={index}
              onClick={() => this.markDone(index)}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.content}
            </li>
          ))}
        </ul>

        <button onClick={this.markAllDone}>Mark All Done</button>
        <button onClick={this.clearDoneToDo}>Clear All Done</button>
      </div>
    );
  }
}

export default Todo;
