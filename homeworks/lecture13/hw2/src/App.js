import React, {useState} from 'react';
import BtnItem from './btnItem';
import './App.css';

function App() {
  const [numStatus, setNumStatus] = useState(0);
  const handleBtnClick = (num) => {
    setNumStatus(num);
  };
  return (
    <div className='phone-shape'>
      <div className='phone-screen'>
        <div className='status-bar'>{numStatus}</div>
        <div className='palette'>
          {Array.from({length: 20},(_,index) => (
            <BtnItem key={index} num={index+1} handleClick={handleBtnClick}></BtnItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
