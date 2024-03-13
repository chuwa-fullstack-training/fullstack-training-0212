import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => handleIncrement(1)}>+1</button>
        <button style={styles.button} onClick={() => handleIncrement(10)}>+10</button>
        <button style={styles.button} onClick={() => handleIncrement(100)}>+100</button>
        <button style={styles.button} onClick={() => handleIncrement(1000)}>+1000</button>
        <button style={styles.button} onClick={handleReset}>Reset</button>
      </div>
      <div style={styles.counter}>
        <label>{count}</label>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '5px',
    margin: '0 auto', // 左右自动居中
    //width: '300px', // 设置容器宽度
    padding: '20px', // 设置内边距
    //border: '1px solid #ccc',
  },
  counter: {
    textAlign: 'left',
    marginBottom: '20px',
    fontSize: '24px',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row', // Align buttons in a column
    alignItems: 'flex-start', // Align buttons to the left
    marginTop: '0px', // Add margin to the top for spacing
    marginBottom: '10px',
    gap: '0px',
  },
  button: {
    padding: '10px 15px',
    frontSize: '30px',
    fontWeight: 'bold', 
    backgroundColor: 'linear-gradient(to bottom, #ccc 0%, #ccc 30%, #ccc 60%, #ccc 100%)', // background color
    borderRadius: '5px', // Rounded corners
    boxShadow: '0 4px 0px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift effect
    cursor: 'pointer', // Show pointer cursor on hover 鼠标悬停样式
  }
};

export default Counter;
