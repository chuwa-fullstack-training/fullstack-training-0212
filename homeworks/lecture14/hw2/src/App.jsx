import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-white");
  const [currentIndex, setCurrentIndex] = useState(0);
  const array = ["first", "second", "third", "fourth", "fifth", "sixth"];
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-50">
      <div className="flex h-1/6 w-full justify-center m-10">
        <select
          className="w-1/12 h-1/3 bg-blue-500 font-bold text-black mr-12 rounded-md"
          value={currentIndex}
          onChange={(e) => {
            setCurrentIndex(e.target.value);
          }}
        >
          {array.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
        <select
          className="w-1/12 h-1/3 bg-blue-500 font-bold text-black ml-12 rounded-md"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        >
          <option value="bg-white">white</option>
          <option value="bg-red-700">red</option>
          <option value="bg-blue-700">blue</option>
          <option value="bg-green-700">green</option>
          <option value="bg-yellow-700">yellow</option>
          <option value="bg-orange-700">organ</option>
        </select>
      </div>
      <div className="flex-grow grid grid-cols-3 w-full ">
        {array.map((item, index) => (
          <div
            key={index}
            className={`m-10 border border-gray-400 rounded-sm ${
              index === parseInt(currentIndex) ? color : "bg-white"
            }`}
          >
            Component Name: {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
