import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [allDone, setAllDone] = useState(false);
  const handleCheckboxChange = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo,
    );
    setTodos(newTodos);
  };
  return (
    <div className="flex flex-col min-h-96 w-1/2 m-auto bg-white items-center">
      <h1 className="text-3xl font-bold text-center mt-4">TODO List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (e.target.value === "") return;
            const newTodo = { text: e.target.value, done: false };
            setTodos([...todos, newTodo]);
            setText("");
          }
        }}
        className="border-2 border-gray-300 p-2 m-2 w-3/4"
        type="text"
        placeholder="Add a new task"
      />
      <div className="flex w-3/4 m-2 justify-between items-center">
        <label className="text-lg">
          {todos.filter((todo) => !todo.done).length} remaining
        </label>
        <button
          className="border border-gray-500 text-2xl text-gray-500 rounded-sm p-2"
          onClick={() => {
            const newTodos = todos.filter((todo) => !todo.done);
            setTodos(newTodos);
            setText("");
            setAllDone(false);
          }}
        >
          Clear Completed Todos
        </button>
      </div>
      <div className="flex w-3/4 m-2 items-center">
        <input
          id="mark"
          className="rounded-sm w-4 h-4"
          type="checkbox"
          checked={allDone}
          onChange={() => {
            const newTodos = todos.map((todo) => ({ ...todo, done: !allDone }));
            setTodos(newTodos);
            setText("");
            setAllDone(!allDone);
          }}
        />
        <label htmlFor="mark" className="ms-2 text-lg">
          mark all done
        </label>
      </div>
      <div className="flex flex-col w-3/4 m-2 items-center">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex w-2/3 items-center border border-gray-400 p-2 rounded-sm bg-gray-100"
          >
            <input
              id={index}
              className="rounded-sm w-4 h-4"
              type="checkbox"
              checked={todo.done}
              onChange={() => handleCheckboxChange(index)}
            />
            <label htmlFor={index} className="ms-2 text-lg">
              {todo.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
