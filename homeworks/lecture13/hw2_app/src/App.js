import React, { useState } from 'react';
import './App.css'; 

function StatusBar({ pressedButtons }) {
  return (
    <div className="status-bar">
      {pressedButtons.join('')}
    </div>
  );
}

function Layout() {
  const [pressedButtons, setPressedButtons] = useState([]);

  const handleClick = (button) => {
    setPressedButtons([...pressedButtons, button]);
  };

  // Generate buttons from 1 to 20
  const buttons = [];
  for (let i = 1; i <= 20; i++) {
    buttons.push(
      <button key={i} onClick={() => handleClick(i)} className="button">
        {i}
      </button>
    );
  }

  return (
    <div className="layout">
      <StatusBar pressedButtons={pressedButtons} />
      <div className="button-container">{buttons}</div>
    </div>
  );
}

export default Layout;
