import Hw1 from './components/hw1';
import Hw3 from './components/hw3';
import Hw2 from './components/hw2';
import NumberConvert from './components/numberConver';

const lineStyle = {
    height: '2px',  
    backgroundColor: '#ccc',   
    width: '100%',   
    margin: '10px 0', 
  };

function HW12() {
    return (
        <>
            <div>
                <p>HW1:</p>
                <Hw1 />
            </div>
            <div style={lineStyle}></div>
            <div>
                <p>HW2:</p>
                <Hw2 />
            </div>
            <div style={lineStyle}></div>
            <div>
                <p>HW3:</p>
                <Hw3 />
            </div>
            <div style={lineStyle}></div>
            <div>
                <p>HW4:</p>
                <NumberConvert />
            </div>
        </>
    )
}

export default HW12;
