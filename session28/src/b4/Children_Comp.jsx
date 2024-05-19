import React, { Component } from 'react';

class Children_Comp extends Component {
  render() {
    return (
      <div>
        <h2>Children Component</h2>
        <p>Name: {this.props.name}</p>
      </div>
    );
  }
}

export default Children_Comp;
