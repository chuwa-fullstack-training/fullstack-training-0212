import React, { useState, useEffect } from "react";

export default function Card({ idx, name, handleInputChange, color }) {
  const [input, setInput] = useState(name);
  useEffect(() => {
    handleInputChange(input, idx);
  }, [input]);

  return (
    <div
      style={{
        backgroundColor: color,
        width: "300px",
        height: "200px",
        border: "1px solid black",
      }}
    >
      <p>Component name:</p>
      <input
        key={idx}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
