
import './App.css';
import React from 'react';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  resetCount = () =>{
    this.setState({
      count: 0
    });
  }
  handleClick = (e) => {
    this.setState({
      count: this.state.count + Number(e.target.value)
    });
  }

  render() {
  return (
    <div className="App">
     <button onClick = {this.handleClick} value = "1">1</button>
     <button onClick = {this.handleClick} value = "10">10</button>
     <button onClick = {this.handleClick} value = "100">100</button>
     <button onClick = {this.resetCount}>Reset</button>
     <p>{this.state.count}</p>
    </div>
  )};
}

export default App;
