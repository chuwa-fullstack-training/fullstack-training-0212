import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>What is Frontend?</h2>
<ul>
  <li>
    Frontend is the part of the website that users can see and interact with.
  </li>
  <li>Frontend is also called <strong>client-side</strong>.</li>
  <li>Frontend is built with HTML, CSS, and JavaScript.</li>
</ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
