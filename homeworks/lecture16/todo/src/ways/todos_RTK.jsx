import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, markTodo, markAllTodos, clearTodos } from "../app/todoSlice";
import Checkbox from "../components/Checkbox";
import "../styles/todos.css";

export default function Todo() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos.todos);
  const count = useSelector((state) => state.todos.count);
  const remain = useSelector((state) => state.todos.remain);
  const markAll = useSelector((state) => state.todos.markAll);

  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleClick = (id) => () => {
    dispatch(markTodo(id));
  };

  const handleAllSelect = () => {
    dispatch(markAllTodos());
  };

  const handleAllClear = () => {
    dispatch(clearTodos());
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
