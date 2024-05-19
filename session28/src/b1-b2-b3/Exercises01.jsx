import React, { Component } from 'react';
class Exercises01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Nguyen Thanh Tung',
    };
  }
  render() {
    return (
      <div>
        <h1>Ho va ten: {this.state.name}</h1>
      </div>
    );
  }
}
export default Exercises01;