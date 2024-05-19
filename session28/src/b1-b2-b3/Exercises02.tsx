import React, { Component } from 'react';

class Exercise02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: 'Tung',
      birthDate: '10/07/2005',
      address: 'Dong Da,HaNoi',
    };
  }

  render() {
    return (
      <div>
        <h1>Thong tin</h1>
        <p><strong>ID:</strong> {this.state.id}</p>
        <p><strong>Name:</strong> {this.state.name}</p>
        <p><strong>Birth Date:</strong> {this.state.birthDate}</p>
        <p><strong>Address:</strong> {this.state.address}</p>
      </div>
    );
  }
}

export default Exercise02;
