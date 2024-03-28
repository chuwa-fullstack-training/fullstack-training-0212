import "./styles.css";
import { useState } from "react";

export default function HW3() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [allDone, setAllDone] = useState(false);

  function handleKeyPress(event) {
    if (event.target.value === "" || event.key !== "Enter") {
      return;
    }
    if (event.key === "Enter") {
      const newTodo = { text: event.target.value, done: false };
      console.log(newTodo);
      setList([...list, newTodo]);
      setInput("");
    }
  }

  const handleAllDone = () => {
    const newList = list.map((todo) => ({ ...todo, done: !allDone }));
    // console.log(newList);
    setList(newList);
    setInput("");
    setAllDone(!allDone);
  };

  const handleCheckbox = (index) => {
    const newList = list.map((todo, i) => {
      if (i === index) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setList(newList);
  };

  const handleClearTodos = (event) => {
    const newList = list.filter((todo) => !todo.done);
    setList(newList);
    setInput("");
    setAllDone(false);
  };

  return (
    <div
      className="App"
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Todos - ReactJS</h1>
      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        style={{
          width: "60%",
          height: "40px",
          border: "1px solid gray",
          borderRadius: "5px",
          lineHeight: "38px",
          paddingLeft: "10px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "60%",
          marginTop: "10px",
        }}
      >
        <p>{list.filter((todo) => !todo.done).length} ramaining</p>
        <button onClick={handleClearTodos}>Clear completed todos</button>
      </div>
      <div>
        <input type="checkbox" checked={allDone} onChange={handleAllDone} />
        <label>Mark all done</label>
      </div>
      {list.map((todo, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "10px",
            width: "60%",
          }}
        >
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleCheckbox(index)}
          />
          <label htmlFor="index">{todo.text}</label>
        </div>
      ))}
    </div>
  );
}
