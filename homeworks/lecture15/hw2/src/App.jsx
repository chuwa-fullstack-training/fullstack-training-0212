import { useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

function Color(props) {
  return (
    <div
      className={`flex flex-col m-auto h-2/3 w-2/3 border border-gray-400 rounded-sm ${props.color}`}
    >
      <h1 className="text-3xl font-bold text-center">{props.title}</h1>
    </div>
  );
}

function App() {
  const [color, setColor] = useState("bg-white");
  const array = ["first", "second", "third", "fourth", "fifth", "sixth"];
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-50">
      <ul className="flex w-full h-1/12 font-bold justify-center">
        {array.map((item, index) => (
          <li key={index} className="m-10">
            <Link to={`/${item}`} className="text-blue-500 underline">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex w-full h-20 justify-center">
        <select
          className="w-1/6 h-2/3 bg-gray-500 font-bold text-black m-auto rounded-md"
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
      <div className="flex flex-grow min-h-0 w-full">
        <Routes>
          <Route path="/" element={<Outlet />}>
            {array.map((item, index) => (
              <Route
                key={index}
                path={item}
                element={<Color color={color} title={item} />}
              />
            ))}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
