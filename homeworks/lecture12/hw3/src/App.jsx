import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col">
      <div className="flex">
        <button
          className="m-1 p-1 bg-blue-500 text-white rounded"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <button
          className="m-1 p-1 bg-red-500 text-white rounded"
          onClick={() => setCount(count + 10)}
        >
          +10
        </button>
        <button
          className="m-1 p-1 bg-green-500 text-white rounded"
          onClick={() => setCount(count + 100)}
        >
          +100
        </button>
        <button
          className="m-1 p-1 bg-yellow-500 text-white rounded"
          onClick={() => setCount(count + 1000)}
        >
          +1000
        </button>
      </div>
      <div className="m-1">
        <p className="text-2xl font-bold">{count}</p>
      </div>
    </div>
  );
}

export default App;
