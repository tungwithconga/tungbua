import React from 'react';

function ChildComponent({ users }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Address: {user.address}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponent;
