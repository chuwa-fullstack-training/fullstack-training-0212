![demo](./hw4.gif)

Implement the converter shown above in React.



import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const getText = () => {
    if (!isNaN(inputValue)) {
      if(inputValue === '1'){
        return '1st';
      }else if (inputValue === '2') {
        return '2nd'
      }else if (inputValue === '3') {
        return '3rd'
      }else {
        return `${inputValue}th`;
      }
      
    } else {
      return inputValue;
    }
  };

  const output = inputValue !== '' ? ` ${getText()}` : '';

  return (
    <div>
      <h1>String Input Example</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <input type="text" value={output}  />
    </div>
  );
};

export default App;
