import React, { Component } from 'react';
import Children_Comp from './Children_Comp';

class Parent_Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Nguyen Thanh Tung'
    };
  }

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}

export default Parent_Comp;
