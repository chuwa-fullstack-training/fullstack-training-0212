import { React, useState } from "react";
import'./hw3.css'

const Hw3 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>result: {count}</div>

      <div>
        <p>Please select your action 👇</p>
        <div className="buttons">
          <button className="button" onClick={() => setCount(count + 1)}>+1</button>
          <button className="button" onClick={() => setCount(count + 10)}>+10</button>
          <button className="button" onClick={() => setCount(count + 100)}>+100</button>
          <button className="button" onClick={() => setCount(count + 1000)}>+1000</button>
        </div>
      </div>
    </div>
  );
};

export default Hw3;
