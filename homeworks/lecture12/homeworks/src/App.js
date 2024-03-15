import Hw1 from "./compoments/hw1";
import Hw2 from "./compoments/hw2";
import Hw3 from "./compoments/hw3";
import Hw4 from "./compoments/hw4";
import "./App.css";

function App() {
  return (
    <div className="flex-col m-20">
      <div className="flex justify-around">
        <div className="m-4 ">
          <p>Homework 1:</p>
          <div className="border-4 p-4">
            <Hw1 />
          </div>
        </div>

        <div className="m-4">
          <p>Homework 2:</p>
          <div className="border-4 p-4">
            <Hw2 />
          </div>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="m-4">
          <p>Homework 3:</p>
          <div className="border-4 p-4">
            <Hw3 />
          </div>
        </div>

        <div className="m-4 ">
          <p>Homework 4:</p>
          <div className="border-4 p-4">
            <Hw4 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
