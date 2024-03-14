import React from "react";

class HW3Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
    }
    handleIncrement = (value) => {
        this.setState(prevState => ({
            count: prevState.count + value
        }));
    }

    handleReset = () => {
        this.setState({ count: 0});
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleIncrement(1)}>+1</button>
                <button onClick={() => this.handleIncrement(10)}>+10</button>
                <button onClick={() => this.handleIncrement(100)}>+100</button>
                <button onClick={() => this.handleIncrement(1000)}>+1000</button>
                <button onClick={() => this.handleReset()}>RESET</button>
                <br/>
                <label>{this.state.count}</label>
            </div>
        );
    }
}

export default HW3Counter;