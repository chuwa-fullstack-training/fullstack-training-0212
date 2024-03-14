![demo](https://flaviocopes.com/images/react-example-counter/output.gif)

Implement the counter shown above in React.

## Requirements

- four buttons to increment 1, 10, 100, and 1,000, respectively
- one label to display the count
- (optional) one button to reset the count
- (optional) apply styles to make it look good




// app.js
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleButtonClicktwo = () => {
    setCount(count + 10);
  };

  const handleButtonClickthree = () => {
    setCount(count + 100);
  };

  const handleButtonClickfour = () => {
    setCount(count + 1000);
  };

  return (
    <div>
      <h1>React App</h1>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>+1</button>
      <button onClick={handleButtonClicktwo}>+10</button>
      <button onClick={handleButtonClickthree}>+100</button>
      <button onClick={handleButtonClickfour}>+1000</button>
    </div>
  );
};

export default App;




//index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
  <script src="/src/index.js" type="module"></script>
</body>
</html>
