import React, { useState } from 'react';
import './hw4.css';

function numberToOrdinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

const OrdinalConverter = () => {
  const [number, setNumber] = useState('');
  const [ordinal, setOrdinal] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setNumber(value);
    if (!isNaN(value) && value !== '') {
      setOrdinal(numberToOrdinal(parseInt(value, 10)));
    } else {
      setOrdinal('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <input
        type="text"
        value={ordinal}
        readOnly
      />
    </div>
  );
};

export default OrdinalConverter;
