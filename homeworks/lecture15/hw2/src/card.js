import React from "react";

export default function Card({ name, handleInputChange, color }) {
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
        type="text"
        value={name}
        placeholder={name}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
}
