import React from 'react';
export default class hw4 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const input = Number(e.target.value);
    let result = "";
    const lastDigit = (num) => num % 10;

    if (lastDigit(input) === 1) {
      result = input + "st";
    }
    else if(lastDigit(input) === 2) {
      result = input + "nd";
    }
    else if(lastDigit(input) === 3) {
      result = input + "rd";
    }
    else if (isNaN(input)) {
      result = e.target.value;
    }
    else {
      result = input + "th";
    }

    this.setState({
      message: result
    });
  }

  render() {
    return (
      <>
        <input onChange = {this.handleChange} type="text" placeholder='Enter a number: ' />
        <p>{this.state.message}</p>
      </>
    )
  };
}