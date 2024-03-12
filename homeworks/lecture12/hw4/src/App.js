
import './App.css';
import React from 'react';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleChange = this.handleChange.bind(this);

  }
  resetCount = () =>{
    this.setState({
      message: ""
    });
  }
  handleChange = (e) => {

    let input = Number(e.target.value)
    let res = ""
    if(input === 1)
    {
      res = input+"st"
    }else if(input === 2)
    {
      res = input+"nd"
    }else if(input === 3)
    {
      res = input+"rd"
    }else if(isNaN(input))
    {
      res = e.target.value
    }
    else{
      res = input + "th"
    }
  
    this.setState({
      message: res
    });
  }

  render() {
  return (
    <div className="App">
     <input onChange = {this.handleChange} placeholder = "Please enter a number"></input>
   
     <p>{this.state.message}</p>
    </div>
  )};
}

export default App;
