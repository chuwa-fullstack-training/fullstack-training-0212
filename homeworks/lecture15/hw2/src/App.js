import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./card";
import HW2 from "./hw2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HW2 />} />
        <Route path="/:cardId" element={<HW2 />} />
      </Routes>
    </Router>
  );
}

export default App;
