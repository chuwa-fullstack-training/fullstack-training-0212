import { useState } from "react";
import Checkbox from "../components/Checkbox";
import "../styles/todos.css";

export default function Todo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [markAll, setMarkAll] = useState(false);
  const [remain, setRemain] = useState(0);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && text) {
      setTodos([...todos, { id: count, todo: text, done: false }]);
      setText("");
      setCount(count + 1);
      setMarkAll(false);
      setRemain(remain + 1);
    }
  };

  const handleClick = (id) => () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    const remain = updatedTodos.filter((todo) => !todo.done).length;
    setTodos(updatedTodos);
    setRemain(remain);
    setMarkAll(remain === 0);
  };

  const handleAllSelect = () => {
    setTodos(todos.map((todo) => ({ ...todo, done: true })));
    setMarkAll(true);
    setRemain(0);
  };

  const handleAllClear = () => {
    setTodos(todos.map((todo) => ({ ...todo, done: false })));
    setMarkAll(false);
    setRemain(todos.length);
  };

  return (
    <div className="todo">
      <h1>Todos - ReactJs</h1>

      {/* input field */}
      <input
        type="text"
        className="input"
        id="todo_input"
        value={text}
        onKeyDown={handleKeyPress}
        onChange={(e) => setText(e.target.value)}
      />

      {/* remain counter & clear button */}
      <div className="buttonContainer">
        <label>{remain} remaining</label>
        <button id="clearButton" onClick={handleAllClear}>
          Clear Completed Todos
        </button>
      </div>

      {/* mark all */}
      <div className="listContainer">
        <Checkbox
          classId={"checkAllBox"}
          key={"selectAll"}
          id={"selectAll"}
          name={"Mark All Done"}
          handleClick={handleAllSelect}
          isChecked={markAll}
        />

        {/* todo list */}
        {todos.map((todo) => (
          <Checkbox
            classId={"checkbox"}
            key={todo.id}
            id={todo.id}
            name={todo.todo}
            handleClick={handleClick(todo.id)}
            isChecked={todo.done}
          />
        ))}
      </div>
    </div>
  );
}
