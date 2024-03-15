import React from "react";
import './hw2.css'

const Hw2 = () => {
  return (
    <div className="main">

      <header className="header">
        <h2>Header</h2>
      </header>

      <nav className="nav">
        <h2>Nav</h2>
      </nav>

      <div className="middle"> 
        <div className="aside" >
          <h2>Aside</h2>
        </div>

        <section className="section">
          <h2>Section</h2>
        </section>
      </div>

      <footer className="footer">
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

export default Hw2;
