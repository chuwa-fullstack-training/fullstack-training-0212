import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './Card';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/card" element={<Card />} />
          <Route path='/card/:cardId' element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
