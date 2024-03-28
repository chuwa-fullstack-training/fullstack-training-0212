import React, { useState } from 'react';
import './hw2.css';

const PhoneLayout = () => {
  const [lastPressed, setLastPressed] = useState(null);

  const handleButtonClick = (number) => {
    console.log(`Button ${number} clicked`);
    setLastPressed(number);
  };

  const buttons = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="phone">
      <div className="status-bar">status bar</div>
      <div className="grid">
        {buttons.map((buttonNumber) => (
          <button key={buttonNumber} onClick={() => handleButtonClick(buttonNumber)}>
            {buttonNumber}
          </button>
        ))}
      </div>
      {lastPressed !== null && <div className="feedback">Button {lastPressed} clicked</div>}
    </div>
  );
};

export default PhoneLayout;
