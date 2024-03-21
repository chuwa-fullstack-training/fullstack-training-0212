import React from 'react';

export default class HW3 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  handClick = (e) => {
    this.setState({
      count: this.state.count + Number(e.target.value)
    });
  }

  resetCount = () => {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handClick} value="1">1</button>
        <button onClick={this.handClick} value="10">10</button>
        <button onClick={this.handClick} value="100">100</button>
        <button onClick={this.resetCount}>Reset</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}