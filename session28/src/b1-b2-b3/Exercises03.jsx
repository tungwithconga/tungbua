import React, { Component } from 'react';

class Exercise03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Tung', address: 'Dong da,Ha noi' },
        { id: 2, name: 'Tuan', address: 'Lao cai' },
        { id: 3, name: 'Truong', address: 'Hai Phong' }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>User Info</h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              <strong>ID:</strong> {user.id}, <strong>Name:</strong> {user.name}, <strong>Address:</strong> {user.address}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Exercise03;
