import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick(value) {
    this.setState((prevState) => ({
      count: prevState.count + value,
    }));
  }

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <h1>My Counter App</h1>
        <h1>count: {this.state.count}</h1>
        <button onClick={() => this.handleClick(1)}>Add 1</button>
        <button onClick={() => this.handleClick(10)}>Add 10</button>
        <button onClick={() => this.handleClick(100)}>Add 100</button>
        <button onClick={() => this.handleClick(1000)}>Add 1000</button>
        <button onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

export default App;
