import Hw1 from './components/hw1';
import Hw3 from './components/hw3';
import Hw2 from './components/hw2';
import NumberConvert from './components/numberConver';

const lineStyle = {
    height: '2px',  //指定线的高度为2像素
    backgroundColor: '#ccc',   //指定线的背景颜色为灰色 (#ccc)
    width: '100%',   //指定线的宽度为100%
    margin: '10px 0',  //在垂直方向上设置外边距，上边距和下边距均为10像素, 左右边距0
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