import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorComponents from './ColorComponents';
import ColorBox from './ColorBox';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ColorComponents />} />
        <Route path="/box/:id" element={<ColorBox />} />
      </Routes>
    </Router>
  );
};

export default App;
