import React from 'react';

class HW4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            displayValue: ''
        };
    }
    getOrdinal(inputVal) {
        const val = parseInt(inputVal);
        if(isNaN(val)) {
            return inputVal;
        }
        const remainder10 = val % 10;
        const remainder100 = val % 100;
        if(remainder10 === 1 && remainder100 !== 11) {
            return val + "st";
        } else if(remainder10 === 2 && remainder100 !== 12) {
            return val + "nd";
        } else if(remainder10 === 3 && remainder100 !== 13) {
            return val + "rd";
        } else {
            return val + "th";
        }
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleInputBlur = () => {
        const ordinalNumber = this.getOrdinal(this.state.inputValue);
        this.setState({
            displayValue: ordinalNumber
        });
    }
    render() {
        return(
            <div>
                <input
                    type='text'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputBlur}
                />
                <input
                    type='text'
                    value={this.state.displayValue}
                    readOnly
                />
            </div>
        );
    }
}

export default HW4;