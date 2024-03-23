import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = (value) => {
    setCount(count + value);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <div className="count">{count}</div>
      <div className="buttons">
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(10)}>+10</button>
        <button onClick={() => increment(100)}>+100</button>
        <button onClick={() => increment(1000)}>+1000</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
