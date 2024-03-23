import React, { useState } from 'react';

function Converter() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const convertToOrdinal = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = number % 100;
    return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (!isNaN(value) && value.trim() !== '') {
      setOutputValue(convertToOrdinal(parseInt(value, 10)));
    } else {
      setOutputValue(value);
    }
  };

  return (
    <div className="converter">
      <h2>Converter</h2>
      <label htmlFor="input">Input:</label>
      <input
        type="text"
        id="input"
        value={inputValue}
        onChange={handleChange}
      />
      <label htmlFor="output">Output:</label>
      <div id="output" className="output">
        {outputValue}
      </div>
    </div>
  );
}

export default Converter;
