import React, { Component } from 'react';

class Calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 10,
            number2: 10
        };
    }
    add = () => {
        return this.state.number1 + this.state.number2;
    }

    subtract = () => {
        return this.state.number1 - this.state.number2;
    }

    multiply = () => {
        return this.state.number1 * this.state.number2;
    }

    divide = () => {
        if (this.state.number2 !== 0) {
            return this.state.number1 / this.state.number2;
        } else {
            return "Lỗi";
        }
    }

    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <p>Number 1: {this.state.number1}</p>
                <p>Number 2: {this.state.number2}</p>

                <h2>Result:</h2>
                <p>Sum: {this.add()}</p>
                <p>Subtraction: {this.subtract()}</p>
                <p>Multiplication: {this.multiply()}</p>
                <p>Division: {this.divide()}</p>
            </div>
        );
    }
}
export default Calculation;