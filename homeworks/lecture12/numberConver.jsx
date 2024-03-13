import React, { useState } from 'react';

const NumberConverter = () => {
  const [userInput, setUserInput] = useState('');
  const [convertedText, setConvertedText] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);

    // Check if the input is a number
    if (!isNaN(input)) {
      // Convert the number to its ordinal form
      setConvertedText(convertToOrdinal(input));
    } else {
      // Display the user's input as it is if it's not a number
      setConvertedText(input);
    }
  };

  const convertToOrdinal = (number) => {
    if (!number) {
      return ''
    }
    const lastDigit = parseInt(number) % 10;
    const suffix =
      lastDigit === 1 ? 'st' : lastDigit === 2 ? 'nd' : lastDigit === 3 ? 'rd' : 'th';

    return `${number}${suffix}`;
  };

//   const inputOutputStyle = {
//     border: '1px solid #ccc',
//     padding: '0px',
//   };

//   return (
//     <div>
//       <div style={{ float: 'left', ...inputOutputStyle }}>
//         <input type="text" value={userInput} onChange={handleInputChange} />
//       </div>
//       <div style={{ float: 'left', border: '1px solid', padding: '0px', width: '140px'}}>
//         <div>{convertedText}</div>
//       </div>
//     </div>
//   );
// };

return (
  <div>
    <div style={{ float: 'left'}}>
      <input type="text" value={userInput} onChange={handleInputChange} />
    </div>
    <div style={{ float: 'left'}}>
      <input type='text' value={convertedText} />
    </div>
  </div>
);
}

export default NumberConverter;
