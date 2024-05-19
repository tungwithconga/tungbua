import React, { Component } from 'react';

class Exercise01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Tung" 
    };
  }

  componentDidMount() {
    this.setState({ userName: "Tung" }); 
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.userName}!</h1>
      </div>
    );
  }
}

export default Exercise01;
